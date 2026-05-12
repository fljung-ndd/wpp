<?php
/**
 * Front page template.
 *
 * Die Startseite ist bewusst als Marken- und Einstiegsseite aufgebaut.
 * Textliche Feinheiten können später weiter geschärft werden.
 */

get_header();
?>

<section class="wk-home-hero" aria-labelledby="wk-home-title">
    <div class="wk-home-hero__veil" aria-hidden="true"></div>
    <div class="wk-home-hero__glow" aria-hidden="true"></div>

    <div class="wk-home-hero__inner">
        <p class="wk-eyebrow">Waldkätzchen</p>
        <h1 id="wk-home-title">Wenn Familienalltag im Nebel liegt, hilft ein anderer Blick.</h1>
        <p class="wk-home-hero__lead">
            Waldkätzchen hilft, Verhalten nicht vorschnell zu bewerten, sondern Gefühle,
            Gedanken, Umfeld und nächste Schritte gemeinsam zu verstehen.
        </p>

        <div class="wk-home-hero__actions">
            <a class="wk-button wk-button--light" href="/lichtung">Lichtung betreten</a>
            <a class="wk-button wk-button--glass" href="/die-welt">Die Welt entdecken</a>
        </div>
    </div>
</section>

<section class="wk-home-section wk-home-nebel" aria-labelledby="wk-nebel-title">
    <div class="wk-section-shell wk-split">
        <div class="wk-split__copy">
            <p class="wk-eyebrow wk-eyebrow--dark">Wenn es unübersichtlich wird</p>
            <h2 id="wk-nebel-title">Manchmal ist nicht das Kind das Problem. Sondern der Nebel um die Situation.</h2>
            <p>
                Ein Konflikt eskaliert. Rückzug wirkt wie Verweigerung. Ein Satz trifft viel härter,
                als er sollte. Im Waldkätzchen-Blick geht es nicht zuerst um die schnelle Lösung,
                sondern um die Frage: Was ist hier eigentlich gerade los?
            </p>
        </div>

        <div class="wk-symbol-cluster" aria-label="Waldkätzchen-Symbolwelt">
            <article class="wk-symbol-card wk-symbol-card--fog">
                <span class="wk-symbol-card__mark" aria-hidden="true">🌫</span>
                <h3>Nebel</h3>
                <p>Überforderung, Unklarheit, Gedankenkreisen.</p>
            </article>
            <article class="wk-symbol-card wk-symbol-card--echo">
                <span class="wk-symbol-card__mark" aria-hidden="true">〰</span>
                <h3>Echos</h3>
                <p>Alte Stimmen, Bewertungen und innere Wiederholungen.</p>
            </article>
            <article class="wk-symbol-card wk-symbol-card--cave">
                <span class="wk-symbol-card__mark" aria-hidden="true">◔</span>
                <h3>Höhle</h3>
                <p>Schutz, Rückzug und das Bedürfnis nach Sicherheit.</p>
            </article>
        </div>
    </div>
</section>

<section class="wk-home-section wk-home-idea" aria-labelledby="wk-idea-title">
    <div class="wk-section-shell">
        <div class="wk-section-heading wk-section-heading--center">
            <p class="wk-eyebrow wk-eyebrow--dark">Der Waldkätzchen-Blick</p>
            <h2 id="wk-idea-title">Verhalten verstehen. Kontext erkennen. Gemeinsam Wege finden.</h2>
            <p>
                Waldkätzchen verbindet fünf Perspektiven, die helfen, schwierige Situationen
                klarer zu sehen — ohne Menschen auf ihr Verhalten zu reduzieren.
            </p>
        </div>

        <div class="wk-perspective-grid">
            <article class="wk-perspective-card wk-perspective-card--observe">
                <span class="wk-perspective-card__tag">Beobachten</span>
                <h3>Was ist wirklich passiert?</h3>
                <p>Die Situation ansehen, bevor sie erklärt oder bewertet wird.</p>
            </article>
            <article class="wk-perspective-card wk-perspective-card--feel">
                <span class="wk-perspective-card__tag">Fühlen</span>
                <h3>Was wird innerlich spürbar?</h3>
                <p>Gefühle und Bedürfnisse ernst nehmen — auch die leisen.</p>
            </article>
            <article class="wk-perspective-card wk-perspective-card--think">
                <span class="wk-perspective-card__tag">Denken</span>
                <h3>Welche Muster wirken mit?</h3>
                <p>Gedanken, Deutungen und wiederkehrende Schleifen sortieren.</p>
            </article>
            <article class="wk-perspective-card wk-perspective-card--system">
                <span class="wk-perspective-card__tag">System</span>
                <h3>Was gehört zum Umfeld?</h3>
                <p>Beziehung, Alltag, Erwartungen und alte Erfahrungen mitsehen.</p>
            </article>
            <article class="wk-perspective-card wk-perspective-card--act">
                <span class="wk-perspective-card__tag">Machen</span>
                <h3>Was wäre ein nächster kleiner Schritt?</h3>
                <p>Nicht alles lösen. Aber etwas möglich machen.</p>
            </article>
        </div>

        <div class="wk-section-actions wk-section-actions--center">
            <a class="wk-button" href="/die-waldkaetzchen">Die Waldkätzchen kennenlernen</a>
        </div>
    </div>
