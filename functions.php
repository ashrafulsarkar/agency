<?php

function codeagency_setup_theme(){
    load_theme_textdomain("codeagency", get_theme_file_uri("/languages"));
    add_theme_support("post-thumbnails");
    add_theme_support("custom-logo");
    add_theme_support("title-tag");
    add_theme_support('automatic-feed-links');
    add_theme_support("html5", array("search-form", "comment-list"));
    add_editor_style("/assets/css/editor-style.css");
    register_nav_menu("topmenu", __("Top Menu", "codeagency"));
}
add_action("after_setup_theme", "codeagency_setup_theme");

function codeagency_assets(){
    wp_enqueue_style("bootstrap", get_theme_file_uri("/assets/vendor/bootstrap-select/bootstrap-select.min.css"));
    wp_enqueue_style("owl-carousel", get_theme_file_uri("/assets/vendor/owl-carousel/owl.carousel.css"));
    wp_enqueue_style("animate", get_theme_file_uri("/assets/vendor/animate/animate.css"));
    wp_enqueue_style("stylesheet", get_theme_file_uri("/assets/css/style.css"));
    wp_enqueue_style("skin", get_theme_file_uri("/assets/css/skin/skin-3.css"));
    wp_enqueue_style("switcher", get_theme_file_uri("/assets/vendor/switcher/switcher.css"));
    wp_enqueue_style("rangeslider", get_theme_file_uri("/assets/vendor/rangeslider/rangeslider.css"));
    wp_enqueue_style("codeagency-css", get_stylesheet_uri());

    wp_enqueue_script("wow-js",get_theme_file_uri("/assets/vendor/wow/wow.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("popper-js",get_theme_file_uri("/assets/vendor/bootstrap/js/popper.min.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("bootstrap-js",get_theme_file_uri("/assets/vendor/bootstrap/js/bootstrap.min.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("owl-carousel-js",get_theme_file_uri("/assets/vendor/owl-carousel/owl.carousel.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("magnific-popup-js",get_theme_file_uri("/assets/vendor/magnific-popup/magnific-popup.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("waypoints-js",get_theme_file_uri("/assets/vendor/counter/waypoints-min.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("counterup-js",get_theme_file_uri("/assets/vendor/counter/counterup.min.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("imagesloaded-js",get_theme_file_uri("/assets/vendor/imagesloaded/imagesloaded.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("masonry-js",get_theme_file_uri("/assets/vendor/masonry/masonry-3.1.4.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("masonry-filter-js",get_theme_file_uri("/assets/vendor/masonry/masonry.filter.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("bootstrap-select",get_theme_file_uri("/assets/vendor/bootstrap-select/bootstrap-select.min.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("dz.carousel",get_theme_file_uri("/assets/js/dz.carousel.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("dz.ajax",get_theme_file_uri("/assets/js/dz.ajax.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("custom-js",get_theme_file_uri("/assets/js/custom.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("switcher-js",get_theme_file_uri("/assets/vendor/switcher/switcher.js"),array("jquery"),"1.0",true);
    wp_enqueue_script("rangeslider-js",get_theme_file_uri("/assets/vendor/rangeslider/rangeslider.js"),array("jquery"),"1.0",true);
}
add_action("wp_enqueue_scripts", "codeagency_assets");
