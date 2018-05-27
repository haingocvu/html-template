(function ($) {
	"use strict";
    
    var freeWorkerApp = { 
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
        Background Parallax
        --------------------------------------------- */
        background_parallax: function() {
            $('.bg-images').scrolly({bgParallax: true});
        },
        
        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {   
            freeWorkerApp.preloader();
            freeWorkerApp.background_parallax();    
        }
    };
    
    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        freeWorkerApp.initializ();
    });
    
})(jQuery);