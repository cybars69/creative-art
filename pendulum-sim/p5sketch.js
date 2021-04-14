var size;
var radius = 350;
var vel_ = 0;
var g_ = -0.05;

var theta = 30;
var omega = 0;
var alpha = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}


function draw() {
    background(0);
    fill(255);
    translate(width / 2, 100);
    stroke(255);
    strokeWeight(2);
    line(-width / 2, 0, width / 2, 0);

    if (mouseIsPressed) {
        console.log(69);
        let x_ = mouseX - width / 2;
        let y_ = mouseY - 100;
        radius = pow(x_, 2) + pow(y_, 2);
        radius = sqrt(radius);
        omega = 0;
        alpha = 0;
        let n = 1.0 * x_ / y_;
        theta = atan(n) * 180 / PI;
    }

    alpha = g_ * sin(radians(theta));
    omega += alpha;
    theta += omega;

    let x__ = radius * sin(radians(theta));
    let y__ = radius * cos(radians(theta));
    line(0, 0, x__, y__);
    ellipse(x__, y__, 40, 40);
}