(function ($) {
	"use strict";
    
    var hexagon = { 
        /* ---------------------------------------------
         Preloader
         --------------------------------------------- */
        preloader: function() {
            $(window).on('load', function() {
                $("body").imagesLoaded(function() {
                    $('.preloader').delay(300).slideUp('slow', function () {
                        $(this).remove();
                    });
                });
            });
        },

        /* ---------------------------------------------
         Animated social share
         --------------------------------------------- */
        animate_social_share: function() {
            $(".social-share a").mouseover(function(){
                $(this).animate({top: "10px"},10);
            });
            $(".social-share a").mouseout(function(){
                $(this).animate({top: "0px"},10);
            });
        },
        
        /* ---------------------------------------------
        typer
        --------------------------------------------- */
        typer: function () {
            $("#typed").typed({
                stringsElement: $('#typed-strings'),
                typeSpeed: 30,
                backDelay: 300,
                loop: true,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false
            });
        },
        /* ---------------------------------------------
         Count Down
         --------------------------------------------- */
        count_down: function() {
            $('#countdown').syotimer({
                year: 2017,
                month: 12,
                day: 9,
                hour: 20,
                minute: 30
            });    
        },
        /* ---------------------------------------------
         Background Slideshow
         --------------------------------------------- */
        bg_slideshow: function() {
            //slideshow
            $(".slideshow").backgroundCycle({
                imageUrls: [
                    'assets/images/slide/slide-1.jpg',
                    'assets/images/slide/slide-2.jpg',
                    'assets/images/slide/slide-3.jpg'
                ],
                fadeSpeed: 1500,
                duration: 3000,
                backgroundSize: SCALING_MODE_COVER
            });
            
            //kenburn slideshow
            $('.slideshow-kenburn').vegas({
                slides: [
                    { src: 'assets/images/slide/slide-2.jpg' },
                    { src: 'assets/images/slide/slide-4.jpg' },
                    { src: 'assets/images/slide/slide-5.jpg' }
                ],
                    animation: 'kenburns'
            });
        },
        
        /* ---------------------------------------------
         Mail Chip
         --------------------------------------------- */
        mailchip: function () {
            $('#mc-form').ajaxChimp({
                url: 'http://codextree.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb'
                    /* Replace Your AjaxChimp Subscription Link */
            });            
        },
        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {   
            hexagon.preloader();
            hexagon.animate_social_share();
            hexagon.typer();               
            hexagon.count_down();         
            hexagon.bg_slideshow();        
            hexagon.mailchip();       
        }
    };
    
    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        hexagon.initializ();
    });  
    
})(jQuery);