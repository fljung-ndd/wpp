</main>

<footer class="wk-footer">
    <div class="wk-footer__inner">
        <div class="wk-footer__brand">
            <h2>Waldkätzchen</h2>
            <p>Verstehen. Verbinden. Verändern.</p>
        </div>

        <nav class="wk-footer__nav" aria-label="Footer Navigation">
            <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'footer',
                    'container'      => false,
                    'menu_class'     => 'wk-footer__menu',
                    'fallback_cb'    => false,
                )
            );
            ?>
        </nav>
    </div>

    <div class="wk-footer__bottom">
        © <?php echo date( 'Y' ); ?> Waldkätzchen
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
