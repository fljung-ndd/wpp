/* ═══════════════════════════════════════════════════════════
   WALDKÄTZCHEN — Shared JS
   Header, Navigation, Figuren, Metaphern, Hero-Atmosphäre
   ═══════════════════════════════════════════════════════════ */

// ── BASE URLS ────────────────────────────────────────────────────
const WK_ASSETS = 'https://waldkaetzchen.waldkaetzchen.de/wp-content/uploads/2026/05/';
const WK = {
  assets: WK_ASSETS,

  scrollTo(id){
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  },

  openDD(){
    const panel = document.getElementById('dd-panel');
    const trigger = document.getElementById('dd-trigger');
    if(!panel || !trigger) return;
    panel.classList.add('open');
    trigger.classList.add('dd-open');
    trigger.setAttribute('aria-expanded','true');
  },

  closeDD(){
    const panel = document.getElementById('dd-panel');
    const trigger = document.getElementById('dd-trigger');
    if(panel) panel.classList.remove('open');
    if(trigger){
      trigger.classList.remove('dd-open');
      trigger.setAttribute('aria-expanded','false');
    }
  },

  toggleDD(){
    const panel = document.getElementById('dd-panel');
    if(!panel) return;
    panel.classList.contains('open') ? this.closeDD() : this.openDD();
  },

  openMob(){
    const menu = document.getElementById('mobile-menu');
    const burger = document.getElementById('nav-burger');
    if(!menu || !burger) return;
    menu.classList.add('open');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded','true');
    document.body.classList.add('menu-lock');
  },

  closeMob(){
    const menu = document.getElementById('mobile-menu');
    const burger = document.getElementById('nav-burger');
    if(menu) menu.classList.remove('open');
    if(burger){
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    }
    document.body.classList.remove('menu-lock');
  },

  toggleMob(){
    const menu = document.getElementById('mobile-menu');
    if(!menu) return;
    menu.classList.contains('open') ? this.closeMob() : this.openMob();
  },

  goWelt(welt){
    const targetMap = {
      hoehle: 'metaphern.html#hoehle',
      nebel: 'metaphern.html#nebel',
      felsen: 'metaphern.html#felsen',
      altwald: 'index.html#echos',
      lichtung: 'index.html#katzen'
    };
    const url = targetMap[welt] || 'welt.html';
    window.location.href = url;
  }
};

// ── DATA ─────────────────────────────────────────────────────────
const MOODS = {
  verbunden:{accent:'#008C89'},
  ruhig:{accent:'#084F3F'},
  neugierig:{accent:'#FFD23F'},
  mutig:{accent:'#FF7A1A'},
  wild:{accent:'#EF4F7A'}
};

const TIER_CARDS = [
  {
    id:'luis',
    img: WK_ASSETS+'8635fe4c-40e7-4e5f-8a9f-33530784ac43-removebg-preview.png',
    name:'Luis', role:'Chaos · Impuls · Überreizung', accent:'#FF7A1A',
    bgColor:'rgba(255,122,26,.08)', welt:'Lichtung',
    desc:'Luis platzt raus, wenn es zu viel wird. Nicht aus böser Absicht — er ist schlicht überwältigt. Er zeigt, wie Innen-Chaos nach außen dringt.',
    quote:'„Wenn alles zu viel wird, platzt es raus.”',
    tags:['Chaos','Impuls','Überreizung']
  },
  {
    id:'iella',
    img: WK_ASSETS+'katze-kissen-ruhe.png',
    name:'Iella', role:'Stabilität · Klarheit · Selbstwert', accent:'#FFD23F',
    bgColor:'rgba(255,210,63,.08)', welt:'Lichtung',
    desc:'Iella weiß, wer sie ist — und das gibt ihr Halt. Ihr Selbstwert hängt nicht von anderen ab. Ihre Klarheit macht ihr Umfeld sicherer.',
    quote:'„Ich weiß, wer ich bin. Das reicht.”',
    tags:['Stabilität','Klarheit','Selbstwert']
  },
  {
    id:'etana',
    img: WK_ASSETS+'etanaLogo.png',
    name:'Etana', role:'Rückzug · Schutz · Verschwinden', accent:'#6BA5CC',
    bgColor:'rgba(107,165,204,.10)', welt:'Höhle',
    desc:'Etana zieht sich zurück, wenn die Welt zu viel wird. Nicht aus Gleichgültigkeit — sondern weil Verschwinden ihr einziger bekannter Schutz ist.',
    quote:'„Wenn ich nicht da bin, kann mich nichts treffen.”',
    tags:['Rückzug','Schutz','Höhle']
  },
  {
    id:'elfriede',
    img: WK_ASSETS+'themen2.png',
    name:'Elfriede', role:'Anpassung · Spannung · Gefallenwollen', accent:'#008C89',
    bgColor:'rgba(0,140,137,.08)', welt:'Alter Wald',
    desc:'Elfriede passt sich an — immer. Sie spürt, was andere brauchen, und stellt sich darauf ein. Die innere Spannung wächst, während die äußere Harmonie bleibt.',
    quote:'„Hauptsache, alle sind zufrieden.”',
    tags:['Anpassung','Spannung','Gefallenwollen']
  },
  {
    id:'niko',
    img: WK_ASSETS+'helferNetzwerk.png',
    name:'Niko', role:'Autonomie · Freiheit · Eigenweg', accent:'#A8D5C2',
    bgColor:'rgba(168,213,194,.12)', welt:'Lichtung',
    desc:'Niko geht seinen eigenen Weg — auch wenn andere das nicht verstehen. Er zeigt: Wer sich selbst treu bleibt, braucht keine Erlaubnis.',
    quote:'„Ich muss nicht in eine Schublade passen.”',
    tags:['Autonomie','Freiheit','Eigenweg']
  },
  {
    id:'tigi',
    img: WK_ASSETS+'reflexion.png',
    name:'Tigi', role:'Kontrolle · Macht · harte Grenze', accent:'#EF4F7A',
    bgColor:'rgba(239,79,122,.08)', welt:'Felsenmeer',
    desc:'Tigi setzt klare Grenzen — manchmal zu klar. Kontrolle gibt ihr Sicherheit, Macht gibt ihr Halt. Was dahinter steckt, lässt sie selten zeigen.',
    quote:'„Ich bestimme, was hier passiert.”',
    tags:['Kontrolle','Macht','Grenze']
  },
  {
    id:'katarina',
    img: WK_ASSETS+'besprechungen.png',
    name:'Kata-Rina', role:'Nähe · Klammern · Bindungsangst', accent:'#9B88C8',
    bgColor:'rgba(155,136,200,.08)', welt:'Nebel',
    desc:'Kata-Rina sehnt sich nach Nähe — und hat gleichzeitig Angst davor, sie zu verlieren. Das Klammern ist kein Mangel, es ist ein Hilferuf.',
    quote:'„Bitte geh nicht weg. Bitte bleib nicht zu nah.”',
    tags:['Nähe','Klammern','Bindungsangst']
  },
  {
    id:'wadda',
    img: WK_ASSETS+'uebersicht.png',
    name:'Wadda', role:'Reduktion · Sprachlosigkeit · Rückzug', accent:'#7A9A4A',
    bgColor:'rgba(122,154,74,.08)', welt:'Alter Wald',
    desc:'Wadda hat gelernt, weniger zu sein. Weniger laut, weniger sichtbar, weniger fordernd. Sprachlosigkeit ist ihre Form des Rückzugs aus Verbindung.',
    quote:'„Ich mach mich einfach kleiner.”',
    tags:['Reduktion','Stille','Rückzug']
  }
];

