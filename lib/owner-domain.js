import { randomUUID } from 'node:crypto';

export class AppError extends Error {
  constructor(message, status = 400) { super(message); this.status = status; }
}
export function text(value, name, max = 4000, required = true) {
  if (typeof value !== 'string' || value.length > max || (required && !value.trim())) throw new AppError(`Please provide ${name} (up to ${max} characters).`);
  return value.trim();
}
export const profileFields = ['businessName', 'ownerName', 'industry', 'products', 'pricing', 'decisions', 'delegation', 'priorities', 'escalation', 'tone'];
export function validateProfile(input) {
  if (!input || typeof input !== 'object') throw new AppError('Complete your owner interview.');
  return Object.fromEntries(profileFields.map(key => [key, text(input[key], key, ['businessName','ownerName','industry'].includes(key) ? 120 : 4000)]));
}
const strings = (value, name, max = 10) => {
  if (!Array.isArray(value) || value.length > max) throw new AppError(`Invalid ${name}.`);
  return value.map(item => text(item, name, 1200));
};
export function validatePlaybook(input) {
  if (!input || !Array.isArray(input.rules) || input.rules.length < 1 || input.rules.length > 10) throw new AppError('Your playbook needs between 1 and 10 rules.');
  return {
    summary: text(input.summary, 'business summary', 2000),
    voice: text(input.voice, 'communication style', 1000),
    priorities: strings(input.priorities, 'priorities', 5),
    unknowns: strings(input.unknowns, 'open questions'),
    rules: input.rules.map((r, i) => ({ id: `R${i + 1}`, title: text(r.title, 'rule title', 120), instruction: text(r.instruction, 'rule', 1600), escalateWhen: text(r.escalateWhen, 'escalation condition', 1000), source: text(r.source, 'rule source', 1200) }))
  };
}
export function validateCase(input) {
  if (!input || typeof input !== 'object') throw new AppError('Provide a customer request.');
  return { customer: text(input.customer, 'customer name', 160), request: text(input.request, 'customer request', 8000), facts: text(input.facts ?? '', 'verified facts', 4000, false) };
}
export function validateProposal(input, playbook) {
  if (!input || typeof input !== 'object') throw new AppError('The AI response was incomplete. Please retry.', 502);
  const ruleIds = strings(input.ruleIds, 'referenced rules');
  if (ruleIds.some(id => !playbook.rules.some(r => r.id === id))) throw new AppError('The AI referenced an unknown rule. Please retry.', 502);
  return { summary: text(input.summary, 'recommendation', 2000), draftReply: text(input.draftReply, 'draft reply', 6000), explanation: text(input.explanation, 'decision explanation', 3000), ruleIds, missingFacts: strings(input.missingFacts, 'missing facts'), requiresOwnerApproval: true };
}
export function emptyDocument() { return { profile: null, draftPlaybook: null, playbook: null, cases: [], activity: [], brief: null }; }
export function audit(doc, title, detail, now = new Date().toISOString()) {
  doc.activity.unshift({ id: randomUUID(), title, detail, at: now });
  doc.activity = doc.activity.slice(0, 500);
  doc.brief = null;
}
export function activatePlaybook(doc, candidate) {
  const book = validatePlaybook(candidate);
  doc.playbook = { ...book, version: (doc.playbook?.version || 0) + 1, approvedAt: new Date().toISOString() };
  doc.draftPlaybook = null;
  audit(doc, `Playbook v${doc.playbook.version} approved`, 'Owner reviewed the rules. Existing recommendations require re-evaluation.');
}
export function decideCase(doc, input) {
  const item = doc.cases.find(c => c.id === input.id);
  if (!item) throw new AppError('This request was not found.', 404);
  if (item.status !== 'pending') throw new AppError('This request has already been reviewed.', 409);
  if (!doc.playbook || item.playbookVersion !== doc.playbook.version) throw new AppError('Your playbook changed. Re-evaluate this request before approving it.', 409);
  if (!['approved','rejected'].includes(input.decision)) throw new AppError('Choose approve or reject.');
  const note = text(input.note ?? '', 'review note', 3000, input.decision === 'rejected');
  const reply = input.decision === 'approved' ? text(input.reply, 'approved reply', 6000) : null;
  item.status = input.decision;
  item.reviewedAt = new Date().toISOString();
  item.ownerNote = note;
  item.approvedReply = reply;
  audit(doc, `${input.decision === 'approved' ? 'Draft approved' : 'Recommendation rejected'} · ${item.customer}`, note || 'Approved for manual use. No customer message was sent.');
  return item;
}
const string = { type: 'string' };
const array = (items, maxItems = 10) => ({ type: 'array', items, maxItems });
const object = properties => ({ type: 'object', properties, required: Object.keys(properties), additionalProperties: false });
export const playbookSchema = object({ summary: string, voice: string, priorities: array(string, 5), unknowns: array(string), rules: { ...array(object({ title: string, instruction: string, escalateWhen: string, source: string })), minItems: 1 } });
export const proposalSchema = object({ summary: string, draftReply: string, explanation: string, ruleIds: array(string), missingFacts: array(string) });
export const briefSchema = object({ summary: string, needsAttention: array(string, 6), handled: array(string, 6), nextSteps: array(string, 6) });
