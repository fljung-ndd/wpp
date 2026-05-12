<?php
/**
 * Title: WK – Die Welt
 * Slug: waldkaetzchen/wk-die-welt
 * Categories: waldkaetzchen-pages
 * Description: Musterseite für die Welt von Waldkätzchen mit Hero, Räumen, App-Hinweis und CTA.
 * Keywords: Waldkätzchen, Die Welt, Räume, Hero
 * Viewport Width: 1440
 */
?>
<!-- wp:group {"align":"full","className":"wk-pattern-page wk-page-world-pattern","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull wk-pattern-page wk-page-world-pattern">

  <!-- wp:group {"align":"full","className":"wk-pattern-hero wk-pattern-hero--world","layout":{"type":"constrained"}} -->
  <div class="wp-block-group alignfull wk-pattern-hero wk-pattern-hero--world">
    <!-- wp:columns {"verticalAlignment":"center","className":"wk-hero-columns"} -->
    <div class="wp-block-columns are-vertically-aligned-center wk-hero-columns">
      <!-- wp:column {"verticalAlignment":"center","width":"56%"} -->
      <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:56%">
        <!-- wp:paragraph {"className":"wk-eyebrow"} -->
        <p class="wk-eyebrow">Die Welt von Waldkätzchen</p>
        <!-- /wp:paragraph -->

        <!-- wp:heading {"level":1,"className":"wk-display-title"} -->
        <h1 class="wp-block-heading wk-display-title">Ein Ort zum Ankommen, Verstehen und Weitergehen.</h1>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"className":"wk-lead-copy"} -->
        <p class="wk-lead-copy">Waldkätzchen hilft, Verhalten nicht vorschnell zu bewerten, sondern Kontext, Gefühle und nächste Schritte gemeinsam zu sehen.</p>
        <!-- /wp:paragraph -->

        <!-- wp:buttons {"className":"wk-button-row"} -->
        <div class="wp-block-buttons wk-button-row">
          <!-- wp:button {"className":"wk-btn-primary"} -->
          <div class="wp-block-button wk-btn-primary"><a class="wp-block-button__link wp-element-button">Die Welt entdecken</a></div>
          <!-- /wp:button -->
          <!-- wp:button {"className":"wk-btn-secondary"} -->
          <div class="wp-block-button wk-btn-secondary"><a class="wp-block-button__link wp-element-button">Zur Lichtung</a></div>
          <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->
      </div>
      <!-- /wp:column -->

      <!-- wp:column {"verticalAlignment":"center","width":"44%","className":"wk-hero-media-column"} -->
      <div class="wp-block-column is-vertically-aligned-center wk-hero-media-column" style="flex-basis:44%">
        <!-- wp:group {"className":"wk-image-placeholder wk-image-placeholder--hero","layout":{"type":"constrained"}} -->
        <div class="wp-block-group wk-image-placeholder wk-image-placeholder--hero">
          <!-- wp:paragraph -->
          <p>Hero-Illustration oder Waldszene einfügen</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
  </div>
  <!-- /wp:group -->

  <!-- wp:group {"align":"full","className":"wk-wave-section wk-world-intro","layout":{"type":"constrained"}} -->
  <div class="wp-block-group alignfull wk-wave-section wk-world-intro">
    <!-- wp:heading {"textAlign":"center","level":2} -->
    <h2 class="wp-block-heading has-text-align-center">Die Räume, die mitgehen</h2>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"align":"center","className":"wk-section-intro"} -->
    <p class="has-text-align-center wk-section-intro">Nebel, Höhle, Echos und alte Bäume sind keine Deko. Sie machen sichtbar, was im Familienalltag oft unsichtbar bleibt.</p>
    <!-- /wp:paragraph -->

    <!-- wp:columns {"className":"wk-card-grid wk-room-grid"} -->
    <div class="wp-block-columns wk-card-grid wk-room-grid">
      <!-- wp:column -->
      <div class="wp-block-column">
        <!-- wp:group {"className":"wk-story-card wk-room-card wk-room-card--fog","layout":{"type":"constrained"}} -->
        <div class="wp-block-group wk-story-card wk-room-card wk-room-card--fog">
          <!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Der Nebel</h3><!-- /wp:heading -->
          <!-- wp:paragraph --><p>Wenn Gedanken kreisen, Sorgen lauter werden und der Weg nicht klar ist.</p><!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:column -->
      <!-- wp:column -->
      <div class="wp-block-column">
        <!-- wp:group {"className":"wk-story-card wk-room-card wk-room-card--cave","layout":{"type":"constrained"}} -->
        <div class="wp-block-group wk-story-card wk-room-card wk-room-card--cave">
          <!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Die Höhle</h3><!-- /wp:heading -->
          <!-- wp:paragraph --><p>Ein Ort für Schutz, Rückzug und das Bedürfnis, nicht weiter funktionieren zu müssen.</p><!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:column -->
      <!-- wp:column -->
      <div class="wp-block-column">
        <!-- wp:group {"className":"wk-story-card wk-room-card wk-room-card--echo","layout":{"type":"constrained"}} -->
        <div class="wp-block-group wk-story-card wk-room-card wk-room-card--echo">
          <!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Die Echos</h3><!-- /wp:heading -->
          <!-- wp:paragraph --><p>Alte Stimmen und Sätze, die nachhallen, obwohl sie heute nicht mehr passen.</p><!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:column -->
      <!-- wp:column -->
      <div class="wp-block-column">
        <!-- wp:group {"className":"wk-story-card wk-room-card wk-room-card--trees","layout":{"type":"constrained"}} -->
        <div class="wp-block-group wk-story-card wk-room-card wk-room-card--trees">
          <!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Die alten Bäume</h3><!-- /wp:heading -->
          <!-- wp:paragraph --><p>Frühere Erfahrungen, Erwartungen und Muster, die heute noch mitreden.</p><!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
  </div>
  <!-- /wp:group -->

  <!-- wp:group {"align":"full","className":"wk-split-panel wk-world-purpose","layout":{"type":"constrained"}} -->
  <div class="wp-block-group alignfull wk-split-panel wk-world-purpose">
    <!-- wp:columns {"verticalAlignment":"center"} -->
    <div class="wp-block-columns are-vertically-aligned-center">
      <!-- wp:column {"verticalAlignment":"center"} -->
      <div class="wp-block-column is-vertically-aligned-center">
        <!-- wp:paragraph {"className":"wk-eyebrow"} --><p class="wk-eyebrow">Wofür das Ganze?</p><!-- /wp:paragraph -->
        <!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Nicht bewerten. Sondern verstehen.</h2><!-- /wp:heading -->
        <!-- wp:paragraph --><p>Waldkätzchen lädt dazu ein, genauer hinzuschauen: Was zeigt sich? Was steckt dahinter? Was hilft jetzt wirklich?</p><!-- /wp:paragraph -->
        <!-- wp:list {"className":"wk-check-list"} -->
        <ul class="wk-check-list"><li>Verhalten im Kontext sehen</li><li>Gefühle und Bedürfnisse ernst nehmen</li><li>Kleine nächste Schritte finden</li></ul>
        <!-- /wp:list -->
      </div>
      <!-- /wp:column -->
      <!-- wp:column {"verticalAlignment":"center"} -->
      <div class="wp-block-column is-vertically-aligned-center">
        <!-- wp:group {"className":"wk-image-placeholder wk-image-placeholder--tall","layout":{"type":"constrained"}} -->
        <div class="wp-block-group wk-image-placeholder wk-image-placeholder--tall"><!-- wp:paragraph --><p>Konzeptgrafik oder Szene einfügen</p><!-- /wp:paragraph --></div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
  </div>
  <!-- /wp:group -->

  <!-- wp:group {"align":"full","className":"wk-app-banner","layout":{"type":"constrained"}} -->
  <div class="wp-block-group alignfull wk-app-banner">
    <!-- wp:columns {"verticalAlignment":"center"} -->
    <div class="wp-block-columns are-vertically-aligned-center">
      <!-- wp:column {"verticalAlignment":"center","width":"58%"} -->
      <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:58%">
        <!-- wp:paragraph {"className":"wk-eyebrow"} --><p class="wk-eyebrow">Dein Waldraum – immer dabei</p><!-- /wp:paragraph -->
        <!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Die Lichtung führt das Konzept in den Alltag.</h2><!-- /wp:heading -->
        <!-- wp:paragraph --><p>In der App werden Impulse, Reflexionen und Begleitung aus der Welt von Waldkätzchen erlebbar.</p><!-- /wp:paragraph -->
        <!-- wp:buttons --><div class="wp-block-buttons"><!-- wp:button {"className":"wk-btn-primary"} --><div class="wp-block-button wk-btn-primary"><a class="wp-block-button__link wp-element-button">Zur App</a></div><!-- /wp:button --></div><!-- /wp:buttons -->
      </div>
      <!-- /wp:column -->
      <!-- wp:column {"verticalAlignment":"center","width":"42%"} -->
      <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:42%">
        <!-- wp:group {"className":"wk-image-placeholder wk-image-placeholder--phones","layout":{"type":"constrained"}} -->
        <div class="wp-block-group wk-image-placeholder wk-image-placeholder--phones"><!-- wp:paragraph --><p>App-Screens / Smartphone-Mockups einfügen</p><!-- /wp:paragraph --></div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
  </div>
  <!-- /wp:group -->

</div>
<!-- /wp:group -->
