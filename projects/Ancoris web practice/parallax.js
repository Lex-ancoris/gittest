/**
 * Created by lliebert on 31/10/2016.
 */

$(window).scroll(function(){

    var imgScroll = $(this).scrollTop();

    $(".lighthouse").css({
        "transform" : "translate(0px, " + imgScroll /10 + "%)"
    });

    var viewportWidth = $(window).width();

    console.log(viewportWidth);
});
