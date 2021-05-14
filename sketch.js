var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;

var xvel,yvel;

var f1,f2;

var i;

var obstacles;

var s1;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  f2 = loadImage("images/f1.png");
  s1 = loadSound("sound/sliding.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  xvel =0;
  yvel =0;
 
  obstacles = new Group();
  for(i = 0; i<6; i++){
    a = random(200,950);
    b = random(-height*4,height-300);

    f1 = createSprite(a,b);
   f1.addImage(f2);

   obstacles.add(f1)
  }
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
