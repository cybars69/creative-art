var size;
var radius = 35;
var vel_ = 0;
var g_ = 0.3;
var init_x;
var init_y;
var wind_;
let kk = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    init_y = 55;
    init_x = width / 2;
}


function draw() {
    background(0);
    fill(255);
    noStroke();
    ellipse(init_x, init_y, radius, radius);
    vel_ += g_;
    init_y += vel_;


    if (vel_ <= 1 && vel_ >= -1)
        if (init_y >= height - 20) {
            noLoop();
            console.log(kk);
        }

    if (init_y >= height - 20)
        if (vel_ <= 1 && vel_ >= -1) {
            noLoop();
            console.log(kk);
        }
        else {
            vel_ *= -0.9;
            init_y = height - 20;
            kk++;
        }

    if (mouseIsPressed) {
        init_x = mouseX;
        init_y = mouseY;
        vel_ = 0;
        kk = 0;
    }
}