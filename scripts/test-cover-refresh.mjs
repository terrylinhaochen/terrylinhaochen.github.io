import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
const {chromium}=createRequire('/Users/terry/Desktop/crowdlisten_files/applications/answerwithbooks/web/package.json')('playwright');
const base=process.env.READING_TEST_URL || 'http://127.0.0.1:1313';
const slugs=['yujun-product-methodology','the-crowd','the-globalization-paradox','disgrace','the-inevitable','outliers','true-demand','mans-search-for-meaning','zen-motorcycle-maintenance','a-culture-of-growth','value-zhang-lei','the-beginning-of-infinity'];
const library=Object.values(JSON.parse(fs.readFileSync('data/reading_library.json','utf8')));
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage({viewport:{width:1280,height:1000}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
try{
 await page.goto(base+'/reading/');
 assert.equal(await page.locator('.book-card--digest').count(),31);
 for(const s of slugs){
  const b=library.find(b=>b.slug===s);assert.ok(b);
  const response=await page.request.get(base+b.cover);assert.equal(response.status(),200);
  const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
  assert.equal(hash(await response.body()),hash(fs.readFileSync('static'+b.cover)),s+' stale asset');
 }
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:1000});await page.goto(base+'/reading/');
  await page.locator('.gallery-toggle:not([hidden])').evaluateAll(bs=>bs.forEach(b=>b.click()));
  for(const s of slugs){
   const c=page.locator('.reading-art--'+s);await c.scrollIntoViewIfNeeded();await c.locator('img').evaluate(i=>i.decode());
   const bounds=await c.evaluate(el=>{const t=el.querySelector('strong').getBoundingClientRect(),c=el.getBoundingClientRect();return {fits:t.left>=c.left&&t.right<=c.right+1&&t.top>=c.top&&t.bottom<=c.bottom,background:getComputedStyle(el.querySelector('.reading-art-caption')).backgroundImage};});
   assert.ok(bounds.fits,s+' title clipped at '+width);assert.equal(bounds.background,'none');
  }
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await page.screenshot({path:'/tmp/reading-covers-'+width+'.png',fullPage:true});
 }
 for(const s of slugs){
  const b=library.find(b=>b.slug===s);await page.goto(base+b.url);
  assert.equal(await page.locator('.reading-art-caption strong').innerText(),b.title);
  await page.locator('.reading-art img').evaluate(i=>i.decode());
  assert.ok(await page.getByRole('link',{name:'Speed read ↗'}).isVisible());
 }
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({passed:true,changedCovers:12,allShelfCards:31,assetHashes:'match',titleBounds:'pass at 1280 and 390',bookPages:12,consoleErrors:errors},null,2));
}finally{await browser.close();}
