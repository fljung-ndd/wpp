<?php
/**
 * Front page template.
 */

get_header();
?>

<?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>
        <article class="wk-front">
            <div class="wk-front__content">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; ?>
<?php endif; ?>

<?php get_footer(); ?>