const METAPHERN = [
  {img:WK_ASSETS+'helferNetzwerk.png', t:'Die Höhle', d:'Schutzraum · Rückzug · Sicherheit', href:'metaphern.html#hoehle'},
  {img:WK_ASSETS+'nebel.png', t:'Der Nebel', d:'Gedankenkarussell · Zweifel · Unklarheit', href:'metaphern.html#nebel'},
  {img:WK_ASSETS+'uebersicht.png', t:'Das Felsenmeer', d:'Blockaden · starre Regeln · Hindernisse', href:'metaphern.html#felsen'},
  {img:WK_ASSETS+'echos.png', t:'Der alte Wald', d:'Glaubenssätze · Echos · innere Stimmen', href:'index.html#echos'},
  {img:WK_ASSETS+'inhalte.png', t:'Die Lichtung', d:'Orientierung · Begegnung · nächster Schritt', href:'index.html#katzen'}
];

const IMPULSE = [
  {cat:'Vätersein', title:'Wenn Väter schweigen — und was dahintersteckt', text:'Nicht Gleichgültigkeit, sondern Unsicherheit und der Wunsch nach Nähe.', img:WK_ASSETS+'background1.png'},
  {cat:'Gefühle', title:'Luis war heute wütend. Und das ist okay.', text:'Wie Figuren helfen, über schwierige Gefühle zu sprechen.', img:WK_ASSETS+'katze-kissen-ruhe.png'},
  {cat:'Verbindung', title:'Die Höhle ist kein schlechter Ort', text:'Warum Rückzug bei Kindern manchmal das Klügste ist.', img:WK_ASSETS+'background-erfassen-quer.png'},
  {cat:'Heilpädagogik', title:'Was hinter dem Verhalten steckt', text:'Kein Kind verhält sich schwierig ohne Grund — wir schauen hin.', img:WK_ASSETS+'background1.png'},
  {cat:'Alltag', title:'Drei Atemzüge für dich', text:'Eine kleine Übung für schwierige Momente mit Kindern.', img:WK_ASSETS+'reflexion.png'},
  {cat:'Reflexion', title:'Abendritual für ruhige Gedanken', text:'Wie ein einfaches Ritual die Verbindung zur Familie stärkt.', img:WK_ASSETS+'besprechungen.png'}
];

const FAQ = [
  {q:'Für wen ist Waldkätzchen geeignet?', a:'Für Familien, Väter, Kinder und Fachkräfte, die heilpädagogisch fundierte Begleitung suchen — ohne Therapie, aber mit Tiefe und echter Verbindung.'},
  {q:'Was ist der Unterschied zu klassischem Coaching?', a:'Waldkätzchen arbeitet mit Figuren, Geschichten und Waldmetaphern. Das schafft spielerischen Zugang und emotionale Sicherheit — besonders für Kinder und Väter, die sich schwer tun, über Gefühle zu sprechen.'},
  {q:'Wie läuft eine Begleitung ab?', a:'Wir starten mit einem Erstgespräch. Danach gestalten wir den Weg gemeinsam — je nach Bedarf Einzel-, Familien- oder Gruppenformat. Präsenz und Online sind möglich.'},
  {q:'Was kostet die App?', a:'Die Basis-App ist kostenlos. Erweiterte Inhalte, Reflexionsräume und persönliche Begleitung können später ergänzt werden.'},
  {q:'Gibt es Angebote für Schulen und Kitas?', a:'Ja — Waldkätzchen kann als heilpädagogischer Impuls für Fachkräfte, pädagogische Teams und soziale Einrichtungen weiterentwickelt werden.'},
  {q:'Wie unterscheidet sich Waldkätzchen von Therapie?', a:'Waldkätzchen ist keine Therapie und ersetzt keine. Es ist ein pädagogisch fundierter Begleitansatz, der Familien im Alltag stärkt — präventiv und ressourcenorientiert.'}
];

