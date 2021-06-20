//Preloader
setTimeout(function() {
        $('.looading').fadeOut(300);
        $('#loader-wrapper').slideUp(1000);
    }, 1500);
 
 $(document).ready(function(){	
	// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
	$('.navbar-toggle').click(function(){
		$('.navbar').addClass('navbar-inverse');
	});
	
	//Scrolling effects
	
	$('.items').css('visibility','hidden');
	$(document).scroll(function() {
		var down = $(this).scrollTop();
		if (down >20){$('.navbar').addClass('navbar-inverse');}
			else{$('.navbar').removeClass('navbar-inverse');}
		if (down >200) {$('.about-heading').css('visibility','visible').addClass('swing animated');}
		if (down >350) {$('.profile-pic').css('visibility','visible').addClass('zoomIn animated');}
		if (down >500) {$('.info-item-1').css('visibility','visible').addClass('slideInUp animated');}
		if (down >585) {$('.info-item-2').css('visibility','visible').addClass('slideInUp animated');}
		if (down >600) {$('.info-item-3').css('visibility','visible').addClass('slideInUp animated');}
		if (down >610) {$('.my-details').css('visibility','visible').addClass('lightSpeedIn animated');}
		if (down >620) {$('.about-skill-1').css('visibility','visible').addClass('slideInUp animated');}
		if (down >630) {$('.about-skill-2').css('visibility','visible').addClass('slideInUp animated');}
		if (down >640) {$('.about-skill-3').css('visibility','visible').addClass('slideInUp animated');}
		if (down >650) {$('.about-skill-4').css('visibility','visible').addClass('slideInUp animated');}
		if (down >660) {$('.about-skill-5').css('visibility','visible').addClass('slideInUp animated');}
		if (down >670) {$('.about-skill-6').css('visibility','visible').addClass('slideInUp animated');}
		if (down >680) {$('.cv').css('visibility','visible').addClass('rubberBand animated');}
		
		var about=$('.about').outerHeight();
		
		if (down>about+100){$('.jumpTop').css('display','block');}else{ $('.jumpTop').hide();}
		if (down>about+300){	$('.skills-heading').css('visibility','visible').addClass('swing animated');}
		if (down>about+400){$('.progress-row').css('visibility','visible').addClass('slideInUp animated');}
		
		var skills=$('.skills').outerHeight();
		if (down>about+skills+300){
			$('.works-heading').css('visibility','visible').addClass('bounce animated');
			$('.portfolio-one').css('visibility','visible').addClass('slideInLeft animated');
			$('.portfolio-two').css('visibility','visible').addClass('slideInUp animated');
			$('.portfolio-three').css('visibility','visible').addClass('slideInRight animated');
		}
		
		var works=$('.works').outerHeight();
		if (down>about+skills+works+300){
			$('.expedu-heading').css('visibility','visible').addClass('bounce animated');
			$('.finish').css('visibility','visible').addClass('slideInDown animated');
			$('.institution').css('visibility','visible').addClass('zoomIn animated');
			$('.begin').css('visibility','visible').addClass('slideInUP animated');
		}
		var expedu=$('.expedu').outerHeight();
		if (down>about+skills+works+expedu+300){
			$('.award-title').css('visibility','visible').addClass('bounce animated');
			$('.award').css('visibility','visible').addClass('rollIn animated');
			$('.project').css('visibility','visible').addClass('rotateIn zoomIn animated');
			$('.client').css('visibility','visible').addClass('rotateIn zoomIn animated');
			$('.cups').css('visibility','visible').addClass('lightSpeedIn animated');
			$('.award-badge').css('visibility','visible').addClass('slideInUP animated');
		}
		var awards=$('.awards').outerHeight();
		if (down>about+skills+works+expedu+awards+400){
			$('.contact-heading').css('visibility','visible').addClass('bounce animated');
			$('.border-bottom').css('visibility','visible').addClass('zoomIn animated');
			$('#map').css('visibility','visible').addClass('slideInLeft animated');
			$('.contact-form').css('visibility','visible').addClass('shrinkIn animated');
		}
	});
	
	
	//works show hide on click
		$('#all').click(function(){
		$('.works-tag').css('background-color','transparent');
		$(this).css('background-color','gray');
		$('.design,.development').show('fast'); })
	$('#design').click(function(){
		$('.works-tag').css('background-color','transparent');
		$(this).css('background-color','gray');
		$('.development').hide('slow');
		$('.design').show('fast'); })
	$('#development').click(function(){ 
		$('.works-tag').css('background-color','transparent');
		$(this).css('background-color','gray');
		$('.design').hide('slow'); 
		$('.development').show('fast'); })
	$('#bootstrap').click(function(){
		$('.works-tag').css('background-color','transparent');
		$(this).css('background-color','gray');
		$('.design, .development').hide('slow'); 
		$('.bootstrap').show('fast'); })
	$('#jquery').click(function(){
		$('.works-tag').css('background-color','transparent');
		$(this).css('background-color','gray');
		$('.design, .development').hide('slow');
		$('.jquery').show('fast'); })
	$('#wordpress').click(function(){
		$('.works-tag').css('background-color','transparent');
		$(this).css('background-color','gray');
		$('.design, .development').hide('slow');
		$('.wordpress').show('fast'); })
	$('#laravel').click(function(){
		$('.works-tag').css('background-color','transparent');
		$(this).css('background-color','gray');
		$('.design, .development').hide('slow');
		$('.laravel').show('fast'); })
	
	
	
	// HOME TYPED JS
    if($('#typed').length) {
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            smartBackspace: true,
            loop: true,
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 3000
        });
    }
	
	// letter-fx js
	$("#name").letterfx({"fx":"wave","letter_end":"rewind","fx_duration":"2s"});
	$("#designation").letterfx({"fx":"fly-right fly-bottom spin","fx_duration":"2s"});
 
	//bootstrap tooltip
	 $('[data-toggle="tooltip"]').tooltip();
	
	//Leaflet google map API
	var map = L.map('map').setView([23.738237, 90.395842], 15);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '<a href="https://www.openstreetmap.org/copyright"></a>'
		}).addTo(map);

		L.marker([23.738237, 90.395842]).addTo(map);
		L.circle([23.738237, 90.395842], {radius: 400}).addTo(map);
 });