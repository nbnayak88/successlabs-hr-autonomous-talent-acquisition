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
