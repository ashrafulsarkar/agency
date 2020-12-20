<button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span></span>
    <span></span>
    <span></span>
</button>
<!-- Extra Nav -->
<div class="extra-nav">
    <div class="extra-cell">
        <a href="contact-us-3.html" class="btn btn-corner gradient btn-primary"><i class="fa fa-angle-right m-r10"></i>Get A Quote</a>
    </div>
</div>
<div class="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
    <div class="logo-header">
        <a href="index.html"><img src="<?php echo get_theme_file_uri("/assets/images/"); ?>logo-3.png" alt=""></a>
    </div>
    <?php
    $philosophy_menu = wp_nav_menu(array(
        "theme_location" => "topmenu",
        "menu_id" => "topmenu",
        "menu_class" => "nav navbar-nav navbar",
        "link_before" => "<span>",
        "link_after" => "</span>",
        
        
    ));
    ?>
    <!-- <ul class="nav navbar-nav navbar">
        <li class="active"><a href="index.html;"><span>Home</span></a>

        </li>
        <li class="active"><a href="javascript:void(0);"><span>Pages</span><i class="fa fa-chevron-down"></i></a>
            <ul class="sub-menu">
                <li><a href="about-us-1.html">About Us 1</a></li>
                <li><a href="about-us-2.html">About Us 2</a></li>
                <li><a href="about-us-3.html">About Us 3</a></li>
                <li><a href="faq-1.html">Faq 1</a></li>
                <li><a href="faq-2.html">Faq 2</a></li>
                <li><a href="faq-3.html">Faq 3</a></li>
                <li><a href="pricing-table-1.html">Pricing Table 1</a></li>
                <li><a href="pricing-table-2.html">Pricing Table 2</a></li>
                <li><a href="pricing-table-3.html">Pricing Table 3</a></li>
                <li><a href="team-1.html">Team 1</a></li>
                <li><a href="team-2.html">Team 2</a></li>
                <li><a href="team-3.html">Team 3</a></li>
            </ul>
        </li>
        <li><a href="javascript:void(0);"><span>Services</span><i class="fa fa-chevron-down"></i></a>
            <ul class="sub-menu">
                <li><a href="services-1.html">Services 1</a></li>
                <li><a href="services-2.html">Services 2</a></li>
                <li><a href="services-3.html">Services 3</a></li>
            </ul>
        </li>
        <li><a href="javascript:void(0);"><span>Blog</span><i class="fa fa-chevron-down"></i></a>
            <ul class="sub-menu">
                <li><a href="blog-grid-2.html">Blog Grid 2</a></li>
                <li><a href="blog-large-left-sidebar.html">Large Left Sidebar</a></li>
                <li><a href="blog-large-right-sidebar.html">Large Right Sidebar</a></li>
                <li><a href="blog-details-1.html">Blog Details 1</a></li>
                <li><a href="blog-details-2.html">Blog Details 2</a></li>
                <li><a href="blog-details-3.html">Blog Details 3</a></li>
            </ul>
        </li>
        <li><a href="javascript:void(0);"><span>Contact Us</span><i class="fa fa-chevron-down"></i></a>
            <ul class="sub-menu">
                <li><a href="contact-us-1.html">Contact Us 1</a></li>
                <li><a href="contact-us-2.html">Contact Us 2</a></li>
                <li><a href="contact-us-3.html">Contact Us 3</a></li>
            </ul>
        </li>
    </ul> -->
    <div class="dlab-social-icon">
        <ul>
            <li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
            <li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
            <li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
            <li><a class="fa fa-instagram" href="javascript:void(0);"></a></li>
        </ul>
    </div>
</div>