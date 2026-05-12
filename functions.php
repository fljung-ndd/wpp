<?php
/**
 * Waldkätzchen Child Theme functions.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function waldkaetzchen_child_enqueue_styles() {
    wp_enqueue_style(
        'astra-parent-style',
        get_template_directory_uri() . '/style.css'
    );

    wp_enqueue_style(
        'waldkaetzchen-child-style',
        get_stylesheet_uri(),
        array( 'astra-parent-style' ),
        wp_get_theme()->get( 'Version' )
    );
}
add_action( 'wp_enqueue_scripts', 'waldkaetzchen_child_enqueue_styles' );
