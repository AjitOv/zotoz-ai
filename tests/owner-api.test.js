import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/owner.js';
function response(){return {headers:{},statusCode:0,body:null,setHeader(k,v){this.headers[k]=v},status(code){this.statusCode=code;return this},json(data){this.body=data;return this}}}
test('status does not disclose credentials',async()=>{
  const res=response();await handler({method:'GET',query:{action:'status'},headers:{}},res);
  assert.equal(res.statusCode,200);assert.deepEqual(Object.keys(res.body),['connections']);assert.equal(res.headers['Cache-Control'],'no-store');
  for(const value of Object.values(res.body.connections))assert.equal(typeof value,'boolean');
});
test('cross-origin writes are rejected before authentication or AI',async()=>{
  const res=response();await handler({method:'POST',headers:{origin:'https://untrusted.example','content-type':'application/json'},body:{action:'generatePlaybook'}},res);
  assert.equal(res.statusCode,403);assert.match(res.body.error,/origin/);
});
test('non-JSON mutations are rejected',async()=>{
  const res=response();await handler({method:'POST',headers:{origin:process.env.APP_ORIGIN||'https://zotoz-ai.vercel.app','content-type':'text/plain'},body:{action:'login'}},res);
  assert.equal(res.statusCode,415);
});
test('oversized payloads do not reach the model',async()=>{
  const res=response();await handler({method:'POST',headers:{origin:process.env.APP_ORIGIN||'https://zotoz-ai.vercel.app','content-type':'application/json'},body:{action:'evaluateCase',text:'x'.repeat(70001)}},res);
  assert.equal(res.statusCode,413);
});
test('unsupported methods cannot mutate a workspace',async()=>{
  const res=response();await handler({method:'DELETE',headers:{}},res);assert.equal(res.statusCode,405);
});
