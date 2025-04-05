$(window).scroll(function () {
    if ($(this).scrollTop() !== 0) {
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

/*font increase descrease script*/
//start
$(".accessibility .font-max").on("click", function () {
    getSize();
    if ((size + 1) <= 30) {
        $('body p').css("font-size", "+=1");
        $('body div').css("font-size", "+=1");
        $('body span').css("font-size", "+=1");
        $('body b').css("font-size", "+=1");
        $('body strong').css("font-size", "+=1");
    }
});

$(".accessibility .font-min").on("click", function () {
    getSize();
    if ((size - 1) >= 12) {
        $('body p').css("font-size", "-=1");
        $('body div').css("font-size", "-=1");
        $('body span').css("font-size", "-=1");
        $('body b').css("font-size", "-=1");
        $('body strong').css("font-size", "-=1");
    }
});

$('.accessibility .font-reg').click(function () {
    $('body p').css('font-size', '15px');
    $('body div').css('font-size', '15px');
    $('body span').css('font-size', '15px');
    $('body b').css('font-size', '15px');
    $('body strong').css('font-size', '15px');
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




//var intervalId = window.setInterval(function () {
//    if ($(window).width() < 768) {
//        $('.srchimg').click(function () {
//            
//            $('.biglogo').hide();
//            $('.smalllogo').show();
//            $('.div1').css({'width': '15%'}, 400);
//            $('.div2').css({'width': '75%'}, 400);
//            $('.myinput-group').css({'width': '100%'},400);
//            $('.srchimg').hide(300);
//            
//        });
//        $(document).mouseup(function (e) {
//            var popup = $(".myinput-group");
//            if (!$('.srchimg').is(e.target) && !popup.is(e.target) && popup.has(e.target).length === 0) {
//                
//                $('.biglogo').show();
//                $('.smalllogo').hide();
//                $('.div1').css({'width': '40%'});
//                $('.div2').css({'width': '50%'});
//                $('.myinput-group').css('width', '0');
//                $('.srchimg').show(300);                
//                
//            }
//        });
//    }
//}, 50);


function getSize() {
    size = 15;
}


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
 
 
$('.faq').click(function () {
    const div = document.querySelector('header');
    if (div.classList.contains('sticky')) {
        $('html, body').animate({
            scrollTop: eval($('#' + $(this).attr('title')).offset().top - 40)
        }, 1000);
    } else {
        $('html, body').animate({
            scrollTop: eval($('#' + $(this).attr('title')).offset().top - 100)
        }, 1000);
    }
});