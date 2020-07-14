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
		speed:3000,
		autoplaySpeed:3000,
	});
});

$(document).ready(function(){
	$('.slider').slick({
		autoplay:true,
		speed:4000,
		autoplaySpeed:4000,
		pauseOnFocus:false,
		pauseOnHover:false,
		pauseOnDotsHover:false,
		draggable:false,
		swipe:false,
	});
});

function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();