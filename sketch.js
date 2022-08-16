var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
 bgImg = loadImage("./assets/path3.png");
 balloonImg = loadAnimation("./assets/balloon1.png","./assets/balloon2.png","./assets/balloon3.png" );

}

function setup(){

createCanvas(windowWidth, windowHeight);
bg = createSprite( 900, 800)
bg.addImage(bgImg);
bg.scale = 2.9;
bg.rotation = 90;
bg.velocityX=-4;
balloon = createSprite(100,150);
balloon.addAnimation("balloonImg", balloonImg);
balloon.scale = 0.4;
console.log(bg.width);

}

function draw() {
  
    if (bg.x < 0){
        bg.x = bg.width/2;
      }


    drawSprites();
        
}