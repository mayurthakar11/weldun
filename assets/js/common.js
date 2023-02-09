//back to top

/* Back to Top Scroll S */
$(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
        $('#back-top').show();
    } else {
        $('#back-top').hide();
    }
});
$('#back-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 2500);
    return false;
});
/* Back to Top Scroll E */



//scroll header

$(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
        $('header').addClass('fixed animated fadeInDown slow');
    } else {
        $('header').removeClass('fixed animated fadeInDown slow');
    }
});

/* Bootstrap Select S */

$(window).on("load resize", function() {
    var owl1 = $('.logo-slider.owl-carousel');
    owl1.owlCarousel({
        margin: 20,
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: false,
        smartSpeed: 1000,
        mouseDrag: true,
        responsive: {
            0: {
                items: 3,
            },
            480: {
                items: 3,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 6,
            }
        }
    });
    var owl2 = $('.ourservices-slider.owl-carousel');
    owl2.owlCarousel({
        margin: 0,
        loop: true,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: false,
        smartSpeed: 1000,
        autoHeight: true,
        mouseDrag: true,
        navText: ["<i class='icon-down-long' title='Previous'></i>", "<i class='icon-down-long' title='Next'></i>"],
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
                margin: 20,
            },
            1024: {
                items: 3,
                margin: 20,
            },
            1200: {
                items: 4,
            }
        }
    });
    var owl3 = $('.testimonial-slider.owl-carousel');
    owl3.owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        smartSpeed: 500,
        mouseDrag: true,
        navText: ["<i class='icon-down-long' title='Previous'></i>", "<i class='icon-down-long' title='Next'></i>"],
        responsive: {
            0: {
                items: 1,

            },
            568: {
                items: 1,


            },
            767: {
                items: 1,

            },

            991: {
                items: 1,

            },
            1200: {
                items: 1,
            }
        }
    });


});




// scroll S


$(document).ready(function() {
    $(window).on("resize", function(e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize() {
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 768) {
            $(".tab_scroll").mCustomScrollbar({
                axis: "x",
                theme: "dark-3",
                setLeft: 0,
                advanced: { autoExpandHorizontalScroll: true },
                scrollButtons: {
                    enable: true
                }
            });
        } else {
            $(".tab_scroll").mCustomScrollbar("destroy"); //destroy scrollbar 
        }
    }
});
// scroll E


// isotop S
// $(window).on('load', function() {
//     setTimeout(function() {
//         $('.grid').isotope();
//     }, 1000);
// });
// $('.grid').isotope({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     masonry: {
//         columnWidth: '.grid-sizer'
//     }
// });
// isotop E
// Wow animation S
$(document).ready(function() {
    new WOW({ mobile: false }).init();
});
// Wow animation E


// open menu desktop S
$(document).ready(function() {

    $("#DeskMenu").click(function() {
        $('body').addClass('open_desk')
    });

    $("#closediv").click(function() {
        $('body').removeClass('open_desk')
    });

});
// open menu desktop E