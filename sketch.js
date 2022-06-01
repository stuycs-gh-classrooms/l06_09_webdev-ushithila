var x;
var y;
var radius;
let fcount = 0;

function setup() {
  createCanvas(400, 300);
  background(255);

  radius = 25;
  x = radius;
  y = radius;
}

function draw() {


  background(255);
  if (x >= width - radius) {
    x = radius;
    y+= radius * 2;
  }

  if (x < width / 3) {
    fill(255, 0, 0);
  } else if (x < width * 2 / 3) {
    fill(0, 255, 0);
  } else {
    fill(0, 0, 255);
  }

  circle(x, y, radius * 2);
  x+= 1;
  fcount++;
}

