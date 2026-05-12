<?php
/**
 * Waldkätzchen Child Theme functions.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Lädt Parent-, Child- und Waldkätzchen-Assets.
 */
function waldkaetzchen_child_enqueue_assets() {
    $theme_version = wp_get_theme()->get( 'Version' );
    $css_file      = get_stylesheet_directory() . '/assets/css/waldkaetzchen.css';
    $js_file       = get_stylesheet_directory() . '/assets/js/waldkaetzchen.js';

    wp_enqueue_style(
        'astra-parent-style',
        get_template_directory_uri() . '/style.css'
    );

    wp_enqueue_style(
        'waldkaetzchen-child-style',
        get_stylesheet_uri(),
        array( 'astra-parent-style' ),
        $theme_version
    );

    wp_enqueue_style(
        'waldkaetzchen-design-system',
        get_stylesheet_directory_uri() . '/assets/css/waldkaetzchen.css',
        array( 'waldkaetzchen-child-style' ),
        file_exists( $css_file ) ? filemtime( $css_file ) : $theme_version
    );

    wp_enqueue_script(
        'waldkaetzchen-interactions',
        get_stylesheet_directory_uri() . '/assets/js/waldkaetzchen.js',
        array(),
        file_exists( $js_file ) ? filemtime( $js_file ) : $theme_version,
        true
    );
}
add_action( 'wp_enqueue_scripts', 'waldkaetzchen_child_enqueue_assets' );

/**
 * Semantische Body-Klassen für konsistentes Waldkätzchen-Styling.
 */
function waldkaetzchen_body_classes( $classes ) {
    $classes[] = 'wk-site';

    if ( is_front_page() ) {
        $classes[] = 'wk-front-page';
    }

    if ( is_home() || is_archive() || is_search() ) {
        $classes[] = 'wk-content-feed';
    }

    if ( is_singular( 'post' ) ) {
        $classes[] = 'wk-article-page';
    }

    $page_slug = '';
    if ( is_page() ) {
        $page = get_queried_object();
        if ( $page && ! empty( $page->post_name ) ) {
            $page_slug = sanitize_html_class( $page->post_name );
            $classes[] = 'wk-page-' . $page_slug;
        }
    }

    if ( in_array( $page_slug, array( 'die-welt', 'welt' ), true ) ) {
        $classes[] = 'wk-page-world';
    }

    if ( in_array( $page_slug, array( 'waldkaetzchen', 'die-waldkaetzchen' ), true ) ) {
        $classes[] = 'wk-page-cats';
    }

    if ( in_array( $page_slug, array( 'impulse', 'texte-methoden', 'texte-und-methoden' ), true ) ) {
        $classes[] = 'wk-page-impulses';
    }

    if ( in_array( $page_slug, array( 'begleitung', 'angebote' ), true ) ) {
        $classes[] = 'wk-page-offers';
    }

    if ( in_array( $page_slug, array( 'kontakt' ), true ) ) {
        $classes[] = 'wk-page-contact';
    }

    if ( in_array( $page_slug, array( 'ueber-mich', 'ueber-waldkaetzchen', 'infos' ), true ) ) {
        $classes[] = 'wk-page-about';
    }

    return $classes;
}
add_filter( 'body_class', 'waldkaetzchen_body_classes' );

/**
 * Kleine Helper-Funktion für Theme-Shortcodes.
 */
function wk_shortcode_attrs( $atts, $defaults = array() ) {
    return shortcode_atts( $defaults, $atts );
}

/**
 * Welcome-Screen als Git-basierter Baustein.
 * Nutzung in WordPress/Elementor: [wk_welcome]
 */
function wk_welcome_shortcode( $atts ) {
    $atts = wk_shortcode_attrs(
        $atts,
        array(
            'title'    => 'Willkommen bei den Waldkätzchen',
            'subtitle' => 'Ein ruhiger Ort für Eltern, Kinder und echte Verbindung.',
            'primary'  => 'Zur Lichtung',
            'secondary'=> 'Situation verstehen',
        )
    );

    ob_start();
    ?>
    <section class="wk-welcome wk-hero">
        <div class="wk-welcome__mist"></div>
        <div class="wk-welcome__content">
            <p class="wk-kicker">Waldkätzchen</p>
            <h1><?php echo esc_html( $atts['title'] ); ?></h1>
            <p class="wk-lead"><?php echo esc_html( $atts['subtitle'] ); ?></p>
            <div class="wk-action-row">
                <a class="wk-button wk-button--primary" href="#lichtung"><?php echo esc_html( $atts['primary'] ); ?></a>
                <a class="wk-button wk-button--ghost" href="#verstehen"><?php echo esc_html( $atts['secondary'] ); ?></a>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}
add_shortcode( 'wk_welcome', 'wk_welcome_shortcode' );

/**
 * Themenwelten als Git-basierter Baustein.
 * Nutzung: [wk_themenwelten]
 */
function wk_themenwelten_shortcode() {
    $worlds = array(
        array(
            'id'          => 'lichtung',
            'emoji'       => '🌲',
            'title'       => 'Lichtung',
            'description' => 'Ankommen, entdecken, Beiträge lesen und erste Impulse finden.',
            'tone'        => 'calm',
        ),
        array(
            'id'          => 'verstehen',
            'emoji'       => '🧠',
            'title'       => 'Verstehen',
            'description' => 'Situationen sortieren, Muster erkennen und Bedürfnisse sichtbar machen.',
            'tone'        => 'mind',
        ),
        array(
            'id'          => 'verbinden',
            'emoji'       => '💞',
            'title'       => 'Verbinden',
            'description' => 'Beziehung stärken, Sprache finden und wieder in Kontakt kommen.',
            'tone'        => 'heart',
        ),
        array(
            'id'          => 'veraendern',
            'emoji'       => '🔥',
            'title'       => 'Verändern',
            'description' => 'Neue Schritte ausprobieren, Rituale bauen und Alltag leichter machen.',
            'tone'        => 'spark',
        ),
    );

    ob_start();
    ?>
    <section class="wk-worlds" aria-label="Waldkätzchen Themenwelten">
        <?php foreach ( $worlds as $world ) : ?>
            <article id="<?php echo esc_attr( $world['id'] ); ?>" class="wk-world-card wk-card wk-world-card--<?php echo esc_attr( $world['tone'] ); ?>">
                <div class="wk-world-card__icon" aria-hidden="true"><?php echo esc_html( $world['emoji'] ); ?></div>
                <div>
                    <h2><?php echo esc_html( $world['title'] ); ?></h2>
                    <p><?php echo esc_html( $world['description'] ); ?></p>
                </div>
            </article>
        <?php endforeach; ?>
    </section>
    <?php
    return ob_get_clean();
}
add_shortcode( 'wk_themenwelten', 'wk_themenwelten_shortcode' );

/**
 * Mobile Bottom Navigation im App-Stil.
 * Nur auf der Website vorbereiten; per CSS bleibt sie aktuell verborgen.
 */
function wk_mobile_bottom_nav() {
    ?>
    <nav class="wk-mobile-nav" aria-label="Waldkätzchen Navigation">
        <a href="#lichtung"><span>🌲</span><small>Lichtung</small></a>
        <a href="#verstehen"><span>🧠</span><small>Verstehen</small></a>
        <a href="#verbinden"><span>💞</span><small>Verbinden</small></a>
        <a href="#veraendern"><span>🔥</span><small>Verändern</small></a>
    </nav>
    <?php
}
add_action( 'wp_footer', 'wk_mobile_bottom_nav' );
