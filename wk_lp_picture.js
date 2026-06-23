(function () {
  'use strict';

  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.wkp-menu');
  const navigation = document.querySelector('.wkp-nav');
  let lastScrollY = window.scrollY;
  let rafPending = false;

  function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.classList.remove('is-open');
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  if (menuButton && navigation) {
    menuButton.addEventListener('click', function () {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.classList.toggle('is-open', !open);
      navigation.classList.toggle('is-open', !open);
    });

    navigation.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  function updateHeader() {
    if (!header) return;
    const currentY = window.scrollY;
    header.classList.toggle('is-hidden', currentY > lastScrollY && currentY > 140);
    lastScrollY = currentY;
  }

  window.addEventListener('scroll', function () {
    if (rafPending) return;
    rafPending = true;
    window.requestAnimationFrame(function () {
      updateHeader();
      rafPending = false;
    });
  }, { passive: true });

  const revealTargets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    revealTargets.forEach(function (target) {
      revealObserver.observe(target);
    });
  } else {
    revealTargets.forEach(function (target) {
      target.classList.add('is-visible');
    });
  }

  document.querySelectorAll('.wkp-faq-item button').forEach(function (button) {
    button.addEventListener('click', function () {
      const item = button.closest('.wkp-faq-item');
      const shouldOpen = button.getAttribute('aria-expanded') !== 'true';

      document.querySelectorAll('.wkp-faq-item').forEach(function (otherItem) {
        otherItem.classList.remove('is-open');
        const otherButton = otherItem.querySelector('button');
        if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
      });

      if (shouldOpen && item) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1050) closeMenu();
  });
})();
