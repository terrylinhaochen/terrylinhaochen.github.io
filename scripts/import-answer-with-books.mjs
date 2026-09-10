/** Run after the AWB build: node scripts/import-answer-with-books.mjs /path/to/answerwithbooks/web */
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import { createRequire } from 'node:module';
const awb=path.resolve(process.argv[2] || '../crowdlisten_files/applications/answerwithbooks/web');
const yaml=createRequire(path.join(awb,'package.json'))('js-yaml');
const parseBook=file=>{const m=fs.readFileSync(file,'utf8').match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!m)throw Error(file);return {...yaml.load(m[1]),body:m[2]};};
const manual=yaml.load(fs.readFileSync('data/books.yaml','utf8'));
const rw=JSON.parse(fs.readFileSync('data/readwise_books.json','utf8'));
const past=[...manual.read,...rw.read.filter(b=>!manual.readwise_exclude.includes(b.title))];
const shelf=[...manual.shelf,...(rw.shelf||[]).filter(b=>!manual.readwise_exclude.includes(b.title))];
const catalogBooks=[...past.map(b=>({...b,readingStatus:'read'})),...shelf.map(b=>({...b,readingStatus:'shelf'}))];
const additions=[...JSON.parse(fs.readFileSync('data/reading_guides.json','utf8')),...JSON.parse(fs.readFileSync('data/shelf_reading_guides.json','utf8'))];
const sharedIds=['the-mom-test','the-design-of-everyday-things','thinking-fast-and-slow','the-wisdom-of-crowds'];
const shared=sharedIds.map(slug=>{const b=parseBook(path.join(awb,'src/content/books',slug+'.md'));return {...b,slug,source:`https://answerwithbooks.com/books/${slug}/`,sourceLabel:'Answer with Books editorial digest',description:b.oneLiner};});
const coverTitles={'thinking-fast-and-slow':'Thinking, Fast & Slow','the-wisdom-of-crowds':'Wisdom of Crowds'};
for(const b of shared.filter(b=>coverTitles[b.slug])) {
 b.shortTitle=coverTitles[b.slug]; b.color=b.slug==='thinking-fast-and-slow'?'#9c114c':'#0877d9';
 b.body=b.body.replace(/^\s*## What the book is about[\s\S]*?(?=## Core lessons)/,b.oneLiner+'\n\n').replace(/## How to use it[\s\S]*?(?=\n## )/,'').replace(/^The lens breaks when it is treated as a universal rule\.[^\n]*\n/gm,'').replace(/^It also breaks when the reader uses the language[^\n]*\n/gm,'');
}
const crowd=shared.find(b=>b.slug==='the-wisdom-of-crowds');
if(crowd) crowd.body=crowd.body.replace(/The famous opener —[\s\S]*?Surowiecki's whole book is about/,"Galton's ox-weighing example illustrates how independently collected estimates can combine into a surprisingly accurate answer. It is not a claim that groups are always wise. Surowiecki's book is about").replace(/The ox is the image to keep:[^\n]*/,"The ox-weighing example is an image of independent estimates brought together by a clear rule. The useful question for a team is which parts of that information structure its own process preserves or breaks.");
const all=[...shared,...additions];


const records=catalogBooks.map(b=>{const g=all.find(g=>g.title===b.title);if(!g)throw Error(`Uncovered catalog book: ${b.title}`);return {...g,readingStatus:b.readingStatus,originalAuthor:b.author,personalNotes:b.notes||'',partial:/Partially read/i.test(b.notes||'')};});
if(new Set(records.map(b=>b.slug)).size!==catalogBooks.length)throw Error('Duplicate import');
fs.mkdirSync('content/reading/library',{recursive:true});fs.mkdirSync('static/images/reading-covers',{recursive:true});
for(const b of records){
 const reused=sharedIds.includes(b.slug);const cover=`/images/reading-covers/${b.slug}.${reused?'jpg':'png'}`;
 if(reused)fs.copyFileSync(path.join(awb,'public/covers',b.slug+'.jpg'),'static'+cover);
 if(!fs.existsSync('static'+cover))throw Error(`Missing cover for ${b.title}: ${cover}`);
 const meta={title:b.title,description:b.description,url:`/reading/${b.slug}/`,layout:'book',type:'reading',bookId:b.slug,bookAuthor:b.originalAuthor,bookYear:b.year,editorialSource:b.source,editorialSourceLabel:b.sourceLabel,personalNotes:b.personalNotes,partial:b.partial,readingStatus:b.readingStatus,coverArt:cover,coverTitle:b.shortTitle||(b.slug==='the-design-of-everyday-things'?'Everyday Things':b.title),coverColor:b.color||(b.slug==='the-mom-test'?'#0096a6':'#f2b70a'),hidemeta:true,ShowBreadCrumbs:false};
 fs.writeFileSync(`content/reading/library/${b.slug}.md`,'---\n'+yaml.dump(meta,{lineWidth:-1})+'---\n\n'+b.body.trim()+'\n');
 Object.assign(b,{cover,url:meta.url,color:meta.coverColor,shortTitle:meta.coverTitle});
}
fs.writeFileSync('data/reading_library.json',JSON.stringify(Object.fromEntries(records.map(b=>[b.title,{slug:b.slug,url:b.url,cover:b.cover,color:b.color,title:b.shortTitle,year:b.year,partial:b.partial,readingStatus:b.readingStatus}])),null,2)+'\n');
fs.mkdirSync('static/reading-app',{recursive:true});
fs.rmSync('static/reading-app/_astro',{recursive:true,force:true});
fs.cpSync(path.join(awb,'dist/_astro'),'static/reading-app/_astro',{recursive:true});
const rebase=s=>s.replaceAll('/_astro/','/reading-app/_astro/').replaceAll('/favicon.svg','/favicon.ico');
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else if(/\.(js|mjs|css)$/.test(f))fs.writeFileSync(f,rebase(fs.readFileSync(f,'utf8')));}}
walk('static/reading-app/_astro');
const json=o=>JSON.stringify(o).replaceAll('<','\\u003c');
const clean=s=>s.replace(/<figure[\s\S]*?<\/figure>/gi,' ').replace(/<[^>]+>/g,' ').replace(/```[\s\S]*?```/g,' ').replace(/!\[[^\]]*\]\([^)]*\)/g,'').replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/[*_`>#]/g,'').replace(/\s+/g,' ').trim();
const payload={bookBasePath:'/reading/',answers:[],books:records.map(b=>({id:b.slug,title:b.title,sections:b.body.split(/^##\s+/m).map((p,i)=>{const e=p.indexOf('\n');return {title:i===0?'Introduction':clean(p.slice(0,e)),text:clean(i===0?p:p.slice(e+1))};}).filter(s=>s.text.length>30)}))};
let reader=rebase(fs.readFileSync(path.join(awb,'dist/speed-read/index.html'),'utf8')).replace(/(<script id="speed-reader-data"[^>]*>)[\s\S]*?(<\/script>)/,(_,a,b)=>a+json(payload)+b).replaceAll('href="/books/"','href="/reading/"');
let upload=rebase(fs.readFileSync(path.join(awb,'dist/embed/book-upload/index.html'),'utf8'));
const m=upload.match(/<script id="add-book-catalog"[^>]*>([\s\S]*?)<\/script>/);if(!m)throw Error('No upload catalog');
const personal=records.map(b=>({title:b.title,author:b.originalAuthor,year:b.year,slug:b.slug,digestUrl:b.url}));
const catalog=[...personal,...JSON.parse(m[1]).filter(b=>!personal.some(p=>p.slug===b.slug))];
upload=upload.replace(m[1],json(catalog)).replaceAll('href="https://chenterry.com/reading/"','href="/reading/"');
for(const [route,html] of [['focus',reader],['upload',upload]]){const dir=`static/reading/${route}`;fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),html.replace(/(<link rel="canonical" href=")[^"]+("[^>]*>)/,`$1https://chenterry.com/reading/${route}/$2`));}
fs.writeFileSync('data/reading_import_report.json',JSON.stringify({pastReads:past.length,onTheShelf:shelf.length,totalBooks:catalogBooks.length,covered:records.length,reusedDigests:sharedIds,generatedCoverSlugs:additions.map(b=>b.slug),readwiseSourceUnmodified:true,awbSourceCommit:execFileSync('git',['rev-parse','HEAD'],{cwd:awb,encoding:'utf8'}).trim(),awbSourceHasLocalChanges:!!execFileSync('git',['status','--porcelain'],{cwd:awb,encoding:'utf8'}).trim(),records:records.map(b=>({title:b.title,slug:b.slug,source:b.source,wordCount:clean(b.body).split(/\s+/).length,partial:b.partial,readingStatus:b.readingStatus}))},null,2)+'\n');
console.log(`Imported ${records.length}/${catalogBooks.length} books (${past.length} past reads, ${shelf.length} on the shelf); reused ${shared.length} AWB digests and shared upload/reader components.`);
