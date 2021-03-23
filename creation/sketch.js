let circleX = 200;
let widthC = 5;
let i;

function setup() {
  createCanvas(400, 300);
}

// function mousePressed(){
//   circleX = 0;
// }



function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(circleX, 150, widthC, 24);
  
  for (i = 0; i < 3; i++) {
    widthC = widthC + 1;
  }
}
