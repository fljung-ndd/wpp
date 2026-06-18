(function(){
  'use strict';
  const root = document.documentElement;
  const header = document.querySelector('[data-wk2-header]');
  let lastY = window.scrollY;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updateProgress(){
    const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
    root.style.setProperty('--progress', `${(window.scrollY / max) * 100}%`);
    if(header){
      header.classList.toggle('is-hidden', window.scrollY > lastY && window.scrollY > 120);
      lastY = window.scrollY;
    }
  }

  const horizontal = document.querySelector('[data-wk2-horizontal]');
  const track = horizontal ? horizontal.querySelector('.wk2-animal-track') : null;

  function sizeHorizontal(){
    if(!horizontal || !track || reduced || window.innerWidth <= 820){
      if(horizontal) horizontal.style.removeProperty('--horizontal-distance');
      if(track) track.style.transform = '';
      return;
    }
    const distance = Math.max(0, track.scrollWidth - window.innerWidth);
    horizontal.style.setProperty('--horizontal-distance', `${distance}px`);
  }

  function updateHorizontal(){
    if(!horizontal || !track || reduced || window.innerWidth <= 820) return;
    const distance = parseFloat(horizontal.style.getPropertyValue('--horizontal-distance')) || 0;
    const rect = horizontal.getBoundingClientRect();
    const travel = Math.max(1, horizontal.offsetHeight - window.innerHeight);
    const progress = clamp(-rect.top / travel, 0, 1);
    track.style.transform = `translate3d(${-distance * progress}px,0,0)`;
  }

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
      updateHorizontal();
      ticking = false;
    });
    ticking = true;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { sizeHorizontal(); updateHorizontal(); updateProgress(); });
  sizeHorizontal();
  updateProgress();
  updateHorizontal();
})();
