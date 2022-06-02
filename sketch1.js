var cx;
var cy;
var theta;
var g;

function setup() {
  createCanvas(400, 400);
  theta = 0;
  cx = 0;
  g = 0;
}

function draw() {
  background(255);
  fill(0, g, 0);
  cy = newY(100, height/2, theta);
  cx = newX(100, width/2, theta);
  circle(cx, cy, 50);
  line(width/2, height/2, cx, cy);
  theta++;
  
  if (theta % 30 == 0) {
    g+= 10;    
  }
  if (g > 255) {
    g = 0;
  }
}

var newY(var r, var c, var theta) {
  var y = sin(radians(theta));
  return r * y + c;
}

var newX(var r, var c, var theta) {
  var x = cos(radians(theta));
  return r * x + c;
}
