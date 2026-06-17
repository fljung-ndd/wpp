/* ═══════════════════════════════════════════════════════════
   WALDKÄTZCHEN — Shared JS
   Header, Navigation, Figuren, Metaphern, Hero-Atmosphäre
   ═══════════════════════════════════════════════════════════ */

// ── BASE URLS ────────────────────────────────────────────────────
const WK_ASSETS = 'https://wp.waldkaetzchen.de/wp-content/uploads/2026/05/';
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
  verbunden:{accent:'#2A8A7A', onAccent:'#FFFFFF'},
  ruhig:{accent:'#1A4018', onAccent:'#FFFFFF'},
  neugierig:{accent:'#E8C030', onAccent:'#3A2E10'},
  mutig:{accent:'#E87830', onAccent:'#3A1C08'},
  wild:{accent:'#D84878', onAccent:'#FFFFFF'}
};

const TIER_CARDS = [
  {
    id: 'luis',
    name: 'Luis',
    img: WK_ASSETS+'8635fe4c-40e7-4e5f-8a9f-33530784ac43-removebg-preview.png',
    thema: 'Chaos & Impuls',
    accent: '#E87830',
    bgColor: 'rgba(232,120,48,.08)',
    sichtbar: ['Laut werden', 'Toben', 'Dinge werfen', 'Weglaufen'],
    darunter: 'Überforderung, Reizüberflutung, echter Wunsch nach Verbindung',
    quote: '„Wenn alles zu viel wird, wird es laut.”',
    missverstaendnis: 'Wirkt aggressiv oder unerzogen — zeigt: Ich bin über meinem Limit.',
    welt: 'Lichtung',
    katze: 'Fühlerin',
    tags: ['Chaos', 'Impuls', 'Überreizung'],
  },
  {
    id: 'etana',
    name: 'Etana',
    img: WK_ASSETS+'etanaLogo.png',
    thema: 'Rückzug & Stille',
    accent: '#4AB8C8',
    bgColor: 'rgba(74,184,200,.08)',
    sichtbar: ['Schweigen', 'Sich einschließen', 'Nicht antworten', 'Verschwinden'],
    darunter: 'Schutz, Reizschutz, fehlende Sicherheit für Kontakt',
    quote: '„Wenn ich nicht da bin, kann mich nichts treffen.”',
    missverstaendnis: 'Gilt als pflegeleicht — zeigt: Ich habe keinen sicheren Weg mehr, in Kontakt zu bleiben.',
    welt: 'Höhle',
    katze: 'Beobachterin',
    tags: ['Rückzug', 'Schutz', 'Höhle'],
  },
  {
    id: 'elfriede',
    name: 'Elfriede',
    img: WK_ASSETS+'themen2.png',
    thema: 'Anpassung & Spannung',
    accent: '#2A8A7A',
    bgColor: 'rgba(42,138,122,.08)',
    sichtbar: ['Genau hinschauen', 'Wenig sagen', 'Abwarten', 'Struktur suchen'],
    darunter: 'Sicherheit durch Anpassung, innere Spannung wächst, Gefallenwollen',
    quote: '„Hauptsache, alle sind zufrieden.”',
    missverstaendnis: 'Gilt als unkompliziert — zeigt: Ich schlucke viel, damit es keine Reibung gibt.',
    welt: 'Alter Wald',
    katze: 'Denkerin',
    tags: ['Anpassung', 'Spannung', 'Gefallenwollen'],
  },
  {
    id: 'tigi',
    name: 'Tigi',
    img: WK_ASSETS+'reflexion.png',
    thema: 'Kontrolle & Macht',
    accent: '#D84878',
    bgColor: 'rgba(216,72,120,.07)',
    sichtbar: ['Alles organisieren', 'Laut bestimmen', 'Grenzen setzen', 'Kämpfen'],
    darunter: 'Angst vor Kontrollverlust, Sicherheit durch Macht',
    quote: '„Ich bestimme, was hier passiert.”',
    missverstaendnis: 'Wirkt frech oder respektlos — zeigt: Wenn ich nicht halte, fühle ich mich bedroht.',
    welt: 'Felsenmeer',
    katze: 'Systemblick',
    tags: ['Kontrolle', 'Macht', 'Grenze'],
  },
  {
    id: 'katarina',
    name: 'Kata-Rina',
    img: WK_ASSETS+'besprechungen.png',
    thema: 'Nähe & Bindung',
    accent: '#E8C030',
    bgColor: 'rgba(232,192,48,.08)',
    sichtbar: ['Klammern', 'Immer dabei sein wollen', 'Fragen stellen', 'Nachschauen'],
    darunter: 'Bindungsangst, Angst vor Trennung, Sehnsucht nach Sicherheit',
    quote: '„Bitte geh nicht weg. Bitte bleib nicht zu nah.”',
    missverstaendnis: 'Gilt als anstrengend — zeigt: Ich weiß nicht, ob ich sicher bin, wenn ich loslasse.',
    welt: 'Nebel',
    katze: 'Fühlerin',
    tags: ['Nähe', 'Klammern', 'Bindungsangst'],
  },
  {
    id: 'niko',
    name: 'Niko',
    img: WK_ASSETS+'helferNetzwerk.png',
    thema: 'Autonomie & Freiheit',
    accent: '#A8D5C2',
    bgColor: 'rgba(168,213,194,.12)',
    sichtbar: ['Alleine machen', 'Ablehnen von Hilfe', 'Eigene Wege gehen', 'Grenzen zeigen'],
    darunter: 'Selbstbestimmung als Sicherheit, Autonomie als Schutz',
    quote: '„Ich muss nicht in eine Schublade passen.”',
    missverstaendnis: 'Gilt als rebellisch — zeigt: Ich brauche Kontrolle über mich, um mich sicher zu fühlen.',
    welt: 'Lichtung',
    katze: 'Macherin',
    tags: ['Autonomie', 'Freiheit', 'Eigenweg'],
  },
  {
    id: 'iella',
    name: 'Iella',
    img: WK_ASSETS+'katze-kissen-ruhe.png',
    thema: 'Stabilität & Selbstwert',
    accent: '#FFD23F',
    bgColor: 'rgba(255,210,63,.08)',
    sichtbar: ['Ruhig bleiben', 'Ausgleichen', 'Verlässlich da sein', 'Wenig Drama'],
    darunter: 'Innere Stabilität, Selbstwert, Fähigkeit zu regulieren',
    quote: '„Ich weiß, wer ich bin. Das reicht.”',
    missverstaendnis: 'Wirkt unberührt — zeigt: Ich bin geerdet und brauche kein Drama für Verbindung.',
    welt: 'Lichtung',
    katze: 'Beobachterin',
    tags: ['Stabilität', 'Klarheit', 'Selbstwert'],
  },
  {
    id: 'wadda',
    name: 'Wadda',
    img: WK_ASSETS+'uebersicht.png',
    thema: 'Reduktion & Sprachlosigkeit',
    accent: '#8090A0',
    bgColor: 'rgba(128,144,160,.07)',
    sichtbar: ['Schweigen', 'Schulterzucken', 'Abflachen', 'Nicht-Reagieren'],
    darunter: 'Erschöpfung, fehlender Zugang zu Sprache, tiefer Rückzug',
    quote: '„Ich mach mich einfach kleiner.”',
    missverstaendnis: 'Gilt als desinteressiert — zeigt: Ich habe keinen sicheren Zugang mehr zu Kontakt.',
    welt: 'Alter Wald',
    katze: 'Beobachterin',
    tags: ['Reduktion', 'Stille', 'Rückzug'],
  },
];

