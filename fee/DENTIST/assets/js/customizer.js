!(function($, win, doc){
	"use strict";
	var customizerContainer = $("#site-switcher"),
		switcher 			= customizerContainer.find(".open-switcher"),
		boxed 				= $("body > .site-container"),
		layoutColor         = customizerContainer.find(".layout-color"),
		layout 				= customizerContainer.find(".layout-choose");


	var colors = {
		'blue': 		"assets/css/blue.css",
		'green': 		"assets/css/green.css",
		'blue-dark': 	"assets/css/dark.css",
		'purple': 		"assets/css/purple.css"
	};

	var Customizer = {
		init: function(){
			Customizer.toggle();
			Customizer.toggleLayout();
			Customizer.ChooseColor();
		},

		ChooseColor: function(){
			layoutColor.on("click", "li a", function(event){
				event.preventDefault();
				var $this = $(this);
				var color = $this.attr("class").split(' ');
				var skinHEX = $this.data("color");

				$this.closest("ul").find('a.active').removeClass('active');
				$this.addClass('active');

				// Change SKIN
				$("#skin-color").attr("href", colors[color[0]]);

				Customizer.Rings(skinHEX);

			});
		},

		Rings: function(skinHEX){

			$.each([1,2,3,4],function(index, value){

					if($('#graph'+value).length > 0){

						var el = document.getElementById('graph'+value); // get canvas
						$("#graph"+value).html("");
						var options = {
						    percent:  el.getAttribute('data-percent') || 25,
						    title:  el.getAttribute('data-title') || "Here need to be title",
						    size: el.getAttribute('data-size') || 200,
						    lineWidth: el.getAttribute('data-line') || 15,
						    rotate: el.getAttribute('data-rotate') || 0
						}

						var canvas = document.createElement('canvas');
						var span = document.createElement('span');
						var title = document.createElement('h2');
						span.textContent = options.percent + '%';
						title.textContent = options.title;
						    
						if (typeof(G_vmlCanvasManager) !== 'undefined') {
						    G_vmlCanvasManager.initElement(canvas);
						}

						var ctx = canvas.getContext('2d');
						canvas.width = canvas.height = options.size;

						el.appendChild(span);
						el.appendChild(title);
						el.appendChild(canvas);

						ctx.translate(options.size / 2, options.size / 2); // change center
						ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

						//imd = ctx.getImageData(0, 0, 240, 240);
						var radius = (options.size - options.lineWidth) / 2;

						var drawCircle = function(color, lineWidth, percent) {
								percent = Math.min(Math.max(0, percent || 1), 1);
								ctx.beginPath();
								ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
								ctx.strokeStyle = color;
						        ctx.lineCap = 'butt'; // butt, round or square
								ctx.lineWidth = lineWidth
								ctx.stroke();
						};

						drawCircle('#ffffff', options.lineWidth, 100 / 100);
						drawCircle(skinHEX, options.lineWidth, options.percent / 100);

					}

				});
			

		},

		open: function(){
			customizerContainer.addClass("active");
		},

		close: function(){
			customizerContainer.removeClass("active");
		},

		checkOpen: function(){
			if(customizerContainer.hasClass("active")){
				Customizer.close();
			}else{
				Customizer.open();
			}
		},

		toggle: function(){
			switcher.on("click", function(event){
				event.preventDefault();
				Customizer.checkOpen();
			});
		},

		boxed: function(){
			boxed.addClass('boxed');
		},

		wide: function(){
			boxed.removeClass('boxed');
		},

		toggleLayout: function(){
			layout.on("click", "a.wide, a.boxed", function(event){
				event.preventDefault();
				if($(event.currentTarget).hasClass('boxed')){
					Customizer.boxed();
					// Isotope reloade
					$(".fullfilters").find("li:first-child a").trigger("click");

				}else{
					Customizer.wide();
					// Isotope reloade
					$(".fullfilters").find("li:first-child a").trigger("click");
				}
			});
		},

	}

	// Initialize
	Customizer.init();

})(jQuery, window, document);