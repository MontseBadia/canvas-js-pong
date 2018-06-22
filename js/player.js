'use strict'

function Player (ctx) {
  this.ctx = ctx;
  this.position = {
    x: 20,
    y: 20,
  }
  this.size = {
    width: 20,
    height: 60,
  }
  this.lives = 4;
  this.speed = 15;//it will move 15px every frame
}

Player.prototype.draw = function () {
  var self = this;
  self.ctx.fillStyle = "red";
  self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}

Player.prototype.drawLives = function () {
  var self = this;
  self.ctx.fillStyle = "blue";
  self.ctx.font = "30px Verdana";
  self.ctx.fillText(self.lives,10,10);
}

Player.prototype.moveUp = function () {
  var self = this;
  self.position.y -= self.speed;
}

Player.prototype.moveDown = function () {
  var self = this;
  self.position.y += self.speed;
}