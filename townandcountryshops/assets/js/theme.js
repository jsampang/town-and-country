(function($) {
  "use strict"; // Start of use strict

 
/* ----------------------------------------------------------- */
    /*  Fixed header
    /* ----------------------------------------------------------- */

 function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 200) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
        
        $(window).on('scroll', function() {
            headerStyle();
        });

  // Smooth scrolling using jQuery easing
// jQuery for page scrolling feature - requires jQuery Easing plugin
    
    
    $('a.js-scroll-trigger').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function(event) {
    $('.navbar-collapse').collapse('hide');
  });

    
    $('#testimonial-slider').slick({
            slidesToShow: 1,
            dots:true,
            arrows: false,
            autoplay:true,
            autoplaySpeed:5000,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    
    
  
 // Banner Slider
    
    $('.banner-slider ').slick({
        vertical: true,
        autoplay:true,
        autoplaySpeed:5000,
        verticalSwiping: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
//        prevArrow: '<div><button class="prevArrow arrowBtn"><i class="fa fa-angle-left"></i></button></div>',
//        nextArrow: '<div><button class="nextArrow arrowBtn"><i class="fa fa-angle-right"></i></button></div>',

        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,

            }
        }]
    });
  
   
 // TEStimonial Slider
    
    $('.testimonial-slider').slick({
//        vertical: true,
        autoplay:true,
        autoplaySpeed:5000,
//        verticalSwiping: true,
//        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,

            }
        }]
    });
  
    
 // Banner Slider
    
    $('.testimonial-slider-2').slick({
        autoplay:true,
        autoplaySpeed:5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,

            }
        }]
    });
  
 

})(jQuery); // End of use strict
