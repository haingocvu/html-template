/**
 * http://kopatheme.com
 * Copyright (c) 2014 Kopatheme
 *
 * Licensed under the GPL license:
 *  http://www.gnu.org/licenses/gpl.html
  **/
  
/**
 *
 *   1- Menu
 *   2- Video wrapper
 *   3- Map
 *   4- Carousel
 *   5- Search animate
 *   6- Tabs
 *   7- Slider
 *   8- Masonry
 *   9- Validate form
 *   10- Flickr
 *   11- Back to top
 *   12- Accordion & Toggle
 *   13- Sync carousel
 *   14- Browser resize
 *
 *-----------------------------------------------------------------
 **/
"use strict";
var map;
var kopa_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        },
        "tweets": {
            "failed": "Sorry, twitter is currently unavailable for this user.",
            "loading": "Loading tweets..."
        }
    }
};
jQuery(document).ready(function($) {

/**
 *
 *   1- Menu
 *
 *-----------------------------------------------------------------
 **/
Modernizr.load([{
    load: 'js/superfish.js',
    complete: function() {
        $('.sf-menu.main-menu').superfish({
            delay: 400,
            speed: 'fast'
        });
    }
}]);
Modernizr.load([
  {
    load: 'js/navgoco.js',
    complete: function () {
        $(".mobile-menu.main-menu").navgoco({accordion: true});

        $('.mobile-menu-icon').click(function(){
            $(".mobile-menu.main-menu").slideToggle( 300 );
        });
    }
  }
]);
/**
 *
 *   2- Video wrapper
 *
 *-----------------------------------------------------------------
 **/
if (jQuery(".video-wrapper").length > 0) {
    Modernizr.load([{
        load: 'js/fitvids.js',
        complete: function() {
            $(".video-wrapper").fitVids();
        }
    }]);
};
/**
 *
 *   3- Map
 *
 *-----------------------------------------------------------------
 **/
if ($('.map-wrap').length > 0) {
    Modernizr.load([{
        load: 'js/gmaps.js',
        complete: function() {
            var map_id = '#' + $('.map-wrap').attr('id');
            var lat = parseFloat($('.map-wrap').attr('data-latitude'));
            var lng = parseFloat($('.map-wrap').attr('data-longitude'));
            map = new GMaps({
                el: map_id,
                lat: lat,
                lng: lng,
                zoomControl: true,
                zoomControlOpt: {
                    style: 'SMALL',
                    position: 'TOP_LEFT'
                },
                panControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                overviewMapControl: false
            });
            var marker_info = {
                lat: lat,
                lng: lng
            };
        }
    }]);
};
/**
 *
 *   4- Carousel
 *
 *-----------------------------------------------------------------
 **/
if (jQuery('.kopa-ticker').length > 0) {
    Modernizr.load([{
        load: 'js/caroufredsel.js',
        complete: function() {
            var _scroll = {
                delay: 1000,
                easing: 'linear',
                items: 1,
                duration: 0.07,
                timeoutDuration: 0,
                pauseOnHover: 'immediate'
            };
            jQuery('.kopa-ticker').carouFredSel({
                width: 1000,
                align: false,
                items: {
                    width: 'variable',
                    height: 35,
                    visible: 1
                },
                scroll: _scroll
            });
        }
    }]);
}
if (jQuery('.widget-small-thumb-carousel-widget').length > 0) {
    Modernizr.load([{
        load: 'js/owl.carousel.js',
        complete: function() {
            $(".widget-small-thumb-carousel-widget .owl-carousel").owlCarousel({
                items: 4,
                itemsDesktop: [1200, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [767, 2],
                itemsMobile: [360, 1],
                slideSpeed: 1000,
                pagination: false
            });
            $(".widget-small-thumb-carousel-widget .next").click(function(){
                $(".widget-small-thumb-carousel-widget .owl-carousel").trigger('owl.next');
            })
            $(".widget-small-thumb-carousel-widget .prev").click(function(){
                $(".widget-small-thumb-carousel-widget .owl-carousel").trigger('owl.prev');
            })
        }
    }]);
}
if (jQuery('.kopa-shop-widget').length > 0) {
    Modernizr.load([{
        load: 'js/owl.carousel.js',
        complete: function() {
            $(".kopa-shop-widget .owl-carousel").owlCarousel({
                items: 5,
                itemsDesktop: [1200, 5],
                itemsDesktopSmall: [1023, 4],
                itemsTablet: [767, 2],
                itemsMobile: [480, 1],
                slideSpeed: 1000,
                pagination: false
            });
            $(".kopa-shop-widget .next").click(function() {
                $(".kopa-shop-widget .owl-carousel").trigger('owl.next');
            })
            $(".kopa-shop-widget .prev").click(function() {
                $(".kopa-shop-widget .owl-carousel").trigger('owl.prev');
            })
        }
    }]);
}
if (jQuery('.kopa-small-thumb-lightbox-carousel').length > 0) {
    Modernizr.load([{
        load: ['js/owl.carousel.js', 'js/colorbox.js'],
        complete: function() {
            $(".kopa-small-thumb-lightbox-carousel .owl-carousel").owlCarousel({
                items: 3,
                itemsDesktop: [1200, 3],
                itemsDesktopSmall: [1023, 3],
                itemsTablet: [767, 3],
                itemsMobile: [480, 2],
                slideSpeed: 1000,
                navigation: true,
                navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                pagination: false
            });
            $(".group-colorbox").colorbox({
                rel: 'group-colorbox'
            });
        }
    }]);
}
if (jQuery('.owl-single-item').length > 0) {
    Modernizr.load([{
        load: 'js/owl.carousel.js',
        complete: function() {
            $(".owl-single-item").owlCarousel({
                singleItem:true,
                slideSpeed: 1000
            });
        }
    }]);
}
/**
 *
 *   5- Search animate
 *
 *-----------------------------------------------------------------
 **/
if ($('#kopa-search').length > 0) {
    Modernizr.load([{
        load: ['js/uisearch.js', 'js/classie.js'],
        complete: function() {
            new UISearch(document.getElementById('kopa-search'));
        }
    }]);
};
/**
 *
 *   6- Tabs
 *
 *-----------------------------------------------------------------
 **/
if ($('.nav-tabs').length > 0) {
    Modernizr.load([{
        load: 'js/bootstrap.js',
        complete: function() {
            $('.nav-tabs a').click(function(e) {
                e.preventDefault()
                $(this).tab('show')
            })
        }
    }]);
};
/**
 *
 *   7- Slider
 *
 *-----------------------------------------------------------------
 **/
if (jQuery('.kopa-slider').length > 0) {
    Modernizr.load([{
        load: 'js/jquery-ui.js',
        complete: function() {
            jQuery(".kopa-slider").slider({
                orientation: "horizontal",
                step: 20,
                min:20,
                range:"max",
                max:100,
                animate: true,
                change: function( event, ui ) {
                    var val_slider = jQuery(".kopa-slider").slider("value");
                    jQuery('.kopa-val').text(val_slider);
                    if(val_slider==20) {
                        jQuery('.kopa-val').css('left', 0 + '%');
                    } else if(val_slider==40) {
                        jQuery('.kopa-val').css('left', 25 + '%');
                    } else if(val_slider==60) {
                        jQuery('.kopa-val').css('left', 50 + '%');
                    } else if(val_slider==80) {
                        jQuery('.kopa-val').css('left', 75 + '%');
                    } else if(val_slider==100) {
                        jQuery('.kopa-val').css('left', 100 + '%');
                    }
                }
            });
        }
    }]);
};
/**
 *
 *   8- Masonry
 *
 *-----------------------------------------------------------------
 **/

if ($('.kopa-post-filter-widget').length > 0) {
    Modernizr.load([{
        load: ['js/filtermasonry.js', 'js/masonry.js'],
        complete: function() {
            $('.kopa-post-filter-widget').each(function(index){
                var id=$(this).attr('id');
                var container = '#'+id+' .masonryContainer';
                var filter=("#"+id+" .filters");
                $(container).multipleFilterMasonry({
                    itemSelector: '.item-outer',
                    filtersGroupSelector: filter
                });
                $(container).find('.filters span').click(function() {
                    $(container).find('.filters .active').removeClass('active');
                    $(this).addClass('active');
                });
            });
        }
    }]);
};
if ($('.kopa-post-filter-2-widget').length > 0) {
    Modernizr.load([{
        load: ['js/filtermasonry.js', 'js/masonry.js'],
        complete: function() {
            var $container = $('.kopa-post-filter-2-widget .masonryContainer');
            $container.multipleFilterMasonry({
                itemSelector: '.item',
                filtersGroupSelector: '.filters'
            });
            $('.kopa-post-filter-2-widget .filters span').click(function() {
                $('.kopa-post-filter-2-widget .filters .active').removeClass('active');
                $(this).addClass('active');
            });
        }
    }]);
};
if ($('.kopa-list-posts-2-widget').length > 0) {
    Modernizr.load([{
        load: ['js/masonry.js', 'js/imagesloaded.js'],
        complete: function() {
            var $container_ms = $('.kopa-list-posts-2-widget .masonry-container-inner');
            $container_ms.imagesLoaded(function() {
                $container_ms.masonry({
                    itemSelector: ".item",
                    columnWidth: ".item"
                });
            });
        }
    }]);
};
/**
 *
 *   9- Validate form
 *
 *-----------------------------------------------------------------
 **/

if ($('.comment-form,.contact-form').length > 0) {
    Modernizr.load([{
        load: ['js/form.js', 'js/validate.js'],
        complete: function() {
            jQuery('.comment-form,.contact-form').validate({
                // Add requirements to each of the fields
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                // Specify what error messages to display
                // when the user does something horrid
                messages: {
                    name: {
                        required: kopa_variable.i18n.validate.name.REQUIRED,
                        minlength: jQuery.format(kopa_variable.i18n.validate.name.MINLENGTH)
                    },
                    email: {
                        required: kopa_variable.i18n.validate.email.REQUIRED,
                        email: kopa_variable.i18n.validate.email.EMAIL
                    },
                    message: {
                        required: kopa_variable.i18n.validate.message.REQUIRED,
                        minlength: jQuery.format(kopa_variable.i18n.validate.message.MINLENGTH)
                    }
                },
                // Use Ajax to send everything to processForm.php
                submitHandler: function(form) {
                    jQuery(".comment-form .input-submit,.contact-form.input-submit").attr("value", kopa_variable.i18n.validate.form.SENDING);
                    jQuery(form).ajaxSubmit({
                        success: function(responseText, statusText, xhr, $form) {
                            jQuery("#response").html(responseText).hide().slideDown("fast");
                            jQuery(".comment-form .input-submit,.contact-form.input-submit").attr("value", kopa_variable.i18n.validate.form.SUBMIT);
                        }
                    });
                    return false;
                }
            });
        }
    }]);
}
/**
 *
 *   10- Flickr
 *
 *-----------------------------------------------------------------
 **/
if (jQuery('.kopa-flickr-widget').length > 0) {
    Modernizr.load([{
        load: ['js/jflickrfeed.js', 'js/imgliquid.js'],
        complete: function() {
            jQuery('.kopa-flickr-widget ul').each(function() {
                jQuery(this).jflickrfeed({
                    limit: 6,
                    qstrings: {
                        id: jQuery(this).find('.flickr-wrap').attr('data-user')
                    },
                    itemTemplate: '<li class="flickr-badge-image">' + '<a target="blank" href="{{link}}" title="{{title}}" class="imgLiquid">' + '<img src="{{image_m}}" alt="{{title}}"  />' + '</a>' + '</li>'
                }, function(data) {
                    jQuery('.kopa-flickr-widget .imgLiquid').imgLiquid();
                });
            });
        }
    }]);
}
/**
 *
 *   11- Back to top
 *
 *-----------------------------------------------------------------
 **/
jQuery(".back-to-top").hide();
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.back-to-top').fadeIn();
    } else {
        jQuery('.back-to-top').fadeOut();
    }
});
jQuery('.back-to-top').click(function(event) {
    jQuery('body,html').animate({
        scrollTop: 0
    }, 800);
    event.preventDefault();
});
/**
 *
 *   12- Accordion & Toggle
 *
 *-----------------------------------------------------------------
 **/
