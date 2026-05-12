<?php
/**
 * Front page template.
 *
 * Blueprint-orientierte Waldkätzchen-Startseite:
 * 1. Hero
 * 2. Die Welt
 * 3. Angebote
 * 4. App-Teaser
 * 5. Impulse
 * 6. Waldpost
 */

get_header();
?>

<section class="wk-home-hero" aria-labelledby="wk-home-title">
    <div class="wk-home-hero__veil" aria-hidden="true"></div>
    <div class="wk-home-hero__glow" aria-hidden="true"></div>

    <div class="wk-home-hero__inner">
        <div class="wk-home-hero__copy">
            <p class="wk-eyebrow">Waldkätzchen</p>
            <h1 id="wk-home-title">Willkommen im Wald.</h1>
            <p class="wk-home-hero__lead">
                Ein Ort zum Ankommen, Verstehen, Verbinden und kleine Schritte gehen.
                Für dich. In deinem Tempo.
            </p>

            <div class="wk-home-hero__actions">
                <a class="wk-button wk-button--light" href="/die-welt">Unsere Welt entdecken</a>
                <a class="wk-button wk-button--glass" href="/begleitung">Mehr über Waldkätzchen</a>
            </div>
        </div>

        <aside class="wk-home-hero__note" aria-label="Willkommensbotschaft">
            <span class="wk-home-hero__heart" aria-hidden="true">♡</span>
            <p>Du bist willkommen.<br>Genau so wie du bist.</p>
        </aside>
    </div>
</section>

<section class="wk-home-section wk-home-world" aria-labelledby="wk-world-title">
    <div class="wk-section-shell">
        <div class="wk-section-heading wk-section-heading--center wk-wave-heading">
            <h2 id="wk-world-title">Die Welt von Waldkätzchen <span aria-hidden="true">🌿</span></h2>
            <p>Vier Räume, die dich begleiten.</p>
        </div>

        <div class="wk-world-grid">
            <article class="wk-world-card wk-world-card--verstehen">
                <div class="wk-world-card__art" aria-hidden="true">◌</div>
                <h3>Verstehen</h3>
                <p>Hinschauen. Gefühle, Muster und Zusammenhänge begreifen.</p>
                <a class="wk-text-link" href="/die-welt">Mehr erfahren</a>
            </article>
            <article class="wk-world-card wk-world-card--verbinden">
                <div class="wk-world-card__art" aria-hidden="true">∞</div>
                <h3>Verbinden</h3>
                <p>Beziehungen stärken, Halt finden und nicht allein sein.</p>
                <a class="wk-text-link" href="/die-welt">Mehr erfahren</a>
            </article>
            <article class="wk-world-card wk-world-card--veraendern">
                <div class="wk-world-card__art" aria-hidden="true">✦</div>
                <h3>Verändern</h3>
                <p>Kleine Schritte, neue Impulse und mutige Entscheidungen.</p>
                <a class="wk-text-link" href="/die-welt">Mehr erfahren</a>
            </article>
            <article class="wk-world-card wk-world-card--lichtung">
                <div class="wk-world-card__art" aria-hidden="true">⌂</div>
                <h3>Lichtung</h3>
                <p>Dein Startpunkt. Dein Feed. Dein täglicher Begleiter.</p>
                <a class="wk-text-link" href="/lichtung">Mehr erfahren</a>
            </article>
        </div>
    </div>
</section>

<section class="wk-home-section wk-home-offers" aria-labelledby="wk-offers-title">
    <div class="wk-section-shell">
        <div class="wk-section-heading wk-section-heading--center wk-wave-heading">
            <h2 id="wk-offers-title">Angebote für dich</h2>
            <p>Wege, die dich und dein Leben stärken.</p>
        </div>

        <div class="wk-offer-grid">
            <article class="wk-offer-card">
                <div class="wk-offer-card__image wk-offer-card__image--coaching" aria-hidden="true"></div>
                <h3>Coaching &amp; Begleitung</h3>
                <p>Individuelle Begleitung für dich, deine Familie oder dein Team.</p>
                <a class="wk-text-link" href="/begleitung">Mehr erfahren</a>
            </article>
            <article class="wk-offer-card">
                <div class="wk-offer-card__image wk-offer-card__image--courses" aria-hidden="true"></div>
                <h3>VHS Kurse &amp; Workshops</h3>
                <p>Wissen, Übungen und Austausch in kleinen Gruppen.</p>
                <a class="wk-text-link" href="/begleitung">Mehr erfahren</a>
            </article>
            <article class="wk-offer-card">
                <div class="wk-offer-card__image wk-offer-card__image--materials" aria-hidden="true"></div>
                <h3>Materialien &amp; Downloads</h3>
                <p>Reflexionskarten, Übungen, Arbeitsblätter und mehr.</p>
                <a class="wk-text-link" href="/impulse">Mehr erfahren</a>
            </article>
            <article class="wk-offer-card">
                <div class="wk-offer-card__image wk-offer-card__image--book" aria-hidden="true"></div>
                <h3>Buch &amp; Geschichten</h3>
                <p>Mein Buch, Geschichten und Impulse für deinen Alltag.</p>
                <a class="wk-text-link" href="/impulse">Mehr erfahren</a>
            </article>
            <article class="wk-offer-card">
                <div class="wk-offer-card__image wk-offer-card__image--post" aria-hidden="true"></div>
                <h3>Impulse &amp; Waldpost</h3>
                <p>Blog, kleine Übungen und Inspiration direkt in dein Postfach.</p>
                <a class="wk-text-link" href="/impulse">Mehr erfahren</a>
            </article>
        </div>
    </div>
