var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers;
var distance = 0;
var car1, car2, car3, car4, cars;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth*0.9,displayHeight*0.87);

  // hypnoticBall = createSprite(250,250,10,10);
  // hypnoticBall.shapeColor = "red";


  // var hypnoticBallPosition = database.ref('ball/position');
  // hypnoticBallPosition.on("value", readPosition, showError);
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  background("white");
  if (playerCount === 4) 
  {
    game.update(1)
  }
   if (gameState === 1) {
     clear();
     game.play();
   } 
    drawSprites();
  
}

// function writePosition(x,y){
//   database.ref('ball/position').set({
//     'x': position.x + x ,
//     'y': position.y + y
//   })
// }

// function readPosition(data){
//   position = data.val();
//   console.log(position.x);
//   hypnoticBall.x = position.x;
//   hypnoticBall.y = position.y;
// }

