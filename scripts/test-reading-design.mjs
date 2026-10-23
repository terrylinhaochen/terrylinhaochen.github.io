import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
const {chromium}=createRequire(path.resolve(process.argv[2]||'../crowdlisten_files/applications/answerwithbooks/web','package.json'))('playwright');
const base=process.env.READING_TEST_URL||'http://127.0.0.1:4361';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
try{
 const page=await browser.newPage(); const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const library=JSON.parse(fs.readFileSync('data/reading_library.json','utf8'));
 for(const width of [1440,768,390,320]){
  await page.setViewportSize({width,height:1000});await page.goto(base+'/reading/');
  await page.locator('.gallery-toggle:not([hidden])').evaluateAll(bs=>bs.forEach(b=>b.click()));
  assert.equal(await page.locator('.book-card--digest:visible').count(),31);
  for(const card of await page.locator('.book-card--digest').all())await card.scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>[...document.querySelectorAll('.book-card--digest img')].every(i=>i.complete&&i.naturalWidth>0));
  const columns=await page.locator('.book-gallery').first().evaluate(el=>getComputedStyle(el).gridTemplateColumns.split(' ').length);
  assert.equal(columns,width>1000?4:width>700?3:2);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'No horizontal overflow at '+width);
  for(const [title,entry] of Object.entries(library))assert.equal(await page.locator(`.book-card--digest[href="${entry.url}"] .jacket-title`).textContent(),title);
  await page.evaluate(()=>scrollTo(0,0));
  if(width===1440||width===390)await page.screenshot({path:`/private/tmp/chenterry-after-${width}.png`,fullPage:true});
 }
 await page.setViewportSize({width:1440,height:1000});
 await page.evaluate(()=>document.body.classList.add('dark'));
 await page.screenshot({path:'/private/tmp/chenterry-after-dark.png',fullPage:true});
 for(const [title,book] of Object.entries(library)){
  const response=await page.goto(base+book.url);assert.equal(response.status(),200);
  assert.equal(await page.locator('.reading-book-header h1').innerText(),title);
  assert.equal(await page.locator('.reading-book-header .jacket-title').innerText(),title);
  await page.waitForFunction(()=>document.querySelector('.reading-book-header img')?.naturalWidth>0);
 }
 await page.goto(base+'/reading/the-mom-test/');await page.screenshot({path:'/private/tmp/chenterry-detail-after.png'});
 assert.deepEqual(errors,[]);console.log('PASS: 31 covers and destinations; 4/3/2-column layout; no overflow at 1440/768/390/320; desktop/mobile/dark screenshots; shared reader jackets.');
}finally{await Promise.race([browser.close(),new Promise(r=>setTimeout(r,3000))]);}
process.exit(0);
