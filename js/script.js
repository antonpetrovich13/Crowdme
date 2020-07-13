$(document).ready(function() {
	$('.header__burger').click(function(event)
	 {
		$('.header__burger,.header__menu').
			toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$('.find__slides').slick({
		autoplay:true,
		pauseOnFocus:true,
		pausOnHover:true,
		speed:3000,
		autoplaySpeed:3000,
	});
});