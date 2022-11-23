$(function () {

    'use strict';

    //accordion with image
    function accordion() {

        $('.accordion .accordion__item').on('click', function () {
            const timeAnim = 400;
            $('.accordion .accordion__item').removeClass("active").css({ 'pointer-events': 'auto' });
            $(this).addClass("active").css({ 'pointer-events': 'none' });
            $('.accordion .accordion__header').next().slideUp(timeAnim);
            $(this).find('.accordion__header').next().slideDown(timeAnim);

            $('.accord__img').removeClass("active");
            let id = $(this).data('id');
            $('#' + id + '-img').addClass("active");
        });

    }
    accordion();



    function cursor() {

        $(window).on('mousemove', function (e) {

            let x = e.clientX;
            let y = e.clientY;

            $('.cursor').css({ left: x + 'px', top: y + 'px' });

        });

        $('.accordion__item').each(function () {
            
            $(this).mouseenter(function () {
                $('.cursor').addClass("active");
            });
            
            $(this).mouseenter(function () {
                $('.cursor').removeClass("active");
            });

        });

    }
    cursor();

});