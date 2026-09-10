import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';
const awb=path.resolve(process.argv[2] || '../crowdlisten_files/applications/answerwithbooks/web');
const {chromium}=createRequire(path.join(awb,'package.json'))('playwright');
const base=process.env.READING_TEST_URL || 'http://127.0.0.1:1313';
const library=JSON.parse(fs.readFileSync('data/reading_library.json','utf8'));
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({viewport:{width:1280,height:900},permissions:['clipboard-read','clipboard-write']});
const page=await context.newPage();const errors=[];const requests=[];const failures=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)failures.push([r.status(),r.url()]);});
await context.route('https://*.supabase.co/**',async route=>{const req=route.request();if(req.url().includes('/rest/v1/book_requests') && req.method()==='POST'){requests.push(req.postDataJSON());await route.fulfill({status:201,contentType:'application/json',body:'[]'});}else await route.fulfill({status:200,contentType:'application/json',body:'[]'});});
try{
 await page.goto(base+'/reading/');assert.ok(await page.locator('.book-card[hidden]').evaluateAll(cs=>cs.every(c=>getComputedStyle(c).display==='none')),'Collapsed cards must be hidden');await page.locator('.gallery-toggle:not([hidden])').evaluateAll(bs=>bs.forEach(b=>b.click()));for(const card of await page.locator('.book-card--digest').all()) await card.scrollIntoViewIfNeeded();
 assert.equal(await page.locator('.book-card--digest').count(),31);assert.equal(await page.locator('[data-reading-status=read]').count(),11);assert.equal(await page.locator('[data-reading-status=shelf]').count(),20);
 await page.waitForFunction(()=>[...document.querySelectorAll('.book-card--digest img')].every(i=>i.complete&&i.naturalWidth>0));
 assert.equal(await page.getByRole('link',{name:'Recommend a Book →'}).count(),0);
 for(const book of Object.values(library)){
  const response=await page.goto(base+book.url);assert.equal(response.status(),200);
  assert.ok((await page.locator('.post-content').first().innerText()).length>500);
  assert.ok(await page.getByRole('link',{name:'Speed read ↗'}).isVisible());
  assert.equal(await page.locator('.reading-art-caption strong').innerText(),book.title);if(book.readingStatus==='shelf')assert.match(await page.locator('.reading-eyebrow').innerText(),/On the shelf.*To read/i);
  await page.getByRole('link',{name:'Speed read ↗'}).click();
  await page.waitForFunction(()=>document.querySelector('[data-reader-book]')?.textContent!=='Focused reading');
  assert.ok((await page.locator('[data-reader-exit]').getAttribute('href')).startsWith(book.url));

 }
 for(const [title,book] of Object.entries(library).filter(([,b])=>b.readingStatus==='shelf')) {
  await page.goto(base+'/reading/upload/');await page.locator('dialog[open]').waitFor();
  await page.locator('#book-query').fill(title);await page.locator('[data-book-match]').click();
  await page.locator('[data-book-candidate]').first().waitFor();
  assert.ok((await page.locator('[data-book-candidate]').first().innerText()).includes(title),book.slug+' upload match');
 }
 await page.goto(base+'/reading/the-mom-test/');

 await page.getByLabel('What’s top of mind?').fill('How can I test an idea?');await page.getByRole('button',{name:'Copy reading prompt'}).click();await page.waitForFunction(()=>/Copied|Select and copy/.test(document.getElementById('reading-prompt-status').textContent));
 await page.getByRole('link',{name:'Speed read ↗'}).click();
 await page.waitForFunction(()=>document.querySelector('[data-reader-title]')?.textContent!=='Choose a book to start reading');
 const payload=JSON.parse(await page.locator('#speed-reader-data').textContent());assert.equal(payload.books.length,31);assert.ok(!JSON.stringify(payload).includes('<svg'));assert.equal(payload.bookBasePath,'/reading/');
 assert.match(await page.locator('[data-reader-exit]').getAttribute('href'),/^\/reading\/the-mom-test\//);
 await page.screenshot({path:'/tmp/chenterry-focus.png'});
 const fixture=await context.newPage();await fixture.setContent('<html><body style="font:48px Arial;padding:40px;background:white;color:black">The Mom Test<br>Rob Fitzpatrick<br>How to talk to customers</body></html>');
 const pdf=await fixture.pdf();const image=await fixture.screenshot();await fixture.close();
 for(const [kind,title,file] of [['name','耻',null],['name','The Mom Test',null],['pdf','The Mom Test',{name:'cover.pdf',mimeType:'application/pdf',buffer:pdf}],['image','The Mom Test',{name:'cover.png',mimeType:'image/png',buffer:image}]]){
  await page.goto(base+'/reading/upload/');await page.locator('dialog[open]').waitFor();
  if(file)await page.locator('[data-book-file]').setInputFiles(file);else await page.locator('#book-query').fill(title);
  await page.locator('[data-book-match]').click();
  await page.locator('[data-book-candidate]').first().waitFor({timeout:60000});
  assert.ok((await page.locator('[data-book-candidate]').first().innerText()).includes(title));
  const before=requests.length;await page.locator('[data-book-request-submit]').click();assert.equal(requests.length,before,'Email must be required');
  await page.locator('[name="email"]').fill('reading-test@example.com');
  if(kind==='name'){
   await page.locator('[data-book-request-submit]').click();await page.locator('[data-book-added]').waitFor({state:'visible'});
   const request=requests.at(-1);assert.equal(request.source_path,'https://chenterry.com/reading/');assert.equal(request.requester_email,'reading-test@example.com');
   assert.ok(await page.locator('[data-added-read]').getAttribute('href'));
  }
 }
 await page.locator('[data-close-book-request]').first().click();assert.equal(await page.locator('[data-embed-additions] li').count(),2);
 await page.screenshot({path:'/tmp/chenterry-upload.png'});
 await page.setViewportSize({width:390,height:844});
 for(const route of ['/reading/','/reading/upload/',...Object.values(library).map(b=>b.url)]){
  await page.goto(base+route);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),route+' overflows');
 }
 await page.goto(base+'/reading/');await page.locator('.book-card--digest').first().scrollIntoViewIfNeeded();await page.screenshot({path:'/tmp/chenterry-mobile.png'});
 assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);
 console.log(JSON.stringify({passed:true,pastReads:11,onTheShelf:20,coverImages:31,bookPages:31,readerRoundTrips:31,shelfUploadMatches:20,personalizationPrompt:true,uploadMethods:['title including one-character Chinese','PDF text extraction','image OCR'],emailRequired:true,confirmedRequests:requests.length,persistence:'Mocked Supabase API; no production test records created',mobileOverflow:false,pageErrors:errors,localAssetFailures:failures},null,2));
}finally{await browser.close();}
