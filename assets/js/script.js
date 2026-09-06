// Para adicionar novos produtos, duplique um objeto neste array.
// A grade e os cards se adaptam automaticamente à quantidade de serviços.
const services = [
  {
    id: "presenca-digital-start",
    name: "Presença Digital Start",
    tag: "Para pequenos negócios",
    price: "R$ 297",
    paymentNote: "Pagamento único.",
    features: [
      "Perfil otimizado",
      "Direção visual",
      "6 criativos",
      "6 legendas",
      "5 capas de destaques",
      "1 rodada de alterações"
    ],
    checkoutUrl: "https://pay.kiwify.com.br/vyPE4Re",
    prazoNote: "Prazo de até 7 dias úteis após o recebimento completo do briefing e dos materiais.",
    featured: true
  }
];

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function createServiceCard(service) {
  const card = element("article", `produto-card${service.featured ? " is-featured" : ""}`);
  card.id = service.id;

  const layout = element("div", "produto-card-layout");
  const copy = element("div", "produto-card-copy");
  const action = element("div", "produto-card-action");

  const tag = element("span", "produto-tag", service.tag);
  const title = element("h3", "", service.name);
  const priceRow = element("div", "produto-price-row");
  priceRow.append(element("span", "produto-price", service.price));
  const payment = element("p", "produto-payment-note", service.paymentNote);
  const deadline = element("p", "produto-prazo-note", service.prazoNote);
  copy.append(tag, title, priceRow, payment, deadline);

  const features = element("ul", "produto-features");
  service.features.forEach((feature) => features.append(element("li", "", feature)));

  const checkout = element("a", "btn btn-primary btn-lg produto-checkout", "Começar meu projeto");
  checkout.href = service.checkoutUrl;
  const checkoutNote = element("p", "produto-checkout-note", "Pagamento seguro processado pela Kiwify.");
  action.append(features, checkout, checkoutNote);

  layout.append(copy, action);
  card.append(layout);
  return card;
}

function renderServices() {
  const container = document.getElementById("produto-grid");
  if (!container) return;
  container.replaceChildren(...services.map(createServiceCard));
}

function setupAccordions() {
  document.querySelectorAll(".accordion-item").forEach((item, index) => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    if (!trigger || !panel) return;

    const triggerId = `accordion-trigger-${index + 1}`;
    const panelId = `accordion-panel-${index + 1}`;
    trigger.id = triggerId;
    trigger.setAttribute("aria-controls", panelId);
    panel.id = panelId;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", triggerId);
    panel.hidden = true;

    trigger.addEventListener("click", () => {
      const willOpen = !item.classList.contains("is-open");
      item.classList.toggle("is-open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
      panel.hidden = !willOpen;
    });
  });
}

function setupCaseGalleries() {
  document.querySelectorAll(".case-media").forEach((media) => {
    const main = media.querySelector(".case-media-main");
    const buttons = media.querySelectorAll(".case-thumb");
    if (!main || !buttons.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const thumbnail = button.querySelector("img");
        if (!thumbnail) return;

        const previousMain = { src: main.src, alt: main.alt };
        const nextAlt = button.getAttribute("aria-label")?.replace(/^Mostrar\s+/i, "") || "Imagem do projeto";
        main.src = thumbnail.src;
        main.alt = nextAlt.charAt(0).toUpperCase() + nextAlt.slice(1);
        thumbnail.src = previousMain.src;
        button.setAttribute("aria-label", `Mostrar ${previousMain.alt.charAt(0).toLowerCase()}${previousMain.alt.slice(1)}`);
      });
    });
  });
}

function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  setupAccordions();
  setupCaseGalleries();
  setupMobileMenu();
});