if ($('.kopa-accordion').length > 0) {
    Modernizr.load([{
        load: 'js/bootstrap.js',
        complete: function() {}
    }]);
};
if ($('.kopa-toggle').length > 0) {
    $('.kopa-toggle .panel-heading').click(function() {
        $(this).find('.panel-title span').toggleClass('collapsed');
        var panel_content = $(this).parent().find('.panel-collapse');
        if (panel_content.is(':hidden')) {
            $(this).addClass('in');
            panel_content.slideDown('350');
        } else {
            $(this).removeClass('in');
            panel_content.slideUp('350');
        }
    });
};
/**
 *
 *   13- Sync carousel
 *
 *-----------------------------------------------------------------
 **/
var sync1 = $(".sync1");
var sync2 = $(".sync2");
if (sync1.length > 0) {
    Modernizr.load([{
        load: 'js/owl.carousel.js',
        complete: function() {
            sync1.owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                navigation: true,
                navigationText: ['<span class="fa fa-angle-double-left"></span>', '<span class="fa fa-angle-double-right"></span>'],
                pagination: false,
                afterAction: syncPosition,
                responsiveRefreshRate: 200,
            });
            sync2.owlCarousel({
                items: 4,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [979, 4],
                itemsTablet: [768, 4],
                itemsMobile: [479, 4],
                pagination: false,
                responsiveRefreshRate: 100,
                afterInit: function(el) {
                    el.find(".owl-item").eq(0).addClass("synced");
                }
            });
        }
    }]);
};

