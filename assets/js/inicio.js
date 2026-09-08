// Dados aprovados compartilhados com a página de planos.
const homeServices = SERVICES.map((s,i) => ({...s, number: String(i+1).padStart(2,'0'), description:s.audience, label:s.cta, note:s.deadline || s.outcome}));
const money = value => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
const cards = document.getElementById('service-cards');
const comparison = document.getElementById('comparison');
homeServices.forEach(service => {
  const card = el('article', 'service');
  card.id = service.id;
  card.append(el('span', 'service-number', `${service.number} / SERVIÇO`), el('h3', '', service.name), el('p', 'service-description', service.description));
  card.append(el('p', 'price', money(service.price)));
  if (service.includes.length) {
    const list = el('ul', 'includes');
    service.includes.forEach(item => list.append(el('li', '', item)));
    card.append(list);
  }
  card.append(el('p', 'service-note', service.note));
  if (service.excludes.length) {
    const details = el('details', 'excludes');
    details.append(el('summary', '', 'O que não está incluído'));
    const list = el('ul');
    service.excludes.forEach(item => list.append(el('li', '', item)));
    details.append(list); card.append(details);
  }
  const link = el('a', 'button', 'Ver detalhes do plano ↗');
  link.href = 'planos/#' + service.id;
  
  link.setAttribute('aria-label', `Ver ${service.name} — ${money(service.price)}`);
  card.append(link, el('span', 'checkout-caption', 'Confira o escopo e contrate na página de planos'));
  cards.append(card);
  const row = el('tr');
  const name = el('th', '', service.name); name.scope = 'row';
  row.append(name, el('td', '', money(service.price)), el('td', '', service.note));
  comparison.append(row);
});
document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

// Galerias com as imagens originais do site publicado.
document.querySelectorAll('.case-gallery').forEach(gallery => {
  const main = gallery.querySelector('.case-main');
  gallery.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    main.src = button.dataset.caseImage;
    main.alt = button.dataset.caseAlt;
    gallery.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  }));
});
