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

  for (var r=0; r < numRows; r++) {
    for (var c=0; c < numCols; c++) {
      rect(x, y, rectWidth, rectHeight);
      x+= rectWidth;
    }
    y+= rectHeight;
    x= 0;
  }
}

function alternateRows() {
  var x=0;
  var y=0;

  for (var r=0; r <= numRows; r++) {
    if (r % 2 == 1) {
      fill(0);
    } else {
      fill(255);
    }
    for (var c=0; c <= numCols; c++) {
      rect(x, y, rectWidth, rectHeight);
      x+= rectWidth;
    }
    y+= rectHeight;
    x= 0;
  }
}

function alternateCols() {
  var x=0;
  var y=0;

  for (var r=0; r < numRows; r++) {
    for (var c=0; c < numCols; c++) {
      if (c % 2 == 1) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x, y, rectWidth, rectHeight);
      x+= rectWidth;
    }
    y+= rectHeight;
    x= 0;
  }
}

/* ===================
  Create a grid of rectangles using the global variables.
  
  fill color should create a checkerboard pattern.
 =================== */
function checkerboard() {
  var x=0;
  var y=0;
  var i = 0;

  for (let r=0; r < numRows; r++) {
    for (let c=0; c < numCols; c++) {
      if (i % 2 == 1) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x, y, rectWidth, rectHeight);
      x+= rectWidth;
      i++;
    }
    y+= rectHeight;
    x= 0;
    i++;
  }
}

function marksTheSpot() {
  var x=0;
  var y=0;

  for (let r=0; r < numRows; r++) {
    for (let c=0; c < numCols; c++) {
      if (c == r || c == (numRows-1) -r) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x, y, rectWidth, rectHeight);
      x+= rectWidth;
    }
    y+= rectHeight;
    x = 0;
  }
}
