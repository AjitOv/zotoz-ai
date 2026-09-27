import test from 'node:test';
import assert from 'node:assert/strict';
import { generateStructured } from '../lib/owner-ai.js';

test('Gemini keeps credentials out of URLs and separates rules from business input', async () => {
  const previous = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = 'test-only-key';
  try {
    const result = await generateStructured('example', { type:'object' }, 'Owner rules', { request:'Untrusted request' }, async (url, options) => {
      assert.ok(!url.includes('test-only-key'));
      assert.equal(options.headers['x-goog-api-key'], 'test-only-key');
      const body = JSON.parse(options.body);
      assert.match(body.systemInstruction.parts[0].text, /Owner rules/);
      assert.match(body.contents[0].parts[0].text, /Untrusted request/);
      assert.equal(body.tools, undefined);
      assert.equal(body.generationConfig.responseMimeType, 'application/json');
      assert.deepEqual(body.generationConfig.responseJsonSchema, {type:'object'});
      return { ok:true, json:async()=>({candidates:[{finishReason:'STOP',content:{parts:[{thought:true,text:'not output'},{text:'{"ok":true}'}]}}]}) };
    });
    assert.deepEqual(result, {ok:true});
  } finally { if(previous===undefined) delete process.env.GEMINI_API_KEY; else process.env.GEMINI_API_KEY=previous; }
});

test('Gemini rejects truncated and invalid output without disclosing provider errors', async () => {
  const previous = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = 'test-only-key';
  try {
    for (const result of [{candidates:[{finishReason:'MAX_TOKENS',content:{parts:[{text:'{}'}]}}]}, {candidates:[{finishReason:'STOP',content:{parts:[{text:'invalid'}]}}]}]) {
      await assert.rejects(generateStructured('x', {}, '', {}, async()=>({ok:true,json:async()=>result})), error=>error.status===502 && !error.message.includes('test-only-key'));
    }
  } finally { if(previous===undefined) delete process.env.GEMINI_API_KEY; else process.env.GEMINI_API_KEY=previous; }
});
