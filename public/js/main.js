$(document).ready(function() {
 
  	// Loader
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3500);
 	
    $("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	// Header scroll

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("header").css({"background-color": "#000"});
				flag = true;
			}
		}else{
			if(flag){
				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}

	});

	//Form

	var expresion = /\w+@\w+\.+[a-z]/;

	$("#send").click(function(){
		var nombre = $('#form-name').val();
		var correo = $('#form-email').val();
		var asunto = $('#form-subject').val();
		var mensaje = $('#form-message').val();

		if (nombre === "" || correo ==="" || asunto ==="" || mensaje === "") {
			alert("Todos los campos son obligatorios");
			return false;
		} else if(!expresion.test(correo)){
			alert("El correo no es valido");
			return false;
		}
	});

	$('#form-name').on('click', function () {
 	 	$('#label-name').fadeOut();
	});
	$('#form-name').on('focusout', function () {
  		$('#label-name').fadeIn();
	});



	$('#form-email').on('click', function () {
 	 	$('#label-email').fadeOut();
	});
	$('#form-email').on('focusout', function () {
  		$('#label-email').fadeIn();
	});



	$('#form-subject').on('click', function () {
 	 	$('#label-subject').fadeOut();
	});
	$('#form-subject').on('focusout', function () {
  		$('#label-subject').fadeIn();
	});



	$('#form-message').on('click', function () {
 	 	$('#label-textarea').fadeOut();
	});
	$('#form-message').on('focusout', function () {
  		$('#label-textarea').fadeIn();
	});

});


var controller = new ScrollMagic.Controller();

var Scene1Left = new ScrollMagic.Scene({
	triggerElement: '#traslateLeft1'
})
.setClassToggle('#traslateLeft1', 'fadeInLeftActive')
.addTo(controller);

var Scene1Right = new ScrollMagic.Scene({
	triggerElement: '#traslateRight1'
})
.setClassToggle('#traslateRight1', 'fadeInRightActive')
.addTo(controller);

var Scene2 = new ScrollMagic.Scene({
	triggerElement: '#fadeIn'
})
.setClassToggle('#fadeIn', 'fadeInActive')
.addTo(controller);