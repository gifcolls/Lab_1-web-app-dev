
let imagesPosition = 0; 
let timer;

let imageSpace = $(".galleryImg");
let forwardArrow = $(".galleryForward");
let backwardArrow = $(".galleryBackward");


window.addEventListener("load", function() {
    main();
});

forwardArrow.click(function(){
    imageSpace.fadeOut(forwardImage);
});
backwardArrow.click(function(){
    imageSpace.fadeOut(backwardImage);
});


function displayImage() {
    imageSpace.html('<img src = "images/IMG_0' + imagesPosition + '.jpg"></img>');
    resetTimer();
}

function forwardImage() {
    if (imagesPosition < 7) {
        imagesPosition++;
    } else if (imagesPosition = 7) {
        imagesPosition = 1;
    }
    displayImage();
    imageSpace.fadeIn();
}

function backwardImage() {
    if (imagesPosition > 1) {
        imagesPosition--;
    } else if (imagesPosition = 1) {
        imagesPosition = 7;
    }
    displayImage();
    imageSpace.fadeIn();
}

function startTimer() {
    timer = setTimeout(function() { imageSpace.fadeOut(forwardImage); }, 2500);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}
