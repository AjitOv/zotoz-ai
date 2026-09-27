import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
const source=readFileSync(new URL('../dist/owner.js', import.meta.url),'utf8');
for (const hash of ['#access_token=test-access&refresh_token=test-refresh', '#teach#access_token=test-access&refresh_token=test-refresh', '#teach&access_token=test-access&refresh_token=test-refresh']) {
  test(`sign-in callback supports ${hash.split('=')[0]} and scrubs tokens`, () => {
    let scrubbed, request;
    vm.runInNewContext(source, {window:{},document:{addEventListener(){}},location:{hash,pathname:'/'},history:{replaceState(a,b,url){scrubbed=url}},URLSearchParams,fetch:(url,options)=>{request=JSON.parse(options.body);return new Promise(()=>{})}});
    assert.equal(scrubbed,'/#teach');
    assert.deepEqual({...request},{action:'session',access_token:'test-access',refresh_token:'test-refresh'});
  });
}