function syncPosition(el) {
    var current = this.currentItem;
    $(".sync2").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    if ($(".sync2").data("owlCarousel") !== undefined) {
        center(current)
    }
}
$(".sync2").on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo", number);
});

function center(number) {
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for (var i in sync2visible) {
        if (num === sync2visible[i]) {
            var found = true;
        }
    }
    if (found === false) {
        if (num > sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", num - sync2visible.length + 2)
        } else {
            if (num - 1 === -1) {
                num = 0;
            }
            sync2.trigger("owl.goTo", num);
        }
    } else if (num === sync2visible[sync2visible.length - 1]) {
        sync2.trigger("owl.goTo", sync2visible[1])
    } else if (num === sync2visible[0]) {
        sync2.trigger("owl.goTo", num - 1)
    }
}
var sync3 = $(".sync3");
var sync4 = $(".sync4");
if (sync3.length > 0) {
    Modernizr.load([{
        load: 'js/owl.carousel.js',
        complete: function() {
            sync3.owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                navigation: true,
                navigationText: ['<span class="fa fa-angle-double-left"></span>', '<span class="fa fa-angle-double-right"></span>'],
                pagination: false,
                afterAction: syncPosition2,
                responsiveRefreshRate: 200,
            });
            sync4.owlCarousel({
                items: 4,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [979, 4],
                itemsTablet: [768, 4],
                itemsMobile: [479, 4],
                pagination: false,
                responsiveRefreshRate: 100,
                afterInit: function(el) {
                    el.find(".owl-item").eq(0).addClass("synced");
                }
            });
        }
    }]);
};

