// --------------------------------------------------------------
	// Author       : Tanvirul Haque
	// Template Name: Landy - Onepage Startup Landing page
	// Version      : 1.0	
// --------------------------------------------------------------
// ==============================================================
    // CSS TABLE OF CONTENTS
// ==============================================================
    // 01. START PRELOADER
    // 02. START MENU STICKY JS
    // 03. START SMOTH SCROOL JS
    // 04. START SCROOLSPY JS
    // 05. START TOGGLE DROPDOWN JS
    // 06. START TYPED JS
	// 07. START MAGNIFIC POPUP JS
	// 08. START PARTNER CAROUSEL JS
	// 09. START COUNTDOWN JS
	// 10. START PORTFOLIO MIXITUP JS
    // 11. START VENOBOX JS
	// 12. START AJAXCHIMP JS
	// 13. START GOOGLE MAP JS
    // 14. START WOW ANIMATION JS
// ==============================================================

(function ($) {
    "use strict";
	
	jQuery(document).ready(function($){
		
		// 01. START PRELOADER
		$(window).load(function() {
			// Animate loader off screen
			$(".preloader").fadeOut("slow");
		});
		// 01. END PRELOADER
		
		// 02. START MENU STICKY JS
		$(".header-top-area").sticky({
            topSpacing: 0,
        });
		// 02. END MENU STICKY JS
		
		// 03. START SMOTH SCROOL JS
		$('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 60
            }, 1200);
            e.preventDefault();
        });
		// 03. END SMOTH SCROOL JS
		
		// 04. START SCROOLSPY JS
		$('body').scrollspy({
            target: '.navbar-collapse',
            offset: 80
        });
		// 04. END SCROOLSPY JS
		
		// 05. START TOGGLE DROPDOWN JS
		$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});
		// 05. END TOGGLE DROPDOWN JS
		
		// 06. START TYPED JS
		$(".typed").typed({
            stringsElement: $(".typed-strings"),
            loop: true,
			typeSpeed: 30,
            backDelay: 2000
        });
		// 06. END TYPED JS
		
		// 07. START MAGNIFIC POPUP JS
		$('a.video-play').magnificPopup({
            type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
        });
		// 07. END MAGNIFIC POPUP JS
		
		// 08. START PARTNER CAROUSEL JS
		$('#partner-carousel').owlCarousel({
			center: true,
		    loop:true,
			margin:0,
			nav:false,
			autoplay:true,
			smartSpeed:900,
		    autoplayTimeout:2000,
		    autoplayHoverPause:true,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		        },
		        600:{
		            items:2,
		        },
		        1000:{
		            items:4,
		        }
		    }
		});
		// 08. END PARTNER CAROUSEL JS
		
		// 09. START COUNTDOWN JS
		$('.skills-progress').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 3000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		// 09. END COUNTDOWN JS
		
		// 10. START PORTFOLIO MIXITUP JS
		jQuery('.grid').mixitup({
			targetSelector: '.mix'
		});
		// 10. END PORTFOLIO MIXITUP JS
		
		// 11. START VENOBOX JS
		$('.image-popup').venobox({
			numeratio: true,
			infinigall: true
		});
		// 11. END VENOBOX JS
		
		// 12. START AJAXCHIMP JS
		$('#mc-form').ajaxChimp();
		// 12. END AJAXCHIMP JS
		
        // 13. START GOOGLE MAP JS
         var myCenter=new google.maps.LatLng(-37.81137, 144.96102);
            function initialize(){
				var mapProp = {
					zoom:16,
					center:myCenter,
					scrollwheel: false,
					styles: [ { "stylers": [ { "hue": "#ffffff" },  {saturation: -100},
					{gamma: 2} ] } ],
					mapTpeIdy:google.maps.MapTypeId.ROADMAP
				};
	            var map=new google.maps.Map(document.getElementById("contactgoogleMap"),mapProp);
            }
            google.maps.event.addDomListener(window, 'load', initialize);        
		// 13. END GOOGLE MAP JS
	});
	
	// 14. START WOW ANIMATION JS
	new WOW().init();
	// 14. END WOW ANIMATION JS
	
})(jQuery);