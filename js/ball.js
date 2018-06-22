'use strict'

function Ball (ctx, size) {
  this.ctx = ctx;
  this.position = {
    x: size.width/2,
    y: size.height/2,
  }
  this.size = {
    width: 20,
    height: 20,
  }
  this.speed = {
    x: 2,
    y: 2,
  };
}

Ball.prototype.draw = function () {
  var self = this;
  self.ctx.fillStye = "blue";
  self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}

Ball.prototype.move = function () {
  var self = this;
  self.position.x += self.speed.x;
  self.position.y -= self.speed.y;
}