const KEY='jimmy-ai-lab-dashboard-v1';
const stages=['Idea','Research','Approved','Prototype','Validation','Paid Pilot','Commercial','Scale','Retired'];
let state=load(),route='dashboard',active=null,tab='Problem';
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{products:[]}}catch{return{products:[]}}}
function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function score(p){let a=[p.frequency,p.urgency,p.budget,p.aiAdvantage,p.dataAccess,p.distribution,p.recurring,p.defensibility,6-p.difficulty,6-p.securityRisk].map(v=>+v||3);return Math.round(a.reduce((x,y)=>x+y,0)/50*100)}
function recommendation(s){return s>=80?'GO':s>=65?'TEST':s>=50?'HOLD':'NO-GO'}