const WALDKATZEN_WERKZEUGE = [
  {
    id: 'beobachterin',
    name: 'Beobachterin',
    farbe: '#4AB8C8',
    farbeBg: '#EAF8FA',
    farbeDark: '#1A6A78',
    icon: '🔭',
    rolle: 'Sehen · Beschreiben',
    stimme: 'Ich sehe …',
    funktion: 'Trennt Beobachtung von Bewertung. Bringt Ruhe in aufgeladene Situationen. Hilft, aus Drama in Klarheit zu kommen.',
  },
  {
    id: 'fuehlerin',
    name: 'Fühlerin',
    farbe: '#2A8A7A',
    farbeBg: '#E4F5F2',
    farbeDark: '#124840',
    icon: '🫀',
    rolle: 'Spüren · Übersetzen',
    stimme: 'Ich spüre …',
    funktion: 'Benennt Gefühle. Übersetzt Verhalten in innere Not, Sehnsucht oder Schutz. Bringt Wärme ohne Weichspülen.',
  },
  {
    id: 'denkerin',
    name: 'Denkerin',
    farbe: '#E8C030',
    farbeBg: '#FEFAE8',
    farbeDark: '#8A6C10',
    icon: '🧩',
    rolle: 'Einordnen · Muster sehen',
    stimme: 'Ich vermute …',
    funktion: 'Verbindet Verhalten, Gefühle und mögliche Gründe. Macht Muster sichtbar. Bringt Ordnung ins Durcheinander.',
  },
  {
    id: 'systemblick',
    name: 'Systemblick',
    farbe: '#E87830',
    farbeBg: '#FEF2E8',
    farbeDark: '#8A4010',
    icon: '🌐',
    rolle: 'Weitsicht · Umfeld',
    stimme: 'Ich sehe im Umfeld …',
    funktion: 'Holt den Blick weg vom Kind hin zum Umfeld. Ersetzt Schuld durch Zusammenhang. Sieht nie nur das Kind — sieht den ganzen Wald.',
  },
  {
    id: 'macherin',
    name: 'Macherin',
    farbe: '#D84878',
    farbeBg: '#FDE8F0',
    farbeDark: '#7A1E3E',
    icon: '👣',
    rolle: 'Nächster Schritt · Lösungen',
    stimme: 'Ein möglicher nächster Schritt …',
    funktion: 'Drängt nicht, bringt aber Bewegung rein. Denkt klein, konkret und machbar. Hilft, aus Ohnmacht in erste Schritte zu kommen.',
  },
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
  const overlays={
    morning:'radial-gradient(circle at 42% 26%,rgba(253,243,192,.18),transparent 36%),linear-gradient(90deg,rgba(50,28,8,.58),rgba(8,79,63,.38) 48%,rgba(8,38,30,.58))',
    day:'radial-gradient(circle at 46% 30%,rgba(253,243,192,.12),transparent 34%),linear-gradient(90deg,rgba(8,79,63,.70),rgba(8,79,63,.34) 50%,rgba(8,79,63,.62))',
    dusk:'radial-gradient(circle at 70% 22%,rgba(232,120,48,.18),transparent 34%),linear-gradient(90deg,rgba(42,14,5,.76),rgba(60,20,5,.48) 48%,rgba(11,26,22,.72))',
    night:'radial-gradient(circle at 50% 22%,rgba(74,184,200,.12),transparent 34%),linear-gradient(90deg,rgba(4,13,30,.82),rgba(4,13,30,.58) 48%,rgba(3,10,20,.86))'
  };
  const ho = document.getElementById('hero-overlay');
  if(ho) ho.style.background = overlays[t];
  document.querySelectorAll('[data-theme]').forEach(b=>{
    const active=b.dataset.theme===t;
    b.style.background=active?'#084F3F':'transparent';
    b.style.color=active?'#fff':'';
    b.style.borderColor=active?'rgba(255,255,255,.24)':'';
  });
}

