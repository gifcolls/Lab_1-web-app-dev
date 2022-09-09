var photoOrder = [1, 2, 3, 4, 5];
function populateFigures() {
var filename;
var currentFig;
for (var i = 1; i < 4; i++) {
filename = "images/painting1.jpg" + photoOrder[i] + "sm.jpg";
currentFig = document.getElementsByTagName("img")[i - 1];
currentFig.src = filename;
}
}

/* shift all images one figure to the left, and change values in photoOrder array to match */
function rightArrow() {
for (var i = 0; i < 5; i++) {
if ((photoOrder[i] + 1) === 6) {
photoOrder[i] = 1;
} else {
photoOrder[i] += 1;
}
populateFigures();
}
}

/* shift all images one figure to the right, and change values in photoOrder array to match */
function leftArrow() {
for (var i = 0; i < 5; i++) {
if ((photoOrder[i] - 1) === 0) {
photoOrder[i] = 5;
} else {
photoOrder[i] -= 1;
}
populateFigures();
}
}

function createEventListeners() {
var leftarrow = document.getElementById("leftarrow");
if (leftarrow.addEventListener) {
leftarrow.addEventListener("click", leftArrow, false);
} else if (leftarrow.attachEvent) {
leftarrow.attachEvent("onclick", leftarrow);
}
var rightarrow = document.getElementById("rightarrow");
if (rightarrow.addEventListener) {
rightarrow.addEventListener("click", rightArrow, false);
} else if (rightarrow.attachEvent) {
rightarrow.attachEvent("onclick", rightArrow);
}
var mainFig = document.getElementsByTagName("img")[1];
if (mainFig.addEventListener) {
mainFig.addEventListener("click", zoomFig, false);
} else if (mainFig.attachEvent) {
mainFig.attachEvent("onclick", zoomFig);
}
}

/* open center figure in separate window */
function zoomFig() {
var propertyWidth = 960;
var propertyHeight = 600;
var winLeft = (screen.width - propertyWidth) / 2;
var winTop = (screen.height - propertyHeight) / 2;
var winOptions = "width=960, height=600,";
winOptions += ",left=" + winLeft;
winOptions += ",top=" + winTop;
var zoomWindow = window.open("zoom.htm", "zoomwin", winOptions);
zoomWindow.focus();
}

/* create event listeners and populate image elements */
function setUpPage() {
createEventListeners();
populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
window.attachEvent("onload", setUpPage);
}






/*Full size photo
Close Window
Add to Favorites*/

/* JavaScript 6th Edition
* Chapter 5
* Chapter case

* Photo zoom
* Variables and functions
* Author:
* Date:   

* Filename: zoom.js
*/

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

function closeWin() {
window.close();
}

function createEventListener() {
var closeWindowDiv = document.getElementsByTagName("p")[0];
if (closeWindowDiv.addEventListener) {
closeWindowDiv.addEventListener("click", closeWin, false);
} else if (closeWindowDiv.attachEvent) {
closeWindowDiv.attachEvent("onclick", closeWin);
}
}

/* populate img element and create event listener */
function pageSetup() {
document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
createEventListener();
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;