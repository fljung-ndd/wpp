<?php get_header(); ?>

<section class="wk-page">
    <div class="wk-page__inner">
        <?php if ( have_posts() ) : ?>
            <?php while ( have_posts() ) : the_post(); ?>
                <article class="wk-entry">
                    <header class="wk-entry__header">
                        <h1><?php the_title(); ?></h1>
                    </header>

                    <div class="wk-entry__content">
                        <?php the_content(); ?>
                    </div>
                </article>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</section>

<?php get_footer(); ?>
