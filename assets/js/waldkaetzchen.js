document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('wk-loaded');

  // =========================================
  // MOBILE APP STYLE NAVIGATION
  // =========================================
  const navToggle = document.querySelector('.wk-nav-toggle');
  const nav = document.querySelector('.wk-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('wk-menu-open', isOpen);
    });

    document.querySelectorAll('.wk-nav a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('wk-menu-open');
      });
    });
  }

  // =========================================
  // TAGESZEIT: MORGEN / TAG / ABEND / NACHT
  // =========================================
  const hour = new Date().getHours();
  let timeClass = 'wk-time-day';

  if (hour >= 5 && hour < 10) timeClass = 'wk-time-morning';
  if (hour >= 17 && hour < 21) timeClass = 'wk-time-evening';
  if (hour >= 21 || hour < 5) timeClass = 'wk-time-night';

  document.body.classList.add(timeClass);

  // =========================================
  // WALD-FLIRREN / LICHTPUNKTE
  // =========================================
  const ambienceTargets = document.querySelectorAll('.wk-home-hero, .wk-hero-slider, .wk-section--app, .wk-section--green, .wk-home-app');

  ambienceTargets.forEach((target) => {
    if (target.querySelector('.wk-forest-ambience')) return;

    const layer = document.createElement('div');
    layer.className = 'wk-forest-ambience';
    layer.setAttribute('aria-hidden', 'true');

    const count = window.matchMedia('(max-width: 640px)').matches ? 12 : 26;

    for (let i = 0; i < count; i += 1) {
      const spark = document.createElement('span');
      spark.className = 'wk-light-dot';
      spark.style.setProperty('--wk-x', `${Math.random() * 100}%`);
      spark.style.setProperty('--wk-y', `${Math.random() * 100}%`);
      spark.style.setProperty('--wk-delay', `${Math.random() * 7}s`);
      spark.style.setProperty('--wk-duration', `${6 + Math.random() * 8}s`);
      spark.style.setProperty('--wk-size', `${5 + Math.random() * 9}px`);
      layer.appendChild(spark);
    }

    target.appendChild(layer);
  });

  // =========================================
  // SCROLL REVEAL
  // Elemente blenden weich ein. Bestehendes HTML braucht keine Anpassung.
  // =========================================
  const revealSelectors = [
    '.wk-section-heading',
    '.wk-benefit',
    '.wk-card',
    '.wk-world-card',
    '.wk-offer-card',
    '.wk-post-card',
    '.wk-polaroid',
    '.wk-image',
    '.wk-app-panel',
    '.wk-faq-item',
    '.wk-grid-2 > *',
    '.wk-grid-3 > *',
    '.wk-grid-4 > *',
    '.wk-grid-5 > *'
  ].join(',');

  const revealItems = Array.from(document.querySelectorAll(revealSelectors))
    .filter((item) => !item.closest('.wk-header'));

  revealItems.forEach((item, index) => {
    item.classList.add('wk-reveal');
    item.style.setProperty('--wk-reveal-delay', `${Math.min(index % 8, 7) * 70}ms`);
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  // =========================================
  // POLAROID HOVER - nur bei Mausgeräten
  // =========================================
  if (window.matchMedia('(hover: hover)').matches && !prefersReducedMotion) {
    document.querySelectorAll('.wk-polaroid').forEach((card) => {
      card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 5;
        const rotateX = ((y / rect.height) - 0.5) * -5;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // =========================================
  // HEADER BEIM SCROLLEN VERDICHTEN
  // =========================================
  let lastScroll = 0;
  const updateScrollState = () => {
    const currentScroll = window.scrollY || 0;
    document.body.classList.toggle('wk-scrolled', currentScroll > 24);
    document.body.classList.toggle('wk-scrolling-down', currentScroll > lastScroll && currentScroll > 120);
    lastScroll = currentScroll;
  };

  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });
});
