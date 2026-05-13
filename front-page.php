<?php
/**
 * Front Page Template.
 *
 * Neutrale Ausgabe für Blocksy / Gutenberg.
 */

get_header();
?>

<main class="site-main">
    <?php
    while ( have_posts() ) :
        the_post();
        the_content();
    endwhile;
    ?>
</main>

<?php
get_footer();
