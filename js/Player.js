class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    //changes num of player from the index (player1.player2)
    var playerIndex = "players/player" + this.index

    if (this.index == 1) {
      //width / 2 is middle and we bring it toward middle and either to the left or right
      this.positionX = width/2 - 100
    }
    else {
      this.positionX = width/2 + 100
    }
    database.ref(playerIndex).set({
      //sets name and position
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY
    })
  } 

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  //transfers info here
  static getplayersInfo () {
    var playerinfoRef = database.ref("players")
    playerinfoRef.on("value", data => {
      allPlayers = data.val();
    })
  }

  
}
