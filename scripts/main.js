//Smooth Scrolling

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


//bxSlider
$(document).ready(function(){

  $('.bxslider').bxSlider({
    mode: 'horizontal',
    speed: 300,
    slideMargin: 0,
    controls: false,
    auto: true,
    autoHover: false,
    minSlides: 3,
    maxSlides: 4,
    moveSlides: 1,
    slideWidth: 0,
		responsive: true
  });

});
