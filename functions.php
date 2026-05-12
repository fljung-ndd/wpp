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

    return $classes;
}
add_filter( 'body_class', 'waldkaetzchen_body_classes' );
