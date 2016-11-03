function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);
  stroke(255);
  rectMode(CENTER);
  noFill();
  drawF(windowWidth/2, windowHeight/2, 50, 6, 5);

}

function drawF(x, y, r, seg, level) {
  if(level > 0){
    // ellipse(x, y, r);

    rect(x, y, r, r);
    level--;
    for(var i=0; i<seg; i++){
      var xc = x+ cos(i*TWO_PI/seg) *map(mouseX, 0, height, 0, 2*r);
      var yc = y+ sin(i*TWO_PI/seg) *map(mouseY, 0, width, 0, 2*r);
      drawF(xc, yc, r, seg, level);
    }
  }
}
