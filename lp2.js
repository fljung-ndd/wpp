(function(){
  'use strict';
  const root = document.documentElement;
  const header = document.querySelector('[data-wk2-header]');
  let lastY = window.scrollY;


  function updateProgress(){
    const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
    root.style.setProperty('--progress', `${(window.scrollY / max) * 100}%`);
    if(header){
      header.classList.toggle('is-hidden', window.scrollY > lastY && window.scrollY > 120);
      lastY = window.scrollY;
    }
  }

  // Die Tiere-Section wirkt wie ein Sidescroller, bleibt aber bewusst im normalen
  // vertikalen Dokumentfluss: Inhalte scrollen nach unten weiter und werden nicht
  // per Wheel seitlich aus dem Viewport geschoben.

  const revealTargets = document.querySelectorAll('[data-wk2-section], .wk2-animal');
  if('IntersectionObserver' in window){
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.18 });
    revealTargets.forEach(target => observer.observe(target));
  } else {
    revealTargets.forEach(target => target.classList.add('is-visible'));
  }

  document.querySelectorAll('.wk2-faqs button').forEach(button => {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
    });
  });

  let ticking = false;
  function onScroll(){
    if(ticking) return;
    requestAnimationFrame(() => {
      updateProgress();
      ticking = false;
    });
    ticking = true;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
})();