const ECHOS = [
  {
    quote:'"Reiß dich zusammen. Andere haben es schwerer."',
    label:'Echo: Stärke zeigen',
    color:'#639922', labelColor:'#97C459',
    response:'Dahinter steckt: Ich darf nicht verletzlich sein. Dieses Muster formt, wie wir heute mit Schwäche — bei uns und unseren Kindern — umgehen.',
  },
  {
    quote:'"Sei nicht so empfindlich. Das ist doch nichts."',
    label:'Echo: Gefühle kleinmachen',
    color:'#7F77DD', labelColor:'#AFA9EC',
    response:'Wenn Gefühle früh nicht gehört wurden, lernen wir: Fühlen ist gefährlich. Oder übertrieben. Oder falsch.',
  },
  {
    quote:'"Ich sage das doch nur zu deinem Besten."',
    label:'Echo: Kontrolle als Fürsorge',
    color:'#D85A30', labelColor:'#F0997B',
    response:'Gut gemeint — aber manchmal lässt dieses Muster wenig Raum für eigene Wahrnehmung und Entscheidungen.',
  },
  {
    quote:'"Stell dich nicht so an. Früher war das normal."',
    label:'Echo: Vergleich als Maßstab',
    color:'#BA7517', labelColor:'#EF9F27',
    response:'Dieser Satz macht es schwer, die eigene Erfahrung ernst zu nehmen — und die des eigenen Kindes.',
  },
  {
    quote:'"Entweder du funktionierst — oder du bist das Problem."',
    label:'Echo: Leistung als Liebe',
    color:'#1D9E75', labelColor:'#5DCAA5',
    response:'Wenn Zuneigung an Leistung geknüpft war, suchen wir sie auch später darin — und geben dieses Muster weiter.',
  },
];

const WELTEN = [
  {
    id:'hoehle', icon:'🌑', name:'Die Höhle',
    bg:'#1E1C18', text:'#C8C4BC', sub:'#888480', tagBg:'#3a3832',
    kw:'Rückzug · Sicherheit', tag:'zu viel gerade',
    desc:'Manchmal braucht es den Rückzug. Die Höhle ist kein Versagen — sie ist Schutz.',
    tiere:['Etana'], angebote:['Einzelbegleitung','App: Ruhemodus'],
  },
  {
    id:'nebel', icon:'🌫️', name:'Der Nebel',
    bg:'#DCE9F5', text:'#1A3650', sub:'#3A6080', tagBg:'#B4CCE4',
    kw:'Unklarheit · Verwirrung', tag:'alles verschwimmt',
    desc:'Wenn Gedanken kreisen und keine Klarheit entsteht. Der Nebel hat einen Sinn.',
    tiere:['Kata-Rina'], angebote:['Erstgespräch','App: Gefühlscheck'],
  },
  {
    id:'felsen', icon:'🪨', name:'Das Felsenmeer',
    bg:'#D6D2CA', text:'#2A2820', sub:'#5a5650', tagBg:'#B8B4AC',
    kw:'Blockiert · Festgehalten', tag:'geht nicht weiter',
    desc:'Blockaden, die nicht weichen. Altes, das sich festgesetzt hat.',
    tiere:['Kata-Rina','Tigi'], angebote:['Systemische Aufstellung','Familienbegleitung'],
  },
  {
    id:'altwald', icon:'🌲', name:'Der alte Wald',
    bg:'#E6F0DC', text:'#1A3008', sub:'#3A6018', tagBg:'#B8D898',
    kw:'Echos · Alte Muster', tag:'alte Stimmen',
    desc:'Was nachhall aus der Kindheit. Muster, die sich wiederholen.',
    tiere:['Elfriede','Wadda'], angebote:['Väter-Begleitung','Kurs: Echos'],
  },
  {
    id:'lichtung', icon:'☀️', name:'Die Lichtung',
    bg:'#FEF3E2', text:'#3E2208', sub:'#7A4810', tagBg:'#FAC775',
    kw:'Heimat · Ankommen', tag:'die Figuren',
    desc:'Wo die Figuren leben. Hier ist Raum zum Durchatmen, Fühlen und Verbinden.',
    tiere:['Luis','Iella','Niko'], angebote:['App: Lichtungsbereich','Waldabenteuer'],
  },
];

const WORLD_ITEMS = [
  {key:'hoehle', icon:'🌑', name:'Die Höhle', desc:'Rückzug & Sicherheit', tag:'Sicherheit', bg:'var(--hoehle-bg)', text:'var(--hoehle-text)', sub:'var(--hoehle-sub)', tagBg:'var(--hoehle-tag-bg)'},
  {key:'nebel', icon:'🌫️', name:'Der Nebel', desc:'Wenn alles verschwimmt', tag:'Orientierung', bg:'var(--nebel-bg)', text:'var(--nebel-text)', sub:'var(--nebel-sub)', tagBg:'var(--nebel-tag-bg)'},
  {key:'felsen', icon:'🪨', name:'Das Felsenmeer', desc:'Blockaden & Festhalten', tag:'Blockade', bg:'var(--felsen-bg)', text:'var(--felsen-text)', sub:'var(--felsen-sub)', tagBg:'var(--felsen-tag-bg)'},
  {key:'altwald', icon:'🌲', name:'Der alte Wald', desc:'Alte Stimmen & Echos', tag:'Echos', bg:'var(--altwald-bg)', text:'var(--altwald-text)', sub:'var(--altwald-sub)', tagBg:'var(--altwald-tag-bg)'},
  {key:'lichtung', icon:'☀️', name:'Die Lichtung', desc:'Heimat der Figuren', tag:'Heimat', bg:'var(--lichtung-bg)', text:'var(--lichtung-text)', sub:'var(--lichtung-sub)', tagBg:'var(--lichtung-tag-bg)'}
];

