<?php
/**
 * Waldkätzchen Theme functions.
 *
 * Neutralisiert, damit Blocksy + Starter Templates sauber genutzt werden können.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function waldkaetzchen_enqueue_assets() {
    wp_enqueue_style(
        'waldkaetzchen-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get( 'Version' )
    );
}
add_action( 'wp_enqueue_scripts', 'waldkaetzchen_enqueue_assets' );

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
