console.log("P5.js Giftwrapper");
const points = [];
const hull = [];

let leftMost;
let currentVertex;
let index = 0;
let nextIndex = -1;
let nextVertex;

function setup() {
	createCanvas(500, 500);
	let buffer = 20;

	// Create Random points
	for (let i = 0; i < 30; i++) {
		points.push(createVector(random(buffer, width - buffer), random(buffer, height - buffer)));
	}
	// Find most left point
	points.sort((a, b) => a.x - b.x);
	leftMost = points[0];
	currentVertex = leftMost;
	hull.push(currentVertex);
	nextVertex = points[1];
	index = 2;
}

function draw() {
	background(0);

	// Draw points
	stroke(255);
	strokeWeight(8);
	for (let p of points) {
		point(p.x, p.y);
	}

	// Draw hull
	stroke(0, 0, 255)
	fill(0, 0, 255, 50);
	beginShape();
	for (let p of hull) {
		vertex(p.x, p.y);
	}
	endShape(CLOSE);

	// Show most left in Green
	stroke(0, 255, 0);
	strokeWeight(32);
	point(leftMost.x, leftMost.y);

	// Show currentVertex in Purple
	stroke(255, 0, 255);
	strokeWeight(32);
	point(currentVertex.x, currentVertex.y);

	// Draw line between current to next vertex
	stroke(0, 255, 0);
	strokeWeight(2);
	line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);


	let checking = points[index];
	stroke(255);
	line(currentVertex.x, currentVertex.y, checking.x, checking.y);

	const a = p5.Vector.sub(nextVertex, currentVertex);
	const b = p5.Vector.sub(checking, currentVertex);
	const cross = a.cross(b);

	if (cross.z < 0) {
		nextVertex = checking;
		nextIndex = index;
	}
	index++;

	if (index == points.length) {
		if (nextVertex == leftMost) {
			console.log("Hull completed, all packed nice and tidy!");
			noLoop();
		} else {
			hull.push(nextVertex);
			currentVertex = nextVertex;
			index = 0;
			//points.splice(nextIndex, 1);
			nextVertex = leftMost;
			//noLoop();
		}
	}



}