// ── STATE ─────────────────────────────────────────────────────────
let currentTheme = autoTheme();
let currentWeather = 'clear';
let currentMood = null;
let controlsOpen = false;

function autoTheme(){
  const h = new Date().getHours();
  if(h>=6 && h<10) return 'morning';
  if(h>=10 && h<17) return 'day';
  if(h>=17 && h<20) return 'dusk';
  return 'night';
}

// ── THEME ──────────────────────────────────────────────────────────
function setTheme(t){
  currentTheme=t;
  ['morning','day','dusk','night','dark'].forEach(c=>document.body.classList.remove(c));
  if(t==='night'||t==='dusk') document.body.classList.add('dark');
  document.body.classList.add(t);
  const overlays={morning:'rgba(140,80,20,.52)',day:'rgba(8,79,63,.64)',dusk:'rgba(60,20,5,.72)',night:'rgba(4,13,30,.78)'};
  const ho = document.getElementById('hero-overlay');
  if(ho) ho.style.background = overlays[t];
  document.querySelectorAll('[data-theme]').forEach(b=>{
    const active=b.dataset.theme===t;
    b.style.background=active?'#084F3F':'transparent';
    b.style.color=active?'#fff':'';
  });
}

function setWeather(w){
  currentWeather=w;
  document.querySelectorAll('[data-weather]').forEach(b=>{
    const active=b.dataset.weather===w;
    b.style.background=active?'#008C89':'transparent';
    b.style.color=active?'#fff':'';
  });
}

function setMood(m){
  const moodOverlay = document.getElementById('mood-overlay');
  if(currentMood===m){
    currentMood=null;
    if(moodOverlay) moodOverlay.style.background='transparent';
    document.documentElement.style.setProperty('--mood-accent','#EF4F7A');
    document.querySelectorAll('[data-mood]').forEach(b=>{b.style.background='transparent';b.style.color='';});
    return;
  }
  currentMood=m;
  const acc=MOODS[m]?.accent || '#EF4F7A';
  if(moodOverlay) moodOverlay.style.background=acc+'18';
  document.documentElement.style.setProperty('--mood-accent',acc);
  document.querySelectorAll('[data-mood]').forEach(b=>{
    const active=b.dataset.mood===m;
    b.style.background=active?(MOODS[b.dataset.mood]?.accent || acc):'transparent';
    b.style.color=active?'#fff':'';
  });
}

function toggleControls(){
  controlsOpen=!controlsOpen;
  const panel = document.getElementById('controls-panel');
  if(panel) panel.classList.toggle('open',controlsOpen);
}

// backwards compatibility for older inline handlers
function toggleMenu(){WK.toggleMob();}
function closeMenu(){WK.closeMob();}

// ── BUILDERS ──────────────────────────────────────────────────────
function buildFigurCards(containerId, limit){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML='';
  const cards = typeof limit==='number' ? TIER_CARDS.slice(0,limit) : TIER_CARDS.slice(0,4);
  cards.forEach((t,i)=>{
    const a=document.createElement('a');
    a.href='tiere.html#'+t.id;
    a.className='figur-card reveal';
    a.style.transitionDelay=(i*.1)+'s';
    a.innerHTML=`
      <div class="figur-card-img">
        <div class="figur-card-img-bg" style="background:${t.bgColor}"></div>
        <img src="${t.img}" alt="${t.name}" loading="lazy" decoding="async">
      </div>
      <div class="figur-card-body">
        <div class="figur-card-name dk-h">${t.name}</div>
        <div class="figur-card-role" style="color:${t.accent}">${t.role}</div>
        <p class="figur-card-desc dk-mid">${t.desc}</p>
        <p class="figur-card-quote dk-soft" style="border-color:${t.accent}">${t.quote}</p>
        <div style="margin-top:.8rem">${t.tags.map(tag=>`<span class="figur-tag">${tag}</span>`).join('')}</div>
      </div>`;
    el.appendChild(a);
  });
  refreshReveal(el);
}

function buildMetaphern(containerId){
  const el=document.getElementById(containerId);
  if(!el) return;
  el.innerHTML='';
  METAPHERN.forEach(m=>{
    const a=document.createElement('a');
    a.href=m.href;
    a.style.cssText='flex-shrink:0;width:200px;scroll-snap-align:start;border-radius:20px;padding:1.5rem;background:rgba(20,50,35,.8);border:1px solid rgba(255,255,255,.08);text-align:center;display:block';
    a.innerHTML=`
      <div style="width:56px;height:56px;margin:0 auto .8rem;border-radius:50%;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center">
        <img src="${m.img}" alt="${m.t}" style="width:36px;height:36px;object-fit:contain;filter:brightness(0) invert(1) opacity(.8)" loading="lazy">
      </div>
      <h4 style="font-size:.9rem;font-weight:700;color:#fff;margin-bottom:.3rem">${m.t}</h4>
      <p style="font-size:.78rem;color:rgba(255,255,255,.52);line-height:1.55">${m.d}</p>`;
    el.appendChild(a);
  });
}

