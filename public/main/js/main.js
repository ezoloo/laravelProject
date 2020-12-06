jQuery(function ($) {

	'use strict';


	(function () {
		var windowWidth = $(window).width();
		if(windowWidth > 1000 ){
			$(window).scroll (function () {
				var sT = $(this).scrollTop();
				if (sT >= 1) {
					$('.homepage .navbar, .homepage-two.fixed-nav .navbar').addClass('sticky-nav')
				}else {
					$('.homepage .navbar, .homepage-two.fixed-nav .navbar').removeClass('sticky-nav')
				};
			});
		}else{				
			$('.homepage .navbar, .homepage-two.fixed-nav .navbar').removeClass('sticky-nav')			
		};	
		if(windowWidth > 1000 ){
			$(window).scroll (function () {
				var sT = $(this).scrollTop();
				if (sT >=  1) {
					$('.homepage #menubar, .homepage-two.fixed-nav #navigation').removeClass('container')
					$('.homepage #menubar, .homepage-two.fixed-nav #navigation').addClass('container-fluid')
				}else {
					$('.homepage #menubar, .homepage-two.fixed-nav #navigation').removeClass('container-fluid')
					$('.homepage #menubar').addClass('container')
				}
			});
		}else{				
			$('.homepage #menubar, .homepage-two.fixed-nav #navigation').removeClass('container-fluid')			
		};	 

	}());
	
	/*==============================================================*/
    // # Date Time
    /*==============================================================*/

    (function() {

    	var datetime = null,
    	date = null;
    	var update = function() {
    		date = moment(new Date())
    		datetime.html(date.format('dddd, MMMM D,  YYYY'));
    	};
    	datetime = $('#date-time')
    	update();
    	setInterval(update, 1000);

    }());
    
    
    /*==============================================================*/
	// Search Slide
	/*==============================================================*/
	
	$('.search-icon').on('click', function() {
		$('.searchNlogin').toggleClass("expanded");
	});
	
	
	/*==============================================================*/
    // Breaking News
    /*==============================================================*/
    (function() {
    	$('.breaking-news-scroll').easyTicker({
    		direction: 'up',
    		easing: 'swing',
    		speed: 'slow',
    		interval: 3000,
    		height: 'auto',
    		visible: 1,
    		mousePause: 1,
    		controls: {
    			up: '',
    			down: '',
    			toggle: '',
    			playText: 'Play',
    			stopText: 'Stop'
    		}
    	});
    	
    }());
    
    
    /*==============================================================*/
    // Owl Carousel
    /*==============================================================*/
    $("#home-slider").owlCarousel({ 
    	pagination	: true,	
    	autoPlay	: true,
    	singleItem	: true,
    	stopOnHover	: true,
    });
    
    $("#latest-news").owlCarousel({ 
    	items : 4,
    	pagination	: true,	
    	autoPlay	: true,
    	stopOnHover	: true,
    });
    
    $(".twitter-feeds").owlCarousel({ 
    	items : 1,
    	singleItem : true,
    	pagination	: false,	
    	autoPlay	: true,
    	stopOnHover	: true,
    });
    
    $("#main-slider").owlCarousel({ 
    	items : 3,
    	pagination	: false,
    	navigation	: false,
    	autoPlay	: true,
    	stopOnHover	: true
    	
    });
    
    
});
 
 
 
 