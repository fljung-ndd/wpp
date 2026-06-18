(function () {
  'use strict';

  /* ─── DOM refs ──────────────────────────── */
  const html   = document.documentElement;
  const body   = document.body;
  const header = document.querySelector('[data-wk2-header]');
  const prog   = document.querySelector('.wk2-progress span');

  /* ─── Mood System ───────────────────────── */
  function getMoodFromTime() {
    const h = new Date().getHours();
    if (h >= 6  && h < 10) return 'morgen';
    if (h >= 10 && h < 17) return 'tag';
    if (h >= 17 && h < 21) return 'abend';
    return 'nacht';
  }

  function setMood(mood) {
    html.dataset.mood = (mood === 'auto') ? getMoodFromTime() : mood;
    document.querySelectorAll('.wk2-mood-panel button').forEach(b => {
      b.classList.toggle('is-active', b.dataset.mood === mood);
    });
    localStorage.setItem('wk2-mood', mood);
  }

  function initMood() {
    setMood(localStorage.getItem('wk2-mood') || 'auto');
    const toggle = document.querySelector('.wk2-mood-toggle');
    const panel  = document.querySelector('.wk2-mood-panel');
    if (!toggle || !panel) return;

    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('is-open', !open);
    });
    panel.querySelectorAll('button[data-mood]').forEach(btn => {
      btn.addEventListener('click', () => {
        setMood(btn.dataset.mood);
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', () => {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
    setInterval(() => {
      if (localStorage.getItem('wk2-mood') === 'auto') setMood('auto');
    }, 600000);
  }

  /* ─── Header hide/show on scroll ───────── */
  let lastY = 0;
  function updateHeader() {
    if (!header) return;
    const y = window.scrollY;
    header.classList.toggle('is-hidden', y > lastY && y > 120);
    lastY = y;
  }

  /* ─── Progress bar ──────────────────────── */
  function updateProgress() {
    if (!prog) return;
    const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
    prog.style.height = (window.scrollY / max * 100) + '%';
  }

  /* ─── Parallax ──────────────────────────── */
  function updateParallax() {
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const rect  = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const speed = parseFloat(el.dataset.parallax) || 0.2;
      el.style.setProperty('--parallax-y', (-rect.top * speed) + 'px');
    });
  }

  /* ─── Intersection reveals ──────────────── */
  function initReveals() {
    const targets = document.querySelectorAll('[data-wk2-section],[data-wk2-reveal]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    targets.forEach(el => obs.observe(el));
  }

  /* ─── Horizontal Tiere Scroller ─────────── */
  const tiereWrapper = document.getElementById('tiere');
  const tiereSticky  = document.querySelector('[data-wk2-tiere]');
  const tiereIntro   = document.querySelector('.wk2-tiere-intro');
  const tiereTrack   = document.querySelector('.wk2-animal-track');
  const tiereDots    = document.querySelectorAll('.wk2-tiere-dots span');
  const animals      = document.querySelectorAll('.wk2-animal');

  let tiereScrollDist  = 0;  // vertical scroll distance = horizontal journey
  let tiereMaxTranslate = 0; // actual px to translate the track

  function setupTiere() {
    if (!tiereWrapper || !tiereTrack || window.innerWidth <= 900) {
      if (tiereWrapper) tiereWrapper.style.height = '';
      return;
    }
    const introW   = tiereIntro ? tiereIntro.offsetWidth : 0;
    tiereMaxTranslate = Math.max(0, tiereTrack.scrollWidth - (window.innerWidth - introW));
    tiereScrollDist   = tiereMaxTranslate;
    tiereWrapper.style.height = (window.innerHeight + tiereScrollDist) + 'px';
  }

  function updateTiere() {
    if (!tiereWrapper || !tiereSticky || !tiereTrack || window.innerWidth <= 900) return;

    const rect = tiereWrapper.getBoundingClientRect();
    const wh   = window.innerHeight;

    if (rect.top > 0) {
      // Section hasn't entered viewport yet
      tiereSticky.style.cssText = 'position:absolute;top:0;bottom:auto;left:0;right:0;height:100svh;width:auto';
      tiereTrack.style.transform = 'translateX(0)';
      setDot(0);
      return;
    }

    if (rect.bottom <= wh) {
      // Section is fully scrolled past
      tiereSticky.style.cssText = 'position:absolute;top:auto;bottom:0;left:0;right:0;height:100svh;width:auto';
      tiereTrack.style.transform = `translateX(${-tiereMaxTranslate}px)`;
      setDot(animals.length - 1);
      return;
    }

    // In the active zone: fix to viewport for pure horizontal feel
    tiereSticky.style.cssText =
      `position:fixed;top:0;left:0;width:100vw;height:100svh;bottom:auto;right:auto`;

    const progress = Math.max(0, Math.min(1, -rect.top / (tiereScrollDist || 1)));
    tiereTrack.style.transform = `translateX(${-progress * tiereMaxTranslate}px)`;
    setDot(Math.min(Math.floor(progress * animals.length), animals.length - 1));
  }

  function setDot(idx) {
    tiereDots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
  }

  /* ─── FAQ Accordion ─────────────────────── */
  function initFAQ() {
    document.querySelectorAll('.wk2-faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        // Close all
        document.querySelectorAll('.wk2-faq-q').forEach(b => {
          b.setAttribute('aria-expanded', 'false');
          const a = b.nextElementSibling;
          if (a) a.classList.remove('is-open');
        });
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          const ans = btn.nextElementSibling;
          if (ans) ans.classList.add('is-open');
        }
      });
    });
  }

  /* ─── Mobile Burger ─────────────────────── */
  function initBurger() {
    const burger = document.querySelector('.wk2-burger');
    const mNav   = document.querySelector('.wk2-mobile-nav');
    if (!burger || !mNav) return;

    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.classList.toggle('is-open', !open);
      mNav.classList.toggle('is-open', !open);
      body.style.overflow = open ? '' : 'hidden';
    });
    mNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.setAttribute('aria-expanded', 'false');
        burger.classList.remove('is-open');
        mNav.classList.remove('is-open');
        body.style.overflow = '';
      });
    });
  }

  /* ─── Scroll handler ────────────────────── */
  let rafPending = false;
  function onScroll() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      updateHeader();
      updateProgress();
      updateTiere();
      updateParallax();
      rafPending = false;
    });
  }

  /* ─── Init ──────────────────────────────── */
  function init() {
    initMood();
    initReveals();
    initFAQ();
    initBurger();
    // Wait for fonts + layout before measuring
    document.fonts.ready.then(() => {
      setupTiere();
      updateTiere();
      updateProgress();
      updateParallax();
    });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      setupTiere();
      updateTiere();
    });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
