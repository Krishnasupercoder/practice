var canvas;
var dogandcat="";
function preLoad(){
dogandcat = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(dogandcat,0,0,640,420);
}