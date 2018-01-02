function setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw(){
  background(122, 100, 180);
  translate(200,200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  let secondAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,secondAngle);

  push();
  rotate(secondAngle);
  stroke(255,100,150);
  line(0,0,120,0);
  pop();

  stroke(150,100,255);
  let minuteAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,minuteAngle);
  push();
  rotate(minuteAngle);
  stroke(150,100,255);
  line(0,0,90,0);
  pop();

  stroke(150,255,100);
  let hourAngle = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hourAngle);
  push();
  rotate(hourAngle);
  stroke(150,255,100);
  line(0,0,60,0);
  pop();

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
