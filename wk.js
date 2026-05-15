/* ═══════════════════════════════════════════════════════════
   WALDKÄTZCHEN — Shared JS
   ═══════════════════════════════════════════════════════════ */

// ── BASE URLS ────────────────────────────────────────────────────
const WK = 'https://waldkaetzchen.waldkaetzchen.de/wp-content/uploads/2026/05/';

// ── DATA ─────────────────────────────────────────────────────────
const MOODS = {
  verbunden:{accent:"#008C89"}, ruhig:{accent:"#084F3F"},
  neugierig:{accent:"#FFD23F"}, mutig:{accent:"#FF7A1A"}, wild:{accent:"#EF4F7A"},
};

const TIER_CARDS = [
  {
    img: WK+'8635fe4c-40e7-4e5f-8a9f-33530784ac43-removebg-preview.png',
    name:"Luis", role:"Mut · Entdecken", accent:"#FF7A1A",
    bgColor:"rgba(255,122,26,.08)",
    desc:"Neugierig, manchmal impulsiv, immer mit offenem Herzen.",
    quote:'„Wenn alles zu viel wird, wird es laut.“',
    tags:["Bewegung","Wachstum","Impuls"]
  },{
    img: WK+'katze-kissen-ruhe.png',
    name:"Yella", role:"Wärme · Verbindung", accent:"#FFD23F",
    bgColor:"rgba(255,210,63,.08)",
    desc:"Sie spürt schnell, wie es anderen geht. Nähe entsteht durch Zuhören.",
    quote:'„Manchmal reicht es, einfach da zu sein.“',
    tags:["Empathie","Ruhe","Fürsorge"]
  },{
    img: WK+'themen2.png',
    name:"Elfriede", role:"Beobachtung · Reflexion", accent:"#008C89",
    bgColor:"rgba(0,140,137,.08)",
    desc:"Auch leise Gefühle haben Bedeutung — nicht alles muss sofort laut sein.",
    quote:'„Ich schaue hin, bevor ich urteile.“',
    tags:["Achtsamkeit","Muster","Stille"]
  },{
    img: WK+'helferNetzwerk.png',
    name:"Der Pinguin", role:"Anderssein · Leichtigkeit", accent:"#A8D5C2",
    bgColor:"rgba(168,213,194,.08)",
    desc:"Man muss nicht hineinpassen, um wertvoll zu sein.",
    quote:'„Anders sein ist keine Schwäche.“',
    tags:["Mut","Selbstannahme","Einzigartigkeit"]
  },
];

const METAPHERN = [
  {img:WK+'reflexion.png',     t:"Der Nebel",     d:"Gedankenkarussell · Zweifel · Unklarheit"},
  {img:WK+'uebersicht.png',    t:"Die Felsen",     d:"Blockaden · starre Regeln · Hindernisse"},
  {img:WK+'besprechungen.png', t:"Die alten Bäume",d:"Glaubenssätze · Überzeugungen · innere Stimmen"},
  {img:WK+'inhalte.png',       t:"Die Laterne",    d:"Orientierung · der nächste Schritt"},
  {img:WK+'helferNetzwerk.png',t:"Die Höhle",      d:"Schutzraum · Rückzug · Sicherheit"},
];

const IMPULSE = [
  {cat:"Vätersein",    title:"Wenn Väter schweigen — und was dahintersteckt", text:"Nicht Gleichgültigkeit, sondern Unsicherheit und der Wunsch nach Nähe.", img:WK+'background1.png'},
  {cat:"Gefühle",      title:"Luis war heute wütend. Und das ist okay.",       text:"Wie tierische Figuren helfen, über schwierige Gefühle zu sprechen.", img:WK+'katze-kissen-ruhe.png'},
  {cat:"Verbindung",   title:"Die Höhle ist kein schlechter Ort",              text:"Warum Rückzug bei Kindern manchmal das Klügste ist.", img:WK+'background-erfassen-quer.png'},
  {cat:"Heilpädagogik",title:"Was hinter dem Verhalten steckt",                text:"Kein Kind verhält sich schwierig ohne Grund — wir schauen hin.", img:WK+'background1.png'},
  {cat:"Alltag",       title:"Drei Atemzüge für dich",                         text:"Eine kleine Übung für schwierige Momente mit Kindern.", img:WK+'reflexion.png'},
  {cat:"Reflexion",    title:"Abendritual für ruhige Gedanken",                text:"Wie ein einfaches Ritual die Verbindung zur Familie stärkt.", img:WK+'besprechungen.png'},
];

