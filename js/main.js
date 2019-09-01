;
(function ($) {
    "use strict";
    $(window).on('load', function (event) {

        //===== Mobile Menu js

        jQuery('.menu-nav').meanmenu({
            meanMenuContainer: '.menmenu',
            meanScreenWidth: "991",
            onePage: true
        });

        //===== scrollIt js

        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: 'linear',
            scrollTime: 900,
            activeClass: 'active',
            onPageChange: null,
            topOffset: -75
        });


        // Add active class to the current button


        // //===== masonry js

        var $grid = $('.popUp').isotope({
           
                masonry: {
                    gutter: 20
                }
        });
        // filter items on button click
        $('.filter-part').on('click', 'button', function () {

            var filterValue = $(this).attr('data-filter');
            $('.filter-part button').removeClass("current");
            $(this).addClass("current");
            $grid.isotope({
                filter: filterValue,
                stagger: 60
               

            });

        });


        //popUp//
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });

        

    });
    $(window).on('load', function () {

        $.fakeLoader({
            timeToHide: 1200,
            bgColor: "#34495e",
            spinner: "spinner5"
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
        })
        $('.parallax-window').parallax({imageSrc: './images/hero.jpg'});
    });
})(jQuery);
