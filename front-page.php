<?php
/**
 * Front page template.
 *
 * Gibt bewusst den Inhalt der in WordPress gepflegten Startseite aus.
 * So kannst du den HTML-Code direkt im WordPress-Codeeditor der Seite Home pflegen.
 */

get_header();
?>

<?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class( 'wk-front-editor-content' ); ?>>
            <?php the_content(); ?>
        </article>
    <?php endwhile; ?>
<?php else : ?>
    <section class="wk-home-section wk-section--paper">
        <div class="wk-section-shell">
            <div class="wk-section-heading wk-section-heading--center">
                <p class="wk-eyebrow">Waldkätzchen</p>
                <h1>Startseite bereit.</h1>
                <p>Füge deinen HTML-Code in der WordPress-Seite ein, die als Startseite eingestellt ist.</p>
            </div>
        </div>
    </section>
<?php endif; ?>

<?php get_footer(); ?>