const FAQ = [
  {q:"Für wen ist Waldkätzchen geeignet?",              a:"Für Familien, Väter, Kinder und Fachkräfte, die heilpädagogisch fundierte Begleitung suchen — ohne Therapie, aber mit Tiefe und echter Verbindung."},
  {q:"Was ist der Unterschied zu klassischem Coaching?", a:"Waldkätzchen arbeitet mit Figuren, Geschichten und Waldmetaphern. Das schafft spielerischen Zugang und emotionale Sicherheit — besonders für Kinder und Väter, die sich schwer tun, über Gefühle zu sprechen."},
  {q:"Wie läuft eine Begleitung ab?",                   a:"Wir starten mit einem kostenlosen Erstgespräch. Danach gestalten wir den Weg gemeinsam — je nach Bedarf Einzel-, Familien- oder Gruppenformat. Präsenz und Online sind möglich."},
  {q:"Was kostet die App?",                             a:"Die Basis-App ist kostenlos. Erweiterte Inhalte, Reflexionsräume und persönliche Begleitung sind im Abo verfügbar."},
  {q:"Gibt es Angebote für Schulen und Kitas?",         a:"Ja — Waldkätzchen bietet Fortbildungen und Aufstellungen speziell für Fachkräfte in pädagogischen Einrichtungen, Schulen und sozialen Organisationen."},
  {q:"Wie unterscheidet sich Waldkätzchen von Therapie?",a:"Waldkätzchen ist keine Therapie und ersetzt keine. Es ist ein pädagogisch fundierter Begleitansatz, der Familien im Alltag stärkt — präventiv und ressourcenorientiert."},
];

// ── STATE ─────────────────────────────────────────────────────────
let currentTheme = autoTheme(), currentWeather = 'clear', currentMood = null;
let menuOpen = false, controlsOpen = false;

function autoTheme(){
  const h = new Date().getHours();
  if(h>=6&&h<10) return 'morning';
  if(h>=10&&h<17) return 'day';
  if(h>=17&&h<20) return 'dusk';
  return 'night';
}

// ── THEME ──────────────────────────────────────────────────────────
function setTheme(t){
  currentTheme=t;
  ['morning','day','dusk','night','dark'].forEach(c=>document.body.classList.remove(c));
  if(t==='night'||t==='dusk') document.body.classList.add('dark');
  document.body.classList.add(t);
  const overlays={morning:'rgba(140,80,20,.52)',day:'rgba(8,79,63,.65)',dusk:'rgba(60,20,5,.72)',night:'rgba(4,13,30,.78)'};
  const ho = document.getElementById('hero-overlay');
  if(ho) ho.style.background = overlays[t];
  document.querySelectorAll('[data-theme]').forEach(b=>{
    const a=b.dataset.theme===t;
    b.style.background=a?'#084F3F':'transparent';
    b.style.color=a?'#fff':'';
  });
}
function setWeather(w){
  currentWeather=w;
  document.querySelectorAll('[data-weather]').forEach(b=>{
    const a=b.dataset.weather===w;
    b.style.background=a?'#008C89':'transparent';
    b.style.color=a?'#fff':'';
  });
}
function setMood(m){
  const moodOverlay = document.getElementById('mood-overlay');
  if(currentMood===m){
    currentMood=null;
    if(moodOverlay) moodOverlay.style.background='transparent';
    document.documentElement.style.setProperty('--mood-accent','#EF4F7A');
    document.querySelectorAll('[data-mood]').forEach(b=>{b.style.background='transparent';b.style.color='';});
  } else {
    currentMood=m;
    const acc=MOODS[m].accent;
    if(moodOverlay) moodOverlay.style.background=acc+'18';
    document.documentElement.style.setProperty('--mood-accent',acc);
    document.querySelectorAll('[data-mood]').forEach(b=>{
      const a=b.dataset.mood===m;
      b.style.background=a?MOODS[b.dataset.mood].accent:'transparent';
      b.style.color=a?'#fff':'';
    });
  }
}
function toggleControls(){
  controlsOpen=!controlsOpen;
  const panel = document.getElementById('controls-panel');
  if(panel) panel.classList.toggle('open',controlsOpen);
}
function toggleMenu(){
  menuOpen=!menuOpen;
  const mobileMenu = document.getElementById('mobile-menu');
  const hbg1 = document.getElementById('hbg1');
  const hbg2 = document.getElementById('hbg2');
  const hbg3 = document.getElementById('hbg3');
  if(mobileMenu) mobileMenu.classList.toggle('open',menuOpen);
  if(hbg1) hbg1.style.transform=menuOpen?'translateY(7px) rotate(45deg)':'none';
  if(hbg2) hbg2.style.opacity=menuOpen?'0':'1';
  if(hbg3) hbg3.style.transform=menuOpen?'translateY(-7px) rotate(-45deg)':'none';
}
function closeMenu(){
  menuOpen=false;
  const mobileMenu = document.getElementById('mobile-menu');
  if(mobileMenu) mobileMenu.classList.remove('open');
  ['hbg1','hbg2','hbg3'].forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.style.transform='none';
    el.style.opacity='1';
  });
}

