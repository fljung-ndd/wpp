(function () {
  'use strict';

  /* ─── DOM refs ──────────────────────────── */
  const html   = document.documentElement;
  const body   = document.body;
  const header = document.querySelector('[data-wkl-header]');
  const prog   = document.querySelector('.wkl-progress span');

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
    document.querySelectorAll('.wkl-mood-panel button').forEach(b => {
      b.classList.toggle('is-active', b.dataset.mood === mood);
    });
    localStorage.setItem('wkl-mood', mood);
  }

  function initMood() {
    setMood(localStorage.getItem('wkl-mood') || 'auto');
    const toggle = document.querySelector('.wkl-mood-toggle');
    const panel  = document.querySelector('.wkl-mood-panel');
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
      if (localStorage.getItem('wkl-mood') === 'auto') setMood('auto');
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
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const speed = parseFloat(el.dataset.parallax) || 0.2;
      el.style.setProperty('--parallax-y', (-rect.top * speed) + 'px');
    });
  }

  /* ─── Intersection reveals ──────────────── */
  function initReveals() {
    const targets = document.querySelectorAll('[data-wkl-section],[data-wkl-reveal]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(el => obs.observe(el));
  }

  /* ─── Figuren horizontal scroller ──────── */
  const figurenWrapper = document.getElementById('figuren');
  const figurenSticky  = document.querySelector('[data-wkl-figuren]');
  const figurenIntro   = document.querySelector('.wkl-figuren-intro');
  const figurenTrack   = document.querySelector('.wkl-figur-track');
  const figurenDots    = document.querySelectorAll('.wkl-figuren-dots span');
  const figurenCards   = document.querySelectorAll('.wkl-figur-card');

  let figurenScrollDist   = 0;
  let figurenMaxTranslate = 0;

  function setupFiguren() {
    if (!figurenWrapper || !figurenTrack || window.innerWidth <= 900) {
      if (figurenWrapper) figurenWrapper.style.height = '';
      return;
    }
    const introW        = figurenIntro ? figurenIntro.offsetWidth : 0;
    figurenMaxTranslate = Math.max(0, figurenTrack.scrollWidth - (window.innerWidth - introW));
    figurenScrollDist   = figurenMaxTranslate;
    figurenWrapper.style.height = (window.innerHeight + figurenScrollDist) + 'px';
  }

  function updateFiguren() {
    if (!figurenWrapper || !figurenSticky || !figurenTrack || window.innerWidth <= 900) return;

    const rect = figurenWrapper.getBoundingClientRect();
    const wh   = window.innerHeight;

    if (rect.top > 0) {
      figurenSticky.style.cssText =
        'position:absolute;top:0;bottom:auto;left:0;right:0;height:100svh;width:auto';
      figurenTrack.style.transform = 'translateX(0)';
      setFigurDot(0);
      return;
    }

    if (rect.bottom <= wh) {
      figurenSticky.style.cssText =
        'position:absolute;top:auto;bottom:0;left:0;right:0;height:100svh;width:auto';
      figurenTrack.style.transform = `translateX(${-figurenMaxTranslate}px)`;
      setFigurDot(figurenCards.length - 1);
      return;
    }

    figurenSticky.style.cssText =
      'position:fixed;top:0;left:0;width:100vw;height:100svh;bottom:auto;right:auto';

    const progress = Math.max(0, Math.min(1, -rect.top / (figurenScrollDist || 1)));
    figurenTrack.style.transform = `translateX(${-progress * figurenMaxTranslate}px)`;
    setFigurDot(Math.min(Math.floor(progress * figurenCards.length), figurenCards.length - 1));
  }

  function setFigurDot(idx) {
    figurenDots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
  }

  /* ─── FAQ Accordion ─────────────────────── */
  function initFAQ() {
    document.querySelectorAll('.wkl-faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('.wkl-faq-q').forEach(b => {
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
    const burger = document.querySelector('.wkl-burger');
    const mNav   = document.querySelector('.wkl-mobile-nav');
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
      updateFiguren();
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
    document.fonts.ready.then(() => {
      setupFiguren();
      updateFiguren();
      updateProgress();
      updateParallax();
    });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      setupFiguren();
      updateFiguren();
    });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
