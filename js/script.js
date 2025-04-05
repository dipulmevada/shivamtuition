var index = 0, index_val = 0;

/* Script on scroll
 ------------------------------------------------------------------------------*/
$(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
        $('#totop').fadeIn();
    } else {
        $('#totop').fadeOut();
    }

    if ($(this).scrollTop() > 50) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});

/* Script on resiz
 ------------------------------------------------------------------------------*/
$(window).resize(function () {

});

/* Script on load
 ------------------------------------------------------------------------------*/
$(window).load(function () {
    /* $('.testimonials-details').insertBefore('.testimonials-controls');*/
});

/* Script on ready
 ------------------------------------------------------------------------------*/
$(document).ready(function () {
    //Banner slider
    //start
    $('.banner-flash').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: true
    });
    //end

    //Popup slider
    //start
    $('.popup-flash').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true
    });
    //end

    //scroll-downs
    //start
    $('.scroll-downs').click(function () {
        var win_h = $(window).height();
        $('body,html').animate({scrollTop: win_h}, 2000);
    });
    //end

    /*search box*/
    /*start*/
    $('.search-area .search-btn').click(function () {
        $('.search-block').addClass('open');
        $('body').addClass('sticky');
        $('html').addClass('sticky-main');
    });

    $('.search-block .close-btn').click(function () {
        $('.search-block').removeClass('open');
        $('body').removeClass('sticky');
        $('html').removeClass('sticky-main');
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('.search-btn').removeClass('open');
            $('body').removeClass('sticky');
            $('html').removeClass('sticky-main');
            $('.search-block').removeClass('open');
        }
    });
    /*end*/

    //news marquee
    //start
    let
            marquee = document.getElementById('marquee');
    $('.news-slide .news-slide-controler .pause-btn').on('click', function () {
        marquee.stop();
    });

    $('.news-slide .news-slide-controler .play-btn').on('click', function () {
        marquee.start();
    });

    $('#marquee').mouseover(function () {
        marquee.stop();
    }).mouseout(function () {
        marquee.start();
    });
    //end

    $('.move-down').click(function () {
        if ($('.banner').length > 0) {
            var win_h = $(window).height();
            $('body,html').animate({scrollTop: win_h}, 2000);
        }
    });

    /*font increase descrease script*/
    //start
    $(".accessibility .font-max").on("click", function () {
        getSize();
        if ((size + 1) <= 30) {
            $('body p').css("font-size", "+=1");
        }
        equal();
    });

    $(".accessibility .font-min").on("click", function () {
        getSize();
        if ((size - 1) >= 12) {
            $('body p').css("font-size", "-=1");
        }
        equal();
    });

    $('.accessibility .font-reg').click(function () {
        $('body p').css('font-size', '15px');
        equal();
    });
    //end

    /*blind mode*/
    /*start*/
    $('.font-dark').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.home-page').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.home-page').addClass('active');
        }
    })
    //end

    //Banner slider
    //start
    $('.why-choose-slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true
    });
    //end

    // number counter script
    //start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //end

    //latest news slider
    //start
    $('.latest-news-slider').slick({
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //end


    $(document).ready(function ($) {
        function start_slick1() {
            $('.parents-slider').slick({
                infinite: true,
                speed: 2000,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        }
        window.setTimeout(start_slick1, 100);
    });




    //testimonials part
    //start
    //$('.parents-slider').slick({
    //    infinite: true,
    //    speed: 2000,
    //    slidesToShow: 3,
    //    slidesToScroll: 1,
    //    autoplay: true,
    //    autoplaySpeed: 2000,
    //    dots: false,
    //    arrows: false,
    //    responsive: [
    //        {
    //            breakpoint: 1200,
    //            settings: {
    //                slidesToShow: 2,
    //                slidesToScroll: 1
    //            }
    //        },
    //        {
    //            breakpoint: 767,
    //            settings: {
    //                slidesToShow: 2,
    //                slidesToScroll: 1
    //            }
    //        },
    //        {
    //            breakpoint: 641,
    //            settings: {
    //                slidesToShow: 1,
    //                slidesToScroll: 1
    //            }
    //        }
    //    ]
    //});

    $('.student-slider').slick({
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.testimonials-section .two-slide-controler .left-arrow').click(function () {
        $('.testimonial-slider').slick('slickPrev');
    });

    $('.testimonials-section .two-slide-controler .right-arrow').click(function () {
        $('.testimonial-slider ').slick('slickNext');
    });


    $('.controls-tab ul li').each(function () {
        $(this).attr('index', index);
        index = index + 1;
    });

    $('.testimonials-details .testimonial-main-cell').each(function () {
        $(this).attr('index', index_val);
        index_val = index_val + 1;
    });

    $('.controls-tab ul li').click(function () {
        var cur_tab = $(this).attr('index');
        $('.controls-tab ul li').removeClass('active');
        $(this).addClass('active');
        $('.testimonials-details .testimonial-main-cell').each(function () {
            $(this).addClass('hide');
            if ($(this).attr('index') == cur_tab) {
                $('.testimonials-details .testimonial-main-cell').removeClass('active');
                $(this).addClass('active');
            }
        });
    });
    //end

    // bottom to top
    //start
    if ($(this).scrollTop() != 0) {
        $('#totop').fadeIn();
    } else {
        $('#totop').fadeOut();
    }
    $('#totop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
    //end

    /*page navigation script*/
    /*start*/
    var scroll_section;
    $('.page-navigation li a').click(function () {
        scroll_section = $(this).attr('data-rel');
        $('body,html').animate({scrollTop: $('.' + scroll_section).offset().top}, 2000);
    });
    /*end*/

    /*side menu script*/
    /*start*/
    $('.main-menu').click(function () {
        $('.navbar').addClass('open');
        $('#mobile-menu').addClass('open');
        $('.menu-overlayer').addClass('open');
        $('body').addClass('fix');
    });

    $('.menu-trigger').click(function () {
        $('.navbar').removeClass('open');
        $('#mobile-menu').removeClass('open');
        $('.menu-overlayer').removeClass('open');
        $('body').removeClass('fix');
    });

    if ($('#mobile-menu ul ul').length > 0) {
        $('#mobile-menu ul ul ').before('<em class="submenu-caret"></em>')
    }

    $('.submenu-caret').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('toggled');
        $(this).parent().toggleClass('up-arrow');
        $(this).parent().siblings().find('ul').slideUp()
        $(this).parent().siblings().find('em').removeClass('toggled')
        $(this).parent().siblings().find('em').parent().removeClass('up-arrow')
    });

    $(document).click(function () {
        $('.mobile-drop-area').removeClass('open');
        if ($(window).width() < 768) {
            $('.tabbed-top').slideUp();
        }
    });

    $(".mobile-drop-area").click(function (e) {
        e.stopPropagation();
    });
    $('#mobile-menu ul li:has(ul)').addClass('hassub');
    $('.mobile-slide').slideUp();
    $('.mobile-setting .setting-icon').click(function () {
        if ($(this).parent().hasClass('open')) {
            $('.mobile-slide').slideUp();
            $(this).parent().removeClass('open');
        } else {
            $('.mobile-slide').slideDown();
            $(this).parent().addClass('open');
        }
    })
    /*end*/

    /*menu scroll*/
    /*start*/
    $(".menu-area").mCustomScrollbar({
        scrollButtons: {enable: true, scrollType: "stepped"},
        keyboard: {scrollType: "stepped"},
        mouseWheel: {scrollAmount: 500}
    });
    /*end*/

});

/* Script all functions
 ------------------------------------------------------------------------------*/
//---- sticky footer script ----- //
function StickyFooter() {
    var Stickyfooter = $('footer').outerHeight()
    $('#wrapper').css('margin-bottom', -Stickyfooter)
    $('#wrapper .footer-push').css('height', Stickyfooter)
}
$(window).on("load resize scroll ready", function () {
    var width = $(window).width();
    if (width <= 641) {
        $('html,body').css("height", "auto");
    } else {
        StickyFooter()
        $('html,body').css("height", "100%");
    }
});

function equal() {
    jQuery('.latest-news-slider').each(function () {
        var max = 1;
        jQuery(this).find(' .news-blog h3').css('height', 'auto');
        jQuery(this).find(' .news-blog h3').each(function () {
            var height1 = jQuery(this).outerHeight();
            max = (height1 > max) ? height1 : max;
        });
        jQuery(this).find(' .news-blog h3').css('height', max);
    });

    jQuery('.parents-slider').each(function () {
        var max = 1;
        jQuery(this).find('.testimonial-info').css('height', 'auto');
        jQuery(this).find('.testimonial-info').each(function () {
            var height1 = jQuery(this).outerHeight();
            max = (height1 > max) ? height1 : max;
        });
        jQuery(this).find('.testimonial-info').css('height', max);
    });

    jQuery('.student-cell').each(function () {
        var max = 1;
        jQuery(this).find('.testimonial-info').css('height', 'auto');
        jQuery(this).find('.testimonial-info').each(function () {
            var height1 = jQuery(this).outerHeight();
            max = (height1 > max) ? height1 : max;
        });
        jQuery(this).find('.testimonial-info').css('height', max);
    });

    jQuery('.testimonials-details').each(function () {
        var max = 1;
        jQuery(this).find('.testimonial-main-cell .testimonial-slider').css('height', 'auto');
        jQuery(this).find('.testimonial-main-cell .testimonial-slider').each(function () {
            var height1 = jQuery(this).outerHeight();
            max = (height1 > max) ? height1 : max;
        });
        jQuery(this).find('.testimonial-main-cell .testimonial-slider').css('height', max);
    });

    jQuery('.testimonials-details').each(function () {
        var max = 1;
        jQuery(this).find('.testimonial-main-cell').css('height', 'auto');
        jQuery(this).find('.testimonial-main-cell').each(function () {
            var height1 = jQuery(this).outerHeight();
            max = (height1 > max) ? height1 : max;
        });
        jQuery(this).find('.testimonial-main-cell').css('height', max);
    });

    $('.testimonials-details').height($('.testimonial-main-cell').height());
}
jQuery(window).load(equal);
jQuery(window).resize(equal);

function getSize() {
    size = 15;
    size = parseInt(size, 10);
}



//var intervalId = window.setInterval(function () {
//    if ($(window).width() < 768) {
//        $('.srchimg').click(function () {
//
//            $('.biglogo').hide();
//            $('.smalllogo').show();
//            $('.div1').css({ 'width': '15%' }, 400);
//            $('.div2').css({ 'width': '75%' }, 400);
//            $('.myinput-group').css({ 'width': '100%' }, 400);
//            $('.srchimg').hide(300);
//
//        });
//        $(document).mouseup(function (e) {
//            var popup = $(".myinput-group");
//            if (!$('.srchimg').is(e.target) && !popup.is(e.target) && popup.has(e.target).length === 0) {
//
//                $('.biglogo').show();
//                $('.smalllogo').hide();
//                $('.div1').css({ 'width': '40%' });
//                $('.div2').css({ 'width': '50%' });
//                $('.myinput-group').css('width', '0');
//                $('.srchimg').show(300);
//
//            }
//        });
//    }
//}, 50);


/*
 var intervalId = window.setInterval(function () {
 if ($(window).width() > 601) {
 $(document).ready(function () {
 $('.srchimg').click(function () {
 $('.myinput-group').animate({'width': '100%'}, 400);
 $('.srchimg').hide();
 });
 });
 $(document).mouseup(function (e) {
 var popup = $(".myinput-group");
 if (!$('.srchimg').is(e.target) && !popup.is(e.target) && popup.has(e.target).length === 0) {
 $('.myinput-group').animate({'width': '0'}, 400);
 $('.srchimg').delay(400).show(100);
 }
 });
 }
 }, 50);
 */

//Popup js
$(document).ready(function () {

    var id = '#dialog';

    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //Set heigth and width to mask to fill up the whole screen
    //$('#mask').css({'width': maskWidth, 'height': maskHeight});

    //transition effect		
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);

    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();

    //Set the popup window to center
    //$(id).css('top', winH / 2 - $(id).height() / 2);
    //$(id).css('left', winW / 2 - $(id).width() / 2);

    //transition effect
    $(id).fadeIn(2000);

    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();

        $('#mask').hide();
        $('.window').hide();
    });

    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });
    
    $(".lispan").click(function () {
        $(".lnoti").toggleClass("lihover");
    });
    $('.lnoti').click(function (e) {
        e.stopPropagation();
    });
    $('body').click(function () {
        if ($('.lnoti').hasClass("lihover")) {
            $('.lnoti').toggleClass("lihover");
        }
    });

    $('.notipause').click(function () {
        $(".slider").addClass('slstop');
    });
    
    $('.notiplay').click(function () {
        $(".slider").removeClass('slstop');
    });

});

function notislide() {
    $(".slider").css("animation", "slider linear infinite");
    var viewHeight = document.querySelector(".slider").clientHeight;
    var slider = document.querySelector(".slider");
    var time = (slider.offsetHeight * 2.0 + viewHeight * 2) / 50.0; // 50px / sec

    slider.style.animationDuration = time + "s";
}
;

//Loader js
/*document.onreadystatechange = function () {
 if (document.readyState !== "complete") {
 document.querySelector(
 "body").style.visibility = "hidden";
 document.querySelector(
 "#loader").style.visibility = "visible";
 } else {
 document.querySelector(
 "#loader").style.display = "none";
 document.querySelector(
 "body").style.visibility = "visible";
 }
 };*/