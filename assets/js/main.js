// Conducta. JS mínimo: menú, scroll del menú, acordeón y video del hero.

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Menú: fondo al hacer scroll
  var header = document.getElementById('header');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menú mobile
  var toggle = document.querySelector('.menu-toggle');
  var panel = document.getElementById('menu-mobile');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    document.body.classList.toggle('is-menu-open', open);
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  panel.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !panel.hidden) {
      setMenu(false);
      toggle.focus();
    }
  });

  window.matchMedia('(min-width: 960px)').addEventListener('change', function (mq) {
    if (mq.matches) setMenu(false);
  });

  // Preguntas frecuentes: varias pueden quedar abiertas a la vez
  document.querySelectorAll('.faq__q').forEach(function (button) {
    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      button.closest('.faq__item').classList.toggle('is-open', open);
    });
  });

  // Video del hero: solo en desktop y sin "reducir movimiento"
  var video = document.querySelector('.hero__video');
  var desktop = window.matchMedia('(min-width: 1024px)');

  if (video && desktop.matches && !reducedMotion.matches) {
    video.src = video.dataset.src;
    video.addEventListener('playing', function () {
      video.classList.add('is-playing');
    }, { once: true });
    video.play().catch(function () {});
  }
})();