// ── BUILDERS ──────────────────────────────────────────────────────
function buildFigurCards(containerId){
  const el = document.getElementById(containerId); if(!el) return;
  TIER_CARDS.forEach((t,i)=>{
    const d=document.createElement('div');
    d.className='figur-card reveal';
    d.style.transitionDelay=(i*.1)+'s';
    d.innerHTML=`
      <div class="figur-card-img">
        <div class="figur-card-img-bg" style="background:${t.bgColor}"></div>
        <img src="${t.img}" alt="${t.name}">
      </div>
      <div class="figur-card-body">
        <div class="figur-card-name dk-h">${t.name}</div>
        <div class="figur-card-role" style="color:${t.accent}">${t.role}</div>
        <p class="figur-card-desc dk-mid">${t.desc}</p>
        <p class="figur-card-quote dk-soft" style="border-color:${t.accent}">${t.quote}</p>
        <div style="margin-top:.8rem">${t.tags.map(tg=>`<span class="figur-tag">${tg}</span>`).join('')}</div>
      </div>`;
    el.appendChild(d);
  });
}

function buildMetaphern(containerId){
  const el=document.getElementById(containerId); if(!el) return;
  METAPHERN.forEach(m=>{
    const d=document.createElement('div');
    d.style.cssText='flex-shrink:0;width:200px;scroll-snap-align:start;border-radius:20px;padding:1.5rem;background:rgba(20,50,35,.8);border:1px solid rgba(255,255,255,.08);text-align:center';
    d.innerHTML=`
      <div style="width:56px;height:56px;margin:0 auto .8rem;border-radius:50%;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center">
        <img src="${m.img}" alt="${m.t}" style="width:36px;height:36px;object-fit:contain;filter:brightness(0) invert(1) opacity(.8)">
      </div>
      <h4 style="font-size:.9rem;font-weight:700;color:#fff;margin-bottom:.3rem">${m.t}</h4>
      <p style="font-size:.78rem;color:rgba(255,255,255,.52);line-height:1.55">${m.d}</p>`;
    el.appendChild(d);
  });
}

function buildImpulse(containerId, count){
  const el=document.getElementById(containerId); if(!el) return;
  const cards = count ? IMPULSE.slice(0,count) : IMPULSE;
  cards.forEach(c=>{
    const d=document.createElement('div');
    d.style.cssText='flex-shrink:0;width:280px;scroll-snap-align:start;border-radius:20px;padding:1.5rem;border:1px solid rgba(8,79,63,.08);box-shadow:0 4px 24px rgba(8,79,63,.09);background:var(--s4)';
    d.innerHTML=`
      <div class="impulse-img"><img src="${c.img}" alt=""></div>
      <div class="impulse-cat">${c.cat}</div>
      <h4 class="impulse-title">${c.title}</h4>
      <p class="impulse-text">${c.text}</p>`;
    el.appendChild(d);
  });
}

