var canvas;
var backgroundImage,trackImage,car1Image,car2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1,car2,cars;
function preload() {
  backgroundImage = loadImage("assets/background.png");
  trackImage = loadImage("assets/track.jpg");
  car1Image = loadImage("assets/car1.png");
  car2Image = loadImage("assets/car2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  //calls function in game class
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  if (playerCount == 2) {
    game.update(1);
  }

  if (gameState == 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
