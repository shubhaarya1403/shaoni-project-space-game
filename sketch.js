var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

//var cars, car1, car2, car3, car4;

//var track, car1_img, car2_img, car3_img, car4_img;
var spaceships, spaceship1, spaceship2, gAliensGroup, bAliensGroup;
var gAlien, bAlien;
var spaceship1Img, spaceship2Img, bgImg, goodAlienImg, badAlienImg;

var asteroid, asteroidGroup;

function preload(){
  bgImg = loadImage("images/background.jpg");
  spaceship1Img = loadImage("images/Ship1final.png");
  spaceship2Img = loadImage("images/ship2final.png");
 goodAlienImg = loadImage("images/goodAlien.jpg");
 badAlienImg= loadImage("images/badAlien.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  gAliensGroup = new Group();
  bAliensGroup = new Group();
  asteroidGroup = new Group();

}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    goodAliens();
   //badAliens();
  //asteroids();
  }
  if(gameState === 2){
    game.end();
  }
}
function goodAliens() {
  //write code here to spawn the clouds

  if (frameCount % 100 === 0) {
    // assign x position

    var rand1 = Math.round(random(1,2));
    if(rand1===1){
    var gAlien = createSprite(displayWidth,displayHeight/2,40,40);
    
    gAlien.velocityX = -3;
}
else if (rand1===2){
  var gAlien = createSprite(0,displayHeight/2,40,40);
  gAlien.velocityX = 3;
}
    gAlien.y = Math.round(random(300,400));
    gAlien.addImage(goodAlienImg);
    //gAlien.velocityX = 3;
    
     //assign lifetime to the variable
    gAlien.lifetime = 300;
    
    //adjust the depth
    //gAlien.depth = trex.depth;
    //trex.depth = trex.depth+1;
    
    //add each cloud to the group
    gAliensGroup.add(gAlien);
  }
  

}
