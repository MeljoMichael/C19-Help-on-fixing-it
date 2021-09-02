var CHOOSE = 1;
var PLAY = 0;
var END = 2;
var END2 = 3;
var gameState = CHOOSE;
var whale1,whale2,whale1Img,whale2Img,submarineImg;
var bomb,bomb1Img,bomb2Img,landmine,explosionImg;
var backgroundImg;
var score = 0;
var gameOver,restart;
var background;

function preload(){
  whale1Img = loadImage("whale1.gif");
  whale2Img = loadImage("whale2.gif");
  bomb1Img = loadImage("bomb1.png");
  bomb2Img = loadImage("bomb2.png");
  backgroundImg = loadImage("underwater.jpg");
  submarineImg = loadImage("submarine.gif");
  explosionImg = loadImage("explosion.gif");
  landmine = loadImage("landmine.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background1 = createSprite(1300,490,612,306);
  background1.addImage("underwater",backgroundImg);
  background1.scale = 5;
  background1.velocityX = -5;

  whale2 = createSprite(width-1760,300,10,10);
  whale2.addImage("whale",whale2Img);
  whale2.scale = 0.5;
  whale2.debug=true;
}

function draw() {
  background("white");

  if (gameState == PLAY) {

    if (keyDown(UP_ARROW)) {
      whale2.y = whale2.y-5;
    }
  
    if (keyIsDown (DOWN_ARROW)) {
      whale2.y = whale2.y +5;
    }
    
    spawnBomb();
  }

  if(background1.x < 550){
    background1.x = background1.width/1;
  }

  drawSprites();
}

function spawnBomb() {
 if (frameCount % 60 === 0) {
  var bomb = createSprite(width-50,height-500,30,20); 
  bomb.y = Math.round(random(0,1000));
  bomb.x = Math.round(random(-50,-1000));

  bomb.velocityX = background1.velocityX;

  var rand = Math.round(random(1,2,3))
  switch(rand) {
    case 1: bomb.addImage(bomb1);
            break;
    case 2: obstacle.addImage(bomb2);
            break;
    case 3: obstacle.addImage(landmine);
            break;        
    default: break;  
    
    bomb.lifetime = 1000;

    background1.depth = bomb.depth;
    bomb.depth +=1;
  }
 }
}