var soldier, soldierAnimation;
var bg, bgImage;

function preload() {
  soldierAnimation = loadAnimation("soldier1.png", "soldier2.png", "soldier3.png", "soldier4.png", "soldier5.png", "soldier6.png");
  
  bgImage = loadImage("background1.png");
}

function setup() {
  createCanvas(600, 400);
  
  bg = createSprite(200,200,600,400);
  bg.addImage(bgImage);
}

function draw() {
  background(220);
  
  drawSprites();
}

