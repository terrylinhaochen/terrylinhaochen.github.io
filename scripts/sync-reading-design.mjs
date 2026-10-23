/** Refresh only the shared AWB jacket CSS, texture, and exact matching covers.
 * Usage: node scripts/sync-reading-design.mjs /path/to/answerwithbooks/web
 * Does not modify digest text, shelf membership, personalizer, or reader exports.
 */
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const source=process.argv[2];
if(!source)throw new Error('Pass a checked-out Answer with Books website directory.');
const awb=path.resolve(source), library=JSON.parse(fs.readFileSync('data/reading_library.json','utf8'));
const digest=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const copy=(src,dest)=>{fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(src,dest);};
const commit=execFileSync('git',['rev-parse','HEAD'],{cwd:awb,encoding:'utf8'}).trim();
const books={}, retained=[];
for(const [title,book] of Object.entries(library)){
 const ext=['jpg','jpeg','png','svg'].find(ext=>fs.existsSync(path.join(awb,`public/covers/${book.slug}.${ext}`)));
 if(!ext){retained.push({title,slug:book.slug,cover:book.cover});continue;}
 const asset=`${book.slug}.${ext}`, file=path.join(awb,'public/covers',asset),cover=`/images/reading-covers/awb/${asset}`;
 copy(file,'static'+cover);
 books[book.slug]={cover,source:`https://answerwithbooks.com/covers/${asset}`,sha256:digest(file)};
}
copy(path.join(awb,'src/styles/book-jacket.css'),'assets/css/reading-jacket.css');
copy(path.join(awb,'public/textures/book-paper.svg'),'static/textures/book-paper.svg');
fs.writeFileSync('data/reading_cover_assets.json',JSON.stringify({awbCommit:commit,jacketCssSha256:digest('assets/css/reading-jacket.css'),books,retained},null,2)+'\n');
console.log(`Shared jacket design for ${Object.keys(library).length} books; ${Object.keys(books).length} AWB covers, ${retained.length} existing illustrations.`);
