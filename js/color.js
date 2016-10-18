/**
 * Created by Yilun on 10/13/16.
 */
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
fitToContainer(c);
// Create gradient
var grd = ctx.createLinearGradient(0,0,900,0);
grd.addColorStop(0, calculateRgb('66ccff'));
// alert( calculateRgb('66ccff'));
// grd.addColorStop(0.5,"rgb(0,255,0)")
grd.addColorStop(1,"rgb(0,0,255)");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,1000,300);



function fitToContainer(canvas){
    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function calculateRgb(hex){
    var r = hexToRgb(hex).r;
    var g = hexToRgb(hex).g;
    var b = hexToRgb(hex).b;
    return ["rgb(",r,",",g,",",b,")"].join("");
}