/* ═══════════════════════════════════════════════════════════
   WK INDEX — Page-specific scripts for index.html
   ═══════════════════════════════════════════════════════════ */

/* ── Init wk.js builders ──────────────────────────────── */
buildImpulse('impulse-track');
buildAccordion('faq-main');

/* ── Situation slider ─────────────────────────────────── */
function scrollSituationSlider(direction) {
  var slider = document.getElementById('wk-situation-slider');
  if (!slider) return;
  var slide = slider.querySelector('.wk-situation-slide');
  var gap = 21;
  var amount = slide ? slide.getBoundingClientRect().width + gap : slider.clientWidth * 0.9;
  slider.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

(function () {
  var slider = document.getElementById('wk-situation-slider');
  if (!slider) return;
  slider.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') { event.preventDefault(); scrollSituationSlider(1); }
    if (event.key === 'ArrowLeft')  { event.preventDefault(); scrollSituationSlider(-1); }
  });
})();

/* ── Tier slider ──────────────────────────────────────── */
(function () {
  var allTags = Array.from(new Set(TIER_CARDS.flatMap(function (t) { return t.tags; })));

  var bar = document.getElementById('tier-filter-bar');
  if (bar) {
    var allBtn = document.createElement('button');
    allBtn.className = 'tier-filter-btn is-active';
    allBtn.dataset.filter = 'all';
    allBtn.textContent = 'Alle';
    allBtn.addEventListener('click', function () { filterTiere('all', allBtn); });
    bar.appendChild(allBtn);

    allTags.forEach(function (tag) {
      var btn = document.createElement('button');
      btn.className = 'tier-filter-btn';
      btn.dataset.filter = tag;
      btn.textContent = tag;
      btn.addEventListener('click', function () { filterTiere(tag, btn); });
      bar.appendChild(btn);
    });
  }

  var slider = document.getElementById('tier-slider');
  if (slider) {
    TIER_CARDS.forEach(function (t, i) {
      var card = document.createElement('div');
      card.className = 'tier-card reveal';
      card.dataset.tags = t.tags.join(',');
      card.style.background = t.bgColor.replace(/[\d.]+\)$/, function (m) {
        return Math.min(parseFloat(m) * 4, 0.18) + ')';
      });
      card.style.transitionDelay = (i * 0.06) + 's';
      var sichtbarStr = Array.isArray(t.sichtbar) ? t.sichtbar.join(' · ') : t.sichtbar;
      card.innerHTML =
        '<div class="tier-card-top">' +
          '<div class="tier-card-img"><img src="' + t.img + '" alt="' + t.name + '" loading="lazy"></div>' +
          '<div>' +
            '<div class="tier-card-name">' + t.name + '</div>' +
            '<div class="tier-card-thema" style="color:' + t.accent + '">' + t.thema + '</div>' +
          '</div>' +
        '</div>' +
        '<p class="tier-card-quote">' + t.quote + '</p>' +
        '<p class="tier-card-copy">' + t.darunter.split(',')[0] + '.</p>' +
        '<div class="tier-card-tags">' + t.tags.map(function (tag) { return '<span class="tier-card-tag">' + tag + '</span>'; }).join('') + '</div>' +
        '<button class="wk-tier-toggle" onclick="toggleTier(\'' + t.id + '\')">Von außen / Darunter ▾</button>' +
        '<div class="wk-tier-expand" id="tier-' + t.id + '">' +
          '<div class="wk-tier-panel">' +
            '<p class="wk-tier-panel-label">Von außen sichtbar</p>' +
            '<p class="wk-tier-panel-text">' + sichtbarStr + '</p>' +
          '</div>' +
          '<div class="wk-tier-panel">' +
            '<p class="wk-tier-panel-label">Darunter</p>' +
            '<p class="wk-tier-panel-text">' + t.darunter + '</p>' +
          '</div>' +
        '</div>';
      slider.appendChild(card);
    });
    if (typeof refreshReveal === 'function') refreshReveal(slider);

    var dotsEl = document.getElementById('tier-dots');
    if (dotsEl) {
      TIER_CARDS.forEach(function (t, i) {
        var d = document.createElement('div');
        d.className = 'tier-dot' + (i === 0 ? ' is-active' : '');
        d.addEventListener('click', function () {
          var cards = slider.querySelectorAll('.tier-card');
          if (cards[i]) slider.scrollTo({ left: cards[i].offsetLeft - slider.offsetLeft, behavior: 'smooth' });
        });
        dotsEl.appendChild(d);
      });
      slider.addEventListener('scroll', function () {
        var cards = slider.querySelectorAll('.tier-card');
        var closest = 0, minDist = Infinity;
        cards.forEach(function (c, i) {
          var dist = Math.abs(c.offsetLeft - slider.offsetLeft - slider.scrollLeft);
          if (dist < minDist) { minDist = dist; closest = i; }
        });
        dotsEl.querySelectorAll('.tier-dot').forEach(function (d, i) {
          d.classList.toggle('is-active', i === closest);
        });
      }, { passive: true });
    }
  }

  function filterTiere(tag, clickedBtn) {
    document.querySelectorAll('.tier-filter-btn').forEach(function (b) { b.classList.remove('is-active'); });
    clickedBtn.classList.add('is-active');
    document.querySelectorAll('.tier-card').forEach(function (card) {
      if (tag === 'all' || card.dataset.tags.split(',').includes(tag)) {
        card.removeAttribute('data-hidden');
        card.style.display = '';
      } else {
        card.setAttribute('data-hidden', '1');
        card.style.display = 'none';
      }
    });
  }
})();

function scrollTierSlider(dir) {
  var slider = document.getElementById('tier-slider');
  if (slider) slider.scrollBy({ left: dir * 320, behavior: 'smooth' });
}

function toggleTier(id) {
  var expand = document.getElementById('tier-' + id);
  if (!expand) return;
  var isOpen = expand.classList.toggle('is-open');
  var toggle = expand.previousElementSibling;
  if (toggle) toggle.textContent = isOpen ? 'Weniger ▴' : 'Von außen / Darunter ▾';
}

/* ── Kätzchen scroll dots ─────────────────────────────── */
(function () {
  var grid = document.querySelector('.wk-cats-grid');
  var dotsWrap = document.getElementById('wk-cats-dots');
  if (!grid || !dotsWrap) return;
  dotsWrap.querySelectorAll('.wk-cat-dot').forEach(function (dot) {
    dot.addEventListener('click', function () {
      var cards = grid.querySelectorAll('.wk-cat-card');
      var idx = parseInt(dot.dataset.idx);
      if (cards[idx]) grid.scrollTo({ left: cards[idx].offsetLeft - grid.offsetLeft, behavior: 'smooth' });
    });
  });
  grid.addEventListener('scroll', function () {
    var cards = grid.querySelectorAll('.wk-cat-card');
    var closest = 0, minDist = Infinity;
    cards.forEach(function (c, i) {
      var dist = Math.abs(c.offsetLeft - grid.offsetLeft - grid.scrollLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    dotsWrap.querySelectorAll('.wk-cat-dot').forEach(function (d, i) {
      d.classList.toggle('is-active', i === closest);
    });
  }, { passive: true });
})();
