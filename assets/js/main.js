// Conducta. JS mínimo: menú, scroll del menú, acordeón, aparición al hacer
// scroll, pestañas del método y video del hero.

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

  // Aparición al hacer scroll: cada bloque entra una sola vez
  var revealables = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window) || reducedMotion.matches) {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    revealables.forEach(function (el) { revealer.observe(el); });
  }

  // Método: pestañas accesibles (flechas, Inicio, Fin) y botones anterior/siguiente
  var method = document.querySelector('[data-method]');

  if (method) {
    var tablist = method.querySelector('[role="tablist"]');
    var tabs = [].slice.call(method.querySelectorAll('[role="tab"]'));
    var steps = [].slice.call(method.querySelectorAll('.step'));
    var nav = method.querySelector('.method__nav');
    var prev = method.querySelector('[data-step="prev"]');
    var next = method.querySelector('[data-step="next"]');
    var current = 0;

    function showStep(index, moveFocus) {
      if (index < 0 || index >= tabs.length) return;
      var dir = index > current ? 1 : -1;
      current = index;

      tabs.forEach(function (tab, i) {
        var active = i === index;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        steps[i].hidden = !active;
        steps[i].classList.remove('is-entering');
      });

      var step = steps[index];
      step.style.setProperty('--dir', dir);
      void step.offsetWidth; // reinicia la animación
      step.classList.add('is-entering');

      method.style.setProperty('--progress', ((index + 1) / tabs.length * 100) + '%');
      prev.disabled = index === 0;
      next.disabled = index === tabs.length - 1;
      if (moveFocus) tabs[index].focus();
    }

    steps.forEach(function (step, i) {
      step.setAttribute('role', 'tabpanel');
      step.setAttribute('aria-labelledby', tabs[i].id);
      step.tabIndex = 0;
    });
    tablist.hidden = false;
    nav.hidden = false;
    method.classList.add('is-interactive');
    showStep(0, false);
    steps[0].classList.remove('is-entering');

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { showStep(i, false); });
    });

    tablist.addEventListener('keydown', function (event) {
      var keys = { ArrowRight: current + 1, ArrowLeft: current - 1, Home: 0, End: tabs.length - 1 };
      if (!(event.key in keys)) return;
      event.preventDefault();
      showStep(keys[event.key], true);
    });

    prev.addEventListener('click', function () { showStep(current - 1, false); });
    next.addEventListener('click', function () { showStep(current + 1, false); });
  }

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
