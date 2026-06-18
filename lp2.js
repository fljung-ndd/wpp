(function () {
  'use strict';

  /* ─── DOM refs ──────────────────────────── */
  const html   = document.documentElement;
  const body   = document.body;
  const header = document.querySelector('[data-wk2-header]');
  const prog   = document.querySelector('.wk2-progress span');

  /* ─── Mood System ───────────────────────── */
  const MOODS = { morgen: [6,10], tag: [10,17], abend: [17,21], nacht: [21,24] };

  function getMoodFromTime() {
    const h = new Date().getHours();
    if (h >= 6  && h < 10) return 'morgen';
    if (h >= 10 && h < 17) return 'tag';
    if (h >= 17 && h < 21) return 'abend';
    return 'nacht';
  }

  function setMood(mood) {
    const effective = mood === 'auto' ? getMoodFromTime() : mood;
    html.dataset.mood = effective;
    document.querySelectorAll('.wk2-mood-panel button').forEach(b => {
      b.classList.toggle('is-active', b.dataset.mood === mood);
    });
    localStorage.setItem('wk2-mood', mood);
  }

  function initMood() {
    const saved = localStorage.getItem('wk2-mood') || 'auto';
    setMood(saved);

    const toggle = document.querySelector('.wk2-mood-toggle');
    const panel  = document.querySelector('.wk2-mood-panel');
    if (!toggle || !panel) return;

    toggle.addEventListener('click', () => {
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

    document.addEventListener('click', e => {
      if (!e.target.closest('.wk2-mood-switcher')) {
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Auto-update mood every 10 min
    setInterval(() => {
      if (localStorage.getItem('wk2-mood') === 'auto') setMood('auto');
    }, 600000);
  }

  /* ─── Header hide/show ──────────────────── */
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
    const pct = (window.scrollY / max) * 100;
    prog.style.height = pct + '%';
  }

  /* ─── Parallax ──────────────────────────── */
  function updateParallax() {
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.25;
      const rect  = el.getBoundingClientRect();
      // Only when section is in view
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const offset = -rect.top * speed;
      el.style.setProperty('--parallax-y', offset + 'px');
    });
  }

  /* ─── Intersection reveals ──────────────── */
  function initReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-wk2-section],[data-wk2-reveal]')
        .forEach(el => el.classList.add('is-visible'));
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-wk2-section],[data-wk2-reveal]')
      .forEach(el => obs.observe(el));
  }

  /* ─── Horizontal Tiere Scroller ─────────── */
  const tiereWrapper = document.getElementById('tiere');
  const tiereSticky  = document.querySelector('[data-wk2-tiere]');
  const tiereIntro   = document.querySelector('.wk2-tiere-intro');
  const tiereTrack   = document.querySelector('.wk2-animal-track');
  const tiereDots    = document.querySelectorAll('.wk2-tiere-dots span');
  const animals      = document.querySelectorAll('.wk2-animal');

  let tiereScrollDist = 0;

  function setupTiere() {
    if (!tiereWrapper || !tiereTrack || window.innerWidth <= 900) return;
    const introW   = tiereIntro ? tiereIntro.offsetWidth : 0;
    const trackW   = tiereTrack.scrollWidth;
    const visible  = window.innerWidth - introW;
    tiereScrollDist = Math.max(0, trackW - visible);
    tiereWrapper.style.height =
      (window.innerHeight + tiereScrollDist) + 'px';
  }

  function updateTiere() {
    if (!tiereWrapper || !tiereTrack || window.innerWidth <= 900) return;
    const rect = tiereWrapper.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1,
      -rect.top / (tiereScrollDist || 1)));
    tiereTrack.style.transform = `translateX(${-progress * tiereScrollDist}px)`;

    // Update dots
    const idx = Math.min(
      Math.floor(progress * animals.length),
      animals.length - 1
    );
    tiereDots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
  }

  /* ─── FAQ Accordion ─────────────────────── */
  function initFAQ() {
    document.querySelectorAll('.wk2-faq-q').forEach(btn => {
      const answer = btn.nextElementSibling;
      if (!answer) return;
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        // Close all
        document.querySelectorAll('.wk2-faq-q').forEach(b => {
          b.setAttribute('aria-expanded', 'false');
          const a = b.nextElementSibling;
          if (a) a.classList.remove('is-open');
        });
        if (!open) {
          btn.setAttribute('aria-expanded', 'true');
          answer.classList.add('is-open');
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
      mNav.setAttribute('aria-hidden', String(open));
      body.style.overflow = open ? '' : 'hidden';
    });

    // Close on nav link click
    mNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.setAttribute('aria-expanded', 'false');
        burger.classList.remove('is-open');
        mNav.classList.remove('is-open');
        mNav.setAttribute('aria-hidden', 'true');
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
    setupTiere();
    updateProgress();
    updateTiere();
    updateParallax();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      setupTiere();
      updateTiere();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