function syncPosition2(el) {
    var current = this.currentItem;
    $(".sync4").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    if ($(".sync4").data("owlCarousel") !== undefined) {
        center2(current)
    }
}
$(".sync4").on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync3.trigger("owl.goTo", number);
});

function center2(number) {
    var sync4visible = sync4.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for (var i in sync4visible) {
        if (num === sync4visible[i]) {
            var found = true;
        }
    }
    if (found === false) {
        if (num > sync4visible[sync4visible.length - 1]) {
            sync4.trigger("owl.goTo", num - sync4visible.length + 2)
        } else {
            if (num - 1 === -1) {
                num = 0;
            }
            sync4.trigger("owl.goTo", num);
        }
    } else if (num === sync4visible[sync4visible.length - 1]) {
        sync4.trigger("owl.goTo", sync4visible[1])
    } else if (num === sync4visible[0]) {
        sync4.trigger("owl.goTo", num - 1)
    }
}
var sync5 = $(".sync5");
var sync6 = $(".sync6");
if (sync5.length > 0) {
    Modernizr.load([{
        load: 'js/owl.carousel.js',
        complete: function() {
            sync5.owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                navigation: true,
                navigationText: ['<span class="fa fa-angle-double-left"></span>', '<span class="fa fa-angle-double-right"></span>'],
                pagination: false,
                afterAction: syncPosition3,
                responsiveRefreshRate: 200,
            });
            sync6.owlCarousel({
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 4],
                itemsTablet: [768, 4],
                itemsMobile: [479, 4],
                pagination: false,
                responsiveRefreshRate: 100,
                afterInit: function(el) {
                    el.find(".owl-item").eq(0).addClass("synced");
                }
            });
        }
    }]);
};

function syncPosition3(el) {
    var current = this.currentItem;
    $(".sync6").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    if ($(".sync6").data("owlCarousel") !== undefined) {
        center3(current)
    }
}

