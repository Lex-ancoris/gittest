var targetPink = document.getElementsByClassName("blueBox");

var colorArrayPink = ["#273a88", "#20306f", "#6177d1"];

var pinkArrayIndex = 0;

function changeColorPink() {

    for (var pinkIndex = 0; pinkIndex < targetPink.length; pinkIndex++) {
        targetPink[pinkIndex].setAttribute("style", "background-color:" + colorArrayPink[pinkArrayIndex]);
    }
    pinkArrayIndex++;

    if (pinkArrayIndex >= colorArrayPink.length) {
        pinkArrayIndex = 0;
    }
}

var targetOrange = document.getElementsByClassName("orangeBox");

var colorArrayOrange = ["#f7971c", "#ec8a09", "#f9af4e"];

var orangeArrayIndex = 0;

function changeColorOrange() {

    for (var orangeIndex = 0; orangeIndex < targetOrange.length; orangeIndex++) {
        targetOrange[orangeIndex].setAttribute("style", "background-color:" + colorArrayOrange[orangeArrayIndex]);
    }
    orangeArrayIndex++;

    if (orangeArrayIndex >= colorArrayOrange.length) {
        orangeArrayIndex = 0;
    }
}


// --------------IMAGE ARRAY---------------

var targetImage = document.getElementById("image-box");

var imageArray = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
var imageArrayIndex = 0;

function imageChange(){
    targetImage.src = imageArray[imageArrayIndex];
    imageArrayIndex++;

    if(imageArrayIndex >= imageArray.length){
        imageArrayIndex = 0;
    }
}

// -------------------------------------------

function multipleFunctions() {
    changeColorOrange();
    changeColorPink();
    imageChange();
}

setInterval(multipleFunctions, 1000);

// --------------JQUERY---------------


$(document).ready(function(){

    $(".happy-face img").click(function(){
        $(this).fade();
    });

});

console.log("happy-face");