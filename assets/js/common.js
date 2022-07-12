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
    var owl1 = $('.service-slider.owl-carousel');
    owl1.owlCarousel({
        margin: 15,
        loop: false,
        nav: false,
        lazyLoad: true,
        autoplay: false,
        smartSpeed: 1000,
        autoHeight: true,
        mouseDrag: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            568: {
                items: 2,
                margin: 10,

            },
            767: {
                items: 2,
                margin: 10,
            },

            991: {
                items: 3,
                margin: 20,
            },
            1200: {
                items: 3,
            }
        }
    });
    var owl2 = $('.ourproject-slider.owl-carousel');
    owl2.owlCarousel({
        margin: 30,
        loop: false,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: false,
        smartSpeed: 1000,
        autoHeight: true,
        mouseDrag: true,
        navText: ["<i class='icon-left-arrow' title='Previous'></i>", "<i class='icon-right-arrow' title='Next'></i>"],
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
        margin: 20,
        loop: true,
        nav: false,
        dots: true,
        lazyLoad: true,
        autoplay: false,
        smartSpeed: 1000,
        autoHeight: true,
        autoWidth: true,
        mouseDrag: true,
        animateOut: 'fadeOut',

        responsive: {
            0: {
                items: 1,
                autoWidth: false,
            },
            568: {
                items: 2,
                margin: 20,
                autoWidth: false,

            },
            767: {
                items: 2,
                margin: 30,
                autoWidth: false,
            },

            991: {
                items: 3,
                margin: 20,
                autoWidth: false,
            },
            1200: {
                items: 4,
            }
        }
    });
    var owl4 = $('.detail-slider.owl-carousel');
    owl4.owlCarousel({
        margin: 25,
        loop: false,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: false,
        smartSpeed: 1000,
        mouseDrag: true,
        animateOut: 'fadeOut',
        navText: ["<i class='icon-left-arrow' title='Previous'></i>", "<i class='icon-right-arrow' title='Next'></i>"],
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
$(window).on("load resize", function() {
    var owl = $('.left-tab-list.owl-carousel');
    owl.owlCarousel({
        margin: 20,
        loop: true,
        nav: false,
        dots: true,
        lazyLoad: true,
        autoplay: true,
        smartSpeed: 1000,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            }
        }
    });
    if ($(window).width() < 991) {
        owl.trigger('initialize.owl.carousel');
    } else {
        owl.trigger('destroy.owl.carousel');
    }
});



// scroll S
$(".tab_scroll").mCustomScrollbar({
    axis: "x",
    theme: "dark-3",
    setLeft: 0,
    advanced: { autoExpandHorizontalScroll: true },
    scrollButtons: {
        enable: true
    }
});
// scroll E


// isotop S
$(window).on('load', function() {
    setTimeout(function() {
        $('.grid').isotope();
    }, 1000);
});
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});
// isotop E