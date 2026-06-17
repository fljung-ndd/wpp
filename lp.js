/* =========================================================
   lp.js — Waldkätzchen Landing Page Interactions
   No dependencies on wk.js or any external libraries.
   ========================================================= */

(function () {
  'use strict';

  /* -------------------------------------------------------
     1. Header: transparent → scrolled class
  ------------------------------------------------------- */
  const header = document.querySelector('.lp-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('lp-header--scrolled');
      } else {
        header.classList.remove('lp-header--scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* -------------------------------------------------------
     2. Mobile burger menu toggle
  ------------------------------------------------------- */
  const burger = document.querySelector('.lp-header__burger');
  const mobileMenu = document.querySelector('.lp-header__mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -------------------------------------------------------
     3. Reveal animation via IntersectionObserver
  ------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.lp-reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show all
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* -------------------------------------------------------
     4. Journey scroll-spy + sidebar nav + progress bar
  ------------------------------------------------------- */
  const journeySteps = document.querySelectorAll('.lp-journey__step');
  const navBtns = document.querySelectorAll('.lp-journey__nav-btn');
  const progressFill = document.querySelector('.lp-journey__progress-fill');

  if (journeySteps.length && navBtns.length) {
    let activeIndex = 0;

    const updateSidebar = (index) => {
      if (index === activeIndex) return;
      activeIndex = index;
      navBtns.forEach((btn, i) => btn.classList.toggle('is-active', i === index));
      if (progressFill) {
        const pct = ((index + 1) / journeySteps.length) * 100;
        progressFill.style.width = pct + '%';
      }
    };

    if ('IntersectionObserver' in window) {
      const spyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const idx = Array.from(journeySteps).indexOf(entry.target);
              if (idx !== -1) updateSidebar(idx);
            }
          });
        },
        { threshold: 0.45, rootMargin: '-80px 0px -30% 0px' }
      );
      journeySteps.forEach(step => spyObserver.observe(step));
    }

    // Sidebar nav button click → smooth scroll to step
    navBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const target = journeySteps[i];
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });

    // Init first step active
    updateSidebar(0);
  }

  /* -------------------------------------------------------
     5. Accordion toggle
  ------------------------------------------------------- */
  const accordionTriggers = document.querySelectorAll('.lp-accordion__trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.lp-accordion__item');
      if (!item) return;
      const isOpen = item.classList.contains('is-open');
      // Close siblings in same accordion group
      const accordion = item.closest('.lp-accordion');
      if (accordion) {
        accordion.querySelectorAll('.lp-accordion__item.is-open').forEach(openItem => {
          if (openItem !== item) openItem.classList.remove('is-open');
        });
      }
      item.classList.toggle('is-open', !isOpen);
    });
  });

  /* -------------------------------------------------------
     6. Smooth anchor scroll with 80px header offset
  ------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
