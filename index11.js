function showCoords() {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X: " + x + ", Y: " + y;
    document.getElementById("fullScreen").innerHTML = coords;
}
/*
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

*/

window.onload = function () {
    var S = document.getElementById('screen')
    S.addEventListener("mousemove", showCoords)
}