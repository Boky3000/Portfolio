// 2D Raycasting tutorial from the Coding Train

let walls = [];
let ray;
let particle;

let xoff = 0;
let yoff = 10000;


function setup() {
	createCanvas(400, 400);
	for (let i = 0; i < 5; i++) {
		let x1 = random(width);
		let x2 = random(width);
		let y1 = random(height);
		let y2 = random(height);
		walls[i] = new Boundary(x1, y1, x2, y2);

	}






	particle = new Particle();

}

function draw() {
	background(0);
	for (let wall of walls) {
		wall.show();
	}
	// Move with mouse
	// particle.update(mouseX, mouseY);

	// Move automatic
	particle.update(noise(xoff)*width, noise(yoff)*height);
	xoff += 0.01;
	yoff += 0.01;


	particle.show();
	particle.look(walls);



	// ray.show();
	// ray.lookAt(mouseX, mouseY);

	// let pt = ray.cast(wall);
	// console.log(pt);
	// if (pt) {
	// 	fill(255);
	// 	ellipse(pt.x, pt.y, 8, 8);
	// }
}