function buildAccordion(containerId, data){
  const el=document.getElementById(containerId); if(!el) return;
  const items = data || FAQ;
  items.forEach((item,i)=>{
    const d=document.createElement('div'); d.className='accordion-item';
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

const _openAcc = {};
function toggleAcc(i, cid){
  const k = cid;
  const body = document.getElementById(`acc-body-${k}-${i}`);
  const icon = document.getElementById(`acc-icon-${k}-${i}`);
  if(!body || !icon) return;
  if(_openAcc[k]===i){
    body.classList.remove('open');
    icon.classList.remove('open');
    _openAcc[k]=null;
  } else {
    if(_openAcc[k]!=null){
      const openBody = document.getElementById(`acc-body-${k}-${_openAcc[k]}`);
      const openIcon = document.getElementById(`acc-icon-${k}-${_openAcc[k]}`);
      if(openBody) openBody.classList.remove('open');
      if(openIcon) openIcon.classList.remove('open');
    }
    body.classList.add('open');
    icon.classList.add('open');
    _openAcc[k]=i;
  }
}

function scrollSlider(id,dir){
  const slider = document.getElementById(id);
  if(slider) slider.scrollBy({left:dir*300,behavior:'smooth'});
}

// ── REVEAL ────────────────────────────────────────────────────────
function initReveal(){
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.09});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

// ── HERO CANVAS ───────────────────────────────────────────────────
function initHeroCanvas(){
  const c=document.getElementById('hero-canvas'); if(!c) return;
  const ctx=c.getContext('2d');
  let W=c.width=c.offsetWidth, H=c.height=c.offsetHeight;
  const ro=new ResizeObserver(()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;}); ro.observe(c);
  const stars=Array.from({length:120},()=>({x:Math.random()*2000,y:Math.random()*H*.7,r:Math.random()*1.5+.3,a:Math.random(),da:(Math.random()-.5)*.014,hue:200+Math.random()*60}));
  const rays=Array.from({length:7},(_,i)=>({angle:(i/7)*Math.PI*.7-Math.PI*.35,w:55+Math.random()*65,a:.022+Math.random()*.028,t:Math.random()*Math.PI*2,sp:.0007+Math.random()*.0005}));
  const butterflies=Array.from({length:7},()=>({x:Math.random()*2000,y:100+Math.random()*H*.7,vx:(Math.random()-.5)*1.1,vy:(Math.random()-.5)*.7,wt:0,ws:.07+Math.random()*.055,sz:7+Math.random()*9,hue:Math.random()*360,t:Math.random()*Math.PI*2}));
  const rain=Array.from({length:130},()=>({x:Math.random()*2000,y:Math.random()*H,len:9+Math.random()*11,spd:9+Math.random()*6,a:.28+Math.random()*.38}));
  const mist=Array.from({length:10},()=>({x:Math.random()*2000,y:80+Math.random()*H*.6,r:90+Math.random()*150,a:0,ta:.045+Math.random()*.07,vx:(Math.random()-.5)*.22,t:Math.random()*Math.PI*2}));

  function drawBfly(x,y,sz,wt,hue){
    const f=Math.sin(wt); ctx.save();
    [[-1],[1]].forEach(([sx])=>{
      ctx.beginPath();ctx.moveTo(x,y);ctx.bezierCurveTo(x+f*sz*.9*sx,y-sz*.6,x+f*sz*.9*sx+sx*sz*.4,y+sz*.4,x,y+sz*.3);ctx.fillStyle=`hsla(${hue},80%,65%,.8)`;ctx.fill();
      ctx.beginPath();ctx.moveTo(x,y);ctx.bezierCurveTo(x+f*sz*1.1*sx,y-sz*1.2,x+f*sz*1.3*sx+sx*sz*.3,y-sz*.5,x,y);ctx.fillStyle=`hsla(${hue},70%,72%,.7)`;ctx.fill();
    });
    ctx.fillStyle=`hsla(${hue},50%,30%,.9)`;ctx.beginPath();ctx.ellipse(x,y+sz*.15,sz*.1,sz*.4,0,0,Math.PI*2);ctx.fill();ctx.restore();
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    const isDay=currentTheme==='day'||currentTheme==='morning';
    const isNight=currentTheme==='night'||currentTheme==='dusk';
    const isRain=currentWeather==='rain';
    const isMist=currentWeather==='mist';
    if(isNight&&!isRain){
      stars.forEach(s=>{s.a+=s.da;if(s.a>1||s.a<0)s.da*=-1;ctx.save();ctx.globalAlpha=Math.max(0,s.a*.85);ctx.fillStyle=`hsl(${s.hue},80%,92%)`;ctx.beginPath();ctx.arc(s.x%W,s.y,s.r,0,Math.PI*2);ctx.fill();if(s.r>1.1){ctx.strokeStyle=`hsl(${s.hue},80%,96%)`;ctx.lineWidth=.5;ctx.globalAlpha=s.a*.4;const sx2=s.x%W;ctx.beginPath();ctx.moveTo(sx2-s.r*2.5,s.y);ctx.lineTo(sx2+s.r*2.5,s.y);ctx.moveTo(sx2,s.y-s.r*2.5);ctx.lineTo(sx2,s.y+s.r*2.5);ctx.stroke();}ctx.restore();});
    }
    if(isDay&&!isRain){
      const sx2=W*.75,sy=-H*.08;
      rays.forEach(r=>{r.t+=r.sp;const a0=r.angle+Math.sin(r.t)*.03;const col=currentTheme==='morning'?'rgba(255,200,100,':'rgba(255,240,180,';const g=ctx.createLinearGradient(sx2,sy,sx2+Math.cos(a0)*H*1.6,sy+Math.sin(a0)*H*1.6);g.addColorStop(0,col+(r.a*1.5)+')');g.addColorStop(.5,col+r.a+')');g.addColorStop(1,col+'0)');ctx.save();ctx.beginPath();ctx.moveTo(sx2,sy);ctx.lineTo(sx2+Math.cos(a0-r.w*.0007)*H*1.7,sy+Math.sin(a0-r.w*.0007)*H*1.7);ctx.lineTo(sx2+Math.cos(a0+r.w*.0007)*H*1.7,sy+Math.sin(a0+r.w*.0007)*H*1.7);ctx.fillStyle=g;ctx.fill();ctx.restore();});
      butterflies.forEach(b=>{b.wt+=b.ws;b.t+=.012;b.x+=b.vx+Math.sin(b.t)*.6;b.y+=b.vy+Math.cos(b.t*.7)*.4;if(b.x<-50)b.x=W+50;if(b.x>W+50)b.x=-50;if(b.y<H*.04||b.y>H*.96)b.vy*=-1;drawBfly(b.x,b.y,b.sz,b.wt,b.hue);});
    }
    if(isRain){ctx.save();ctx.strokeStyle='rgba(180,210,255,.45)';ctx.lineWidth=1;rain.forEach(r=>{r.y+=r.spd;if(r.y>H+20){r.y=-20;r.x=Math.random()*W;}ctx.save();ctx.globalAlpha=r.a;ctx.beginPath();ctx.moveTo(r.x%W,r.y);ctx.lineTo(r.x%W-2,r.y+r.len);ctx.stroke();ctx.restore();});ctx.restore();}
    if(isMist){mist.forEach(m=>{m.t+=.005;m.x+=m.vx+Math.sin(m.t)*.2;if(m.x<-m.r*2)m.x=W+m.r;if(m.x>W+m.r*2)m.x=-m.r;m.a=.03+Math.abs(Math.sin(m.t))*m.ta;const g=ctx.createRadialGradient(m.x,m.y,0,m.x,m.y,m.r);g.addColorStop(0,`rgba(220,235,220,${m.a})`);g.addColorStop(1,'rgba(220,235,220,0)');ctx.beginPath();ctx.arc(m.x,m.y,m.r,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();});}
    requestAnimationFrame(draw);
  }
  draw();
}

// ── SHARED HEADER/FOOTER HTML ─────────────────────────────────────
const NAV_LINKS = [
  {label:'Der Wald',  href:'welt.html'},
  {label:'Coaching',  href:'coaching.html'},
  {label:'Angebote',  href:'angebote.html'},
  {label:'Väter',     href:'vaeter.html'},
  {label:'Blog',      href:'blog.html'},
  {label:'Über mich', href:'ueber-mich.html'},
];

function renderHeader(activePage){
  const nav = NAV_LINKS.map(l=>`<a href="${l.href}" class="nav-link${l.href===activePage?' active':''}" style="${l.href===activePage?'color:var(--p1);font-weight:700':''}">${l.label}</a>`).join('');
  const mobileNav = NAV_LINKS.map(l=>`<a href="${l.href}" class="mobile-nav-link" onclick="closeMenu()">${l.label}</a>`).join('');
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
<header>
  <div class="header-inner">
    <a href="index.html"><img src="${WK}etanaLogo.png" alt="Waldkätzchen" style="height:42px"></a>
    <nav class="desktop-nav" style="display:flex;gap:1.2rem;align-items:center">
      ${nav}
      <a href="app.html" class="nav-cta">🌿 App</a>
    </nav>
    <button class="hamburger" onclick="toggleMenu()">
      <span id="hbg1"></span><span id="hbg2"></span><span id="hbg3"></span>
    </button>
  </div>
  <div id="mobile-menu">
    ${mobileNav}
    <a href="app.html" onclick="closeMenu()" style="background:var(--mood-accent);color:#fff;padding:1rem 1.25rem;border-radius:18px;font-family:'Quicksand',sans-serif;font-weight:700;font-size:1.1rem;display:block;margin-top:8px;transition:background 1s">🌿 App</a>
  </div>
</header>`;
}

function renderFooter(){
  return `
<section style="background:var(--p1);padding:5rem 0">
  <div class="container grid-2">
    <div>
      <div class="reveal"><div style="font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--s3);font-family:'Quicksand',sans-serif;margin-bottom:.6rem">Waldpost</div></div>
      <div class="reveal" style="transition-delay:.1s"><h2 style="color:#fff;font-size:clamp(1.4rem,2.5vw,2rem);margin-bottom:.9rem;line-height:1.3">Kleine Briefe<br>aus dem Wald</h2></div>
      <div class="reveal" style="transition-delay:.15s"><p style="color:rgba(255,255,255,.72);font-size:.92rem;line-height:1.8;margin-bottom:1.5rem">Unregelmäßig, dafür ehrlich: Impulse, Geschichten und Gedanken — direkt in deinen Posteingang.</p></div>
      <div class="reveal" style="transition-delay:.2s">
        <div style="display:flex;flex-direction:column;gap:.75rem">
          <input type="email" placeholder="Deine E-Mail-Adresse" class="nl-input">
          <button class="btn-primary" style="width:100%;justify-content:center">🌿 Dabei sein</button>
          <p style="font-size:.72rem;color:rgba(255,255,255,.4)">🔒 Kein Spam. Jederzeit abmeldbar.</p>
        </div>
      </div>
    </div>
    <div class="hide-mobile" style="display:flex;align-items:center;justify-content:center">
      <img src="${WK}katze-kissen-ruhe.png" alt="" style="width:160px;height:160px;object-fit:contain;filter:drop-shadow(0 8px 24px rgba(0,0,0,.25));animation:breathe 4s ease-in-out infinite">
    </div>
  </div>
</section>
<footer>
  <div class="footer-grid">
    <div>
      <a href="index.html"><img src="${WK}etanaLogo.png" alt="" style="height:42px;filter:brightness(0) invert(1) opacity(.85);margin-bottom:.6rem"></a>
      <div style="font-size:.7rem;opacity:.4;letter-spacing:.07em;font-family:'Quicksand',sans-serif;text-transform:uppercase;margin-bottom:.6rem">Wild und verbunden.</div>
      <div style="font-size:.72rem;font-weight:700;letter-spacing:.1em;color:var(--s3);font-family:'Quicksand',sans-serif;margin-bottom:1.25rem;text-transform:uppercase">Verstehen · Verbinden · Verändern</div>
      <div style="display:flex;gap:.7rem">
        <a href="#" class="social-btn">📷</a><a href="#" class="social-btn">▶</a><a href="#" class="social-btn">💬</a>
      </div>
    </div>
    <div>
      <h4 class="footer-h">Der Wald</h4>
      <a href="welt.html" class="footer-link">Die Welt</a>
      <a href="konzept.html" class="footer-link">Das Konzept</a>
      <a href="figuren.html" class="footer-link">Die Figuren</a>
      <a href="metaphern.html" class="footer-link">Die Metaphern</a>
    </div>
    <div>
      <h4 class="footer-h">Angebote</h4>
      <a href="coaching.html" class="footer-link">Coaching</a>
      <a href="angebote.html" class="footer-link">Waldabenteuer</a>
      <a href="angebote.html" class="footer-link">Kurse</a>
      <a href="app.html" class="footer-link">Die App</a>
    </div>
    <div>
      <h4 class="footer-h">Mehr</h4>
      <a href="ueber-mich.html" class="footer-link">Über mich</a>
      <a href="blog.html" class="footer-link">Blog &amp; Impulse</a>
      <a href="vaeter.html" class="footer-link">Für Väter</a>
      <a href="kontakt.html" class="footer-link">Kontakt</a>
      <a href="impressum.html" class="footer-link">Impressum</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p style="font-size:.75rem;color:rgba(255,255,255,.28)">© 2026 Waldkätzchen. Alle Rechte vorbehalten.</p>
    <p style="font-size:.75rem;color:rgba(255,255,255,.28)">Wild und verbunden.</p>
  </div>
</footer>`;
}

document.addEventListener('DOMContentLoaded', ()=>{
  setTheme(currentTheme);
  initReveal();
  initHeroCanvas();
});
