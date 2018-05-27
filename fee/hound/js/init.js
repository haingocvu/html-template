/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1.Ready function
	2.Load function
	3.Subscribe JS
	4.Full height function
	5.Resize function
	6.coyote function
	7.click function
	8.Placehoder ie9
	9.Photoswipe init
 ** ***************************************/
 
 "use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
  $('.la-anim-1').addClass('la-animate');
  $('body').niceScroll({cursorcolor:"#212121",cursorborder:"1px solid #c39f76"});
	$(".btn-info").click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("#link_proj").offset().top
		}, 2000);
	});	
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).load(function(){
	$(".preloader-it").delay(500).fadeOut("slow");
	setTimeout(function(){
		$(".ani-wrap .animated").addClass("slideInUp");
		$(".social-icons.animated").addClass("fadeInRight");
	},300);
});
/*****Load function* end*****/

/***** Full height function start *****/
var setHeight = function () {
	var height = $(window).height();
	var width = $(window).width();
	$('.full-height').css('min-height', (height));
	if ( width < 1025 && width > 767 )
		$('.side').height(height);
		else
			$('.side').css('height', '100%');
};
/***** Full height function end *****/

/*Client carousel start*/
$('#tech_sec .tech-carousel').owlCarousel({
	margin:20,
	nav:false,
	autoplay:true,
	responsive: {
		0: {
			items: 1
		},
		200: {
			items: 2
		},
		400: {
			items: 4
		},
		800: {
			items: 6
		},
		1200: {
			items: 8
		}
	}
});
/*Client carousel end*/
	
/***** Resize function start *****/
$(window).on("resize", function () {
	setHeight();
}).resize();
/***** Resize function end *****/

/***** coyote function start *****/
