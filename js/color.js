/**
 * Created by Yilun on 10/13/16.
 */
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0,0,900,0);
grd.addColorStop(0,"rgb(255,0,0)")
grd.addColorStop(0.5,"rgb(0,255,0)")
grd.addColorStop(1,"rgb(0,0,255)");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,1000,300);