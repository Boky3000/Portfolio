

function setup() {
	console.log("P5.js sketch mode");
	createCanvas(600, 600);
	background(255,0,255);

}

function draw() {
	//background(255, 0, 255);
	ellipse(mouseX, mouseY, 30, 30);

	if (mouseIsPressed) {
		fill(30);
		ellipse(mouseX, mouseY, 33, 33);
	} else {
		fill(255);
		rect(mouseX-30, mouseY-30, 60, 60);
	}



}