/* Custom General jQuery
/*--------------------------------------------------------------------------------------------------------------------------------------*/
;(function($, window, document, undefined) {
	//Genaral Global variables
	"use strict";
	var $win = $(window);
	var $doc = $(document);
	var $winW = function(){ return $(window).width(); };
	var $winH = function(){ return $(window).height(); };
	var $screensize = function(element){  
			$(element).width($winW()).height($winH());
		};
		
		var screencheck = function(mediasize){
			if (typeof window.matchMedia !== "undefined"){
				var screensize = window.matchMedia("(max-width:"+ mediasize+"px)");
				if( screensize.matches ) {
					return true;
				}else {
					return false;
				}
			} else { // for IE9 and lower browser
				if( $winW() <=  mediasize ) {
					return true;
				}else {
					return false;
				}
			}
		};

	$doc.ready(function() {
/*--------------------------------------------------------------------------------------------------------------------------------------*/		
		// Remove No-js Class
		$("html").removeClass('no-js').addClass('js');
		
		/*===========================
		Get screen size
		=============================*/
		$win.on('load', function () {
			$(".preloader-box").fadeOut('normal');
			$win.on('resize', function(){
				$screensize('your selector');	
				if($('.fixed-footer').length) {
					var footerHeight = $('.fixed-footer').outerHeight();
					$('body').css('margin-bottom', footerHeight);
				}
			}).resize();	
		});
		
		$('.navbar-nav > li > ul').parent('li').addClass('hasnav');
		$('.navbar-nav > li.hasnav').prepend('<span class="navtrigger"></span>');
		
		$('.navbar-nav > li.hasnav').on('click', function(e) {
			var $this = $(this).find('.navtrigger');
			if ( $(e.target).is('.navtrigger') ) {
				$this.parent('li').find('ul').slideToggle();
				$this.toggleClass('open');
			}
		});
		
		/*===========================
		matchheight
		=============================*/
		if($('.matchheightbox').length){
			$('.matchheightbox').matchHeight();
		}
		
		/*===========================
		Counters
		=============================*/
		if($('.counter').length) {
			$('.counter').counterUp();
		}
		
		/*===========================
		owl carousel slider
		=============================*/
		if($('.main-slider').length) {
			$('.main-slider').owlCarousel({
				loop:true,
				items:1,
				autoplay:false,
				smartSpeed:800,
				autoplayTimeout:3000,
			});
		}
		
		if($('.blog-img-slider').length) {
			$('.blog-img-slider').owlCarousel({
				loop:true,
				dots:false,
				items:1,
				autoplay:false,
				nav: true,
				smartSpeed:800,
				autoplayTimeout:3000
			});
		}
		
		if($('.testimonials-slider').length) {
			$('.testimonials-slider').owlCarousel({
				loop:true,
				items:3,
				autoplay:false,
				autoWidth: true,
				center: true,
				smartSpeed:800,
				margin: 70,
				nav: true,
				autoplayTimeout:3000,
				responsive : {
					0 : {
						autoWidth: false,
						center: false,
						items:1,
						nav: false
					},
					568 : {
						margin: 25,
						nav: true,
						autoWidth: true,
						center: true,
					},
					1200 : {
						margin: 70,
						nav: true
					}
				}
			});
		}
		
		if($('.client-logos-slider').length) {
			$('.client-logos-slider').owlCarousel({
				loop:true,
				items:7,
				nav: true,
				dots: false,
				autoplay:false,
				center: true,
				smartSpeed:800,
				margin: 24,
				autoplayTimeout:3000,
				responsive : {
					0 : {
						margin: 10,
						items:2,
						center: false
					},
					480 : {
						margin: 15,
						items:3,
						center: true
					},
					768 : {
						margin: 15,
						items:4
					},
					992 : {
						margin: 20,
						items:5
					},
					1201 : {
						margin: 24,
						items:7
					}
				}
			});
		}
		
		if($('.portfolio-slider').length) {
			var portfolioSlider = $('.portfolio-slider').owlCarousel({
				loop:true,
				margin: 10,
				autoplay:false,
				autoWidth: true,				
				smartSpeed:800,
				nav : true,
				autoplayTimeout:3000,
				responsive : {
					0 : {
						center: false,
						margin: 5,
						autoWidth: false,
						items: 1,
						nav : false
					},
					480 : {
						autoWidth: true,	
						center: true,
						margin: 10,
						nav : true
					}
				}
			});
			
			/* animate filter */
			var owlAnimateFilter = function() {
				$(this)
				.addClass('__loading')
				.delay(70 * $(this).parent().index())
				.queue(function() {
					$(this).dequeue().removeClass('__loading');
				});
			};

			$('.filters-nav li').on('click', 'a', function() {
				if( $(this).hasClass('btn-active')) {
				} else {
					var filter_data = $(this).data('filter');
					$('.filters-nav li').removeClass('active');
					$(this).parents('li').addClass('active');
					$('.filters-nav li a').removeClass('btn-active');
					$(this).addClass('btn-active');
					portfolioSlider.owlFilter(filter_data, function(_owl) { 
						$(_owl).find('.item').each(owlAnimateFilter); 
					});
				}
				return false;
			});
		}
		
		  /*===========================
		 	Pie charts
		  =============================*/
		  if ($('.chart').length > 0) {
			$('.chart').appear();
			$('.chart').easyPieChart({
				barColor: '#ccc',
				trackColor: '#f7f7f7',
				scaleColor: false,
				scaleLength: 1,
				lineCap: 'round',
				lineWidth: 7, //12
				size: 167,
				onStep: function (from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
			$(document.body).on('appear', '.chart', function (e) {
				// this code is executed for each appeared element
				if (!$(this).hasClass('appear')) {
					$(this).addClass('appear');
					$(this).data('easyPieChart').update(0).update($(this).data('percent'));
				}
			});
		}
		
		/*===========================
		popup
		=============================*/
		if($('.portfolio-gallery').length) {
			$('.portfolio-gallery').magnificPopup({
				delegate: '.portfolio-block',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1]
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
				}
			});
		}
		
		if($('.popup-youtube').length) {
			$('.popup-youtube').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}
		
		$('.scroll-down').on('click', function(){
			var getOffsetMore = $('#main').offset().top-60;
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop:getOffsetMore},550);
			return false;
		});
		
		/*===========================
		Waypoints animation
		=============================*/
		if( !screencheck(767) ) {
			$('.animated-row').each(function(){
				var $this = $(this);
				$this.find('.animate').each(function(i){
					var $item = $(this);
					var animation = $item.data("animate");
					$item.waypoint(function(){
						setTimeout(function () {
								$item.addClass('animated '+animation).removeClass('animate');
						}, i*100);
					},
					{
						offset: '100%',
						triggerOnce: true
					});
				});
			});
		} else {
			$('.animated-row').find('.animate').removeClass('animate');
		}
		
		if($('.audio-player').length) {
			$('.audio-player').audioPlayer();
		}
		
		/*===========================
		Filter menu lavalamp
		=============================*/
		$('.filters-nav').append('<li class="lamp"></li>');
		
		if( $('.filters-nav > li').hasClass('active') ){
			var currentleft = $('.filters-nav > li.active').position().left+"px";
			var currentwidth = $('.filters-nav > li.active').css('width');
			$('.lamp').css({"left":currentleft,"width":currentwidth});
		}
		
		$('.filters-nav li').on({
			mouseenter: function(){
				$('.filters-nav li').removeClass('selected');
				$(this).addClass('selected');
				var currentleft = $('.filters-nav li.selected').position().left+"px";
				var currentwidth = $('.filters-nav li.selected').css('width');
				$('.lamp').css({"left":currentleft,"width":currentwidth});	
			},
			mouseleave: function(){
				if($('.filters-nav li').hasClass('active')){
					var currentleft = $('.filters-nav .active').position().left+"px";
					var currentwidth = $('.filters-nav .active').css('width');
					$('.lamp').css({"left":currentleft,"width":currentwidth});
				}
			}
		});	
		
		/*===========================
		Scrollspy menu
		=============================*/
		if($('.scrollnav').length){
			var lastId,
				topMenu = $(".scrollnav"),
				// All list items
				menuItems = topMenu.find("a"),
				// Anchors corresponding to menu items
				scrollItems = menuItems.map(function(){
					var item = $($(this).attr("href"));
					if (item.length) { return item; }
				});

			// Bind click handler to menu items
			// so we can get a fancy scroll animation
			/*menuItems.on('click', function(e){
				var href = $(this).attr("href");
				var offsetTop = href === "#" ? 0 : $(href).offset().top+1;
				$('html, body').stop().animate({ 
					scrollTop: offsetTop-62
				}, 700);
				e.preventDefault();
			});*/
			
			menuItems.on('click', function(e){
				var href = $(this).attr("href");
				var offsetTop = href === "#" ? 0 : $(href).offset().top+1;
				$('html, body').stop().animate({ 
					scrollTop: offsetTop-62
				}, 700);
				e.preventDefault();
			});
			

			$(window).on('scroll', function(){
				var fromTop = $(this).scrollTop()+62;
				var cur = scrollItems.map(function(){
					if ($(this).offset().top < fromTop) {
						return this;
					}
				});
				cur = cur[cur.length-1];
				var id = cur && cur.length ? cur[0].id : "";
				if (lastId !== id) {
					lastId = id;
					menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
			   }                   
			});
		}
		
		/*===========================
		Header and backtotop scroll
		=============================*/
		function backtotopOffset() {
    		if(	$('.back-to-top').offset().top + $('.back-to-top').height() >= $('#footer').offset().top) {
				$('.back-to-top').addClass('fixedstop');	
			}
		    if( $(document).scrollTop() + window.innerHeight < $('#footer').offset().top ) {
        		$('.back-to-top').removeClass('fixedstop'); 
			}
		}
		
		$('.back-to-top').on('click', function(){
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop:0}, 'noraml');
			return false;
		});
		
		$(window).on('scroll', function(){
			if( $(window).scrollTop() > 200 ){
				$('.back-to-top').addClass('visible');
			} else {
				$('.back-to-top').removeClass('visible');
			}
			
			if( $(window).scrollTop() > 5 ){
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
			
			backtotopOffset();
		});	
		
		/*===========================
		Parallax
		=============================*/
		if($('.parallaxie').length) {
			$('.parallaxie').parallaxie();	
		}	
		
		/*===========================
		Contact form
		=============================*/
		if( $('#contactform').length > 0 ){	
			$("#contactform").validate({
				rules: {
					name: "required",
					tel: "required",
					message: "required",
					email: {
						required: true,
						email: true	
					},
					messages: {
						name: "This field is required.",
						tel: "This field is required.",
						email: "This field is required.",
						message: "This field is required."
					}
				},
				submitHandler: function(form) {
					$("#loading").fadeIn(function(){
						$.ajax({
						  type: form.method,
						  url:  "contact.php",
						  data: $(form).serialize(),
						  success: function(response){							  
							$("#loading").fadeOut();							  
							if(response == 1) {
								$("#successmsg").show().delay(5000).fadeOut();
							} else {								
								$("#errormsg").show().delay(5000).fadeOut();
							}
						  }
						});
				  });
				}
			});

		}	
		
		/*===========================
		Contact map
		=============================*/
		if($('.map-canvas').length) {
			var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
			
			var	mapOptions = {
				center: new google.maps.LatLng(52.3547322,4.8285837),
				zoom:11,
				scrollwheel: false,
				panControl: false,
		 		mapTypeControl:false,
				streetViewControl: false,
				disableDefaultUI: false,
				zoomControl: false,
				disableDoubleClickZoom: true,
				fullscreenControl: false,
				styles: styles
			};
			var initMap = function() {
				var contactdata = $('#contact-map').data('content');
				var map = new google.maps.Map(document.getElementById("contact-map"), mapOptions);
				var bounds = new google.maps.LatLngBounds();
				var myIcon = new google.maps.MarkerImage("images/marker-pin.svg", null, null, null, new google.maps.Size(50,62));
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(52.3547322,4.8285837),
					map: map,
					title: 'MyBio',
					icon: myIcon
				});
				var info = new SnazzyInfoWindow({
					marker: marker,
					content: contactdata,
					offset: {
					  top: '-68px',
					},
					showCloseButton:false
				});
				info.open();
				
			};
			initMap();
			google.maps.event.addDomListener(window, 'load resize', initMap);
		}
		
		
/*--------------------------------------------------------------------------------------------------------------------------------------*/		
	});	

/*All function nned to define here for use strict mode
----------------------------------------------------------------------------------------------------------------------------------------*/


	
/*--------------------------------------------------------------------------------------------------------------------------------------*/
})(jQuery, window, document);