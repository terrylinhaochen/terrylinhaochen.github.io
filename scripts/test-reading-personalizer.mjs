import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
const {chromium}=createRequire('/Users/terry/Desktop/crowdlisten_files/applications/answerwithbooks/web/package.json')('playwright');
const base=process.env.READING_TEST_URL||'http://127.0.0.1:1313';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({viewport:{width:1280,height:950},permissions:['clipboard-read','clipboard-write']});
const errors=[];const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
// Verify the handoff, but never send a test prompt to a real AI provider.
await context.route(/https:\/\/(chatgpt\.com|claude\.ai|gemini\.google\.com|grok\.com)\//,r=>r.fulfill({status:200,contentType:'text/html',body:'<title>Mock provider destination</title>'}));
try{
 await page.goto(base+'/reading/how-to-win-friends/');const root=page.locator('[data-book-personalizer]');
 assert.equal(await root.locator('[data-ai-provider]').count(),4);
 assert.equal(await page.locator('#copy-reading-prompt').count(),0);
 const action=root.locator('[data-personalize-button]');
 for(const [id,host] of [['chatgpt','chatgpt.com'],['claude','claude.ai'],['gemini','gemini.google.com'],['grok','grok.com']]){
  await root.locator('[data-ai-provider='+id+']').click();assert.equal(await root.locator('[aria-pressed=true]').count(),1);
  const url=new URL(await action.getAttribute('href'));assert.equal(url.hostname,host);
  const prompt=await root.locator('[data-personalize-prompt]').textContent();assert.ok(prompt.includes('Dale Carnegie'));assert.ok(prompt.includes('https://chenterry.com/reading/how-to-win-friends/'));assert.ok(prompt.includes('not the full book'));
  if(id==='gemini')assert.equal(url.searchParams.has('q'),false);else assert.equal(url.searchParams.get('q'),prompt);
  const popupPromise=context.waitForEvent('page');await action.click();const popup=await popupPromise;await popup.waitForLoadState();assert.equal(new URL(popup.url()).hostname,host);await popup.close();
  await page.waitForFunction(()=>document.querySelector('[data-personalize-status]').textContent.includes('copied'));
  assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),prompt);
 }
 await page.goto(base+'/reading/poor-charlies-almanack/');assert.equal(await action.getAttribute('data-selected-provider'),'grok');
 assert.ok(new URL(await action.getAttribute('href')).searchParams.get('q').includes("Poor Charlie's Almanack"));
 await root.locator('[data-ai-provider=gemini]').click();
 await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{value:{writeText:()=>Promise.reject(Error('Denied'))},configurable:true}));
 const popupPromise=context.waitForEvent('page');await action.click();await (await popupPromise).close();
 await root.getByText('View or copy prompt').click();assert.ok(await root.getByLabel('Personalized reading prompt').isVisible());
 await root.getByText('View or copy prompt').click();
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:950});await root.scrollIntoViewIfNeeded();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await page.screenshot({path:'/tmp/reading-ai-'+width+'.png'});
 }
 for(const slug of ['how-to-win-friends','poor-charlies-almanack']){
  await page.goto(base+'/reading/'+slug+'/');const img=page.locator('.reading-art img');await img.evaluate(i=>i.decode());const response=await page.request.get(new URL(await img.getAttribute('src'),base).href);assert.equal(response.status(),200);
  const hash=b=>crypto.createHash('sha256').update(b).digest('hex');assert.equal(hash(await response.body()),hash(fs.readFileSync('static/images/reading-covers/'+slug+'.png')));
  assert.equal(await page.locator('.reading-art-caption').evaluate(e=>getComputedStyle(e).backgroundImage),'none');
 }
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({passed:true,providers:4,rememberedSelection:true,promptIncludesBookAndSkill:true,clipboard:true,manualFallback:true,popups:'mocked; no prompts sent to AI providers',mobile:true,updatedCovers:2,errors},null,2));
}finally{await browser.close()}