function setWeather(w){
  currentWeather=w;
  document.querySelectorAll('[data-weather]').forEach(b=>{
    const active=b.dataset.weather===w;
    b.style.background=active?'#2A8A7A':'transparent';
    b.style.color=active?'#fff':'';
    b.style.borderColor=active?'rgba(255,255,255,.24)':'';
  });
}

function setMood(m){
  const moodOverlay = document.getElementById('mood-overlay');
  if(currentMood===m){
    currentMood=null;
    if(moodOverlay) moodOverlay.style.background='transparent';
    document.documentElement.style.setProperty('--mood-accent','#D84878');
    document.documentElement.style.setProperty('--mood-on-accent','#FFFFFF');
    document.querySelectorAll('[data-mood]').forEach(b=>{
      b.style.background='transparent';
      b.style.color='';
      b.style.borderColor='';
      b.style.textShadow='';
    });
    return;
  }
  currentMood=m;
  const mood = MOODS[m] || MOODS.wild;
  const acc=mood.accent;
  const onAcc=mood.onAccent || '#FFFFFF';
  if(moodOverlay) moodOverlay.style.background=acc+'18';
  document.documentElement.style.setProperty('--mood-accent',acc);
  document.documentElement.style.setProperty('--mood-on-accent',onAcc);
  document.querySelectorAll('[data-mood]').forEach(b=>{
    const active=b.dataset.mood===m;
    const itemMood = MOODS[b.dataset.mood] || mood;
    b.style.background=active?itemMood.accent:'transparent';
    b.style.color=active?(itemMood.onAccent || '#FFFFFF'):'';
    b.style.borderColor=active?'rgba(255,255,255,.3)':'';
    b.style.textShadow=active && itemMood.onAccent === '#FFFFFF' ? '0 1px 2px rgba(0,0,0,.28)' : '';
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
    a.href='figuren.html#'+t.id;
    a.className='figur-card reveal';
    a.style.transitionDelay=(i*.1)+'s';
    a.innerHTML=`
      <div class="figur-card-img">
        <div class="figur-card-img-bg" style="background:${t.bgColor}"></div>
        <img src="${t.img}" alt="${t.name}" loading="lazy" decoding="async">
        <div style="position:absolute;top:.6rem;right:.6rem;background:${t.accent}22;border:1px solid ${t.accent}44;border-radius:999px;padding:2px 8px;font-size:.6rem;font-family:'Quicksand',sans-serif;font-weight:700;color:${t.accent}">${t.welt}</div>
      </div>
      <div class="figur-card-body">
        <div class="figur-card-name dk-h">${t.name}</div>
        <div class="figur-card-role" style="color:${t.accent}">${t.thema}</div>
        <p class="figur-card-desc dk-mid">${t.darunter}</p>
        <p class="figur-card-quote dk-soft" style="border-color:${t.accent}">${t.quote}</p>
        <div style="margin-top:.6rem;font-size:.72rem;color:var(--textSoft);padding-top:.5rem;border-top:1px solid rgba(8,79,63,.08)">↳ ${t.missverstaendnis}</div>
      </div>`;
    el.appendChild(a);
  });
  refreshReveal(el);
}

