/**
Core script to handle the entire theme and core functions
**/
var Samar = function(){
	/* Search Bar ============ */
	siteUrl = '';
	
	var screenWidth = jQuery( window ).width();
	
	var homeSearch = function() {
		'use strict';
		/* top search in header on click function */
		var quikSearch = jQuery("#quik-search-btn");
		var quikSearchRemove = jQuery("#quik-search-remove");
		
		quikSearch.on('click',function() {
			
			jQuery('.dz-quik-search').fadeIn(500);
			jQuery('.dz-quik-search').addClass('On');
			
			
		});
		
		quikSearchRemove.on('click',function() {
			jQuery('.dz-quik-search').fadeOut(500);
			jQuery('.dz-quik-search').removeClass('On');
			
			
		});	
		/* top search in header on click function End*/
	}
	
	/* One Page Layout ============ */
	var onePageLayout = function() {
		'use strict';
		var headerHeight =   parseInt(jQuery('.onepage').css('height'), 10);
		
		jQuery(".scroll").unbind().on('click',function(event) 
		{
			event.preventDefault();
			
			if (this.hash !== "") {
				var hash = this.hash;	
				var seactionPosition = jQuery(hash).offset().top;
				var headerHeight =   parseInt(jQuery('.onepage').css('height'), 10);
				
				
				jQuery('body').scrollspy({target: ".navbar", offset: headerHeight+2}); 
				
				var scrollTopPosition = seactionPosition - (headerHeight);
				
				jQuery('html, body').animate({
					scrollTop: scrollTopPosition
				}, 800, function(){
					
				});
			}   
		});
		jQuery('body').scrollspy({target: ".navbar", offset: headerHeight + 2});  
	}
	
	/* Header Height ============ */
	var handleResizeElement = function(){
		jQuery('.header').css('height','');
		var HeaderHeight = jQuery('.header').height();
		jQuery('.header').css('height', HeaderHeight);
		if(screenWidth > 991 ){
			jQuery('.homedemo').find('.mega-menu').css('height','calc(100vh - '+HeaderHeight+'px)');
		}
	}
	
	/* Load File ============ */
	var dzTheme = function(){
		 'use strict';
		 var loadingImage = '<img src="https://samar.dexignzone.com/xhtml/error-404.html">';
		 jQuery('.dzload').each(function(){
		 var dzsrc =   siteUrl + jQuery(this).attr('dzsrc');
		  //jQuery(this).html(loadingImage);
		 	jQuery(this).hide(function(){
				jQuery(this).load(dzsrc, function(){
					jQuery(this).fadeIn('slow');
				}); 
			})
			
		 });
		 
		
		if(screenWidth <= 991 ){
			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(e){
				if(jQuery(this).parent().hasClass('open'))
				{
					jQuery(this).parent().removeClass('open');
				}
				else{
					jQuery(this).parent().parent().find('li').removeClass('open');
					jQuery(this).parent().addClass('open');
				}
			});
		}
		
		
		jQuery('.full-sidenav .navbar-nav > li > a').next('.sub-menu').slideUp();
		jQuery('.full-sidenav .sub-menu > li > a').next('.sub-menu').slideUp();
			
		jQuery('.full-sidenav .navbar-nav > li > a, .full-sidenav .sub-menu > li > a').unbind().on('click', function(e){
			jQuery('.full-sidenav .navbar-nav > li > a').not(this).next('.sub-menu').slideUp();
			jQuery(this).next('.sub-menu').toggle(500);
		});
		jQuery('.menu-icon').on('click',function(){
			jQuery('.menu-close,.full-sidenav').addClass('active');
			onePageLayout();
		});
		jQuery('.menu-close').on('click',function(){
			jQuery('.menu-close,.full-sidenav').removeClass('active');
		});
		
		
		jQuery('.contact-btn').on('click',function(){
			jQuery('.contact-button, .contact-button-2').toggleClass('active');
			
		});
		jQuery('.enter-button, .enquire').on('click',function(){
			jQuery('.enter-form').addClass('active');
			
			setTimeout(function() {
				jQuery('.enter-form').removeClass('active');
			}, 500);
		});
		
		setTimeout(function() {
			jQuery("#myModal").modal('show');
		}, 3000)
	}
	
	
	/* Magnific Popup ============ */
	var MagnificPopup = function(){
		'use strict';	
		/* magnificPopup function */
		jQuery('.mfp-gallery').magnificPopup({
			delegate: '.mfp-link',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		});
		/* magnificPopup function end */
		
		/* magnificPopup for paly video function */		
		jQuery('.video').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
						 '<div class="mfp-close"></div>'+
						 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						 '<div class="mfp-title">Some caption</div>'+
						 '</div>'
			},
			callbacks: {
				markupParse: function(template, values, item) {
					values.title = item.el.attr('title');
				}
			}
		});
		/* magnificPopup for paly video function end*/
		jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	}
	
	
	/* Scroll To Top ============ */
	var scrollTop = function (){
		'use strict';
		var scrollTop = jQuery("button.scroltop");
		/* page scroll top on click function */	
		scrollTop.on('click',function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})

		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}
	
	/* handle Accordian ============ */
	var handleAccordian = function(){
		/* accodin open close icon change */	 	
		jQuery('#accordion').on('hidden.bs.collapse', function(e){
			jQuery(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('glyphicon-minus glyphicon-plus');
		});
		jQuery('#accordion').on('shown.bs.collapse', function(e){
			jQuery(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('glyphicon-minus glyphicon-plus');
		});
		/* accodin open close icon change end */
	}
	
	/* Equal Height ============ */
	var equalHeight = function(container) {
		
		if(jQuery(container).length == 0)
		{
			return false
		}
			
		var currentTallest = 0, 
			currentRowStart = 0, 
			rowDivs = new Array(), 
			jQueryel, topPosition = 0;
			
		jQuery(container).each(function() {
			jQueryel = jQuery(this);
			jQuery(jQueryel).height('auto')
			topPostion = jQueryel.position().top;

			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = jQueryel.height();
				rowDivs.push(jQueryel);
			} else {
				rowDivs.push(jQueryel);
				currentTallest = (currentTallest < jQueryel.height()) ? (jQueryel.height()) : (currentTallest);
			}
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
		
	}
	
	/* Footer Align ============ */
	var footerAlign = function() {
		'use strict';
		jQuery('.site-footer').css('display', 'block');
		jQuery('.site-footer').css('height', 'auto');
		var footerHeight = jQuery('.site-footer').outerHeight();
		jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
		jQuery('.site-footer').css('height', footerHeight);
	}
	
	/* File Input ============ */
	var fileInput = function(){
		'use strict';
		/* Input type file jQuery */	 	 
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this);
			var	numFiles = input.get(0).files ? input.get(0).files.length : 1;
			var	label = input.val().replace(/\\/g, 'https://samar.dexignzone.com/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});
		
		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			input = jQuery(this).parents('.input-group').find(':text');
			var log = numFiles > 10 ? numFiles + ' files selected' : label;
		
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});
		/* Input type file jQuery end*/
	}
	
	/* Header Fixed ============ */
	var headerFix = function(){
		'use strict';
		/* Main navigation fixed on top  when scroll down function custom */		
		jQuery(window).on('scroll', function () {
			if(jQuery('.sticky-header').length > 0){
				var menu = jQuery('.sticky-header');
				if (jQuery(window).scrollTop() > menu.offset().top) {
					menu.addClass('is-fixed');
					jQuery('.site-header .container > .logo-header .logo').attr('src','images/logo.png');
					jQuery('.site-header .container > .logo-header .logo-2').attr('src','images/logo-2.png');
					jQuery('.site-header .container > .logo-header .logo-3').attr('src','images/logo-3.png');
				} else {
					menu.removeClass('is-fixed');
					jQuery('.site-header .container > .logo-header .logo, .site-header .container > .logo-header .logo-2, .site-header .container > .logo-header .logo-3').attr('src','images/logo-white.png')
				}
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end*/
	}
	
	/* Masonry Box ============ */
	var masonryBox = function(){
		'use strict';
		/* masonry by  = bootstrap-select.min.js */
		if(jQuery('#masonry, .masonry').length)
		{
			var self = jQuery("#masonry, .masonry");
			if(jQuery('.card-container').length)
		    {
				
				var columnWidthValue = (self.attr('data-column-width') === undefined)?'':self.attr('data-column-width');
				if(columnWidthValue != ''){columnWidthValue = parseInt(columnWidthValue);}
				
				self.imagesLoaded(function () {
					self.masonry({
						columnWidth:columnWidthValue, 
						gutterWidth: 15,
						isAnimated: true,
						itemSelector: ".card-container"
					});
				});
			}
		}
		if(jQuery('.filters').length)
		{
			jQuery(".filters li:first").addClass('active');
			
			jQuery(".filters").on('click','li',function(e) {
				e.preventDefault();
				var filter = jQuery(this).attr("data-filter");
				self.masonryFilter({
					filter: function () {
						if (!filter) return true;
						//return jQuery(this).attr("data-filter") == filter;
						return jQuery(this).hasClass(filter);
					}
				});
			});
		}
		/* masonry by  = bootstrap-select.min.js end */
	}
	
	
	/* Counter Number ============ */
	var counter = function(){
		if(jQuery('.counter').length)
		{
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
		}
	}
	
	/* Video Popup ============ */
	var handleVideo = function(){
		/* Video responsive function */	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
		/* Video responsive function end */
	}
	
	/* Gallery Filter ============ */
	var handleFilterMasonary = function(){
		/* gallery filter activation = jquery.mixitup.min.js */ 
		if (jQuery('#image-gallery-mix').length) {
			jQuery('.gallery-filter').find('li').each(function () {
				jQuery(this).addClass('filter');
			});
			jQuery('#image-gallery-mix').mixItUp();
		};
		if(jQuery('.gallery-filter.masonary').length){
			jQuery('.gallery-filter.masonary').on('click','span', function(){
				var selector = jQuery(this).parent().attr('data-filter');
				jQuery('.gallery-filter.masonary span').parent().removeClass('active');
				jQuery(this).parent().addClass('active');
				jQuery('#image-gallery-isotope').isotope({ filter: selector });
				return false;
			});
		}
		/* gallery filter activation = jquery.mixitup.min.js */
	}
	
	/* handle Bootstrap Select ============ */
	var handleBootstrapSelect = function(){
		/* Bootstrap Select box function by  = bootstrap-select.min.js */ 
		if (jQuery('select').length) {
		    jQuery('select').selectpicker();
		}
		/* Bootstrap Select box function by  = bootstrap-select.min.js end*/
	}
	
	/* Resizebanner ============ */
	var handleBannerResize = function(){
		jQuery(".full-height").css("height", jQuery(window).height());
	}
	
	/* Countdown ============ */
	var handleCountDown = function(WebsiteLaunchDate){
		/* Time Countr Down Js */
		if(jQuery(".countdown").length)
		{
			jQuery('.countdown').countdown({date: WebsiteLaunchDate+' 23:5'}, function() {
				jQuery('.countdown').text('we are live');
			});
		}
		/* Time Countr Down Js End */
	}
	
	/*handlePlaceholderAnimation*/
	var handlePlaceholderAnimation = function()
	{
		/*if(jQuery('.dezPlaceAni').length)
		{*/
		
			jQuery('input, textarea').focus(function(){
			  jQuery(this).parents('.form-group').addClass('focused');
			});
			
			jQuery('input, textarea').blur(function(){
			  var inputValue = jQuery(this).val();
			  if ( inputValue == "" ) {
				jQuery(this).removeClass('filled');
				jQuery(this).parents('.form-group').removeClass('focused');  
			  } else {
				jQuery(this).addClass('filled');
			  }
			})
		/*}*/
	}
	
	
	
	/* WOW ANIMATION ============ */
	var wow_animation = function(){
		if(jQuery('.wow').length > 0)
		{
			var wow = new WOW(
			{
			  boxClass:     'wow',      // animated element css class (default is wow)
			  animateClass: 'animated', // animation css class (default is animated)
			  offset:       0,          // distance to the element when triggering the animation (default is 0)
			  mobile:       false       // trigger animations on mobile devices (true is default)
			});
			wow.init();	
		}	
	}
	
	/* BGEFFECT ============ */
	
	var reposition = function (){
		'use strict';
		var modal = jQuery(this),
		dialog = modal.find('.modal-dialog');
		modal.css('display', 'block');
		
		/* Dividing by two centers the modal exactly, but dividing by three 
		 or four works better for larger screens.  */
		dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
	}
	
	var handelResize = function (){
		
		/* Reposition when the window is resized */
		jQuery(window).on('resize', function() {
			jQuery('.modal:visible').each(reposition);
		
			equalHeight('.equal-wraper .equal-col');
			footerAlign();
		});
	}
	
	/* Website Launch Date */ 
	var WebsiteLaunchDate = new Date();
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
	WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();
	/* Website Launch Date END */ 
	
	/* Header Height ============ */
	var setResizeMargin = function(){
		if((jQuery('.setResizeMargin').length > 0) && screenWidth >= 1280){
			var containerSize = jQuery('.container').width();
			var getMargin = (screenWidth - containerSize)/2;
			jQuery('.setResizeMargin').css('margin-left',getMargin);
		}
		if((jQuery('.setResizeMargin-right').length > 0) && screenWidth >= 1280){
			var containerSize = jQuery('.container').width();
			var getMargin = (screenWidth - containerSize)/2;
			jQuery('.setResizeMargin-right').css('margin-right',getMargin);
		}
	}
	
	/* LightGallery ============ */
	var lightGallery = function (){
		if((jQuery('#lightgallery, .lightgallery').length > 0)){
			jQuery('#lightgallery, .lightgallery').lightGallery({
				selector : '.lightimg',
				loop:true,
				thumbnail:true,
				exThumbImage: 'data-exthumbimage'
			});
		}
	}	
	
	/* handle Bootstrap Touch Spin ============ */
	var handleBootstrapTouchSpin = function(){
		if(jQuery("input[name='demo_vertical2']").length)
		{
			jQuery("input[name='demo_vertical2']").TouchSpin({
			  verticalbuttons: true,
			  verticalupclass: 'ti-plus',
			  verticaldownclass: 'ti-minus'
			});
		}
	}
	
	var boxHover = function(){
	
		jQuery('.pricingtable-wrapper.style-1').on('mouseenter',function(){
			jQuery('.pricingtable-wrapper.style-1').removeClass('active');
			jQuery(this).addClass('active');
			
		})
	}
	
	var customFileUpload = function(){
		
		jQuery(".custom-file-input").on("change", function() {
			var fileName = jQuery(this).val().split("\\").pop();
			jQuery(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
	}
	
	/* Range ============ */
	var priceslider = function(){

		if(jQuery(".price-slide, .price-slide-2").length > 0 ) {
			jQuery("#slider-range,#slider-range-2").slider({
				range: true,
				min: 300,
				max: 4000,
				values: [0, 5000],
				slide: function(event, ui) {
					var min = ui.values[0],
						max = ui.values[1];
					  jQuery('#' + this.id).prev().val("jQuery" + min + " - jQuery" + max);
				}
			});
		}
	}

	
	/* Function ============ */
	return {
		init:function(){
			boxHover();
			wow_animation();
			onePageLayout();
			dzTheme();
			homeSearch();
			handleResizeElement();
			handlePlaceholderAnimation();
			MagnificPopup();
			handleAccordian();
			scrollTop();
			footerAlign();
			fileInput();
			headerFix();
			handleVideo();
			handleFilterMasonary();
			handleCountDown(WebsiteLaunchDate);
			handleBannerResize();
			setResizeMargin();
			handelResize();
			lightGallery();
			jQuery('.modal').on('show.bs.modal', reposition);
			customFileUpload();
			priceslider();
		},

		
		load:function(){
			handleBootstrapSelect();
			equalHeight('.equal-wraper .equal-col');
			counter();
			masonryBox();
			handleBootstrapTouchSpin();
			
		},
		
		resize:function(){
			screenWidth = jQuery(window).width();
			dzTheme();
			setTimeout(function(){
				handleResizeElement();
			}, 500);
			
		}
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	Samar.init();
	
	jQuery('.navicon').on('click',function(){
		jQuery(this).toggleClass('open');
	});
	
	/* jQuery('#faqSpecifications .card-header a').on('mouseover',function(){
		jQuery('.faq-media img').removeClass('active');
		var imageDivId = jQuery(this).attr('data-image-bx');
		jQuery('#'+imageDivId).addClass('active');
	});  */
	
	/* jQuery('.gallery-category .items').on('mouseover',function(){
		jQuery('.gallery-img img').removeClass('active');
		var imageDivId = jQuery(this).attr('data-image-bx');
		jQuery('#'+imageDivId).addClass('active');
	});  */

});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	Samar.load();
	setTimeout(function(){
		jQuery('#loading-area').remove();
	}, 0);
});
/*  Window Load END */
/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	Samar.resize();
});
/*  Window Resize END */