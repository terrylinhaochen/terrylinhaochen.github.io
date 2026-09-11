import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
const {chromium}=createRequire('/Users/terry/Desktop/crowdlisten_files/applications/answerwithbooks/web/package.json')('playwright');
const base=process.env.READING_TEST_URL||'http://127.0.0.1:1313';
const variants=JSON.parse(fs.readFileSync('data/reading_cover_solid_backgrounds.json','utf8')).variants;
const library=Object.values(JSON.parse(fs.readFileSync('data/reading_library.json','utf8')));
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
try {
 for(const width of [1280,390]) {
  await page.setViewportSize({width,height:950});
  for(const v of variants) {
   const book=library.find(b=>b.slug===v.slug);
   assert.equal(book.cover,v.destination.replace(/^static/,''));
   for(const route of ['/reading/',book.url]) {
    await page.goto(base+route);
    const cover=page.locator('.reading-art--'+v.slug).first();
    // Shelf rows can be collapsed; expand the containing row through its UI.
    if(!(await cover.isVisible())) {
     const toggles=page.getByRole('button',{name:/view all/i});
     while(await toggles.count()) await toggles.first().click();
    }
    await cover.scrollIntoViewIfNeeded();
    await cover.locator('img').evaluate(i=>i.decode());
    const imageURL=await cover.locator('img').getAttribute('src');
    const response=await page.request.get(new URL(imageURL,base).href);
    assert.equal(response.status(),200);
    assert.equal(hash(await response.body()),hash(fs.readFileSync(v.destination)));
    const caption=cover.locator('.reading-art-caption');
    assert.equal(await caption.evaluate(e=>getComputedStyle(e).backgroundImage),'none');
    assert.equal(await caption.locator('strong').textContent(),book.title);
    assert.equal(await caption.locator('span').textContent(),String(book.year));
    const outer=await cover.boundingBox(),title=await caption.locator('strong').boundingBox();
    assert.ok(title.x>=outer.x && title.y>=outer.y && title.x+title.width<=outer.x+outer.width+1 && title.y+title.height<=outer.y+outer.height+1);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    if(v.slug==='the-mom-test') await cover.screenshot({path:`/tmp/mom-cover-${width}-${route===book.url?'book':'shelf'}.png`});
   }
  }
 }
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({passed:true,covers:variants.length,viewports:2,routesPerCover:2,assetHashes:true,titleBounds:true,noCaptionGradients:true,errors},null,2));
} finally { await browser.close(); }
