'use strict' //helps to reduce errors

function main () {
  var container = null;
  var button = null ;
  var canvas;
  var game = null;
  
  function buildSplash () {
    container = document.getElementById("game-container");
    button = document.createElement("button");
    button.setAttribute("id", "btn-start");
    button.innerText = "CLICK";
    container.appendChild(button);
    button.addEventListener("click", handleStartClick);
  }

  function handleStartClick() {
    button.removeEventListener("click", handleStartClick); //so that we can store further info in var button
    button.remove();
    buildGame();
  }

  function buildGame() {
    canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    container.appendChild(canvas);
    playGame();
}

  function handleKeyUp (event) {
    var self = this;
    if (event.key === "w") {
      game.player.moveUp();
    } else if (event.key === "s") {
      game.player.moveDown();
    }
  }

  function playGame() {
    var canvasCtx = canvas.getContext("2d"); 
    game = new Game(canvasCtx, canvas, endGame); //to implement canvas context in the game constructor, endGame without parenthesis
    window.addEventListener("keyup", handleKeyUp);
    // var gameTest = setTimeout(function(){
    //   endGame();
    // }, 3000);
  }

  function endGame(){
    canvas.remove();
    game = 0;
    buildGameOver();
  }

  function buildGameOver(){
    button = document.createElement("button");
    button.setAttribute("id", "btn-over");
    button.innerText = "RESTART";
    container.appendChild(button);
    button.addEventListener("click", handleStartClick);
  }
  
  buildSplash();
}

window.addEventListener("load", main);










// var buttonString;
// var button;
// container = document.getElementById("game-container");

// buttonString = '<button id="btn-start">Click</button>';
// container.innerHTML = buttonString;

// button.getElementById("btn-start");