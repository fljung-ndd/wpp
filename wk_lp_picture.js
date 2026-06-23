(function () {
  'use strict';

  document.body.classList.add('wkl-comic-picture');

  /* Variierende, bewusst unperfekte Seitenkanten statt identischer Schrägen. */
  const edgeStyles = ['wkp-edge-a', 'wkp-edge-b', 'wkp-edge-c'];
  const panels = document.querySelectorAll('main > .wkl-section');

  panels.forEach((section, index) => {
    section.classList.remove('wkl-angled', 'wkl-angled-inv');
    section.classList.add(edgeStyles[index % edgeStyles.length]);

    const panelNumber = document.createElement('span');
    panelNumber.className = 'wkp-panel-no';
    panelNumber.setAttribute('aria-hidden', 'true');
    panelNumber.textContent = String(index + 1).padStart(2, '0');
    section.appendChild(panelNumber);
  });

  /* Nur echte Fotos werden posterisiert. Figuren und Logos bleiben unverändert. */
  const characterOrLogo = /(logo|blauekatze|tigi|luis|etana|iella|elfriede|wadda|niko|kata|pinguin|fuchs|esel|schnecke|leopard|teddy)/i;
  const photoExtension = /\.(jpe?g|webp)(?:\?.*)?$/i;

  document.querySelectorAll('img[src]').forEach(image => {
    const source = image.getAttribute('src') || '';
    const isHeroPhoto = Boolean(image.closest('.wkl-hero-bg'));
    const isPhoto = photoExtension.test(source) && (!characterOrLogo.test(source) || isHeroPhoto);

    if (!isPhoto) return;

    image.classList.add('wkp-comicized');
    const host = image.parentElement;
    if (host) host.classList.add('wkp-comic-host');
  });

  /* Kleine Abweichungen lassen die Polaroids wie von Hand aufgeklebt wirken. */
  document.querySelectorAll('.wkl-polaroid').forEach((polaroid, index) => {
    polaroid.style.setProperty('--wkp-card-turn', index % 2 === 0 ? '-3.2deg' : '4.2deg');
  });
})();