</section>

<section class="wk-home-section wk-home-paths" aria-labelledby="wk-paths-title">
    <div class="wk-section-shell">
        <div class="wk-section-heading">
            <p class="wk-eyebrow wk-eyebrow--dark">Wie es weitergehen kann</p>
            <h2 id="wk-paths-title">Zwei Wege in die Waldkätzchen-Welt.</h2>
        </div>

        <div class="wk-path-grid">
            <article class="wk-path-card wk-path-card--app">
                <p class="wk-path-card__label">Lichtung / App</p>
                <h3>Selbst erkunden und reflektieren</h3>
                <p>
                    Die Lichtung wird der interaktive Raum für Situationen, Impulse und persönliche Orientierung.
                    Dort entsteht später der Einstieg für angemeldete und nicht angemeldete Nutzer:innen.
                </p>
                <a class="wk-text-link" href="/lichtung">Zur Lichtung</a>
            </article>

            <article class="wk-path-card wk-path-card--support">
                <p class="wk-path-card__label">Begleitung</p>
                <h3>Nicht allein sortieren</h3>
                <p>
                    Wenn Alltag, Gefühle und Beziehungen sich festgefahren anfühlen, kann persönliche Begleitung
                    helfen, Muster zu verstehen und neue Schritte zu finden.
                </p>
                <a class="wk-text-link" href="/begleitung">Begleitung entdecken</a>
            </article>
        </div>
    </div>
</section>

<section class="wk-home-section wk-home-impulses" aria-labelledby="wk-impulses-title">
    <div class="wk-section-shell">
        <div class="wk-section-heading wk-section-heading--between">
            <div>
                <p class="wk-eyebrow wk-eyebrow--dark">Freie Impulse</p>
                <h2 id="wk-impulses-title">Gedanken, die den Blick weiten.</h2>
            </div>
            <a class="wk-text-link" href="/impulse">Alle Impulse ansehen</a>
        </div>

        <?php
        $wk_impulses = new WP_Query(
            array(
                'post_type'           => 'post',
                'posts_per_page'      => 3,
                'ignore_sticky_posts' => true,
            )
        );
        ?>

        <?php if ( $wk_impulses->have_posts() ) : ?>
            <div class="wk-post-grid">
                <?php while ( $wk_impulses->have_posts() ) : $wk_impulses->the_post(); ?>
                    <article class="wk-post-card">
                        <?php if ( has_post_thumbnail() ) : ?>
                            <a class="wk-post-card__image" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
                                <?php the_post_thumbnail( 'large' ); ?>
                            </a>
                        <?php endif; ?>
                        <div class="wk-post-card__body">
                            <p class="wk-post-card__meta"><?php echo esc_html( get_the_date() ); ?></p>
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 22 ) ); ?></p>
                            <a class="wk-text-link" href="<?php the_permalink(); ?>">Weiterlesen</a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            <?php wp_reset_postdata(); ?>
        <?php else : ?>
            <div class="wk-empty-state">
                <h3>Hier wachsen bald erste Impulse.</h3>
                <p>Die Struktur steht bereits. Beiträge können nun ganz normal in WordPress angelegt werden.</p>
            </div>
        <?php endif; ?>
    </div>
</section>

<section class="wk-home-final" aria-labelledby="wk-final-title">
    <div class="wk-section-shell wk-home-final__inner">
        <p class="wk-eyebrow">Ein ruhiger nächster Schritt</p>
        <h2 id="wk-final-title">Nicht alles muss sofort leichter werden. Aber klarer darf es werden.</h2>
        <div class="wk-home-final__actions">
            <a class="wk-button wk-button--light" href="/lichtung">Lichtung betreten</a>
            <a class="wk-button wk-button--glass" href="/begleitung">Begleitung ansehen</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