function buildWaldkatzenWerkzeuge(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML='';
  WALDKATZEN_WERKZEUGE.forEach((k,i)=>{
    const card = document.createElement('div');
    card.className = 'katze-karte reveal';
    card.style.transitionDelay = (i*.08)+'s';
    card.style.borderLeftColor = k.farbe;
    card.innerHTML = `
      <div class="katze-karte-icon" style="background:${k.farbeBg}">${k.icon}</div>
      <div class="katze-karte-name" style="color:${k.farbeDark}">${k.name}</div>
      <div class="katze-karte-rolle" style="color:${k.farbe}">${k.rolle}</div>
      <div class="katze-karte-text">${k.funktion}</div>
      <div class="katze-karte-stimme">„${k.stimme}"</div>`;
    el.appendChild(card);
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
    d.style.cssText='flex-shrink:0;width:280px;scroll-snap-align:start;border-radius:20px;background:#fff;border:1px solid rgba(8,79,63,.08);padding:1rem;box-shadow:0 4px 24px rgba(8,79,63,.07)';
    d.innerHTML=`<div class="impulse-img"><img src="${c.img}" alt="${c.title}" loading="lazy"></div><div class="impulse-cat">${c.cat}</div><div class="impulse-title">${c.title}</div><p class="impulse-text">${c.text}</p>`;
    el.appendChild(d);
  });
}

function buildAccordion(containerId){
  const el=document.getElementById(containerId);
  if(!el) return;
  el.innerHTML='';
  FAQ.forEach((f,i)=>{
    const item=document.createElement('div');
    item.className='accordion-item';
    item.innerHTML=`<button class="accordion-btn" onclick="toggleAcc(${i})"><span class="accordion-q">${f.q}</span><span class="accordion-icon" id="ai-${i}">+</span></button><div class="accordion-body" id="ab-${i}"><p class="accordion-a">${f.a}</p></div>`;
    el.appendChild(item);
  });
}

