var hr,mn,sc;

hr = hour();
mn = minute();
sc = second();

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  

  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,200,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255,255,0);
  strokeWeight(7);
  line(400,200,0,100);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,255,255);
  strokeWeight(7);
  line(400,200,100,0);
  pop();

  drawSprites();
}