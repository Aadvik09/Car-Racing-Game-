class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    //new player is made and the player count is checked. 
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    //creating the cars sprites for the player
    car1 = createSprite(width/2-50,height-150);
    car1.addImage(car1Image);
    car1.scale = 0.07;

    car2 = createSprite(width/2+100,height-150);
    car2.addImage(car2Image);
    car2.scale = 0.07;
  }

  update(state) {
    database.ref("/").update({
      gameState:state
    })
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect")
  }

  play() {
    this.handleElements();
    Player.getplayersInfo();
    

  if (allPlayers != undefined) {
    image(trackImage,0, -height * 5, width, height * 6);
    drawSprites();
  }
  
  }
}
