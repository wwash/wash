$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    })
 
});

$(window).on("load", function(){

	$('.reviews').owlCarousel({
		items: 1,
		loop:true,
		autoWidth: true,
		mouseDrag: true,
		pullDrag: true,
		center: true,
		autoHeight: true,
		nav: true,
		navText: "",
		dots: true
	});

	

});