function toggleAcc(i){
  document.querySelectorAll('.accordion-body').forEach((b,j)=>{if(j!==i){b.classList.remove('open');document.getElementById('ai-'+j)?.classList.remove('open');}});
  document.getElementById('ab-'+i)?.classList.toggle('open');
  document.getElementById('ai-'+i)?.classList.toggle('open');
}

function scrollSlider(id,dir){
  document.getElementById(id)?.scrollBy({left:dir*320,behavior:'smooth'});
}

function buildEchos(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML='';
  ECHOS.forEach((e,i)=>{
    const card = document.createElement('div');
    card.className = 'reveal';
    card.style.transitionDelay = (i*.08)+'s';
    card.style.cssText += `padding:1.35rem;border-radius:20px;background:${e.color}10;border:1px solid ${e.color}30;display:flex;flex-direction:column;gap:.7rem;`;
    card.innerHTML = `
      <div style="display:inline-flex;align-self:flex-start;padding:4px 10px;border-radius:999px;background:${e.labelColor}25;color:${e.color};font-size:.65rem;font-family:'Quicksand',sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.08em">${e.label}</div>
      <p style="font-family:'Quicksand',sans-serif;font-size:.95rem;font-weight:800;line-height:1.55;color:var(--p1)" class="dk-h">${e.quote}</p>
      <p style="font-size:.82rem;line-height:1.65;color:var(--textMid)" class="dk-mid">${e.response}</p>`;
    el.appendChild(card);
  });
  refreshReveal(el);
}

function buildWorld(containerId, detailId){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = '';
  WORLD_ITEMS.forEach((w,idx)=>{
    const button = document.createElement('button');
    button.type='button';
    button.className='world-item'+(idx===0?' active':'');
    button.dataset.world=w.key;
    button.style.setProperty('--world-bg',w.bg);
    button.style.setProperty('--world-text',w.text);
    button.style.setProperty('--world-sub',w.sub);
    button.style.setProperty('--world-tag-bg',w.tagBg);
    button.innerHTML=`<span class="world-item-icon">${w.icon}</span><span class="world-item-body"><strong>${w.name}</strong><em>${w.desc}</em></span><span class="world-item-tag">${w.tag}</span>`;
    button.addEventListener('click',()=>selectWorld(w.key, detailId, containerId));
    el.appendChild(button);
  });
  renderWorldDetail(WELTEN[0], detailId);
}

function selectWorld(key, detailId, containerId){
  const data = WELTEN.find(w=>w.id===key);
  if(!data) return;
  document.querySelectorAll(`#${containerId} .world-item`).forEach(item=>item.classList.toggle('active',item.dataset.world===key));
  renderWorldDetail(data, detailId);
}

function renderWorldDetail(data, detailId){
  const detail = document.getElementById(detailId);
  if(!detail) return;
  detail.style.background = data.bg;
  detail.style.color = data.text;
  detail.innerHTML = `<div class="world-detail-top"><div><span class="world-detail-kicker" style="background:${data.tagBg};color:${data.text}">${data.tag}</span><h3>${data.icon} ${data.name}</h3><p style="color:${data.sub}">${data.kw}</p></div></div><p class="world-detail-copy" style="color:${data.text}">${data.desc}</p><div class="world-detail-meta"><div><strong>Begegnet:</strong><span>${data.tiere.join(' · ')}</span></div><div><strong>Hilft:</strong><span>${data.angebote.join(' · ')}</span></div></div>`;
}

// ── INTERSECTION OBSERVER ─────────────────────────────────────────
function refreshReveal(scope=document){
  const els=scope.querySelectorAll('.reveal:not([data-observed])');
  if(!els.length) return;
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});
  els.forEach(el=>{el.dataset.observed='1';observer.observe(el);});
}

