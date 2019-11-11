
$(document).ready(function(){
    const header = document.querySelector('#top_header');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
// coundown

        $(".venues").owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:2
                },
                1199:{
                    items:3
                }
            }
        });

        $(".testimonial").owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:2
                },
                1199:{
                    items:3
                }
            }
        });

    // click to scroll top
    $(".scroll-top").click(function () {
        $("html, body").animate({
            scrollTop:0
        },1000);

    });





});

    var scrollTrigger = 1000, // px
    backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('.scroll-top').css({
                "display": "block"
            });
        } else {
            $('.scroll-top').css({
                "display": "none"
            });
        }
    };


if ($('.scroll-top').length) {
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });

}