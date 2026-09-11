/** Sync the actual AWB provider data, icons, prompt template and client behavior. */
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import crypto from 'node:crypto';
export function syncBookPersonalizer(awb){
 const component='src/components/BookDigestPersonalizer.astro';
 const source=fs.readFileSync(path.join(awb,component),'utf8');
 const script=source.match(/<script>([\s\S]*?)<\/script>/)?.[1];
 const promptTemplate=source.match(/const prompt = `([\s\S]*?)`;/)?.[1];
 const skillUrl=source.match(/const skillUrl = '([^']+)'/)?.[1];
 const icons=Object.fromEntries([...source.matchAll(/import (\w+) from '@lobehub\/icons-static-svg\/icons\/([^']+)\.svg\?url'/g)].map(m=>[m[1],m[2]]));
 const providers=[...source.matchAll(/\{ id: '([^']+)', label: '([^']+)', url: '([^']+)', icon: (\w+) \}/g)].map(m=>({id:m[1],label:m[2],url:m[3],icon:'/reading-ai/'+icons[m[4]]+'.svg'}));
 if(!script||!promptTemplate||!skillUrl||providers.length!==4)throw Error('AWB personalizer contract changed; review the adapter.');
 const dir='static/reading-ai';fs.mkdirSync(dir,{recursive:true});
 for(const name of Object.values(icons))fs.copyFileSync(path.join(awb,'node_modules/@lobehub/icons-static-svg/icons',name+'.svg'),path.join(dir,name+'.svg'));
 const {transformSync}=createRequire(path.join(awb,'package.json'))('esbuild');
 fs.writeFileSync(path.join(dir,'personalizer.js'),'// Generated from AWB BookDigestPersonalizer.astro; run scripts/sync-book-personalizer.mjs.\n'+transformSync(script,{loader:'ts',target:'es2020'}).code);
 fs.writeFileSync('data/reading_ai_handoff.json',JSON.stringify({providers,skillUrl,promptTemplate,sourceComponent:component,sourceCommit:execFileSync('git',['rev-parse','HEAD'],{cwd:awb,encoding:'utf8'}).trim(),sourceHash:crypto.createHash('sha256').update(source).digest('hex')},null,2)+'\n');
 console.log('Synced four AWB providers, icons, prompt template, and handoff behavior.');
}
if(process.argv[1]&&path.resolve(process.argv[1])===new URL(import.meta.url).pathname)syncBookPersonalizer(path.resolve(process.argv[2]||'../crowdlisten_files/applications/answerwithbooks/web'));