function center3(number) {
    var sync6visible = sync6.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for (var i in sync6visible) {
        if (num === sync6visible[i]) {
            var found = true;
        }
    }
    if (found === false) {
        if (num > sync6visible[sync6visible.length - 1]) {
            sync6.trigger("owl.goTo", num - sync6visible.length + 2)
        } else {
            if (num - 1 === -1) {
                num = 0;
            }
            sync6.trigger("owl.goTo", num);
        }
    } else if (num === sync6visible[sync6visible.length - 1]) {
        sync6.trigger("owl.goTo", sync6visible[1])
    } else if (num === sync6visible[0]) {
        sync6.trigger("owl.goTo", num - 1)
    }
}
$(".sync6").on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync5.trigger("owl.goTo", number);
});
var sync7 = $(".sync7");
var sync8 = $(".sync8");
if (sync7.length > 0) {
    Modernizr.load([{
        load: 'js/owl.carousel.js',
        complete: function() {
            sync7.owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                afterAction: syncPosition4,
                responsiveRefreshRate: 200,
            });
            sync8.owlCarousel({
                items: 4,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [979, 4],
                itemsTablet: [768, 4],
                itemsMobile: [479, 4],
                pagination: false,
                responsiveRefreshRate: 100,
                afterInit: function(el) {
                    el.find(".owl-item").eq(0).addClass("synced");
                }
            });
        }
    }]);
};

function syncPosition4(el) {
    var current = this.currentItem;
    $(".sync8").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    if ($(".sync8").data("owlCarousel") !== undefined) {
        center4(current)
    }
}

function center4(number) {
    var sync8visible = sync8.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for (var i in sync8visible) {
        if (num === sync8visible[i]) {
            var found = true;
        }
    }
    if (found === false) {
        if (num > sync8visible[sync8visible.length - 1]) {
            sync8.trigger("owl.goTo", num - sync8visible.length + 2)
        } else {
            if (num - 1 === -1) {
                num = 0;
            }
            sync8.trigger("owl.goTo", num);
        }
    } else if (num === sync8visible[sync8visible.length - 1]) {
        sync8.trigger("owl.goTo", sync8visible[1])
    } else if (num === sync8visible[0]) {
        sync8.trigger("owl.goTo", num - 1)
    }
}
$(".sync8").on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync7.trigger("owl.goTo", number);
});
var sync9 = $(".sync9");
var sync10 = $(".sync10");
if (sync9.length > 0) {
    Modernizr.load([{
        load: 'js/owl.carousel.js',
        complete: function() {
            sync9.owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                afterAction: syncPosition5,
                responsiveRefreshRate: 200,
                navigation: true,
                navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                pagination: false
            });
            sync10.owlCarousel({
                items: 5,
                itemsDesktop: [1199, 5],
                itemsDesktopSmall: [979, 4],
                itemsTablet: [768, 4],
                itemsMobile: [479, 4],
                pagination: false,
                responsiveRefreshRate: 100,
                afterInit: function(el) {
                    el.find(".owl-item").eq(0).addClass("synced");
                }
            });
        }
    }]);
};

function syncPosition5(el) {
    var current = this.currentItem;
    $(".sync10").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    if ($(".sync10").data("owlCarousel") !== undefined) {
        center5(current)
    }
}

function center5(number) {
    var sync10visible = sync10.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for (var i in sync10visible) {
        if (num === sync10visible[i]) {
            var found = true;
        }
    }
    if (found === false) {
        if (num > sync10visible[sync10visible.length - 1]) {
            sync10.trigger("owl.goTo", num - sync10visible.length + 2)
        } else {
            if (num - 1 === -1) {
                num = 0;
            }
            sync10.trigger("owl.goTo", num);
        }
    } else if (num === sync10visible[sync10visible.length - 1]) {
        sync10.trigger("owl.goTo", sync10visible[1])
    } else if (num === sync10visible[0]) {
        sync10.trigger("owl.goTo", num - 1)
    }
}
$(".sync10").on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync9.trigger("owl.goTo", number);
});
});


/**
 *
 *   14- Browser resize
 *
 *-----------------------------------------------------------------
 **/
Modernizr.load([{
    load: 'js/debouncedresize.js',
    complete: function() {
        jQuery(window).bind("debouncedresize", function() {
            if (jQuery(window).outerWidth()>980) {
                jQuery(".mobile-menu.main-menu").css('display','none');
                jQuery(".mobile-menu.second-menu").css('display','none');
            };
        });
    }
}]);