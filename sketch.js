var bg1,bg1I;
var bg2,bg3;
function preload(){
  bg1I=loadImage("bg1.jpg");
}
  function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1=createSprite(windowWidth/2, windowHeight/2, 50,50);
  bg1.addImage(bg1I);
  bg2=createSprite(bg1.x+windowWidth,windowHeight/2, 50,50);
  bg2.addImage(bg1I);
  bg1.velocityX=-4;
  bg2.velocityX=-4;
}

function draw() {
  background(255);
  if(bg2.x===windowWidth/2){
    bg1.x=windowWidth/2;
    bg2.x=bg1.x+windowWidth;
    bg1.velocityX=-4;
    bg2.velocityX=-4;
  }
  drawSprites();
}