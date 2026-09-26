(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav__toggle");
  var navLinks = document.querySelector(".nav__links");

  /* Header background on scroll */
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  document.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* Mobile nav */
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ------------------------------------------------------------------
     Hero cinematográfico controlado pelo scroll
     A seção .hero tem altura de 400vh; enquanto ela passa pela tela,
     calculamos o progresso (0 a 1) e usamos para:
       - trocar a "cena" ativa (texto) entre os 4 momentos
       - avançar um leve Ken Burns (zoom/pan) na foto
     Se um vídeo real entrar no lugar da foto, basta trocar o bloco
     "aplica progresso" para setar video.currentTime = progress * video.duration.
     ------------------------------------------------------------------ */
  var hero = document.querySelector(".hero");
  var heroImg = document.querySelector(".hero__media img");
  var scenes = document.querySelectorAll(".hero__scene");
  var dots = document.querySelectorAll(".hero__progress span");
  var isMobile = window.matchMedia("(max-width: 860px)").matches;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function applyHeroProgress() {
    if (!hero || isMobile || reduceMotion) return;

    var rect = hero.getBoundingClientRect();
    var total = hero.offsetHeight - window.innerHeight;
    if (total <= 0) return;

    var scrolled = -rect.top;
    var progress = Math.min(Math.max(scrolled / total, 0), 1);

    // Ken Burns sutil: escala de 1.08 a 1.16
    if (heroImg) {
      var scale = 1.08 + progress * 0.08;
      heroImg.style.transform = "scale(" + scale.toFixed(4) + ")";
    }

    // 4 cenas em faixas iguais de progresso
    var sceneIndex = Math.min(Math.floor(progress * scenes.length), scenes.length - 1);
    scenes.forEach(function (scene, i) {
      scene.classList.toggle("is-active", i === sceneIndex);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === sceneIndex);
    });
  }

  var ticking = false;
  function onScrollHero() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      applyHeroProgress();
      ticking = false;
    });
  }

  if (hero) {
    if (isMobile || reduceMotion) {
      // No mobile / com motion reduzido, mostra direto a cena final estática
      scenes.forEach(function (scene) { scene.classList.remove("is-active"); });
      var finalScene = document.querySelector(".hero__scene--final");
      if (finalScene) finalScene.classList.add("is-active");
    } else {
      document.addEventListener("scroll", onScrollHero, { passive: true });
      applyHeroProgress();
    }
  }

  /* ------------------------------------------------------------------
     Reveal suave no scroll para o restante do site
     ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ------------------------------------------------------------------
     FAQ accordion
     ------------------------------------------------------------------ */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq-item__q");
    var answer = item.querySelector(".faq-item__a");
    if (!btn || !answer) return;
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        var a = other.querySelector(".faq-item__a");
        if (a) a.style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("is-open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* ------------------------------------------------------------------
     Formulário de orçamento -> abre o e-mail já preenchido
     (site é estático, sem backend; troque por um endpoint próprio
     quando quiser receber os envios direto por servidor)
     ------------------------------------------------------------------ */
  var quoteForm = document.querySelector("#quote-form");
  if (quoteForm) {
    var params = new URLSearchParams(window.location.search);
    var servicoParam = params.get("servico");
    var servicoField = quoteForm.querySelector('[name="servico"]');
    if (servicoParam && servicoField) {
      servicoField.value = servicoParam;
    }
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(quoteForm);
      var nome = data.get("nome") || "";
      var servico = data.get("servico") || "";
      var mensagem = data.get("mensagem") || "";
      var subject = encodeURIComponent("Orçamento — " + nome);
      var body = encodeURIComponent(
        "Nome: " + nome + "\nServiço de interesse: " + servico + "\n\n" + mensagem
      );
      window.location.href = "mailto:prod.eodrew@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
})();
