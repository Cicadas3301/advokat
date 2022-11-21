$(document).ready(function () {

    (function () {
        var btn = $('.js-scroll');
        btn.click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 1000
            });
            return false;
        });
    })();

    if (window.matchMedia("(min-width: 992px)").matches) {
        $('.header_menu-burger').on('click', function () {
            $(this).toggleClass('active');
            $('.header_menu, .header_menu-links').toggleClass('active');
        })
    }
    if (window.matchMedia("(max-width: 991.90px)").matches) {
        $('.header_menu-burger').on('click', function () {
            $(this).toggleClass('active');
            $('.header_menu-wrapper').toggleClass('active');
            $('body').toggleClass('ov-hidden');
        })
    }

});