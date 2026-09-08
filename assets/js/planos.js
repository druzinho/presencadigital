const FEATURES = [
  ['ad3', '3 criativos publicitários'], ['instagram', 'Instagram otimizado'],
  ['visual', 'Direção visual'], ['content6', '6 criativos de conteúdo'],
  ['captions6', '6 legendas'], ['covers', 'Capas de destaques'],
  ['landing', 'Landing page'], ['whatsapp', 'WhatsApp integrado'],
  ['ad_creatives', 'Criativos específicos para Ads'], ['ad_copy', 'Copy para Ads'],
  ['meta', 'Configuração Meta Ads']
];
const money = value => new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL', maximumFractionDigits:0}).format(value);
function node(tag, cls, text) {
  const item = document.createElement(tag);
  if (cls) item.className = cls;
  if (text) item.textContent = text;
  return item;
}
function checkout(service, label, cls='button') {
  const link=node('a',cls,label || service.cta);
  link.href=service.checkout; link.target='_blank'; link.rel='noopener noreferrer';
  link.dataset.service=service.id;
  link.setAttribute('aria-label',`${label || service.cta} — ${money(service.price)} — checkout Kiwify em nova aba`);
  return link;
}
function list(items, cls='check-list') {
  const ul=node('ul',cls);
  items.forEach(text=>ul.append(node('li','',text)));
  return ul;
}
function symbol(included) {
  const span=node('span',included?'yes':'no',included?'✓':'—');
  span.setAttribute('aria-label',included?'Incluído':'Não incluído');
  return span;
}
SERVICES.forEach((service,index)=>{
  const card=node('article',`plan${service.badge?' complete':''}`); card.id=service.id;
  const top=node('div','plan-top');
  top.append(node('span',service.badge?'badge':'plan-number',service.badge || `0${index+1} / PLANO`));
  top.append(node('h2','',service.name), node('p','subtitle',service.subtitle));
  top.append(node('p','price',money(service.price)),node('p','payment','Pagamento único.'));
  top.append(checkout(service),node('p','checkout-note','Checkout oficial Kiwify ↗'));
  card.append(top,node('p','audience',service.audience));
  const includes=node('div','deliveries');
  includes.append(node('h3','small-title','O QUE VOCÊ RECEBE'),list(service.includes)); card.append(includes);
  const outcome=node('div','outcome');
  outcome.append(node('h3','','Você termina com:'),node('p','',service.outcome)); card.append(outcome);
  if(service.deadline){const deadline=node('p','deadline');deadline.append(node('strong','','Prazo: '),document.createTextNode(service.deadline));card.append(deadline);}
  const exclusions=node('details','exclusions');
  exclusions.append(node('summary','',`Não inclui · ${service.excludes.length} itens`),list(service.excludes,'exclude-list'));card.append(exclusions);
  if(service.campaign){const details=node('details','campaign');details.id='escopo-campanha';details.append(node('summary','','Ver escopo da configuração Meta Ads'),node('p','campaign-note','Configuração inicial. Não inclui gerenciamento contínuo.'),list(service.campaign));card.append(details);}
  const bottom=node('div','plan-bottom');bottom.append(checkout(service,'ESCOLHER ESTE PLANO','button button-secondary'));card.append(bottom);
  document.getElementById('plans').append(card);
  const situation=node('article','situation');situation.append(node('span','plan-number',`0${index+1}`),node('h3','',`“${service.situation}”`),node('p','recommendation',`${service.name} · ${money(service.price)}`),checkout(service,'ESCOLHER ESTE PLANO','button button-secondary'));document.getElementById('situations').append(situation);
  document.getElementById('final-buttons').append(checkout(service,`${service.short.toLocaleUpperCase('pt-BR')} — ${money(service.price)}`));
});
const header=node('tr');header.append(node('th','','Recurso'));
SERVICES.forEach(s=>{const th=node('th','',`${s.short} — ${money(s.price)}`);th.scope='col';header.append(th);});
header.firstElementChild.scope='col';document.getElementById('comparison-head').append(header);
FEATURES.forEach(([key,label])=>{const row=node('tr');const th=node('th','',label);th.scope='row';row.append(th);SERVICES.forEach(s=>{const td=node('td');td.append(symbol(s.features.includes(key)));row.append(td)});document.getElementById('comparison-body').append(row)});
SERVICES.forEach(s=>{const details=node('details','mobile-comparison');details.append(node('summary','',`${s.short} — ${money(s.price)}`));const ul=node('ul');FEATURES.forEach(([key,label])=>{const li=node('li');li.append(node('span','',label),symbol(s.features.includes(key)));ul.append(li)});details.append(ul);document.getElementById('comparison-mobile').append(details)});
// Um único listener delegado para todos os checkouts: um evento por clique.
// Não instala Pixel, não repete PageView e nunca dispara Purchase.
document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-service]');
  if(!link || !SERVICES.some(service=>service.id===link.dataset.service)) return;
  if(typeof window.fbq==='function') window.fbq('trackCustom','select_service',{service_name:link.dataset.service});
});
document.getElementById('year').textContent=new Date().getFullYear();
