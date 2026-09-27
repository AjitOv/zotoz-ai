import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyDocument, activatePlaybook, decideCase, validateProposal, validateProfile } from '../lib/owner-domain.js';
const book = { summary:'Business supplies',voice:'Clear and warm',priorities:['Protect margin'],unknowns:[],rules:[{title:'Discounts',instruction:'Ask owner before offering discounts.',escalateWhen:'Any requested discount.',source:'Owner interview: pricing'}] };
const pending = () => {
  const d = emptyDocument(); activatePlaybook(d, book);
  d.cases.push({id:'case-1',customer:'Meera',status:'pending',playbookVersion:1,proposal:{draftReply:'Please share the quantities.'}});
  return d;
};
test('approving a draft records a decision without marking a message sent',()=>{
  const d=pending();const item=decideCase(d,{id:'case-1',decision:'approved',reply:'Please share the quantities.',note:''});
  assert.equal(item.status,'approved');assert.equal(item.approvedReply,'Please share the quantities.');assert.equal(item.sent,undefined);assert.match(d.activity[0].detail,/No customer message was sent/);
});
test('playbook version changes block approval of stale recommendations',()=>{
  const d=pending();activatePlaybook(d,book);
  assert.throws(()=>decideCase(d,{id:'case-1',decision:'approved',reply:'Yes',note:''}),/Re-evaluate/);
  assert.equal(d.cases[0].status,'pending');
});
test('rejections require actionable owner feedback',()=>{
  const d=pending();assert.throws(()=>decideCase(d,{id:'case-1',decision:'rejected',note:' '}),/review note/);
  assert.equal(d.cases[0].status,'pending');
  decideCase(d,{id:'case-1',decision:'rejected',note:'Ask for delivery location before quoting.'});
  assert.equal(d.cases[0].ownerNote,'Ask for delivery location before quoting.');
  assert.equal(d.playbook.version,1);
});
test('a reviewed decision cannot execute twice',()=>{
  const d=pending();const input={id:'case-1',decision:'approved',reply:'Approved draft',note:''};decideCase(d,input);
  assert.throws(()=>decideCase(d,input),/already been reviewed/);
});
test('unknown AI rule references fail closed',()=>{
  const d=pending();assert.throws(()=>validateProposal({summary:'Offer a discount',draftReply:'Yes',explanation:'Fits rules',ruleIds:['R99'],missingFacts:[]},d.playbook),/unknown rule/);
});
test('AI cannot remove owner approval with a generated field',()=>{
  const d=pending();const result=validateProposal({summary:'Clarify',draftReply:'Please share quantities',explanation:'Pricing is incomplete',ruleIds:['R1'],missingFacts:['Quantities'],requiresOwnerApproval:false},d.playbook);
  assert.equal(result.requiresOwnerApproval,true);
});
test('missing interview facts and oversized requests are rejected',()=>{
  assert.throws(()=>validateProfile({businessName:'Apex'}),/ownerName/);
  const d=pending();assert.throws(()=>decideCase(d,{id:'case-1',decision:'approved',reply:'x'.repeat(6001),note:''}),/6000/);
  assert.equal(d.cases[0].status,'pending');
});
