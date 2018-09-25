$(document).ready(function () {
$(".click1").on("click", function () {
    $("#formsclick").click();
});

    $('.sidenav').sidenav();

    var brandLogo = $('.brand-logo');
    var nav = $('.nav');
    var navBg = $('.bg');
    $(window).scroll(function () {
        var currentScroll = $(window).scrollTop();
        if (currentScroll > 50) {
            brandLogo.addClass('log');
        } else {
            brandLogo.removeClass('log');
        }
                
    });
    $(window).scroll(function () {
        var current = $(window).scrollTop();
        if (current > 50) {
            navBg.css('opacity',1);
        } else {
            navBg.css('opacity',0);
        }

    });

    $("a").mPageScroll2id({
        offset:10,
    });

    


    $(".wrapp a").mPageScroll2id({
        offset:100,
         onComplete:function(){
            $('.sidenav').sidenav('close');
         }
    });

    $('.materialboxed').materialbox();
    $('.collapsible').collapsible();
    $('select').formSelect();
    $('.parallax').parallax();

});

           
