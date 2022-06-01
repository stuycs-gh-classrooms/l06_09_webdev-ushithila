// var x;
// var y;
// var radius;
// let fcount = 0;

// function setup() {
//   createCanvas(400, 300);
//   background(255);

//   radius = 25;
//   x = radius;
//   y = radius;
// }

// function draw() {


//   background(255);
//   if (x >= width - radius) {
//     x = radius;
//     y+= radius * 2;
//   }

//   if (x < width / 3) {
//     fill(255, 0, 0);
//   } else if (x < width * 2 / 3) {
//     fill(0, 255, 0);
//   } else {
//     fill(0, 0, 255);
//   }

//   circle(x, y, radius * 2);
//   x+= 1;
//   fcount++;
// }


var numRows;
var numCols;
var rectWidth;
var rectHeight;
var count;

function settings() {
  numRows = 20;
  numCols = 20;
  rectWidth = 20;
  rectHeight = 20;
  createCanvas(numCols * rectWidth, numRows * rectHeight);
}

function setup() {
  frameRate();
  count = 0;
}


function draw() {
  fill(255);
  if (count < 5 ) {
    tile();
  } 
  else if (count < 10) {
    alternateRows();
  }
  else if (count < 15) {
    alternateCols();
  }
  else if (count < 20) {
    marksTheSpot();
  }
  else if (count < 25) {
    checkerboard();
  }
  count = (count + 1) % 25;
}

function tile() {
  var x=0;
  var y=0;
  var c = 0;
  var r = 0;

  while (r < numRows) {
    while (c < numCols) {
      rect(x, y, rectWidth, rectHeight);
      x+= rectWidth;
      c++;
    }
    y+= rectHeight;
    x= 0;
    c= 0;
    r++;
  }
}

function alternateRows() {
  int x=0;
  int y=0;
  int c = 0;
  int r = 0;

  while (r < numRows) {
    if (r % 2 == 1) {
      fill(0);
    } else {
      fill(255);
    }
    while (c < numCols) {
      rect(x, y, rectWidth, rectHeight);
      x+= rectWidth;
      c++;
    }
    y+= rectHeight;
    x= 0;
    c= 0;
    r++;
  }
}


function alternateCols() {
  var x=0;
  var y=0;
  var c = 0;
  var r = 0;

  while (r < numRows) {
    while (c < numCols) {
      if (c % 2 == 1) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x, y, rectWidth, rectHeight);
      x+= rectWidth;
      c++;
    }
    y+= rectHeight;
    x= 0;
    c= 0;
    r++;
  }
}

function checkerboard() {
  var x=0;
  var y=0;
  var c = 0;
  var r = 0;
  var i = 0;
  while (r < numRows) {
    while (c < numCols) {
      if (i % 2 == 1) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x, y, rectWidth, rectHeight);
      x+= rectWidth;
      c++;
      i++;
    }
    y+= rectHeight;
    x= 0;
    c= 0;
    r++;
    i++;
  }
}

function marksTheSpot() {
  var x=0;
  var y=0;
  var c = 0;
  var r = 0;

  while (r < numRows) {
    while (c < numCols) {
      if (c == r || c == (numRows-1) -r) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x, y, rectWidth, rectHeight);
      x+= rectWidth;
      c++;
    }
    y+= rectHeight;
    x= 0;
    c= 0;
    r++;
  }
}
