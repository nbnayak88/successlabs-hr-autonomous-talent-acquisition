import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const base = 'https://raw.githubusercontent.com/nbnayak88/successlabs-hr-autonomous-talent-acquisition/main/learning/interview-preparation/ALM6/scale-lab/';

test('application has all 22 themes and key interaction controls', () => {
  const themeBlock = html.match(/const themes=\[([\s\S]*?)\];/);
  assert.ok(themeBlock, 'theme configuration exists');
  assert.equal([...themeBlock[1].matchAll(/\['[^']+','[^']+'\]/g)].length, 22, '22 themes configured');
  for (const id of ['start','surprise','prev','next','revealProbe','revealModel','saveReview','export','mark','skip']) {
    assert.match(html, new RegExp('id="'+id+'"'), 'control '+id+' exists');
  }
  for (const id of ['situation','task','action','result','reflection','rubric','modelContent','probeModel','source']) {
    assert.match(html, new RegExp('id="'+id+'"'), 'practice surface '+id+' exists');
  }
});

test('saving a draft does not erase existing rubric scores', () => {
  assert.match(html, /a\.scores=a\.scores\|\|\{\}/, 'score map is preserved');
  assert.doesNotMatch(html, /a\.scores=\{\};dims\.forEach/, 'score map is not reset on every text input');
});

test('all 22 live source files expose 20 uniquely numbered scenario headings', async () => {
  const themeBlock = html.match(/const themes=\[([\s\S]*?)\];/);
  const themes = [...themeBlock[1].matchAll(/\['([^']+)','([^']+)'\]/g)].map(m => ({ name:m[1], path:m[2] }));
  assert.equal(themes.length, 22);
  const reports = await Promise.all(themes.map(async (theme, index) => {
    const response = await fetch(base + theme.path);
    assert.equal(response.status, 200, 'source fetch failed: ' + theme.name);
    const markdown = await response.text();
    const headings = [...markdown.matchAll(/^##\s+(?:Q)?(\d{1,2})(?:\s*[—–-]\s*|\.\s+)(.+?)\s*$/gm)];
    const nums = headings.map(m => Number(m[1]));
    assert.equal(headings.length, 20, theme.name + ': expected 20 headings');
    assert.deepEqual([...nums].sort((a,b)=>a-b), Array.from({length:20},(_,i)=>i+1), theme.name + ': question numbers must be 1–20 with no duplicates');
    assert.ok(/Situation/i.test(markdown) && /Task/i.test(markdown) && /Action/i.test(markdown) && /Result/i.test(markdown), theme.name + ': STAR sections expected');
    return {index:index+1, name:theme.name, count:headings.length};
  }));
  assert.equal(reports.reduce((sum, item)=>sum+item.count,0), 440);
  console.log('Validated source headings:', reports.map(r => String(r.index).padStart(2,'0')+': '+r.count).join(', '));
});

function extractWithApplicationParser(markdown, themeIndex, sourcePath) {
  const lines = markdown.split('\\n'), heads = [];
  lines.forEach((line, i) => {
    const match = line.match(/^##\\s+(?:Q)?(\\d{1,2})(?:\\s*[—–-]\\s*|\\.\\s+)(.+?)\\s*$/);
    if (match) heads.push({n:Number(match[1]), title:match[2], i});
  });
  const clean = value => value.replace(/\\r/g,'').replace(/\\*\\*/g,'').replace(/\\`/g,'').replace(/^\\s*[-*>]\\s?/gm,'').replace(/^#{2,6}\\s+.*$/gm,'').replace(/^---\\s*$/gm,'').trim();
  const inline = (block,label) => {
    const re = new RegExp('(?:^|\\\\n)\\\\s*(?:[-*]\\\\s*)?\\\\*\\\\*'+label+'\\\\s*:\\\\*\\\\*\\\\s*([\\\\s\\\\S]*?)(?=\\\\n\\\\s*(?:[-*]\\\\s*)?\\\\*\\\\*(?:Situation|Task|Action|Result|SAP SuccessFactors Learning example|Product example|SME Probe|Question)\\\\s*:\\\\*\\\\*|\\\\n## |$)','i');
    const match = block.match(re); return match ? clean(match[1]) : '';
  };
  const section = (block,label) => {
    const re = new RegExp('(?:^|\\\\n)###\\\\s+'+label+'\\\\s*\\\\n([\\\\s\\\\S]*?)(?=\\\\n###\\\\s+|\\\\n---\\\\s*$|$)','i');
    const match = block.match(re); return match ? clean(match[1]) : '';
  };
  return heads.map((head,index) => {
    const block=lines.slice(head.i,heads[index+1]?.i??lines.length).join('\\n');
    let question=inline(block,'Question')||section(block,'Interview Question');
    if(!question){const match=block.match(/\\*\\*Question:\\*\\*\\s*([^\\n]+)/i);question=match?clean(match[1]):'';}
    const get=label=>inline(block,label);
    return {n:head.n,title:clean(head.title),question,star:['Situation','Task','Action','Result'].map(get),example:get('SAP SuccessFactors Learning example')||get('Product example')||section(block,'SAP SuccessFactors Learning Example'),probe:get('SME Probe')||section(block,'SME Probe')};
  }).filter(q=>q.n>0&&q.n<=20);
}

test('application parser extracts question, STAR, product example, and SME probe for all scenarios', async () => {
  const themeBlock = html.match(/const themes=\\[([\\s\\S]*?)\\];/);
  const themes = [...themeBlock[1].matchAll(/\\['([^']+)','([^']+)'\\]/g)].map(m => ({name:m[1],path:m[2]}));
  const failures=[];
  for (const [index,theme] of themes.entries()) {
    const response=await fetch(base+theme.path);
    assert.equal(response.status,200,'source fetch failed: '+theme.name);
    const markdown=await response.text();
    const scenarios=extractWithApplicationParser(markdown,index,theme.path);
    assert.equal(scenarios.length,20,theme.name+': parser should return 20 scenarios');
    for (const q of scenarios) {
      const missing=[];
      if(!q.title)missing.push('title');
      if(!q.question)missing.push('question');
      ['Situation','Task','Action','Result'].forEach((label,i)=>{if(!q.star[i])missing.push(label)});
      if(!q.example)missing.push('product example');
      if(!q.probe)missing.push('SME probe');
      if(missing.length)failures.push(theme.name+' Q'+String(q.n).padStart(2,'0')+': '+missing.join(', '));
    }
  }
  assert.deepEqual(failures,[], 'Missing parsed fields:\\n'+failures.join('\\n'));
});