// ── HERO CANVAS ────────────────────────────────────────────────────
function initHeroCanvas(){
  const canvas=document.getElementById('hero-canvas');
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  const COLORS=['74,184,200','42,138,122','232,192,48','216,72,120','232,120,48'];
  let particles=[];
  const resize=()=>{canvas.width=innerWidth;canvas.height=innerHeight;};
  resize();
  addEventListener('resize',resize);
  function mkP(){
    return{
      x:Math.random()*innerWidth,
      y:Math.random()*innerHeight,
      r:Math.random()*3.5+0.8,
      sx:(Math.random()-.5)*.35,
      sy:-(Math.random()*.55+.08),
      alpha:Math.random()*.6+.1,
      alphaDir:Math.random()>.5?1:-1,
      alphaSpd:Math.random()*.007+.002,
      col:COLORS[Math.floor(Math.random()*COLORS.length)]
    };
  }
  for(let i=0;i<55;i++) particles.push(mkP());
  (function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.x+=p.sx; p.y+=p.sy;
      p.alpha+=p.alphaDir*p.alphaSpd;
      if(p.alpha>0.82||p.alpha<0.04) p.alphaDir*=-1;
      if(p.y<-10||p.x<-10||p.x>canvas.width+10){p.x=Math.random()*canvas.width;p.y=canvas.height+10;}
      ctx.save();
      ctx.shadowBlur=p.r*10;
      ctx.shadowColor='rgba('+p.col+',0.9)';
      ctx.fillStyle='rgba('+p.col+','+p.alpha+')';
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(draw);
  })();
}

// ── HEADER / FOOTER ────────────────────────────────────────────────
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
<a class="situation-fab" href="app.html" aria-label="Situation festhalten">📝 <span>Situation</span></a>
<nav class="site-nav" id="site-nav" role="navigation" aria-label="Hauptnavigation">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html" aria-label="Waldkätzchen Startseite"><span class="logo-mark" aria-hidden="true">🌿</span>waldkätzchen</a>
    <div class="nav-links" role="menubar">
      <a class="nav-link${active('index.html')}" href="index.html" role="menuitem">Die Lichtung</a>
      <button class="nav-link" id="dd-trigger" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="dd-panel" type="button">Die Welten <span class="dd-caret" aria-hidden="true">▾</span></button>
      <a class="nav-link${active('tiere.html')}" href="tiere.html" role="menuitem">Die Tiere</a>
      <a class="nav-link nl-vaeter${active('vaeter.html')}" href="vaeter.html" role="menuitem">Für Väter</a>
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
  <div class="mob-welten">${mobileWorldMarkup()}</div>
  <a class="mob-link" href="tiere.html" data-close>Die Tiere <span class="caret">→</span></a>
  <a class="mob-link ml-vaeter" href="vaeter.html" data-close>Für Väter <span class="caret">→</span></a>
  <a class="mob-link" href="blog.html" data-close>Impulse <span class="caret">→</span></a>
  <a class="btn-primary mob-cta" href="kontakt.html">Erstgespräch anfragen</a>
  <div style="display:flex;gap:1.5rem;justify-content:center;padding:.75rem 0 .25rem;border-top:1px solid rgba(255,255,255,.1);margin-top:.5rem"><a href="impressum.html" style="font-size:.82rem;color:rgba(200,240,220,.78);font-weight:700;font-family:'Quicksand',sans-serif">Impressum</a><a href="impressum.html#datenschutz" style="font-size:.82rem;color:rgba(200,240,220,.78);font-weight:700;font-family:'Quicksand',sans-serif">Datenschutz</a></div>
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
    <div><h4 class="footer-h">Mehr</h4><a href="vaeter.html" class="footer-link">Für Väter</a><a href="blog.html" class="footer-link">Impulse</a><a href="ueber-mich.html" class="footer-link">Über mich</a><a href="kontakt.html" class="footer-link">Kontakt</a><a href="impressum.html" class="footer-link">Impressum</a></div>
  </div>
  <div class="footer-bottom"><div style="font-size:.75rem;color:rgba(255,255,255,.35)">© 2026 Waldkätzchen. Wild und verbunden.</div><div style="display:flex;gap:1.5rem"><a href="impressum.html" class="footer-link" style="font-size:.75rem;margin:0">Impressum</a><a href="impressum.html#datenschutz" class="footer-link" style="font-size:.75rem;margin:0">Datenschutz</a></div></div>
</footer>`;
}

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

// ── INIT ───────────────────────────────────────────────────────────
addEventListener('DOMContentLoaded',()=>{
  setTheme(currentTheme);
  setWeather(currentWeather);
  refreshReveal();
  initHeroCanvas();
  initRichNavigation();
});
