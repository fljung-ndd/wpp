/* =========================================================
   lp.js — Waldkätzchen Landing Page Interactions
   No dependencies on wk.js or external libraries.
   ========================================================= */

(function () {
  'use strict';

  /* -------------------------------------------------------
     1. Header: scroll class + auto-hide on scroll direction
  ------------------------------------------------------- */
  const header = document.querySelector('.lp-header');
  if (header) {
    let lastScrollY = window.scrollY;
    let headerHidden = false;
    let ticking = false;

    const showHeader = () => {
      if (headerHidden) {
        header.classList.remove('lp-header--hidden');
        headerHidden = false;
      }
    };
    const hideHeader = () => {
      if (!headerHidden) {
        header.classList.add('lp-header--hidden');
        headerHidden = true;
      }
    };

    const onScroll = () => {
      const currentY = window.scrollY;

      // Scrolled background class
      if (currentY > 40) {
        header.classList.add('lp-header--scrolled');
      } else {
        header.classList.remove('lp-header--scrolled');
      }

      // Auto-hide direction logic
      if (currentY < 80) {
        showHeader();
      } else if (currentY > lastScrollY + 8) {
        hideHeader();
      } else if (currentY < lastScrollY - 8) {
        showHeader();
      }

      lastScrollY = currentY;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    // Show on mouse near top
    document.addEventListener('mousemove', (e) => {
      if (e.clientY < 80) showHeader();
    });

    // Run once on load
    onScroll();
  }

  /* -------------------------------------------------------
     2. Mobile burger menu
  ------------------------------------------------------- */
  const burger = document.querySelector('.lp-header__burger');
  const mobileMenu = document.querySelector('.lp-header__mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });
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
      { threshold: 0.1, rootMargin: '-30px 0px' }
    );
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* -------------------------------------------------------
     4. Journey scroll-spy + sidebar + progress bar
  ------------------------------------------------------- */
  const journeySteps = document.querySelectorAll('.lp-journey__step');
  const navBtns = document.querySelectorAll('.lp-journey__nav-btn');
  const progressFill = document.querySelector('.lp-journey__progress-fill');

  if (journeySteps.length && navBtns.length) {
    let activeIndex = 0;

    const updateSidebar = (index) => {
      if (index === activeIndex && index !== 0) return;
      activeIndex = index;
      navBtns.forEach((btn, i) => btn.classList.toggle('is-active', i === index));
      if (progressFill) {
        progressFill.style.width = ((index + 1) / journeySteps.length * 100) + '%';
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

    navBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const target = journeySteps[i];
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });

    updateSidebar(0);
  }

  /* -------------------------------------------------------
     5. Accordion toggle
  ------------------------------------------------------- */
  document.querySelectorAll('.lp-accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.lp-accordion__item');
      if (!item) return;
      const isOpen = item.classList.contains('is-open');
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
     6. Smooth anchor scroll with header offset
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
