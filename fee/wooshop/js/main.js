/* ================================================
----------- WooShop ---------- */
(function ($) {
	"use strict";
	var WooShop = {
		initialised: false,
		version: 1.0,
		mobile: false,
		container : $('#portfolio-item-container'),
		blogContainer: $('#blog-item-container'),
		productContainer: $('#product-container'),
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			// Call WooShop Functions
			this.checkMobile();
			this.menuHover();
			this.stickyMenu();
			this.toggleMobileMenu();
			this.menuDisplay();
			this.fullHeight();
			this.sideMenuCollapse();
			this.scrollToTopAnimation();
			this.scrollToClass();
			this.filterColorBg();
			this.productZoomImage();
			this.selectBox();
			this.boostrapSpinner();
			this.tooltip();
			this.popover();
			this.progressBars();
			this.registerKnob();
			this.parallax();
			this.tabLavaHover();
			this.collapseWidget();

			/* Call function if Owl Carousel plugin is included */
			if ( $.fn.owlCarousel ) {
				this.owlCarousels();
			}

			/* Call function if Magnific Popup plugin is included */
			if ( $.fn.magnificPopup) {
				this.newsletterPopup();
				this.lightBox();
			}

			/* Call function if Media element plugin is included */
			if ($.fn.mediaelementplayer) {
				this.mediaElement();
			}

			/* Call function if Media noUiSlider plugin is included */
			if ($.fn.noUiSlider) {
				this.priceSlider();
			}

			var self = this;
			/* Imagesloaded plugin included in isotope.pkgd.min.js */
			/* Portfolio isotope + Blog masonry with images loaded plugin */
			if (typeof imagesLoaded === 'function') {
				/* */
				imagesLoaded(self.container, function() {
					self.isotopeActivate();
					// recall for plugin support
					self.isotopeFilter();
				});

				/* check images for blog masonry/grid */
				imagesLoaded(self.blogContainer, function() {
					self.blogMasonry();
				});

				/* check images for product masonry/grid index11 */
				imagesLoaded(self.productContainer, function() {
					self.productMasonry();
				});
			}

		},
		checkMobile: function () {
			/* Mobile Detect*/
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				this.mobile = true;
			} else {
				this.mobile = false;
			}
		},
		toggleMobileMenu: function () {
			var self = this;
			/* Mobile menu open */
			$('#mobile-menu-btn, #mobile-menu-overlay, #mobile-menu-close').on('click', function (e) {
				self.toggleClass();
				e.preventDefault();
			});
		},
		toggleClass: function () {
			$('#mobile-menu, #mobile-menu-btn').toggleClass('opened');
			$('body').toggleClass('no-scroll');
		},
		fullHeight: function () {
			/* make a section full window height with predefined class */
			$('.fullheight').each(function () {
				var winHeight = $(window).height();

				$(this).css('height', winHeight);
			});
		},
		menuHover: function () {
			// Sub menu show/hide with hoverIntent plugin
			if ($.fn.hoverIntent) {
				$('ul.menu').hoverIntent({
					over: function() {
						$(this).addClass('open');

					},
					out: function() {
						$(this).removeClass('open');
					},
					selector: 'li',
					timeout: 145,
					interval: 55
				});
			}
		},
		stickyMenu: function () {
			// Stickymenu with waypoint and waypoint sticky plugins
			if ($.fn.waypoint && $(window).width() > 768) {

				$('.header_bottom').waypoint('sticky', {
					stuckClass:'fixed',
					offset: -200
				});
			}

		},
		sideMenuCollapse: function () {
			/* toggle side menu + mobile menu sub menus */
			$('.side-menu, #mobile-menu').find('.smenu, .mobile-menu').find('a').on('click', function(e) {

				if ($(this).siblings('ul').length) {
					$(this).siblings('ul').slideToggle(400, function () {
						$(this).closest('li').toggleClass('open');
					});
					e.preventDefault();
				} else {
					return;
				}

			});
		},
		menuScrollbar: function () {
			if ($.fn.slimScroll) {
				/* For Side Menu*/
				if ( $('.side-menu').hasClass('dark') ) {
					/* check for dark side menu and change color of scrollbar */
					var bgColor = '#606060';
				}

				$('.side-menu-wrapper').slimScroll({
					height: 'auto',
					color: (bgColor) ? bgColor : '#2e2e2e',
					opacity: 0.6,
					size: '3px',
					alwaysVisible: false
				});

				/* Mobile menu*/
				$('#mobile-menu-wrapper').slimScroll({
					height: 'auto',
					color: '#fff',
					opacity: 0.2,
					size: '4px',
					alwaysVisible: false,
					distance: '2px'
				});
			}
		},
		menuDisplay: function () {
			// Menu Display via btn (see: index4.hmtl)
			$('#menu-display-btn').on('click', function (e) {
				$(this).toggleClass('open');
				$('#menu-container').find('.nav-center').toggleClass('open');
				e.preventDefault();
			});
		},
		tabLavaHover: function () {
			/* Require jquery.lavalamp.min.js file */
			/* Hover Animation which is used for tabs ( checkout elements-tabs.html page to see ) */
			/*if ($.fn.lavalamp) {
				$('.nav-lava').lavalamp({
					setOnClick: true,
					duration: 500,
					autoUpdate: true
				});
			}*/
		},
		owlCarousels: function () {
			var self = this;

			/* Product newarrivals carousel (shoes)  - (index.html - homepage) */
			$('.owl-carousel.home-newarrivals-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480: {
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Latest Blog Posts Carousels - (index.html - homepage) */
			$('.owl-carousel.home-latestblog-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480: {
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* index14.html - Lookbook carousel */
			$('.owl-carousel.lookbook-carousel').owlCarousel({
	            loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				autoplay: true,
				autoplayTimeout: 10000,
				center: true,
				responsive:{
					0:{
						items:1
					},
					520:{
						items:2
					},
					768: {
						items:3
					},
					992: {
						items:4
					}
				}
	        });

	        /* Latest Blog Posts Carousels - (index20.html - homepage) */
			$('.owl-carousel.home-latestposts-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					520:{
						items:2
					},
					768: {
						items:3
					},
					992: {
						items:4
					}
				}
			});

			/* Latest Blog Posts Carousels - (index8html - homepage) */
			$('.owl-carousel.home-latestposts-carousel-sm').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					520:{
						items:2
					},
					768: {
						items:3
					}
				}
			});

			/* Product.html -  Product carousel to zoom product section */
			$('.owl-carousel.product-gallery').owlCarousel({
	            loop:false,
				margin:15,
				responsiveClass:true,
				nav:false,
				dots: false,
				autoplay: true,
				autoplayTimeout: 10000,
				responsive:{
					0:{
						items:3
					},
					480: {
						items:4
					}
				}
	        });

			/* Portfolio - Related Projects Carousel - (single-portfolio.html) */
			$('.owl-carousel.portfolio-related-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:true,
				navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
				dots: false,
				autoplay: true,
				autoplayTimeout: 10000,
				responsive:{
					0:{
						items:1
					},
					600: {
						items:2
					},
					992:{
						items:3
					}
				}
			});


			/* Product featured carousel  - (product.html - homepages) */
			$('.owl-carousel.product-featured-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product popular carousel  - (product.html - homepages) */
			$('.owl-carousel.product-popular-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product newarrivals carousel  - (product.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product featured carousel  - (index2.html - homepages) */
			$('.owl-carousel.product-featured-carousel-sm').owlCarousel({
				loop:false,
				margin:0,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					}
				}
			});

			/* Product popular carousel  - (index2.html - homepages) */
			$('.owl-carousel.product-popular-carousel-sm').owlCarousel({
				loop:false,
				margin:24,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					}
				}
			});

			/* Product newarrivals carousel  - (index2.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel-sm').owlCarousel({
				loop:false,
				margin:24,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					}
				}
			});

			/* Sale products carousel  - (index2.html - homepages) */
			$('.owl-carousel.product-sale-carousel').owlCarousel({
				loop:false,
				margin:24,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					}
				}
			});

			/* Testimonial Slider Sidebar - widget  - (index2.html) */
			$('.owl-carousel.testimonials-slider').owlCarousel({
				loop:true,
				margin: 0,
				responsiveClass: true,
				nav: false,
				dots: false,
				items: 1,
				autoplay: true,
				autoplayTimeout: 8000
			});

			/* Product featured carousel  - (index16.html - homepages) */
			$('.owl-carousel.product-featured-carousel-lg').owlCarousel({
				loop:false,
				margin:45,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2,
						margin:30
					},
					768:{
						items:3,
						margin:30
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product popular carousel  - (index16.html - homepages) */
			$('.owl-carousel.product-popular-carousel-lg').owlCarousel({
				loop:false,
				margin:45,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2,
						margin:30
					},
					768:{
						items:3,
						margin:30
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product newarrivals carousel  - (index16.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel-lg').owlCarousel({
				loop:false,
				margin:45,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2,
						margin:30
					},
					768:{
						items:3,
						margin:30
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product clearance carousel  - (index16.html - homepages) */
			$('.owl-carousel.product-clearance-carousel').owlCarousel({
				loop:false,
				margin:45,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2,
						margin:30
					},
					768:{
						items:3,
						margin:30
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});

			/* Product featured carousel  - (index5.html - homepages) */
			$('.owl-carousel.product-featured-carousel-xlg').owlCarousel({
				loop:false,
				margin:25,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					},
					1400: {
						items:6
					}
				}
			});

			/* Product popular carousel  - (index5.html - homepages) */
			$('.owl-carousel.product-popular-carousel-xlg').owlCarousel({
				loop:false,
				margin:25,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					},
					1400: {
						items:6
					}
				}
			});

			/* Product newarrivals carousel  - (index5.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel-xlg').owlCarousel({
				loop:false,
				margin:25,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					},
					1400: {
						items:6
					}
				}
			});

			/* Product newarrivals carousel  - (index18.html - homepages) */
			$('.owl-carousel.presentation-newarrivals-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					}
				}
			});

			/* Product featured carousel  - (index18.html - homepages) */
			$('.owl-carousel.presentation-featured-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					768:{
						items:3
					}
				}
			});

			/* Banner row first carousel  - (index6.html - homepages) */
			$('.owl-carousel.banner-row-carousel-first').owlCarousel({
				loop:false,
				margin:0,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480: {
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:3
					},
					1400: {
						items:4
					},
					1650: {
						items:5
					}
				}
			});

			/* Banner row second carousel  - (index6.html - homepages) */
			$('.owl-carousel.banner-row-carousel-second').owlCarousel({
				loop:false,
				margin:0,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480: {
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:3
					},
					1400: {
						items:4
					},
					1650: {
						items:5
					}
				}
			});

			/* Banner row third carousel  - (index6.html - homepages) */
			$('.owl-carousel.banner-row-carousel-third').owlCarousel({
				loop:false,
				margin:0,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480: {
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:3
					},
					1400: {
						items:4
					},
					1650: {
						items:5
					}
				}
			});

			/* Product featured carousel  - (index12.html - homepages) */
			$('.owl-carousel.product-featured-carousel-6col').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					480:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:5
					},
					1200:{
						items:6
					}
				}
			});

			/* Product popular carousel  - (index12.html - homepages) */
			$('.owl-carousel.product-popular-carousel-6col').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					480:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:5
					},
					1200:{
						items:6
					}
				}
			});

			/* Product newarrivals carousel  - (index12.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel-6col').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:2
					},
					480:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:5
					},
					1200:{
						items:6
					}
				}
			});

			/* Product featured carousel  - (index17.html - homepages) */
			$('.owl-carousel.product-featured-carousel-side').owlCarousel({
				loop:false,
				margin:23,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});

			/* Product popular carousel  - (index17.html - homepages) */
			$('.owl-carousel.product-popular-carousel-side').owlCarousel({
				loop:false,
				margin:23,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});

			/* Product newarrivals carousel  - (index17.html - homepages) */
			$('.owl-carousel.product-newarrivals-carousel-side').owlCarousel({
				loop:false,
				margin:23,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});

			/* Latest Blog Posts Carousels - (index17.html - homepage) */
			$('.owl-carousel.home-blog-post-carousel').owlCarousel({
				loop:false,
				margin:30,
				responsiveClass:true,
				nav:false,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					520:{
						items:2
					},
					768: {
						items:3
					}
				}
			});


			/*Caution This carousel function has to be called after the function above
			You must call this function after the carousel inside of tabs (for example product.html lava tab)*/
			/* Product - Products Carousel */
			var productCarousel = $('.owl-carousel.product-slider').owlCarousel({
				loop:false,
				margin:0,
				items:1,
				responsiveClass:true,
				animateOut: 'fadeOut', // Choose a calls form animated.css and change then tada
				nav:true,
				navText: ['Previous', 'Next'],
				dots: false
			});


			/* index.html - Clients -partners carousel  */
			$('.owl-carousel.our-partners').owlCarousel({
				loop:false,
				margin:0,
				responsiveClass:true,
				nav:true,
				navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
				dots: false,
				responsive:{
					0:{
						items:2,
						nav:false
					},
					420: {
						items:3,
						nav:false
					},
					520: {
						items:4
					},
					992:{
						items:5,
					},
					1199:{
						items:6,
					}
				}
			});


			/* Brand - slider */
			$('.brand_wrapper .owl-carousel').owlCarousel({
				loop:false,
				margin:0,
				responsiveClass:true,
				nav:true,
				navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
				dots: false,
				responsive:{
					0:{
						items:2,
						nav:false
					},
					420: {
						items:3,
						nav:false
					},
					520: {
						items:4
					},
					992:{
						items:5,
					},
					1199:{
						items:5,
					}
				}
			});

		},
		scrollTopBtnAppear: function () {
			// This will be triggered at the bottom of code with window scroll event
			var windowTop = $(window).scrollTop(),
		            scrollTop = $('#scroll-top');

	        if (windowTop >= 300) {
	            scrollTop.addClass('fixed');
	        } else {
	            scrollTop.removeClass('fixed');
	        }

		},
		scrollToAnimation: function (speed, offset, e) {
			/* General scroll to function */
			var targetEl = $(this).attr('href'),
				toTop = false;

			if (!$(targetEl).length) {
				if (targetEl === '#header' || targetEl === '#top' || targetEl === '#wrapper') {
					targetPos = 0;
					toTop = true;
				} else {
					return;
				}
			} else {
				var elem = $(targetEl),
					targetPos = offset ? ( elem.offset().top + offset ) : elem.offset().top;
			}

			if (targetEl || toTop) {
				$('html, body').animate({
		            'scrollTop': targetPos
		        }, speed || 1200);
		        e.preventDefault();
			}
		},
		scrollToTopAnimation: function () {
			var self = this;
			// Scroll to top animation when the scroll-top button is clicked
			$('#scroll-top').on('click', function (e) {
		        self.scrollToAnimation.call(this, 1200, 0, e);
		    });
		},
		scrollToClass: function () {
			var self = this;
			// Scroll to animation - predefined class
			// Just add this class to any element and
			// add href attribute with target id (#targer like so ) for target
			// you can change 0 offset to -60 (height of fixed header)
			$('.scrollto, .section-btn').on('click', function (e) {
		        self.scrollToAnimation.call(this, 1200, 0, e);
		    });
		},
		priceSlider:function () {
			// Slider For category pages / filter price
			$('#price-range').noUiSlider({
				start: [0, 2990],
				handles: 2,
				connect: true,
				range: {
					'min': 0,
					'max': 4000
				}
			});

			$("#price-range").Link('lower').to( $('#slider-low-value') )
			$("#price-range").Link('upper').to( $('#slider-high-value') );
		},
		filterColorBg: function () {
			/* Category-item filter color box background */
			$('.filter-color-box').each(function() {
				var $this = $(this),
					bgColor = $this.data('bgcolor');

					$this.css('background-color', bgColor);
			});
		},
		productZoomImage: function () {
			var self = this;
			// Product page zoom plugin settings
			if ($.fn.elevateZoom) {
				$('#product-zoom').elevateZoom({
					responsive: true,
					zoomType: 'inner', // lens or window can be used - options already set below
					borderColour: '#d0d0d0',
					zoomWindowPosition: 1,
					zoomWindowOffetx: 30,
					cursor: "crosshair", //
					zoomWindowFadeIn: 400,
					zoomWindowFadeOut: 250,
					lensBorderSize: 3, // lens border size
					lensOpacity: 1,
					lensColour: 'rgba(255, 255, 255, 0.5)', // lens color
					lensShape : "square", // circle lens shape can be uses
					lensSize : 200,
					scrollZoom : true
				});

				/* swap images for zoom on click event */
				$('.product-gallery').find('a').on('click', function (e) {
					var ez = $('#product-zoom').data('elevateZoom'),
						smallImg = $(this).data('image'),
						bigImg = $(this).data('zoom-image');

						ez.swaptheimage(smallImg, bigImg);
					e.preventDefault();
				});
			}
		},
		selectBox: function () {
			// Custom select box via selectbox plugin
			// Be sure to include jquery.selectbox.css and jquery.selectbox.min.js files
			if ($.fn.selectbox) {
				$('.selectbox').selectbox({
					effect: "fade"
				});
			}
		},
		boostrapSpinner: function () {
			// Custom spinners
			// Include jquery.bootstrap-touchspin.min.min.js file
			if ($.fn.TouchSpin) {
				// Vertical Spinner
				$(".vertical-spinner").TouchSpin({
					verticalbuttons: true
				});

				//Horizontal spinner
				$(".horizontal-spinner").TouchSpin();
			}
		},
		tooltip: function () {
			// Bootstrap tooltip
			if($.fn.tooltip) {
				$('.add-tooltip').tooltip();
			}
		},
		popover: function () {
			// Bootstrap tooltip
			if($.fn.popover) {
				$('.add-popover').popover({
					trigger: 'focus'
				});
			}
		},
		newsletterPopup : function () {
			// Newsletter form popup - require magnific-popup plugin on page load

			if ( ! document.getElementById('newsletter-popup-form') ) {
				return;
			}

			jQuery.magnificPopup.open({
				items: {
					src: '#newsletter-popup-form'
				},
				type: 'inline'
			}, 0);
		},
		lightBox: function () {
			/* Popup for gallery items and videso and etc.. */
			/* magnific-popup.css and jquery.magnific.popup.mi.js files need to be included */

			/* This is for gallery images */
			$('.popup-gallery').magnificPopup({
				delegate: '.zoom-item',
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: true,
				mainClass: 'mfp-fade',
				removalDelay: 100,
				gallery: {
					enabled: true
				}
			});


			/* This is for iframe - youtube - vimeo videos - goole maps  with fade animation */
			$('.popup-iframe').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});

		},
		progressBars: function () {
			var self = this;
			// Calculate and Animate Progress
			// With waypoing plugin calculate width of the progress bar
			if ($.fn.waypoint) {
				$('.progress-animate').waypoint(function () {
					if (!$(this).hasClass('circle-progress')) {
						var $this = $(this),
						progressVal = $(this).data('width'),
						progressText = $this.find('.progress-text, .progress-tooltip');

						$this.css({ 'width' : progressVal + '%'}, 400);

						setTimeout(function() {
							progressText.fadeIn(400, function () {
								$this.removeClass('progress-animate');
							});
						}, 100);

					} else {
						// Animate knob --- Circle progrss bars
						self.animateKnob();
					}
				}, {
					offset: function() {
						return ( $(window).height() - 10);
					}
				});


			} else {
				// Fallback if the waypoint plugin isn't included
				// Get the value and calculate width of progress bar
				$('.progress-animate').each(function () {
					var $this = $(this),
						progressVal = $(this).data('width'),
						progressText = $this.find('.progress-text');

					$this.css({ 'width' : progressVal + '%'}, 400);
					progressText.fadeIn(500);
				});

			}
		},
		registerKnob: function() {
			// Register knob plugin
			if ($.fn.knob) {
				$('.knob').knob({
					bgColor : '#ebebeb'
				});
			}
		},
		animateKnob: function() {
			// Animate knob
			if ($.fn.knob) {
				$('.knob').each(function() {
					var $this = $(this),
						container = $this.closest('.progress-animate'),
						animateTo = $this.data('animateto'),
						animateSpeed = $this.data('animatespeed')
					$this.animate(
			                { value: animateTo },
			                {   duration: animateSpeed,
			                    easing: 'swing',
		                    progress: function() {
		                      $this.val(Math.round(this.value)).trigger('change');
		                    },
		                    complete: function () {
		                    	container.removeClass('progress-animate');
		                    }
	               		});

				});
			}
		},
		mediaElement: function () {
			/* Media element plugin for video and audio support and styling */
			$('video, audio').mediaelementplayer();
		},
		scrollAnimations: function () {

			/* 	// Wowy Plugin
				Add Html elements wow and animation class
				And you can add duration via data attributes
				data-wow-duration: Change the animation duration
				data-wow-delay: Delay before the animation starts
				data-wow-offset: Distance to start the animation (related to the browser bottom)
				data-wow-iteration: Number of times the animation is repeated
			*/

			// Check for class WOW // You need to call wow.min.js and animate.css for scroll animations to work
			if (typeof WOW === 'function') {
				new WOW({
					boxClass:     'wow',      // default
					animateClass: 'animated', // default
					offset:       0          // default
				}).init();
			}

		},
		parallax: function () {
			// Parallax - if not mobile  with skrollr js plugin
			if ( !this.mobile && typeof skrollr === 'object') {
				skrollr.init({
					forceHeight: false
				});
			}

			if ( this.mobile ) {
				/* if mobile, delete background attachment fixed from parallax class */
				$('.parallax, .parallax-fixed').css('background-attachment', 'initial')
			}

		},
		isotopeActivate: function() {
			// Trigger for isotope plugin
			if($.fn.isotope) {
				var container = this.container,
					layoutMode = container.data('layoutmode');

				container.isotope({
                	itemSelector: '.portfolio-item',
                	layoutMode: (layoutMode) ? layoutMode : 'masonry',
                	transitionDuration: 0
            	});


			}
		},
		isotopeReinit: function () {
			// Recall for isotope plugin
			if($.fn.isotope) {
				this.container.isotope('destroy');
				this.isotopeActivate();
			}
		},
		isotopeFilter: function () {
			// Isotope plugin filter handle
			var self = this,
				filterContainer = $('#portfolio-filter');

			filterContainer.find('a').on('click', function(e) {
				var $this = $(this),
					selector = $this.attr('data-filter');

				filterContainer.find('.active').removeClass('active');

				// And filter now
				self.container.isotope({
					filter: selector,
					transitionDuration: '0.8s'
				});

				$this.closest('li').addClass('active');
				e.preventDefault();
			});
		},
		blogMasonry: function () {
			/* Masonry - Grid for blog pages with isotope.pkgd.min.js file */

			// This is defined at the top of the this file
			var blogContainer = this.blogContainer;

			blogContainer.isotope({
				itemSelector: '.entry',
				masonry: {
					gutter: 30
				}
			});
		},
		productMasonry: function () {
			/* Masonry - Grid for product homepages with isotope.pkgd.min.js file */
			var productContainer = this.productContainer;

			productContainer.isotope({
				itemSelector: '.product',
				layoutmode: 'fitRows'
			});
		},
		collapseWidget : function () {

			// Sidebar category collapse (category.html )
			$('.category-widget-btn').on('click', function (e) {
				var $this = $(this),
					parent= $this.closest('li');

				if (parent.hasClass('open')) {
					parent.find('ul').slideUp(400, function() {
						parent.removeClass('open');
					});
				} else {
					parent.find('ul').slideDown(400, function() {
						parent.addClass('open');
					});
				}
				e.preventDefault();
			});
		},

	};

	WooShop.init();

	// Load Event
	$(window).on('load', function() {
		/* Trigger side menu scrollbar */
		WooShop.menuScrollbar();

		/* Trigger Scroll Animations */
		WooShop.scrollAnimations();


		$('.ad_wrapper').show();

		$('.ad_wrapper .close').on('click',function(){
			$('.ad_wrapper').hide().addClass('hide');
		});

	});

	// Scroll Event
	$(window).on('scroll', function () {
		/* Display Scrol to Top Button */
		WooShop.scrollTopBtnAppear();

	});

	// Resize Event
	// Smart resize if plugin not found window resize event
	if($.event.special.debouncedresize) {
		$(window).on('debouncedresize', function() {

			/* Full Height recall */
			WooShop.fullHeight();

	    });
	} else {
		$(window).on('resize', function () {

			/* Full Height recall */
			WooShop.fullHeight();

		});
	}

	/* Do not delete - this is trigger for owl carousels which used in bootstrap tab plugin */
	/* This is update for carousels  example (product.html) */
    $('.nav-lava').find('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
		/* Trigger resize event for to owl carousels fit */
		var evt = document.createEvent('UIEvents');
		evt.initUIEvent('resize', true, false,window,0);
		window.dispatchEvent(evt);
    });


	//////////////////////////// Custom start ////////////////////////////////
	$( document ).ready(function() {
		$('.main_search_dropdown_overlay,.main_search_dropdown').hide();
		$('.header-simple-search input').on('click',function(){
			$('.main_search_dropdown').slideDown();
			$('.main_search_dropdown_overlay').fadeIn();
			$('.main_search_dropdown_overlay').addClass('hideme');
		});


		$('.main_search_dropdown_overlay').on('click',function(){
			$('.main_search_dropdown').slideUp();
			$(this).fadeOut();
		});


		$('#register_account_link').on('click', function(){
			$(this).parent('p').parent('.user_acc_footer').parent('.login_account').parent('.user_account_popup').addClass('reg_open');
			$(this).parent('p').parent('.user_acc_footer').parent('.login_account').parent('.user_account_popup').removeClass('reg_close');
		});

		$('#login_account_link').on('click', function(){
			$(this).parent('p').parent('.user_acc_footer').parent('.register_account').parent('.user_account_popup').removeClass('reg_open');
			$(this).parent('p').parent('.user_acc_footer').parent('.register_account').parent('.user_account_popup').addClass('reg_close');
		});

		
		$('.banner-newsletter.main_popup .close').on('click', function(){
			$('.main_popup_wrapper').fadeOut(300);
		});
     var newYear = new Date(); 
            newYear = new Date(newYear.getFullYear() + 1, 4 - 1, 1); 
            $('#countdown').countdown({until: newYear});

	
            // Slider Revolution
            jQuery('#revslider').revolution({
                delay:8000,
                startwidth:870,
                startheight:500,
                fullWidth:"on",
                fullScreen:"off",
                hideTimerBar: "on",
                spinner:"spinner4",
                navigationType: "none",
                navigationArrows : "none"
              });
			  
			  
			// timer countdown
			$('[data-countdown]').each(function() {
			   var $this = $(this), finalDate = $(this).data('countdown');
			   $this.countdown(finalDate, function(event) {
				 $this.html(event.strftime('<div class="counter"><span><p>%H</p> <p class="text">hours</p></span> <span><p>%M</p> <p class="text">minutes</p></span> <span><p>%S</p> <p class="text">seconds</p></span></div>'));
			   });
			 });
        // Countdown 
    });

    /* Map */
        $(function() {
            
            if (document.getElementById("map")) {
                var locations = [
                    ['<div class="map-info-box"><h5>Company Address</h5><address>20 Martin Place, 20 Martin Pl, Sydney NSW 2000,<br>Australia</address></div>', -33.8674264,151.2087705, 9]
                ];

                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 17,
                    center: new google.maps.LatLng(-33.8674264,151.2087705),
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });

                var infowindow = new google.maps.InfoWindow();


                var marker, i;

                for (i = 0; i < locations.length; i++) {  
                  marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    animation: google.maps.Animation.DROP,
                    icon: 'images/pin.png',
                  });

                  google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                      infowindow.setContent(locations[i][0]);
                      infowindow.open(map, marker);
                    }
                  })(marker, i));
                }
            }

        }());



})(jQuery);
