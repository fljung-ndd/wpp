document.addEventListener('DOMContentLoaded', () => {

  // =========================================
  // WALDKÄTZCHEN INTERACTIONS
  // =========================================

  document.body.classList.add('wk-loaded');

  // Sanfte Hover-Interaktionen für Karten
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
  // WEICHE SCROLL ATMOSPHÄRE
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
