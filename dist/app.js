const paths={arrow:'M7 17 17 7M7 7h10v10',right:'M5 12h14m-5-5 5 5-5 5',chevron:'m9 5 7 7-7 7',down:'m6 9 6 6 6-6',check:'m5 12 4 4L19 6',checks:'m2 12 4 4L16 6m-5 9 2 2L23 7',close:'m6 6 12 12M6 18 18 6',play:'m9 5 11 7-11 7Z',spark:'m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4m-2-2h4',grid:'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',chat:'M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z',clock:'M12 8v4l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',tasks:'M9 5h11M9 12h11M9 19h11M3 5l1 1 2-2M3 12l1 1 2-2M3 19l1 1 2-2',leaf:'M20 3C6 2 2 9 5 16s17 4 15-13ZM4 21l11-11',cup:'M3 8h13v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm13 1h2a3 3 0 0 1 0 6h-2M6 3v2m4-2v2m4-2v2',bell:'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-11 13a2 2 0 0 0 4 0',calendar:'M4 5h16v16H4ZM16 3v4M8 3v4M4 11h16',wallet:'M21 8H5a2 2 0 0 1 0-4h14v4M3 6v13a2 2 0 0 0 2 2h16V8M16 12h5v5h-5z',trend:'m3 17 6-6 4 4 8-10m-6 0h6v6',shield:'m12 3 9 4v6c0 5-9 9-9 9s-9-4-9-9V7ZM8 12l3 3 5-6',send:'m22 2-7 20-4-9L2 9Zm0 0L11 13',info:'M12 11v6M12 7h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',box:'m3 7 9-5 9 5v10l-9 5-9-5Zm0 0 9 5 9-5m-9 5v10M7.5 4.5l9 5',logout:'M9 5H4v14h5m6-11 4 4-4 4M8 12h11',menu:'M4 6h16M4 12h16M4 18h16',sun:'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z',team:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.9M15 3a4 4 0 0 1 0 8M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'};
function icon(name,cls=''){return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.spark}"/></svg>`}
function brand(){return `<a href="#home" class="brand" aria-label="Zotoz AI home"><span class="brand-mark"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6h12L6 18h12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>zotoz<span class="brand-ai">AI</span></a>`}
const state={
  "focus": false,
  "period": "today",
  "filter": "all",
  "menu": false,
  "alertDismissed": false,
  "messages": [],
  "tasks": [
    {
      "id": 1,
      "title": "Confirm the bulk stationery quote",
      "owner": "Priya",
      "initials": "PK",
      "color": "purple",
      "due": "4:30 PM",
      "done": false
    },
    {
      "id": 2,
      "title": "Replenish shipping cartons",
      "owner": "Rahul",
      "initials": "RS",
      "color": "green",
      "due": "5:00 PM",
      "done": false
    },
    {
      "id": 3,
      "title": "Send the dispatch status report",
      "owner": "Ananya",
      "initials": "AM",
      "color": "blue",
      "due": "5:30 PM",
      "done": false
    },
    {
      "id": 4,
      "title": "Reconcile outstanding invoices",
      "owner": "Rahul",
      "initials": "RS",
      "color": "green",
      "due": "6:00 PM",
      "done": false
    },
    {
      "id": 5,
      "title": "Verify the incoming supplier delivery",
      "owner": "Priya",
      "initials": "PK",
      "color": "purple",
      "due": "9:00 AM",
      "done": true
    },
    {
      "id": 6,
      "title": "Update the product price list",
      "owner": "Ananya",
      "initials": "AM",
      "color": "blue",
      "due": "9:30 AM",
      "done": true
    },
    {
      "id": 7,
      "title": "Complete the warehouse checklist",
      "owner": "Rahul",
      "initials": "RS",
      "color": "green",
      "due": "8:30 AM",
      "done": true
    },
    {
      "id": 8,
      "title": "Schedule tomorrow’s client deliveries",
      "owner": "Priya",
      "initials": "PK",
      "color": "purple",
      "due": "10:00 AM",
      "done": true
    },
    {
      "id": 9,
      "title": "Reply to customer account queries",
      "owner": "Ananya",
      "initials": "AM",
      "color": "blue",
      "due": "11:00 AM",
      "done": true
    },
    {
      "id": 10,
      "title": "Review stock reorder levels",
      "owner": "Rahul",
      "initials": "RS",
      "color": "green",
      "due": "12:00 PM",
      "done": true
    },
    {
      "id": 11,
      "title": "Match supplier invoices to deliveries",
      "owner": "Priya",
      "initials": "PK",
      "color": "purple",
      "due": "2:00 PM",
      "done": true
    },
    {
      "id": 12,
      "title": "Prepare the client order documents",
      "owner": "Ananya",
      "initials": "AM",
      "color": "blue",
      "due": "3:00 PM",
      "done": true
    }
  ],
  "inquiries": [
    {
      "id": 1,
      "name": "Meera Shah",
      "initials": "MS",
      "color": "purple",
      "subject": "Quote for 50 office starter kits",
      "message": "Hi, we’re setting up a new branch and need 50 office starter kits with stationery and desk accessories. Can you share a quotation and delivery timeline?",
      "time": "12 min ago",
      "status": "new",
      "draft": "Hi Meera! Thanks for reaching out to Apex Supplies. We can put together a quotation for 50 office starter kits. Could you share your delivery address and required delivery date? Our sales team will confirm pricing and availability."
    },
    {
      "id": 2,
      "name": "Arjun Patel",
      "initials": "AP",
      "color": "blue",
      "subject": "Bulk stationery for three offices",
      "message": "Hello! We need to replenish stationery across three offices next month. Could you share bulk pricing and let us know if you can deliver to each location?",
      "time": "28 min ago",
      "status": "new",
      "draft": "Hi Arjun! We can help with a bulk stationery order and delivery to your three offices. Please share the item list, quantities, and delivery locations so we can prepare an accurate quote and schedule."
    },
    {
      "id": 3,
      "name": "Nisha Rao",
      "initials": "NR",
      "color": "green",
      "subject": "Delivery status for order #1048",
      "message": "Could you confirm when our printer paper order #1048 will be dispatched?",
      "time": "1 hour ago",
      "status": "resolved",
      "draft": "Hi Nisha! Your order #1048 is packed and scheduled for dispatch on Monday. Our logistics team will share the tracking details once it leaves the warehouse."
    },
    {
      "id": 4,
      "name": "Rohan Mehta",
      "initials": "RM",
      "color": "blue",
      "subject": "Invoice for order #1042",
      "message": "Please send a copy of the invoice for order #1042 to our accounts team.",
      "time": "2 hours ago",
      "status": "resolved",
      "draft": "Hi Rohan! The invoice for order #1042 has been shared with your registered accounts contact. Let us know if your team needs any changes to the billing details."
    }
  ],
  "followups": [
    {
      "id": 1,
      "name": "Arjun Patel",
      "initials": "AP",
      "color": "blue",
      "subject": "Bulk stationery order",
      "detail": "Estimate shared yesterday · ₹85,000 potential order",
      "due": "Due now",
      "sent": false
    },
    {
      "id": 2,
      "name": "Sana Kapoor",
      "initials": "SK",
      "color": "purple",
      "subject": "Quarterly packaging supply",
      "detail": "Waiting for purchase order · ₹1,20,000 quote",
      "due": "4:30 PM",
      "sent": false
    },
    {
      "id": 3,
      "name": "Dev Malhotra",
      "initials": "DM",
      "color": "green",
      "subject": "Annual office supply agreement",
      "detail": "Proposal shared 2 days ago · ₹2,40,000 contract",
      "due": "5:00 PM",
      "sent": false
    },
    {
      "id": 4,
      "name": "Isha Verma",
      "initials": "IV",
      "color": "purple",
      "subject": "Branch opening supply order",
      "detail": "Quotation shared yesterday · ₹62,000 potential order",
      "due": "5:30 PM",
      "sent": false
    },
    {
      "id": 5,
      "name": "Aditya Singh",
      "initials": "AS",
      "color": "blue",
      "subject": "Monthly restocking plan",
      "detail": "Pricing shared on Thursday · ₹48,000 per month",
      "due": "6:00 PM",
      "sent": false
    }
  ]
};
const money=n=>'₹'+n.toLocaleString('en-IN');
const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function route(){return location.hash.slice(1)||'home'}
function completed(){return state.tasks.filter(t=>t.done).length}
function pending(){return state.followups.filter(f=>!f.sent).length}
function unresolved(){return state.inquiries.filter(i=>i.status==='new').length}
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('visible'),3800)}
function navItem(target,label,name,count){return `<a class="nav-item ${route()===target||(route()==='home'&&target==='overview')?'active':''}" href="#${target}" ${route()===target?'aria-current="page"':''}>${icon(name)}${label}${count?`<span class="nav-count">${count}</span>`:''}</a>`}
function sidebar(){return `<aside class="sidebar ${state.menu?'open':''}" aria-label="Business navigation">${brand()}<div class="business-select"><span class="business-icon">${icon('box')}</span><div><div class="business-name">Apex Supplies</div><div class="business-label">SME · Business supplies</div></div></div><p class="nav-label">WORKSPACE</p><nav class="dash-nav">${navItem('overview','Overview','grid')}${navItem('inquiries','Inquiries','chat',unresolved())}${navItem('followups','Follow-ups','clock',pending())}${navItem('tasks','Team tasks','tasks')}<a class="nav-item" href="#teach">${icon('spark')}Set up your agent</a></nav><div class="sidebar-bottom"><div class="peace-note">${icon('leaf')}<strong>Make time for what matters.</strong><p>Let AI handle the routine.<br>Focus on your priorities.</p></div><div class="owner"><span class="avatar">AJ</span><div class="owner-text"><strong>Ajit</strong><p>Business owner</p></div><a class="icon-btn" href="#home" aria-label="Back to homepage">${icon('logout')}</a></div></div></aside>`}
function workspace(embedded=false){const page=embedded?'overview':route();const labels={overview:'Overview',inquiries:'Inquiries',followups:'Follow-ups',tasks:'Team tasks'};return `<div class="workspace">${sidebar()}${state.menu?'<button class="mobile-scrim" data-action="menu" aria-label="Close navigation"></button>':''}<div class="workspace-main"><header class="topbar"><div class="breadcrumb"><button class="icon-btn mobile-menu" data-action="menu" aria-label="Open navigation" aria-expanded="${state.menu}">${icon('menu')}</button>Workspace ${icon('chevron')}<b>${labels[page]||'Overview'}</b></div><div class="topbar-right"><span class="demo-badge">Demo workspace</span><button class="icon-btn ${state.alertDismissed?'':'bell'}" data-action="alerts" aria-label="View important alerts">${icon('bell')}</button><span class="avatar green" aria-label="Ajit, business owner">AJ</span></div></header><${embedded?'div':'main'} id="${embedded?'demo-dashboard':'main'}" class="dashboard-content" tabindex="-1">${page==='overview'?overview():listPage(page)}</${embedded?'div':'main'}></div></div>`}
function stats(){return `<div class="stats"><button class="stat" data-action="sales"><div class="stat-top">Today’s sales ${icon('wallet')}</div><div class="stat-value">₹2,48,500</div><div class="stat-bottom"><b>↗ 18.6%</b> vs yesterday</div></button><a class="stat" href="#inquiries"><div class="stat-top">Customer inquiries ${icon('chat')}</div><div class="stat-value">32</div><div class="stat-bottom"><b>${32-unresolved()} handled</b> ${unresolved()} ${unresolved()===1?'needs':'need'} a reply</div></a><a class="stat" href="#followups"><div class="stat-top">Pending follow-ups ${icon('clock')}</div><div class="stat-value">${pending().toString().padStart(2,'0')}</div><div class="stat-bottom">${pending()?'Ready for a little nudge':'All caught up for today'}</div></a><a class="stat" href="#tasks"><div class="stat-top">Team tasks ${icon('tasks')}</div><div class="stat-value">${completed().toString().padStart(2,'0')} <small>/ 12</small></div><div class="stat-bottom"><b>On track</b> ${12-completed()} left for today</div></a></div>`}
function salesPanel(){return `<section class="panel sales-panel"><div class="panel-head"><div><h2>Sales overview</h2><p>A good day for your business.</p></div><label><span class="screen-reader">Sales period</span><select class="select-small" data-period aria-label="Sales period"><option value="today" ${state.period==='today'?'selected':''}>Today</option><option value="week" ${state.period==='week'?'selected':''}>This week</option></select></label></div><div class="sales-total"><strong>${state.period==='today'?'₹2,48,500':'₹14,26,800'}</strong><span class="trend">${icon('trend')} ${state.period==='today'?'18.6':'12.4'}%</span></div><div class="chart">${chart()}</div><div class="chart-foot">${icon('info')} ${state.period==='today'?'12 orders · Average order ₹20,708':'76 orders · Average order ₹18,774'}</div></section>`}
function chart(){const today=state.period==='today';return `<svg viewBox="0 0 440 160" role="img" aria-label="${today?'Cumulative sales grew from ₹25,000 at 9 AM to ₹2,48,500 at 4 PM':'Daily sales this week: ₹1,81,000, ₹2,14,500, ₹1,78,000, ₹2,39,800, ₹1,94,000, ₹1,71,000, and ₹2,48,500'}"><path class="chart-grid" d="M42 15h377M42 50h377M42 85h377M42 120h377"/><text x="0" y="19">₹3L</text><text x="0" y="54">₹2L</text><text x="0" y="89">₹1L</text><text x="14" y="124">₹0</text><path class="chart-area" d="${today?'M42 111C69 111 69 101 93 99S118 98 143 91S168 89 188 79S218 76 241 64S265 62 288 54S317 47 338 42S375 37 412 33':'M42 57 104 45 166 58 228 36 290 52 351 60 412 33'}L412 120H42Z"/><path class="chart-line" d="${today?'M42 111C69 111 69 101 93 99S118 98 143 91S168 89 188 79S218 76 241 64S265 62 288 54S317 47 338 42S375 37 412 33':'M42 57 104 45 166 58 228 36 290 52 351 60 412 33'}"/><circle cx="412" cy="33" r="4" fill="#7a9d62" stroke="white" stroke-width="2"/>${(today?['9 AM','10 AM','12 PM','2 PM','4 PM']:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']).map((l,i,a)=>`<text x="${42+(370*i/(a.length-1))}" y="147" text-anchor="middle">${l}</text>`).join('')}</svg>`}
function taskRow(t,full=false){return `<label class="task-row ${t.done?'done':''}"><input type="checkbox" data-task="${t.id}" ${t.done?'checked':''} aria-label="Mark ${escapeHtml(t.title)} ${t.done?'incomplete':'complete'}"><span class="task-text"><span>${escapeHtml(t.title)}</span><small>${t.owner}${full?' · Assigned to your team':''}</small></span><span class="task-due">${t.done?'Done':t.due}</span><span class="avatar ${t.color}" aria-hidden="true">${t.initials}</span></label>`}
function overview(){return `<div class="dashboard-heading"><div><h1>Make room for important work.</h1><p>Here’s how Apex Supplies is doing today.</p></div><span class="date-label">${icon('calendar')} Saturday, 26 September</span></div><div class="status-banner"><span class="status-symbol">${icon(state.focus?'sun':'shield')}</span><div class="status-copy"><strong>${state.focus?'Focus mode is on. Make space for your priorities.':'Your priorities, in one place.'}</strong><p>${state.focus?'Routine updates are paused. Only important alerts will reach you.':'Keep routine work moving. Give important decisions your attention.'}</p></div><div class="focus-control"><span>Focus mode</span><button class="switch" role="switch" aria-checked="${state.focus}" aria-label="Focus mode" data-action="focus"></button></div></div>${stats()}<div class="dashboard-grid"><div class="left-stack">${salesPanel()}<section class="panel"><div class="panel-head"><div><h2>Your team, on track</h2><p>${completed()} of 12 tasks completed today</p></div><a class="btn-text" href="#tasks">View all ${icon('right')}</a></div><div class="tasks-list">${state.tasks.slice(0,3).map(t=>taskRow(t)).join('')}</div><a class="row-link" href="#followups"><span>${pending()} follow-ups ready to go</span>${icon('right')}</a></section></div><div><section class="panel assistant-panel">${assistant()}</section><p class="chat-note">Demo assistant · Sample business data</p>${state.alertDismissed?'':`<div class="attention">${icon('box')}<div><strong>${state.tasks.find(t=>t.id===2).done?'Stock is taken care of':'One thing to keep an eye on'}</strong><p>${state.tasks.find(t=>t.id===2).done?'Rahul has replenished the shipping cartons. Dispatches are covered.':'Shipping cartons are running low. Rahul is handling replenishment.'}</p><button class="btn-text" data-action="alerts">View update ${icon('right')}</button></div></div>`}</div></div><div class="work-footer">${icon('shield')} Less repetitive work. More time for your priorities.</div>`}
function report(){return `<p class="report-intro">Hi Ajit! Here’s your day in a nutshell ${iconInlineSun()}</p><div class="report-lines"><div class="report-line">${icon('wallet')}<span><strong>₹2,48,500 in sales</strong> — up 18.6%.</span></div><div class="report-line">${icon('chat')}<span><strong>${32-unresolved()} of 32 inquiries handled.</strong> ${unresolved()?`${unresolved()} ${unresolved()===1?'needs':'need'} your team’s input.`:'Everyone has a reply.'}</span></div><div class="report-line">${icon('clock')}<span><strong>${pending()} follow-ups</strong> ${pending()?'ready to send.':'left. All caught up!'}</span></div><div class="report-line">${icon('tasks')}<span><strong>${completed()} of 12 team tasks done.</strong> ${completed()===12?'A productive day!':'The rest are on track.'}</span></div></div><p class="report-end">${state.focus?'Focus mode is on. I’ll flag important updates so you can focus on your priorities.':'Your routine work is on track. Focus on the decisions that need you.'}</p>`}
function iconInlineSun(){return '<span aria-hidden="true">☀</span>'}
function assistant(){return `<div class="assistant-head"><span class="assistant-avatar">${icon('spark')}</span><div class="assistant-title"><h2>Your Zotoz assistant</h2><p><span class="status-dot"></span>Here for your business</p></div><span class="assistant-tag">AI</span></div><div class="chat-content" role="log" aria-label="Business assistant conversation" aria-live="polite"><p class="chat-day">Today, 4:00 PM</p><div class="chat-bubble">${report()}<div class="message-time">4:00 PM ${icon('checks')}</div></div>${state.messages.map(m=>`<div class="chat-bubble ${m.role==='user'?'mine':''}">${escapeHtml(m.text).replace(/\n/g,'<br>')}<div class="message-time">Just now ${icon('checks')}</div></div>`).join('')}</div><div class="chat-quick"><button data-question="What needs my attention?">Anything I should know?</button><button data-question="How are sales today?">How are sales?</button></div><form class="chat-form"><label class="screen-reader" for="assistant-input">Message your assistant</label><input id="assistant-input" name="message" placeholder="Ask your assistant anything…" autocomplete="off" maxlength="500" required><button class="send-button" aria-label="Send message">${icon('send')}</button></form>`}
function home(){return `<header class="site-header">${brand()}<nav class="site-nav" aria-label="Main navigation"><a href="#overview">The product</a><button data-action="how">How it works</button></nav><div class="site-actions"><a class="login-link" href="#overview">Go to dashboard</a><a href="#teach" class="btn btn-dark">Start ${icon('right')}</a></div></header><main id="main" tabindex="-1"><section class="hero"><div class="eyebrow">${icon('leaf')} The AI business operating system for SMEs.</div><h1>Focus on what matters.<br><span>AI handles the routine.</span></h1><p class="lead">Zotoz AI automates repetitive work—from customer inquiries<br class="desktop-break"> to lead follow-ups and task updates—so you can focus<br class="desktop-break"> on important decisions, customers, and growth.</p><div class="hero-ctas"><a href="#teach" class="btn btn-dark">Start ${icon('right')}</a><button class="btn btn-light" data-action="how">${icon('play')} See How It Works</button></div><p class="micro">Teach Zotoz how you run your business.</p><div class="hero-proof"><span>${icon('check')} Less repetition. More focus.</span><span>${icon('check')} For small & medium businesses</span></div></section><section class="product-showcase" aria-label="Interactive business dashboard preview"><div class="showcase-caption"><span>Less routine work. More time for what matters.</span><span>${icon('grid')} Your everyday, simplified</span></div><div class="preview-frame embedded">${workspace(true)}</div></section><section class="features" aria-label="How Zotoz helps"><div class="feature">${icon('chat')}<h2>Every customer, cared for.</h2><p>From the first inquiry to the next order, every customer relationship keeps moving.</p></div><div class="feature">${icon('tasks')}<h2>Everyone knows what’s next.</h2><p>Clear tasks. Timely follow-ups. A team that keeps things running.</p></div><div class="feature">${icon('sun')}<h2>More time for important work.</h2><p>A short daily update and clear priorities. Put your time into decisions, relationships, and growth.</p></div></section></main><footer class="site-footer"><div>${brand()}<p>Less busywork. More meaningful work.</p></div><a class="btn-text" href="#overview">Take a look inside ${icon('right')}</a></footer>`}
function filterTabs(options){return `<div class="filter-tabs" role="group" aria-label="Filter ${route()}">${options.map(([key,label])=>`<button data-filter="${key}" class="${state.filter===key?'selected':''}" aria-pressed="${state.filter===key}">${label}</button>`).join('')}</div>`}
function emptyState(title,description){return `<div class="empty-state">${icon('check')}<h2>${title}</h2><p>${description}</p></div>`}
function listPage(page){const intro=`<div class="page-intro"><h1>${{inquiries:'Every conversation, cared for.',followups:'A little follow-up goes a long way.',tasks:'Good work. Without the guesswork.'}[page]}</h1><p>${{inquiries:`${32-unresolved()} of today’s 32 inquiries are handled. ${unresolved()?`${unresolved()} conversations need a personal touch.`:'Your customers are all caught up.'}`,followups:`${pending()} ${pending()===1?'conversation is':'conversations are'} ready for a friendly nudge.`,tasks:`${completed()} of 12 tasks complete. Your team knows what comes next.`}[page]}</p></div>`;
  if(page==='inquiries'){const rows=state.inquiries.filter(i=>state.filter==='all'||i.status===state.filter);return `${intro}<div class="list-toolbar">${filterTabs([['all','Recent'],['new',`Needs reply (${unresolved()})`],['resolved','Handled']])}<span class="record-meta">WhatsApp · Today</span></div><section class="panel" aria-label="Customer inquiries">${rows.length?rows.map(i=>`<article class="record"><span class="avatar ${i.color}">${i.initials}</span><div class="record-info"><div class="record-title">${i.name}<span class="pill ${i.status==='new'?'amber':''}">${i.status==='new'?'Needs reply':'Handled'}</span></div><p>${i.subject}</p><span class="record-meta">${i.time} · WhatsApp</span></div><button class="btn ${i.status==='new'?'btn-dark':'btn-light'} btn-small" data-inquiry="${i.id}">${i.status==='new'?'Reply':'View reply'} ${icon('right')}</button></article>`).join(''):emptyState('Every customer has a reply.','A little more space in your day.')}</section><p class="list-note">Showing 4 recent sample conversations. Another 28 routine questions have already been handled.</p>`}
  if(page==='followups'){const rows=state.followups.filter(f=>state.filter==='all'||(state.filter==='pending'?!f.sent:f.sent));return `${intro}<div class="list-toolbar">${filterTabs([['all','All'],['pending',`Pending (${pending()})`],['sent',`Sent (${5-pending()})`]])}${pending()?'<button class="btn btn-dark btn-small" data-action="followup-all">Review all follow-ups</button>':''}</div><section class="panel" aria-label="Lead follow-ups">${rows.length?rows.map(f=>`<article class="record"><span class="avatar ${f.color}">${f.initials}</span><div class="record-info"><div class="record-title">${f.name}<span class="pill ${f.sent?'':'amber'}">${f.sent?'Sent':f.due}</span></div><p>${f.subject}</p><span class="record-meta">${f.detail}</span></div><button class="btn btn-light btn-small" data-followup="${f.id}">${f.sent?'View message':'Review & send'} ${icon('right')}</button></article>`).join(''):emptyState(state.filter==='sent'?'Your next conversation starts here.':'All caught up. Nicely done.',state.filter==='sent'?'Sent follow-ups will appear here.':'Every follow-up has been taken care of.')}</section><p class="list-note">Demo messages stay in this workspace. No WhatsApp messages are sent.</p>`}
  const rows=state.tasks.filter(t=>state.filter==='all'||(state.filter==='pending'?!t.done:t.done));return `${intro}<div class="progress-label"><span>Today’s progress</span><span>${completed()} / 12 complete</span></div><div class="progress-track" role="progressbar" aria-label="Team tasks completed" aria-valuenow="${completed()}" aria-valuemin="0" aria-valuemax="12"><div class="progress-bar" style="width:${completed()/12*100}%"></div></div><div class="list-toolbar">${filterTabs([['all','All tasks'],['pending',`To do (${12-completed()})`],['done',`Completed (${completed()})`]])}<span class="record-meta">Priya, Rahul & Ananya</span></div><section class="panel large-tasks" aria-label="Team task list">${rows.length?rows.map(t=>taskRow(t,true)).join(''):emptyState('That’s everything for today.','Your team has earned a little breather.')}</section><p class="list-note">Check off a task to keep everyone up to date. Uncheck it to move it back to the team’s list.</p>`;
}
function setFocus(enabled){if(typeof enabled!=='boolean')throw new Error('enabled must be a boolean');state.focus=enabled;render();toast(enabled?'Focus mode on. Only important alerts will interrupt you.':'Focus mode off. Your regular updates are back.');return {enabled}}
function setTask(id,done){const task=state.tasks.find(t=>t.id===id);if(!task||typeof done!=='boolean')throw new Error('A valid task id and boolean done are required');task.done=done;render();return {id:task.id,title:task.title,done:task.done,completed:completed(),total:12}}
function sendFollowups(ids){if(!Array.isArray(ids)||ids.length===0||ids.some(id=>!Number.isInteger(id)||!state.followups.some(f=>f.id===id)))throw new Error('Provide valid follow-up IDs');const records=state.followups.filter(f=>ids.includes(f.id)&&!f.sent);records.forEach(f=>f.sent=true);render();return {sent:records.map(f=>f.id),remaining:pending(),demo:true}}
function followupMessage(f){return `Hi ${f.name.split(' ')[0]}! Just checking in about your ${f.subject.toLowerCase()}. We’d love to help. Let us know if you have any questions or would like to go ahead. — The Apex Supplies team`}
function inquiryDialog(id){const i=state.inquiries.find(i=>i.id===id);if(!i)return;showDialog(`<p class="dialog-eyebrow">WhatsApp · ${i.name}</p><h2 class="dialog-title" id="dialog-title">${i.subject}</h2><div class="message-original">${escapeHtml(i.message)}</div>${i.status==='new'?`<form id="reply-form" data-id="${i.id}"><label class="field-label" for="reply-text">Your reply</label><textarea class="field" id="reply-text" name="reply" required maxlength="2000" placeholder="Write a thoughtful reply…"></textarea><div class="dialog-actions"><button type="button" class="btn btn-light btn-small" data-draft="${i.id}">${icon('spark')} Draft with AI</button><button class="btn btn-dark btn-small">Send reply ${icon('send')}</button></div></form><p class="dialog-subtle">Demo conversation. Your reply is saved for this session; no external message is sent.</p>`:`<span class="field-label">Reply sent</span><div class="message-original">${escapeHtml(i.reply||i.draft)}</div><p class="dialog-subtle">${i.reply?'Replied by you':'Handled by Zotoz'} · Demo conversation</p>`}`)}
function followupDialog(id){const f=state.followups.find(f=>f.id===id);if(!f)return;showDialog(`<p class="dialog-eyebrow">Follow-up · ${f.name}</p><h2 class="dialog-title" id="dialog-title">${f.subject}</h2><div class="message-original">${escapeHtml(followupMessage(f))}</div>${f.sent?'<span class="pill">Sent in demo</span>':`<button class="btn btn-dark dialog-full-button" data-send-followup="${f.id}">Send follow-up ${icon('send')}</button>`}<p class="dialog-subtle">This is a demo. No real messages will be sent.</p>`)}
function alertsDialog(){const restocked=state.tasks.find(t=>t.id===2).done;showDialog(`<p class="dialog-eyebrow">Important updates</p><h2 class="dialog-title" id="dialog-title">${restocked?'All looking good.':'You’re in the loop.'}</h2><div class="simple-alert"><h3>${restocked?'Shipping cartons have been replenished':'Shipping cartons are running low'}</h3><p>${restocked?'Rahul’s replenishment task is complete. Dispatches can continue as planned.':'120 cartons left — about two days of dispatches. Rahul is arranging 500 more by 5 PM. Your team is already on it.'}</p>${state.alertDismissed?'<span class="pill">Reviewed</span>':'<button class="btn btn-light btn-small" data-action="acknowledge">Mark as reviewed</button>'}</div><a class="btn btn-dark dialog-full-button" href="#tasks" data-action="close">View team tasks ${icon('right')}</a>`)}
function assistantAnswer(question){const q=question.toLowerCase();if(/sales|revenue|order|money|income/.test(q))return 'Today’s sales are ₹2,48,500 across 12 orders, up 18.6% on yesterday. The average order is ₹20,708. This week, you’ve brought in ₹14,26,800 — up 12.4% on last week.';if(/follow|lead/.test(q))return pending()?`${pending()} follow-ups are ready. ${state.followups.filter(f=>!f.sent).map(f=>f.name).join(', ')} are waiting for a nudge. Open Follow-ups to review and send their messages.`:'Every follow-up is sent. Your customers have heard from you, and there’s nothing left to chase today.';if(/team|task|staff|employee/.test(q))return `${completed()} of 12 tasks are done. ${state.tasks.filter(t=>!t.done).map(t=>`${t.owner}: ${t.title.toLowerCase()} by ${t.due}`).join('. ')||'Your team has finished everything for today.'}`;if(/inquir|customer|repl|message/.test(q))return `${32-unresolved()} of 32 inquiries are handled. ${unresolved()?state.inquiries.filter(i=>i.status==='new').map(i=>`${i.name} asked about ${i.subject.toLowerCase()}`).join('. ')+'. Open Inquiries to review a suggested reply.':'Every customer has a reply. You’re all caught up.'}`;if(/focus|routine|repetitive/.test(q))return `Focus mode is ${state.focus?'on. Routine updates are paused; only important alerts will interrupt you. Keep your attention on your priorities.':'off. Switch it on at the top of your dashboard to pause routine updates while your team handles the everyday.'}`;if(/attention|know|alert|stock|carton|dispatch|important/.test(q))return state.tasks.find(t=>t.id===2).done?`Shipping cartons have been replenished. ${unresolved()} inquiries and ${pending()} follow-ups remain for the team, and ${completed()} of 12 tasks are done. Nothing urgent needs your attention.`:`Shipping cartons are running low — 120 left, about two days of dispatches. Rahul is arranging 500 more by 5 PM. There are also ${unresolved()} inquiries waiting for a personal reply. Everything else is on track.`;if(/report|summary|today|doing|business/.test(q))return `Here’s your daily report: ₹2,48,500 in sales, ${32-unresolved()} of 32 inquiries handled, ${pending()} pending follow-ups, and ${completed()} of 12 team tasks completed. ${state.tasks.find(t=>t.id===2).done?'Stock is taken care of.':'Rahul is handling the shipping carton replenishment.'}`;if(/thank/.test(q))return 'You’re welcome, Ajit. Keep focusing on what matters. Your next update is here when you need it.';return 'I can walk you through this demo business’s sales, customer inquiries, follow-ups, team tasks, or focus mode. Try “What needs my attention?” or “Give me today’s report.”'}
function sendQuestion(question){const text=question.trim();if(!text)return;state.messages.push({role:'user',text},{role:'assistant',text:assistantAnswer(text)});render();const chat=document.querySelector('.chat-content');if(chat)chat.scrollTop=chat.scrollHeight;document.querySelector('#assistant-input')?.focus({preventScroll:true})}
function render(){const valid=['home','overview','inquiries','followups','tasks'];if(OwnerApp.handles(route())){document.querySelector('#app').innerHTML=OwnerApp.render(route());document.title=OwnerApp.title(route())+' · Zotoz AI';OwnerApp.afterRender();return}if(!valid.includes(route())){location.hash='home';return}document.querySelector('#app').innerHTML=route()==='home'?home():workspace();document.title=route()==='home'?'Zotoz AI — Focus on what matters. AI handles the routine.':`${{overview:'Overview',inquiries:'Inquiries',followups:'Follow-ups',tasks:'Team tasks'}[route()]} · Zotoz AI`;}
function showDialog(html){const d=document.querySelector('#dialog');d.innerHTML=`<button class="icon-btn dialog-close" data-action="close" aria-label="Close dialog">${icon('close')}</button>${html}`;d.showModal()}
function how(){showDialog(`<p class="dialog-eyebrow">A business that runs with you</p><h2 class="dialog-title" id="dialog-title">Three steps.<br>More time for what matters.</h2><div class="how-step"><span class="step-num">01</span><div><h3>Bring your business together.</h3><p>See your customer conversations, daily sales, and team in one simple place.</p></div></div><div class="how-step"><span class="step-num">02</span><div><h3>Automate repetitive work.</h3><p>Your assistant handles routine questions, keeps follow-ups moving, and helps your team stay on track.</p></div></div><div class="how-step"><span class="step-num">03</span><div><h3>Focus on your priorities.</h3><p>Get a short daily report. Turn on focus mode for important updates only.</p></div></div><a class="btn btn-dark dialog-full-button" href="#overview" data-action="close">Try the live demo ${icon('right')}</a><p class="dialog-subtle">Explore the Apex Supplies SME workspace. No sign-up needed.</p>`)}
document.addEventListener('click',e=>{
  if(e.target.closest('.skip-link')){e.preventDefault();document.querySelector('#main')?.focus();return}
  const question=e.target.closest('[data-question]');if(question){sendQuestion(question.dataset.question);return}
  const filter=e.target.closest('[data-filter]');if(filter){state.filter=filter.dataset.filter;render();document.querySelector(`[data-filter="${state.filter}"]`)?.focus({preventScroll:true});return}
  const inquiry=e.target.closest('[data-inquiry]');if(inquiry){inquiryDialog(Number(inquiry.dataset.inquiry));return}
  const draft=e.target.closest('[data-draft]');if(draft){document.querySelector('#reply-text').value=state.inquiries.find(i=>i.id===Number(draft.dataset.draft)).draft;document.querySelector('#reply-text').focus();return}
  const followup=e.target.closest('[data-followup]');if(followup){followupDialog(Number(followup.dataset.followup));return}
  const send=e.target.closest('[data-send-followup]');if(send){sendFollowups([Number(send.dataset.sendFollowup)]);document.querySelector('#dialog').close();toast('Follow-up sent in the demo. One less thing to chase.');return}
  const button=e.target.closest('[data-action]');if(!button)return;
  const action=button.dataset.action;
  if(action==='how')how();
  if(action==='close')document.querySelector('#dialog').close();
  if(action==='focus'){setFocus(!state.focus);document.querySelector('[data-action="focus"]')?.focus({preventScroll:true})}
  if(action==='menu'){state.menu=!state.menu;render();document.querySelector(state.menu?'.sidebar .brand':'.mobile-menu')?.focus({preventScroll:true})}
  if(action==='sales')showDialog(`<p class="dialog-eyebrow">Saturday, 26 September</p><h2 class="dialog-title" id="dialog-title">A very good day.</h2><p class="dialog-description">12 orders. ₹2,48,500 in sales. That’s 18.6% ahead of yesterday.</p><div class="dialog-sales">${salesPanel()}</div><p class="dialog-subtle">Sample sales from your demo workspace.</p>`);
  if(action==='alerts')alertsDialog();
  if(action==='acknowledge'){state.alertDismissed=true;document.querySelector('#dialog').close();render();toast('Update reviewed. Your team has the next step.')}
  if(action==='followup-all')showDialog(`<p class="dialog-eyebrow">A thoughtful nudge</p><h2 class="dialog-title" id="dialog-title">${pending()} messages, ready to go.</h2><p class="dialog-description">Each customer will get a short follow-up about their conversation.</p><div class="bulk-messages">${state.followups.filter(f=>!f.sent).map(f=>`<div class="message-original"><strong>${f.name}</strong><p>${escapeHtml(followupMessage(f))}</p></div>`).join('')}</div><button class="btn btn-dark dialog-full-button" data-action="send-all">Send ${pending()} follow-ups ${icon('send')}</button><p class="dialog-subtle">Demo only. These messages stay in this workspace.</p>`);
  if(action==='send-all'){const result=sendFollowups(state.followups.filter(f=>!f.sent).map(f=>f.id));document.querySelector('#dialog').close();toast(`${result.sent.length} follow-ups sent in the demo. All caught up.`)}
});
document.addEventListener('change',e=>{
  if(e.target.matches('[data-task]')){const id=Number(e.target.dataset.task);const done=e.target.checked;setTask(id,done);document.querySelector(`[data-task="${id}"]`)?.focus({preventScroll:true});toast(done?'Task completed. Your team is up to date.':'Task moved back to the team’s list.')}
  if(e.target.matches('[data-period]')){const inDialog=!!e.target.closest('dialog');state.period=e.target.value;render();if(inDialog)document.querySelector('.dialog-sales').innerHTML=salesPanel();document.querySelector(inDialog?'dialog [data-period]':'[data-period]')?.focus({preventScroll:true})}
});
document.addEventListener('submit',e=>{
  if(e.target.matches('.chat-form')){e.preventDefault();sendQuestion(new FormData(e.target).get('message'))}
  if(e.target.id==='reply-form'){e.preventDefault();const reply=new FormData(e.target).get('reply').trim();if(!reply){document.querySelector('#reply-text').setCustomValidity('Please write a reply.');document.querySelector('#reply-text').reportValidity();return}const inquiry=state.inquiries.find(i=>i.id===Number(e.target.dataset.id));inquiry.reply=reply;inquiry.status='resolved';document.querySelector('#dialog').close();render();toast(`Reply saved for ${inquiry.name}. Conversation handled.`)}
});
document.addEventListener('input',e=>{if(e.target.id==='reply-text')e.target.setCustomValidity('')});
document.querySelector('#dialog').addEventListener('click',e=>{if(e.target===e.currentTarget){const rect=e.currentTarget.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)e.currentTarget.close()}});
window.addEventListener('hashchange',()=>{state.menu=false;state.filter='all';document.querySelector('#dialog').close();render();window.scrollTo(0,0);document.querySelector('#main')?.focus({preventScroll:true})});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.menu){state.menu=false;render();document.querySelector('.mobile-menu')?.focus()}});
render();
if(document.modelContext?.registerTool){
  const lifecycle=new AbortController();
  const register=tool=>{try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{})}catch{}};
  register({name:'read_business_summary',title:'Read the daily business report',description:'Read sample sales, inquiry counts, pending follow-ups, task progress and focus mode from the current demo workspace.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Object.keys(input).length)throw new Error('Use an empty object');return {demo:true,sales:248500,currency:'INR',inquiries:32,needsReply:unresolved(),pendingFollowups:pending(),completedTasks:completed(),totalTasks:12,focusMode:state.focus,tasks:state.tasks.map(({id,title,done})=>({id,title,done}))}}});
  register({name:'set_focus_mode',title:'Set focus mode',description:'Change the demo workspace focus switch and its visible daily report. This demo sends no real notifications.',inputSchema:{type:'object',properties:{enabled:{type:'boolean'}},required:['enabled'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||Object.keys(input).some(k=>k!=='enabled'))throw new Error('Only enabled is accepted');return setFocus(input.enabled)}});
  register({name:'set_team_task_status',title:'Complete or reopen a team task',description:'Set one demo team task complete or incomplete and update the dashboard counts.',inputSchema:{type:'object',properties:{id:{type:'integer',minimum:1,maximum:12},done:{type:'boolean'}},required:['id','done'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||Object.keys(input).some(k=>!['id','done'].includes(k)))throw new Error('Use id and done');return setTask(input.id,input.done)}});
  window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}
