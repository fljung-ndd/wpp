<?php
/**
 * Waldkätzchen Theme functions.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Theme Assets.
 */
function waldkaetzchen_enqueue_assets() {
    $theme_version   = wp_get_theme()->get( 'Version' );
    $css_file        = get_template_directory() . '/assets/css/waldkaetzchen.css';
    $blueprint_file  = get_template_directory() . '/assets/css/blueprint.css';
    $standalone_file = get_template_directory() . '/assets/css/standalone.css';
    $home_fixes_file = get_template_directory() . '/assets/css/home-fixes.css';
    $js_file         = get_template_directory() . '/assets/js/waldkaetzchen.js';

    wp_enqueue_style(
        'waldkaetzchen-style',
        get_stylesheet_uri(),
        array(),
        $theme_version
    );

    wp_enqueue_style(
        'waldkaetzchen-design-system',
        get_template_directory_uri() . '/assets/css/waldkaetzchen.css',
        array( 'waldkaetzchen-style' ),
        file_exists( $css_file ) ? filemtime( $css_file ) : $theme_version
    );

    wp_enqueue_style(
        'waldkaetzchen-blueprint',
        get_template_directory_uri() . '/assets/css/blueprint.css',
        array( 'waldkaetzchen-design-system' ),
        file_exists( $blueprint_file ) ? filemtime( $blueprint_file ) : $theme_version
    );

    wp_enqueue_style(
        'waldkaetzchen-standalone',
        get_template_directory_uri() . '/assets/css/standalone.css',
        array( 'waldkaetzchen-blueprint' ),
        file_exists( $standalone_file ) ? filemtime( $standalone_file ) : $theme_version
    );

    wp_enqueue_style(
        'waldkaetzchen-home-fixes',
        get_template_directory_uri() . '/assets/css/home-fixes.css',
        array( 'waldkaetzchen-standalone' ),
        file_exists( $home_fixes_file ) ? filemtime( $home_fixes_file ) : $theme_version
    );

    wp_enqueue_script(
        'waldkaetzchen-interactions',
        get_template_directory_uri() . '/assets/js/waldkaetzchen.js',
        array(),
        file_exists( $js_file ) ? filemtime( $js_file ) : $theme_version,
        true
    );
}
add_action( 'wp_enqueue_scripts', 'waldkaetzchen_enqueue_assets' );

/**
 * Theme setup.
 */
function waldkaetzchen_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );

    register_nav_menus(
        array(
            'primary' => 'Hauptnavigation',
            'footer'  => 'Footer Navigation',
        )
    );
}
add_action( 'after_setup_theme', 'waldkaetzchen_theme_setup' );

/**
 * Body classes.
 */
function waldkaetzchen_body_classes( $classes ) {
    $classes[] = 'wk-site';

    if ( is_front_page() ) {
        $classes[] = 'wk-front-page';
    }

    return $classes;
}
add_filter( 'body_class', 'waldkaetzchen_body_classes' );
