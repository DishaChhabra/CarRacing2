var database;
var gameState = 0;
var player, playerCount, form, game;
function setup(){
    createCanvas(500,500);
    // creating database
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
    }

function draw(){
    
    }