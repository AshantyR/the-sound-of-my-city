//The setup function only happens once   
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(161,189,228); //an RGB color for the canvas' background
  //circle
  stroke(163,183,226) // an RGB color for the circle's border
  fill(14,55,209,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,20,20); // center of canvas, 20px dia
  rect(0,0,0,0)
  fill(126,229,228,163)
  stroke(0,0,0)
  triangle(0,0,0,0,0,0)
  line(0,0,0,0)
  strokweight(8)
}