function buildImpulse(containerId, count){
  const el=document.getElementById(containerId);
  if(!el) return;
  el.innerHTML='';
  const cards = count ? IMPULSE.slice(0,count) : IMPULSE;
  cards.forEach(c=>{
    const d=document.createElement('div');
    d.style.cssText='flex-shrink:0;width:280px;scroll-snap-align:start;border-radius:20px;padding:1.5rem;border:1px solid rgba(8,79,63,.08);box-shadow:0 4px 24px rgba(8,79,63,.09);background:var(--s4)';
    d.innerHTML=`
      <div class="impulse-img"><img src="${c.img}" alt="" loading="lazy" decoding="async"></div>
      <div class="impulse-cat">${c.cat}</div>
      <h4 class="impulse-title">${c.title}</h4>
      <p class="impulse-text">${c.text}</p>`;
    el.appendChild(d);
  });
}

function buildAccordion(containerId, data){
  const el=document.getElementById(containerId);
  if(!el) return;
  el.innerHTML='';
  const items = data || FAQ;
  items.forEach((item,i)=>{
    const d=document.createElement('div');
    d.className='accordion-item';
    d.innerHTML=`
      <button class="accordion-btn" onclick="toggleAcc(${i},'${containerId}')">
        <span class="accordion-q">${item.q}</span>
        <span class="accordion-icon" id="acc-icon-${containerId}-${i}">+</span>
      </button>
      <div class="accordion-body" id="acc-body-${containerId}-${i}">
        <div class="accordion-a">${item.a}</div>
      </div>`;
    el.appendChild(d);
  });
}

function buildEchos(containerId){
  const el=document.getElementById(containerId);
  if(!el) return;
  el.innerHTML='';
  ECHOS.forEach((e,i)=>{
    const d=document.createElement('article');
    d.className='reveal';
    d.style.transitionDelay=(i*.08)+'s';
    d.style.cssText+='background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:18px;padding:1.4rem 1.4rem 1.4rem calc(1.4rem + 3px);position:relative;overflow:hidden;transition:background .2s';
    d.onmouseover=()=>d.style.background='rgba(255,255,255,.07)';
    d.onmouseout=()=>d.style.background='rgba(255,255,255,.04)';
    d.innerHTML=`
      <div style="position:absolute;left:0;top:0;bottom:0;width:3px;background:${e.color}"></div>
      <blockquote style="font-family:'Quicksand',sans-serif;font-size:.92rem;font-style:italic;color:#d4d0c6;line-height:1.65;margin-bottom:.9rem">${e.quote}</blockquote>
      <p style="font-size:.65rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:${e.labelColor};margin-bottom:.5rem">${e.label}</p>
      <p style="font-size:.8rem;color:#888680;line-height:1.6;padding-top:.7rem;border-top:1px solid rgba(255,255,255,.06)">${e.response}</p>`;
    el.appendChild(d);
  });
  refreshReveal(el);
}

function buildWeltenStrip(containerId){
  const el=document.getElementById(containerId);
  if(!el) return;
  el.innerHTML='';
  WELTEN.forEach(w=>{
    const d=document.createElement('a');
    d.href=`welt.html#${w.id}`;
    d.style.cssText=`background:${w.bg};padding:1.2rem;display:flex;flex-direction:column;gap:.3rem;cursor:pointer;transition:opacity .2s;text-decoration:none`;
    d.onmouseover=()=>d.style.opacity='.82';
    d.onmouseout=()=>d.style.opacity='1';
    d.innerHTML=`
      <div style="font-size:1.4rem;line-height:1;margin-bottom:.3rem">${w.icon}</div>
      <div style="font-family:'Quicksand',sans-serif;font-size:.82rem;font-weight:700;color:${w.text}">${w.name}</div>
      <div style="font-size:.68rem;color:${w.sub};line-height:1.4">${w.kw}</div>
      <span style="display:inline-block;font-size:.6rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:2px 7px;border-radius:999px;margin-top:.4rem;background:${w.tagBg};color:${w.sub}">${w.tag}</span>`;
    el.appendChild(d);
  });
}

const _openAcc = {};
function toggleAcc(i, cid){
  const body = document.getElementById(`acc-body-${cid}-${i}`);
  const icon = document.getElementById(`acc-icon-${cid}-${i}`);
  if(!body || !icon) return;
  if(_openAcc[cid]===i){
    body.classList.remove('open');
    icon.classList.remove('open');
    _openAcc[cid]=null;
    return;
  }
  if(_openAcc[cid]!=null){
    const openBody = document.getElementById(`acc-body-${cid}-${_openAcc[cid]}`);
    const openIcon = document.getElementById(`acc-icon-${cid}-${_openAcc[cid]}`);
    if(openBody) openBody.classList.remove('open');
    if(openIcon) openIcon.classList.remove('open');
  }
  body.classList.add('open');
  icon.classList.add('open');
  _openAcc[cid]=i;
}

function scrollSlider(id,dir){
  const slider = document.getElementById(id);
  if(slider) slider.scrollBy({left:dir*300,behavior:'smooth'});
}

// ── REVEAL ────────────────────────────────────────────────────────
let revealObserver;
function initReveal(){
  revealObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  }),{threshold:.09});
  document.querySelectorAll('.reveal, .rev').forEach(el=>revealObserver.observe(el));
}

function refreshReveal(root=document){
  if(!revealObserver) return;
  root.querySelectorAll?.('.reveal, .rev').forEach(el=>revealObserver.observe(el));
}

// ── NAVIGATION ────────────────────────────────────────────────────
function initRichNavigation(){
  const trigger=document.getElementById('dd-trigger');
  const burger=document.getElementById('nav-burger');
  const nav=document.getElementById('site-nav');

  trigger?.addEventListener('click',()=>WK.toggleDD());
  burger?.addEventListener('click',()=>WK.toggleMob());

  document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',()=>WK.closeMob()));
  document.addEventListener('click',event=>{
    const panel=document.getElementById('dd-panel');
    const triggerEl=document.getElementById('dd-trigger');
    if(panel?.classList.contains('open') && !panel.contains(event.target) && !triggerEl?.contains(event.target)) WK.closeDD();
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){
      WK.closeDD();
      WK.closeMob();
    }
  });
  window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>8),{passive:true});
}

