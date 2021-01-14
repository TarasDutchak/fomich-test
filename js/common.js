$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        // loop: true,
        speed: 700,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // padding right (why we)

    var winWidth = $(window).width(),
        containerWidth = $('.container').width(),
        padd = (winWidth - containerWidth) / 2;
    $('.whywe__sectdescr').css('padding-right', padd + 'px');
    // хід буд - стрілки
    $('.course-sliderwrapp .swiper-button-next, .course-sliderwrapp .swiper-button-prev').css('right', padd + 'px');

    $(window).resize(function () {
        var winWidth = $(window).width(),
            containerWidth = $('.container').width(),
            padd = (winWidth - containerWidth) / 2;
        $('.whywe__sectdescr').css('padding-right', padd + 'px');
    });

    // fancybox
    $('.slidebox a').fancybox({
        backFocus: false
    });

    // mask
    $('#telnum, #telnum1').inputmask({
        "mask": "99 /999/ 999-9999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });

    var swiper1 = new Swiper('.course-slider', {
        // spaceBetween: 30,
        // slidesPerView: 4,
        centeredSlides: true,
        speed: 700,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
            767: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 4,
            }
          }
    });

    // more or less text (how we work)
    $('.moreless-btn').click(function () {
        $(this).parent().toggleClass('showall');
    });

    // FAQ
    $('.faq__block-title').click(function () {
        $(this).siblings('.faq__block-body').slideToggle();
        $(this).parent().toggleClass('active');
    });


    // tabs sliders
    $('.year-tabbtn21').click(function () {
        $('.year-tabbtn').removeClass('active');
        $(this).addClass('active');
        $('.yeartabcont').hide();
        $('.year21').show();
    });


    $('.year-tabbtn20').click(function () {
        $('.year-tabbtn').removeClass('active');
        $(this).addClass('active');
        $('.yeartabcont').hide();
        $('.year20').show();
    });


    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    });


    // якоря
    $(".header_menu, .footer__lists, .mobnav").on("click", "a", function (event) {
        var headerHeight = 110;
        if ($(window).width() < 1601  && $(window).width() > 1024) {
            var headerHeight = 80;
        } else if ($(window).width() < 1025 && $(window).width() > 575) {
            var headerHeight = 60;
        } else if ($(window).width() < 576) {
            var headerHeight = 40;
        }
        
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - headerHeight
        }, 1500);
    });

    $(".mainsection__btngroup a.transparentbtn, .footer__btns a.transparentbtn").on("click", function (event) {
        var headerHeight = 110;
        if ($(window).width() < 1601 && $(window).width() > 1024) {
            var headerHeight = 80;
        } else if ($(window).width() < 1025 && $(window).width() > 575) {
            var headerHeight = 60;
        } else if ($(window).width() < 576) {
            var headerHeight = 40;
        }

        console.log(headerHeight)
        
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - headerHeight
        }, 1500);
    });


    // mob - phone btn

    $('.phone-btn').click(function(){
        $(this).siblings('.phonesect').toggle();
    });

    // mob menu
    $('.burger-btn').click(function(){
        $('.mobile-menu').slideDown();
    });

    $('.mobile-menu__close').click(function(){
        $('.mobile-menu').slideUp();
    });

    $('.mobnav li a').click(function(){
        $('.mobile-menu').slideUp();
    });



});