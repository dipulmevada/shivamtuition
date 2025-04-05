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

            cssmenu.find('li ul').parent().addClass('has-sub');

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
	
    var selector = "#cssmenu > ul > li > a";
    var selector1 = "#cssmenu > ul > li.has-sub > ul > li > a";
    var selector2 = "#cssmenu > ul > li.has-sub > ul > li.has-sub > ul > li > a";
    var selector3 = "#cssmenu > ul > li.has-sub > ul > li.has-sub > ul > li.has-sub > ul > li > a";
    var url = window.location.href;
    var target = url.split('/');
    var TargetSubmenu = $("#cssmenu ul li.has-sub ul li a").attr('href').split('/');
   
    TargetSubmenu = TargetSubmenu[TargetSubmenu.length - 1];
 
    $(selector).each(function () {
        var activemenu = $(this).parent().find('a').attr("href").split('/');
        activemenu = activemenu[activemenu.length - 1];
        if (activemenu === (target[target.length - 1])) {
            $(this).removeClass('active');
            $(this).parent().addClass('active')
        }
    });

    $(selector1).each(function () {
        var activemenu = $(this).parent().find('a').attr("href").split('/');
        activemenu = activemenu[activemenu.length - 1];
        if (activemenu === (target[target.length - 1])) {
            $(this).removeClass('active');
            $(this).parent().parent().parent().addClass('active');
        }
    });

    $(selector2).each(function () {
        var activemenu = $(this).parent().find('a').attr("href").split('/');
        activemenu = activemenu[activemenu.length - 1];
        if (activemenu === (target[target.length - 1])) {
            $(this).removeClass('active');
            $(this).parent().parent().parent().parent().parent().addClass('active');
        }
    });

    $(selector3).each(function () {
        var activemenu = $(this).parent().find('a').attr("href").split('/');
        activemenu = activemenu[activemenu.length - 1];
        if (activemenu === (target[target.length - 1])) {
            $(this).removeClass('active');
            $(this).parent().parent().parent().parent().parent().parent().parent().addClass('active');
        }
    });
	
});