// ── HERO CANVAS ───────────────────────────────────────────────────
function initHeroCanvas(){
  const c=document.getElementById('hero-canvas');
  if(!c) return;
  const ctx=c.getContext('2d');
  let W=c.width=c.offsetWidth;
  let H=c.height=c.offsetHeight;
  const resize=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;};
  if('ResizeObserver' in window){
    const ro=new ResizeObserver(resize);
    ro.observe(c);
  }else{
    window.addEventListener('resize',resize);
  }

  const stars=Array.from({length:110},()=>({x:Math.random()*2000,y:Math.random()*Math.max(H*.7,200),r:Math.random()*1.5+.3,a:Math.random(),da:(Math.random()-.5)*.014,hue:200+Math.random()*60}));
  const rays=Array.from({length:7},(_,i)=>({angle:(i/7)*Math.PI*.7-Math.PI*.35,w:55+Math.random()*65,a:.022+Math.random()*.028,t:Math.random()*Math.PI*2,sp:.0007+Math.random()*.0005}));
  const butterflies=Array.from({length:7},()=>({x:Math.random()*2000,y:100+Math.random()*Math.max(H*.7,200),vx:(Math.random()-.5)*1.1,vy:(Math.random()-.5)*.7,wt:0,ws:.07+Math.random()*.055,sz:7+Math.random()*9,hue:Math.random()*360,t:Math.random()*Math.PI*2}));
  const rain=Array.from({length:120},()=>({x:Math.random()*2000,y:Math.random()*Math.max(H,300),len:9+Math.random()*11,spd:9+Math.random()*6,a:.28+Math.random()*.38}));
  const mist=Array.from({length:10},()=>({x:Math.random()*2000,y:80+Math.random()*Math.max(H*.6,200),r:90+Math.random()*150,a:0,ta:.045+Math.random()*.07,vx:(Math.random()-.5)*.22,t:Math.random()*Math.PI*2}));

  function drawButterfly(x,y,sz,wt,hue){
    const flap=Math.sin(wt);
    ctx.save();
    [-1,1].forEach(side=>{
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.bezierCurveTo(x+flap*sz*.9*side,y-sz*.6,x+flap*sz*.9*side+side*sz*.4,y+sz*.4,x,y+sz*.3);
      ctx.fillStyle=`hsla(${hue},80%,65%,.8)`;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.bezierCurveTo(x+flap*sz*1.1*side,y-sz*1.2,x+flap*sz*1.3*side+side*sz*.3,y-sz*.5,x,y);
      ctx.fillStyle=`hsla(${hue},70%,72%,.7)`;
      ctx.fill();
    });
    ctx.fillStyle=`hsla(${hue},50%,30%,.9)`;
    ctx.beginPath();
    ctx.ellipse(x,y+sz*.15,sz*.1,sz*.4,0,0,Math.PI*2);
    ctx.fill();
    ctx.restore();
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    const isDay=currentTheme==='day'||currentTheme==='morning';
    const isNight=currentTheme==='night'||currentTheme==='dusk';
    const isRain=currentWeather==='rain';
    const isMist=currentWeather==='mist';

    if(isNight&&!isRain){
      stars.forEach(s=>{
        s.a+=s.da;
        if(s.a>1||s.a<0)s.da*=-1;
        const x=s.x%Math.max(W,1);
        ctx.save();
        ctx.globalAlpha=Math.max(0,s.a*.85);
        ctx.fillStyle=`hsl(${s.hue},80%,92%)`;
        ctx.beginPath();
        ctx.arc(x,s.y,s.r,0,Math.PI*2);
        ctx.fill();
        ctx.restore();
      });
    }

    if(isDay&&!isRain){
      const sx=W*.75,sy=-H*.08;
      rays.forEach(r=>{
        r.t+=r.sp;
        const angle=r.angle+Math.sin(r.t)*.03;
        const col=currentTheme==='morning'?'rgba(255,200,100,':'rgba(255,240,180,';
        const g=ctx.createLinearGradient(sx,sy,sx+Math.cos(angle)*H*1.6,sy+Math.sin(angle)*H*1.6);
        g.addColorStop(0,col+(r.a*1.5)+')');
        g.addColorStop(.5,col+r.a+')');
        g.addColorStop(1,col+'0)');
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(sx,sy);
        ctx.lineTo(sx+Math.cos(angle-r.w*.0007)*H*1.7,sy+Math.sin(angle-r.w*.0007)*H*1.7);
        ctx.lineTo(sx+Math.cos(angle+r.w*.0007)*H*1.7,sy+Math.sin(angle+r.w*.0007)*H*1.7);
        ctx.fillStyle=g;
        ctx.fill();
        ctx.restore();
      });
      butterflies.forEach(b=>{
        b.wt+=b.ws;
        b.t+=.012;
        b.x+=b.vx+Math.sin(b.t)*.6;
        b.y+=b.vy+Math.cos(b.t*.7)*.4;
        if(b.x<-50)b.x=W+50;
        if(b.x>W+50)b.x=-50;
        if(b.y<H*.04||b.y>H*.96)b.vy*=-1;
        drawButterfly(b.x,b.y,b.sz,b.wt,b.hue);
      });
    }

    if(isRain){
      ctx.save();
      ctx.strokeStyle='rgba(180,210,255,.45)';
      ctx.lineWidth=1;
      rain.forEach(r=>{
        r.y+=r.spd;
        if(r.y>H+20){r.y=-20;r.x=Math.random()*W;}
        ctx.save();
        ctx.globalAlpha=r.a;
        ctx.beginPath();
        ctx.moveTo(r.x%Math.max(W,1),r.y);
        ctx.lineTo(r.x%Math.max(W,1)-2,r.y+r.len);
        ctx.stroke();
        ctx.restore();
      });
      ctx.restore();
    }

    if(isMist){
      mist.forEach(m=>{
        m.t+=.005;
        m.x+=m.vx+Math.sin(m.t)*.2;
        if(m.x<-m.r*2)m.x=W+m.r;
        if(m.x>W+m.r*2)m.x=-m.r;
        m.a=.03+Math.abs(Math.sin(m.t))*m.ta;
        const g=ctx.createRadialGradient(m.x,m.y,0,m.x,m.y,m.r);
        g.addColorStop(0,`rgba(220,235,220,${m.a})`);
        g.addColorStop(1,'rgba(220,235,220,0)');
        ctx.beginPath();
        ctx.arc(m.x,m.y,m.r,0,Math.PI*2);
        ctx.fillStyle=g;
        ctx.fill();
      });
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ── HEADER/FOOTER HTML ────────────────────────────────────────────
function worldDropdownMarkup(){
  return WORLD_ITEMS.map(item=>`
    <button class="dd-welt" style="background:${item.bg};" onclick="WK.goWelt('${item.key}')" role="menuitem" type="button">
      <div class="dd-icon">${item.icon}</div>
      <div class="dd-name" style="color:${item.text};">${item.name}</div>
      <div class="dd-desc" style="color:${item.sub};">${item.desc}</div>
      <span class="dd-tag" style="background:${item.tagBg};color:${item.text};">${item.tag}</span>
    </button>`).join('');
}

function mobileWorldMarkup(){
  return WORLD_ITEMS.map(item=>`
    <button class="mob-welt" style="background:${item.bg};" onclick="WK.goWelt('${item.key}')" type="button">
      <div>${item.icon}</div>
      <div class="mob-welt-name" style="color:${item.text};">${item.name}</div>
      <div class="mob-welt-tag" style="color:${item.sub};">${item.tag}</div>
    </button>`).join('');
}

function renderHeader(activePage){
  const active = href => href===activePage ? ' active' : '';
  return `
<div id="night-bg"></div>
<div id="mood-overlay"></div>
<div id="controls">
  <button id="controls-btn" onclick="toggleControls()">🌿 Stimmung</button>
  <div id="controls-panel">
    <div class="ctrl-label">Tageszeit</div>
    <div class="ctrl-grid ctrl-grid-4">
      <button class="ctrl-btn" data-theme="morning" onclick="setTheme('morning')"><span class="ic">🌅</span><span class="lb">Morning</span></button>
      <button class="ctrl-btn" data-theme="day" onclick="setTheme('day')"><span class="ic">☀️</span><span class="lb">Day</span></button>
      <button class="ctrl-btn" data-theme="dusk" onclick="setTheme('dusk')"><span class="ic">🌇</span><span class="lb">Dusk</span></button>
      <button class="ctrl-btn" data-theme="night" onclick="setTheme('night')"><span class="ic">🌙</span><span class="lb">Night</span></button>
    </div>
    <div class="ctrl-label">Wetter</div>
    <div class="ctrl-grid ctrl-grid-3">
      <button class="ctrl-btn" data-weather="clear" onclick="setWeather('clear')"><span class="ic">☀️</span><span class="lb">Klar</span></button>
      <button class="ctrl-btn" data-weather="rain" onclick="setWeather('rain')"><span class="ic">🌧</span><span class="lb">Regen</span></button>
      <button class="ctrl-btn" data-weather="mist" onclick="setWeather('mist')"><span class="ic">🌫</span><span class="lb">Nebel</span></button>
    </div>
    <div class="ctrl-label">Stimmung</div>
    <div class="ctrl-grid ctrl-grid-3">
      <button class="ctrl-btn" data-mood="verbunden" onclick="setMood('verbunden')"><span class="ic">🤝</span><span class="lb">Verbunden</span></button>
      <button class="ctrl-btn" data-mood="ruhig" onclick="setMood('ruhig')"><span class="ic">🌿</span><span class="lb">Ruhig</span></button>
      <button class="ctrl-btn" data-mood="neugierig" onclick="setMood('neugierig')"><span class="ic">🦋</span><span class="lb">Neugierig</span></button>
      <button class="ctrl-btn" data-mood="mutig" onclick="setMood('mutig')"><span class="ic">🔥</span><span class="lb">Mutig</span></button>
      <button class="ctrl-btn" data-mood="wild" onclick="setMood('wild')"><span class="ic">🐾</span><span class="lb">Wild</span></button>
    </div>
  </div>
</div>
<nav class="site-nav" id="site-nav" role="navigation" aria-label="Hauptnavigation">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html" aria-label="Waldkätzchen Startseite"><span class="logo-mark" aria-hidden="true">🌿</span>waldkätzchen</a>
    <div class="nav-links" role="menubar">
      <a class="nav-link${active('index.html')}" href="index.html" role="menuitem">Die Lichtung</a>
      <button class="nav-link" id="dd-trigger" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="dd-panel" type="button">Die Welten <span class="dd-caret" aria-hidden="true">▾</span></button>
      <a class="nav-link nl-vaeter${active('vaeter.html')}" href="vaeter.html" role="menuitem">Für Väter</a>
      <a class="nav-link" href="index.html#begleitung" role="menuitem">Begleitung</a>
      <a class="nav-link" href="index.html#katzen" role="menuitem">Die Waldkätzchen</a>
      <a class="nav-link${active('blog.html')}" href="blog.html" role="menuitem">Impulse</a>
    </div>
    <a class="nav-cta" href="kontakt.html">Erstgespräch</a>
    <button class="nav-burger" id="nav-burger" aria-label="Menü öffnen" aria-expanded="false" aria-controls="mobile-menu" type="button"><span></span><span></span><span></span></button>
  </div>
  <div class="nav-dd" id="dd-panel" role="menu" aria-label="Die fünf Waldwelten">
    <div class="dd-inner"><div class="dd-grid">${worldDropdownMarkup()}</div></div>
    <div class="dd-footer"><span class="dd-hint">Finde heraus, wo du gerade im Wald stehst.</span><button class="dd-more" onclick="WK.closeDD()" type="button">Zur Welten-Übersicht →</button></div>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu">
  <a class="mob-link" href="index.html" data-close>Die Lichtung <span class="caret">→</span></a>
  <button class="mob-link" onclick="WK.scrollTo('katzen');WK.closeMob()" type="button">Die Waldkätzchen <span class="caret">→</span></button>
  <div class="mob-welten">${mobileWorldMarkup()}</div>
  <a class="mob-link ml-vaeter" href="vaeter.html" data-close>Für Väter <span class="caret">→</span></a>
  <a class="mob-link" href="index.html#begleitung" data-close>Begleitung <span class="caret">→</span></a>
  <a class="mob-link" href="blog.html" data-close>Impulse <span class="caret">→</span></a>
  <a class="btn-primary mob-cta" href="kontakt.html">Erstgespräch anfragen</a>
</div>`;
}

function renderFooter(){
  return `
<section style="background:var(--p1);padding:5rem 0">
  <div class="container grid-2">
    <div>
      <div class="reveal"><div style="font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--s3);font-family:'Quicksand',sans-serif;margin-bottom:.6rem">Waldpost</div></div>
      <div class="reveal" style="transition-delay:.1s"><h2 style="color:#fff;font-size:clamp(1.4rem,2.5vw,2rem);margin-bottom:.9rem;line-height:1.3">Kleine Briefe<br>aus dem Wald</h2></div>
      <div class="reveal" style="transition-delay:.15s"><p style="color:rgba(255,255,255,.72);font-size:.92rem;line-height:1.8;margin-bottom:1.5rem">Unregelmäßig, dafür ehrlich: Impulse, Geschichten und Gedanken — direkt in deinen Posteingang.</p></div>
      <div class="reveal" style="transition-delay:.2s"><div style="display:flex;flex-direction:column;gap:.75rem"><input type="email" placeholder="Deine E-Mail-Adresse" class="nl-input"><button class="btn-primary" style="width:100%;justify-content:center">🌿 Dabei sein</button><p style="font-size:.72rem;color:rgba(255,255,255,.4)">🔒 Kein Spam. Jederzeit abmeldbar.</p></div></div>
    </div>
    <div class="hide-mobile" style="display:flex;align-items:center;justify-content:center"><img src="${WK_ASSETS}katze-kissen-ruhe.png" alt="" style="width:160px;height:160px;object-fit:contain;filter:drop-shadow(0 8px 24px rgba(0,0,0,.25));animation:breathe 4s ease-in-out infinite"></div>
  </div>
</section>
<footer>
  <div class="footer-grid">
    <div><a href="index.html" style="display:inline-flex;align-items:center;gap:.55rem;color:#fff;font-family:'Quicksand',sans-serif;font-weight:800;font-size:1.1rem;margin-bottom:.6rem"><span aria-hidden="true">🌿</span>waldkätzchen</a><div style="font-size:.7rem;opacity:.4;letter-spacing:.07em;font-family:'Quicksand',sans-serif;text-transform:uppercase;margin-bottom:.6rem">Wild und verbunden.</div><div style="font-size:.72rem;font-weight:700;letter-spacing:.1em;color:var(--s3);font-family:'Quicksand',sans-serif;margin-bottom:1.25rem;text-transform:uppercase">Verstehen · Verbinden · Verändern</div><div style="display:flex;gap:.7rem"><a href="#" class="social-btn">📷</a><a href="#" class="social-btn">▶</a><a href="#" class="social-btn">💬</a></div></div>
    <div><h4 class="footer-h">Der Wald</h4><a href="welt.html" class="footer-link">Die Welt</a><a href="index.html#die-echos" class="footer-link">Der alte Wald</a><a href="tiere.html" class="footer-link">Die Figuren</a><a href="metaphern.html" class="footer-link">Die Metaphern</a></div>
    <div><h4 class="footer-h">Angebote</h4><a href="coaching.html" class="footer-link">Coaching</a><a href="angebote.html" class="footer-link">Waldabenteuer</a><a href="angebote.html#kurse" class="footer-link">Kurse</a><a href="app.html" class="footer-link">Die App</a></div>
    <div><h4 class="footer-h">Mehr</h4><a href="vaeter.html" class="footer-link">Für Väter</a><a href="blog.html" class="footer-link">Impulse</a><a href="ueber-mich.html" class="footer-link">Über mich</a><a href="kontakt.html" class="footer-link">Kontakt</a></div>
  </div>
  <div class="footer-bottom"><div style="font-size:.75rem;color:rgba(255,255,255,.35)">© 2026 Waldkätzchen. Wild und verbunden.</div><div style="display:flex;gap:1.5rem"><a href="#" class="footer-link" style="font-size:.75rem;margin:0">Impressum</a><a href="#" class="footer-link" style="font-size:.75rem;margin:0">Datenschutz</a></div></div>
</footer>`;
}

// ── PAGE INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  setTheme(currentTheme);
  setWeather(currentWeather);
  initReveal();
  initHeroCanvas();
  initRichNavigation();
});
