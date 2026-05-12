<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="wk-header">
    <div class="wk-header__inner">
        <a class="wk-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php bloginfo( 'name' ); ?> Startseite">
            <span class="wk-logo__text">Waldkätzchen <span aria-hidden="true">🌿</span></span>
        </a>

        <button class="wk-nav-toggle" type="button" aria-expanded="false" aria-controls="wk-primary-nav">
            <span class="screen-reader-text">Menü öffnen</span>
            <span class="wk-nav-toggle__lines" aria-hidden="true"></span>
        </button>

        <nav id="wk-primary-nav" class="wk-nav" aria-label="Hauptnavigation">
            <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'wk-nav__menu',
                    'fallback_cb'    => false,
                )
            );
            ?>
            <a class="wk-nav__app-link" href="/lichtung">Zur App</a>
        </nav>

        <a class="wk-header__cta" href="/lichtung">
            Zur App
        </a>
    </div>
</header>

<main class="wk-main">
