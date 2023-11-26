$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + 15
        }, 1000);
        event.preventDefault();
    });

    //toggle scroll menu
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll >= 200) {
            $('.sticky-navigation').removeClass('navbar-dark').addClass('navbar-light').addClass('bg-white').addClass('navbar-shadow');
        } else {
            $('.sticky-navigation').removeClass('navbar-light').addClass('navbar-dark').removeClass('bg-white').removeClass('navbar-shadow');
        }
        
        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });
    
     // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //timer init
    $('.timer').countdown({
        date: '12/01/2023 17:00:00',
        offset: +2,
        day: 'Day',
        days: 'Hari',
		minute: 'Menit',
		minutes: 'Menit',
		hour: 'jam',
		hours: 'jam',
		second: 'detik',
		seconds: 'detik'
    }, function () {
    });
    
    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});
    $(document).ready(function () {
        $('[id^="kartu"]').hide();
        $('[id^="kartu"][data-category="kategori1"]').show();
        $(".filter-button[data-filter='kategori1']").addClass("active");
        $(".filter-button").click(function () {
            var value = $(this).attr('data-filter');
            $('[id^="kartu"]').hide('3000');
            $('[id^="kartu"][data-category="' + value + '"]').show('3000');
            $(".filter-button").removeClass("active");
            $(this).addClass("active");
        });
    });

var rsaClose = document.querySelector('.rsa-close'),
    rsaPromo = document.querySelector('.rsa-promo');
if (Cookies2.get('tns_rsa_pref') !== 'opt_out') {
  rsaPromo.classList.remove('hidden');
};
rsaClose.addEventListener('click', function(e){
  e.preventDefault();
  rsaPromo.classList.add('hidden');
  Cookies2.set('tns_rsa_pref', 'opt_out', { domain: '.amelovy.com', expires: 2});
});
