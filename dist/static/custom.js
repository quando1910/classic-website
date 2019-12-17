console.log("start custom js")
jQuery(document).ready(function($) {

    "use strict";





// if ($('.gallery').length) {

// 		$("area[data-rel^='prettyPhoto']").prettyPhoto();
// console.log(123123)
// 		$(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false});

// 		}

		



    //ROOM SLIDER
// console.log("before start");
//     if ($('#cp-banner-1').length) {
// 		console.log("slider start");

//         // $('#cp-banner-1').bxSlider({

//         //     infiniteLoop: true,

//         //     auto: true,

//         //     hideControlOnEnd: true

//         // });

//     }

	

	

	//ROOM SLIDER

    // if ($('.cp-post-slider').length) {

    //     $('.cp-post-slider').bxSlider({

    //         infiniteLoop: true,

    //         auto: true,

    //         hideControlOnEnd: true

    //     });

    // }



    //ROOM SLIDER

    // if ($('#cp-about-slider').length) {

    //     $('#cp-about-slider').bxSlider({

    //         infiniteLoop: true,

    //         auto: true,

    //         pager: false,

    //         nextText: '',

    //       	prevText: ' ',

    //     });

    // }

	

	

	  //ROOM SLIDER

    if ($('.cp-home2-slider').length) {

        $('.cp-home2-slider').bxSlider({

            auto: true,

            pager: true,

			controls:false,

        });

    }

	

	

	// if ($('#cp-post-carousel').length) {

	//     $("#cp-post-carousel").owlCarousel({

    //     autoPlay: 3000,

    //     items : 3,

	// 	pagination:false,

	// 	itemsCustom : false,

    //     itemsDesktop : [1199,3],

	// 	lazyLoad : true,

    // 	navigation : true,

    //     itemsDesktopSmall : [979,3]

    //   });

	// }



	if ($('#cp_post-slider').length) {

	    $("#cp_post-slider").owlCarousel({

        autoPlay: 3000,

        items : 1,

		pagination:true,

        itemsDesktop : [1199,1],

        itemsDesktopSmall: [979,1],

        itemsTablet: [768,1],

        itemsMobile: [479,1],

		lazyLoad : true,

    	navigation : false,

      });

	}

	

	 //ConunterUp For About Me Page

    if ($('.counter').length) {

        $('.counter').counterUp({

            delay: 10,

            time: 1000

        });

    }



		$('.burger').on('click', function(){

	  if( $(this).is('.expand')){

		$('.search').fadeOut('fast');

		$(this).delay(100).queue(function(){

		  $(this).removeClass('expand').dequeue();

		});

	  } else{

		$(this).delay(100).queue(function(){

		  $(this).addClass('expand').dequeue();

		});

		$('.search').delay(200).fadeIn('fast');

	  }

		});

		

		

		

		if ($('#defaultCountdown').length) {

		var austDay = new Date();

		austDay = new Date(2019, 11-1, 29);
		$('#defaultCountdown').countdown({until: austDay});

		$('#year').text(austDay.getFullYear());

		}

		

		

		

		// if ($(".cp-grid-isotope .isotope").length) {

		//         var $container = $('.cp-grid-isotope .isotope');
		//         $container.isotope({

		//             itemSelector: '.item',

		//             transitionDuration: '0.6s',

		//             masonry: {

		//                 columnWidth: $container.width() / 12

		//             },

		//             layoutMode: 'masonry'

		//         });



		//         $(window).resize(function() {

		//             $container.isotope({

		//                 masonry: {

		//                     columnWidth: $container.width() / 12

		//                 }

		//             });

		//         });



		//     }

	

	

	

	// if ($(".cp-news-isotope .isotope").length) {
	// 			console.log(12);
	// 	        var $container = $('.cp-news-isotope .isotope');

	// 	        $container.isotope({

	// 	            itemSelector: '.item',

	// 	            transitionDuration: '0.6s',

	// 	            masonry: {

	// 	                columnWidth: $container.width() / 12

	// 	            },

	// 	            layoutMode: 'masonry'

	// 	        });



	// 	        $(window).resize(function() {

	// 	            $container.isotope({

	// 	                masonry: {

	// 	                    columnWidth: $container.width() / 12

	// 	                }

	// 	            });

	// 	        });



	// 	    }

	

	

	



    //Function End

});