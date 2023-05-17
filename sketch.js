//The setup function only happens once   
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(188,163,226); //an RGB color for the canvas' background
  //circle
  stroke(163,183,226) // an RGB color for the circle's border
  fill(163,226,226,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,20,20); // center of canvas, 20px dia
  rect(100,100,20,100)
  fill(126,229,235,100)
  stroke(100,241,5)
  triangle(20,300,300,100,400,400)
  line(0,50,500,50)
  strokweight(8)
}
