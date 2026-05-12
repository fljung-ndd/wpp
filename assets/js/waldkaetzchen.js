document.addEventListener('DOMContentLoaded', () => {

  // =========================================
  // WALDKÄTZCHEN INTERACTIONS
  // =========================================

  document.body.classList.add('wk-loaded');

  // =========================================
  // MOBILE APP STYLE NAVIGATION
  // =========================================

  const navToggle = document.querySelector('.wk-nav-toggle');
  const nav = document.querySelector('.wk-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open');
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
  // POLAROID HOVER
  // =========================================

  document.querySelectorAll('.wk-polaroid').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = ((y / rect.height) - 0.5) * -6;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // =========================================
  // SOFT SCROLL FEELING
  // =========================================

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      document.body.classList.add('wk-scrolling-down');
    } else {
      document.body.classList.remove('wk-scrolling-down');
    }

    lastScroll = currentScroll;
  });

});
