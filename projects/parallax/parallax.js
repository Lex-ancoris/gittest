
$(window).scroll(function(){

     var imgScroll = $(this).scrollTop();

     $("#bird").css({
         "transform" : "translate(0px, " + imgScroll /7 + "%)"
     });

     $("#bird2").css({
         "transform" : "translate(0px, " + imgScroll /8 + "%)"
     });

     // console.log(imgScroll);

        var viewportWidth = $(window).width();

    console.log(viewportWidth);

 });