</section>

<section class="wk-home-section wk-home-app" aria-labelledby="wk-app-title">
    <div class="wk-section-shell wk-app-banner">
        <div class="wk-app-banner__copy">
            <p class="wk-eyebrow wk-eyebrow--dark">Dein persönlicher Waldraum</p>
            <h2 id="wk-app-title">Immer dabei.</h2>
            <p>
                Die Waldkätzchen-App begleitet dich durch deinen Alltag mit Impulsen,
                Reflexionen und einer lebendigen Waldwelt.
            </p>
            <div class="wk-app-banner__actions">
                <a class="wk-button" href="/lichtung">Zur App</a>
                <a class="wk-button wk-button--soft" href="/lichtung">Mehr erfahren</a>
            </div>
        </div>

        <div class="wk-app-banner__phones" aria-hidden="true">
            <div class="wk-phone wk-phone--one"></div>
            <div class="wk-phone wk-phone--two"></div>
            <div class="wk-phone wk-phone--three"></div>
        </div>

        <div class="wk-app-banner__cat" aria-hidden="true">🐾</div>
    </div>
</section>

<section class="wk-home-section wk-home-impulses" aria-labelledby="wk-impulses-title">
    <div class="wk-section-shell">
        <div class="wk-section-heading wk-section-heading--between">
            <div>
                <p class="wk-eyebrow wk-eyebrow--dark">Impulse für deinen Alltag</p>
                <h2 id="wk-impulses-title">Gedanken, Übungen und kleine Öffnungen.</h2>
            </div>
            <a class="wk-text-link" href="/impulse">Alle Impulse entdecken</a>
        </div>

        <?php
        $wk_impulses = new WP_Query(
            array(
                'post_type'           => 'post',
                'posts_per_page'      => 5,
                'ignore_sticky_posts' => true,
            )
        );
        ?>

        <?php if ( $wk_impulses->have_posts() ) : ?>
            <div class="wk-post-grid wk-post-grid--polaroid">
                <?php while ( $wk_impulses->have_posts() ) : $wk_impulses->the_post(); ?>
                    <article class="wk-post-card wk-post-card--polaroid">
                        <?php if ( has_post_thumbnail() ) : ?>
                            <a class="wk-post-card__image" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
                                <?php the_post_thumbnail( 'large' ); ?>
                            </a>
                        <?php else : ?>
                            <a class="wk-post-card__image wk-post-card__image--placeholder" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1"></a>
                        <?php endif; ?>
                        <div class="wk-post-card__body">
                            <p class="wk-post-card__meta"><?php echo esc_html( get_the_date() ); ?></p>
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <a class="wk-text-link" href="<?php the_permalink(); ?>">Lesen</a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            <?php wp_reset_postdata(); ?>
        <?php else : ?>
            <div class="wk-post-grid wk-post-grid--polaroid">
                <?php
                $wk_placeholders = array(
                    'Abendritual für ruhige Gedanken',
                    'Warum kleine Schritte groß wirken',
                    '3 Atemzüge für dich',
                    'Was dir heute gut tun könnte',
                    'Dein Lichtglas für schwere Tage',
                );
                foreach ( $wk_placeholders as $wk_placeholder ) :
                ?>
                    <article class="wk-post-card wk-post-card--polaroid">
                        <div class="wk-post-card__image wk-post-card__image--placeholder" aria-hidden="true"></div>
                        <div class="wk-post-card__body">
                            <p class="wk-post-card__meta">Impuls</p>
                            <h3><?php echo esc_html( $wk_placeholder ); ?></h3>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>

<section class="wk-home-section wk-home-newsletter" aria-labelledby="wk-newsletter-title">
    <div class="wk-section-shell wk-newsletter-card">
        <div>
            <p class="wk-eyebrow wk-eyebrow--dark">Waldpost für dein Herz</p>
            <h2 id="wk-newsletter-title">Neue Impulse direkt in dein Postfach.</h2>
        </div>
        <form class="wk-newsletter-form" action="#" method="post">
            <label class="screen-reader-text" for="wk-newsletter-email">Deine E-Mail-Adresse</label>
            <input id="wk-newsletter-email" type="email" name="email" placeholder="Deine E-Mail-Adresse">
            <button type="submit">Anmelden</button>
        </form>
    </div>
</section>

<?php get_footer(); ?>
