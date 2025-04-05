(function ($) {

    $.fn.menumaker = function (options) {

        var cssmenu = $(this), settings = $.extend({
            title: "Menu",
            format: "dropdown",
            sticky: false
        }, options);

        return this.each(function () {

            cssmenu.prepend('');

            $(".div3").on('click', function () {
                $("#menu-button").toggleClass('menu-opened');
                var mainmenu = $("#menu-button").next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.hide().removeClass('open');
                } else {
                    mainmenu.show().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });

            $('#cssmenu>ul>li:has(ul)').addClass('has-sub');

            multiTg = function () {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').hide();
                    } else {
                        $(this).siblings('ul').addClass('open').show();
                    }
                });
            };

            if (settings.format === 'multitoggle')
                multiTg();
            else
                cssmenu.addClass('dropdown');

            if (settings.sticky === true)
                cssmenu.css('position', 'fixed');

            resizeFix = function () {
                if ($(window).width() > 769) {
                    cssmenu.find('ul').show();
                    cssmenu.find('ul').addClass('open');
                }

                if ($(window).width() <= 769) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);

        });
    };
})(jQuery);

(function ($) {
    $(document).ready(function () {
        $("#cssmenu").menumaker({
            title: "Menu",
            format: "multitoggle"
        });
    });
})(jQuery);


$(window).on('resize', function () {
    $('#cssmenu').find('ul').show().addClass('open');
});


//Add active class to menu//
$(document).ready(function () {
	
    $(".has-sub").removeClass("active");
	
    $("#cssmenu>ul>li>a").each(function() {
        var href = $(this).attr("href");
        if (href && href === window.location.href) {
            $(this).parent().addClass('active');
        }
    });	
	
});