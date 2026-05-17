# Startseite zusammenführen – nächste Integrationsphase

## Ziel

Die in den Issues #27, #28, #30, #31 und #32 entwickelten Bausteine werden jetzt nicht mehr isoliert weiterentwickelt, sondern in eine neue, zusammenhängende `index.html` integriert.

Die Startseite soll danach deutlich klarer erzählen:

1. **Worum es bei Waldkätzchen geht**
2. **Warum es Waldkätzchen gibt**
3. **Wie der Wald als Konzept hilft**
4. **Wie die fünf Waldkätzchen auf Situationen schauen**
5. **Wer im Wald lebt**
6. **Dass Waldkätzchen ohne Druck mitwächst**

---

## Was bleibt aus der aktuellen index.html

Diese bestehenden Bereiche bleiben erhalten:

1. Hero
2. Icon-Bar
3. Kern-Aussage „Verhalten ist eine Sprache“
4. „Kennst du das Gefühl?“
5. Für wen
6. Angebote
7. Impulse / Waldtagebuch
8. FAQ
9. Header / Footer

---

## Was ersetzt wird

### 1. Alter Waldorte-Bereich wird ersetzt
Der bisherige Abschnitt

- `<!-- ═══ DIE WALDORTE ═══ -->`

wird durch den neuen Baustein aus

- `index-waldwelt-issue28.html`

ersetzt.

### 2. Alter Echos-Block entfällt vorerst auf der Startseite
Der große separate Bereich

- `<!-- ═══ DIE ECHOS ═══ -->`

wird auf der Startseite entfernt, weil die Echos bereits stärker und konzeptionell sauberer in der neuen Waldwelt-Section enthalten sind.

Die Echos bleiben als vertiefende Unterseite / eigener Inhalt relevant, müssen aber nicht in dieser Dichte direkt auf der Landingpage stehen.

### 3. Alte Figuren-Section wird ersetzt
Der bisherige Abschnitt

- `<!-- ═══ DIE FIGUREN ═══ -->`

wird durch

- `index-tiere-issue32.html`

ersetzt.

### 4. Alter Waldkätzchen-Block wird ersetzt
Der bisherige Abschnitt

- `<!-- ═══ DIE 5 WALDKÄTZCHEN ═══ -->`

wird durch

- `index-waldkaetzchen-issue31.html`

ersetzt.

---

## Was neu eingefügt wird

### 1. Persönlicher Storybereich nach „Kennst du das Gefühl?“
Direkt nach dem Abschnitt

- `<!-- ═══ KENNST DU DAS GEFÜHL ═══ -->`

kommt:

- `index-story-issue27.html`

### 2. Mitwachsen-Bereich nach Figurenwelt / vor Zielgruppen oder später nach Situationen
Da der Situations-Slider noch aus Issue #29 fehlt, wird `Mitwachsen` in der ersten Integrationsphase vorläufig nach der Tierwelt platziert.

Sobald Issue #29 umgesetzt ist, soll die finale Reihenfolge sein:

- Waldkätzchen
- Waldtiere
- Situationen-Slider
- Mitwachsen
- Für wen

Vorläufige Reihenfolge ohne Slider:

- Waldkätzchen
- Waldtiere
- Mitwachsen
- Für wen

---

## Neue Zielreihenfolge der index.html – Phase 1

1. Hero
2. Icon-Bar
3. Verhalten ist eine Sprache
4. Kennst du das Gefühl?
5. Warum es Waldkätzchen gibt **neu**
6. Die Waldwelt **neu / ersetzt alten Wald-Bereich**
7. Die 5 Waldkätzchen **neu / ersetzt alten Katzen-Bereich**
8. Die Waldtiere **neu / ersetzt alten Figuren-Bereich**
9. Mitwachsen **neu**
10. Für wen
11. Angebote
12. Über mich – **prüfen, ob kürzen oder später verschieben**
13. Impulse
14. FAQ
15. Footer

---

## Wichtige Integrationsentscheidung

### „Über mich“ in aktueller Form prüfen
Der vorhandene Abschnitt „Über mich“ enthält bereits Teile der persönlichen Waldkätzchen-Story. Da diese Story jetzt deutlich stärker und früher im neuen Bereich „Warum es Waldkätzchen gibt“ erzählt wird, droht eine inhaltliche Dopplung.

Für die erste Zusammenführung kann der Abschnitt noch bleiben.
Danach sollte entschieden werden:

- Variante A: „Über mich“ stark kürzen und als Vertrauensanker belassen
- Variante B: durch einen kompakteren „Heilpädagogisch fundiert & persönlich“-Block ersetzen
- Variante C: ganz auf die Unterseite `ueber-mich.html` verweisen

---

## CSS-Strategie

Die bisherigen neuen Bausteine bringen ihre Styles jeweils als eingebettete `<style>`-Blöcke mit.

Für die erste Zusammenführung ist das akzeptabel, um schnell die Dramaturgie sichtbar zu machen.

In einem späteren Refactoring sollten die neuen Styles gesammelt werden in z. B.:

- `wk-startseite-sections.css`

oder bestehend passend in:

- `wk.css`

---

## Empfohlener nächster Umsetzungsschritt

### Issue: Startseite integrieren / Index neu aufbauen

Jetzt sollte ein neues Integrationsissue oder direkt eine Umsetzung erfolgen:

- vollständige neue `index.html` erstellen
- Bausteine aus #27, #28, #31, #32, #30 in Reihenfolge einfügen
- alte doppelte Bereiche entfernen
- bestehende unteren Bereiche beibehalten
- erste Konsistenzprüfung mobile / Desktop

---

## Empfehlung

Nicht mehr weiter isolierte Sections bauen, bevor die Startseite einmal als Ganzes sichtbar ist.

Jetzt ist der richtige Zeitpunkt für:

> **Integration statt weiterer Einzelbausteine.**

Erst wenn die neue Startseite als kompletter Erzählfluss steht, werden:

- Textlängen
- Wiederholungen
- CTA-Reihenfolge
- Übergänge
- mobile Höhe
- visuelle Dichte

wirklich sinnvoll beurteilt.
