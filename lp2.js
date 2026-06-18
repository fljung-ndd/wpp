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
  let animalX = 0;
  let maxAnimalX = 0;

  function sizeHorizontal(){
    if(!horizontal || !track || reduced || window.innerWidth <= 820){
      animalX = 0;
      maxAnimalX = 0;
      if(track) track.style.setProperty('--animal-x', '0px');
      return;
    }
    maxAnimalX = Math.max(0, track.scrollWidth - window.innerWidth);
    animalX = clamp(animalX, 0, maxAnimalX);
    track.style.setProperty('--animal-x', `${-animalX}px`);
  }

  function isHorizontalInView(){
    if(!horizontal) return false;
    const rect = horizontal.getBoundingClientRect();
    return rect.top <= 4 && rect.bottom >= window.innerHeight - 4;
  }

  function handleHorizontalWheel(event){
    if(!horizontal || !track || reduced || window.innerWidth <= 820 || !isHorizontalInView()) return;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    const next = clamp(animalX + delta, 0, maxAnimalX);
    const movingForwardInside = delta > 0 && animalX < maxAnimalX;
    const movingBackwardInside = delta < 0 && animalX > 0;
    if(movingForwardInside || movingBackwardInside){
      event.preventDefault();
      animalX = next;
      track.style.setProperty('--animal-x', `${-animalX}px`);
      horizontal.classList.add('is-locked');
    } else {
      horizontal.classList.remove('is-locked');
    }
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
      ticking = false;
    });
    ticking = true;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('wheel', handleHorizontalWheel, { passive: false });
  window.addEventListener('resize', () => { sizeHorizontal(); updateProgress(); });
  sizeHorizontal();
  updateProgress();
})();
