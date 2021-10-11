var start_angle = 0;
var angle_ = 0;
var add_ = 1;
var green_ = 0;
var blue_ = 0;
var looping = true;

var capFrame = 0;


var max_r, min_r, size;
var circles_rad = [];
var n_points = 70;

function setup() {
    var size = min(windowHeight, windowWidth);
    var max_r = size / 4;
    var min_r = max_r / 5;

    for (var i = 0; i < n_points; i++) {
        circles_rad.push(random(min_r, max_r));
    }
    createCanvas(size, size);
    background(0);
}


function draw() {
    noStroke();


    for (var i = 0; i < n_points; i++) {
        var tl_x = -60 + noise(15 + frameCount * 0.004) * (width + 120);
        var tl_y = -60 + noise(30 + frameCount * 0.004) * (height + 120);
        x_ = tl_x + circles_rad[i] * cos(radians(start_angle + 360.0 * i / n_points));
        y_ = tl_y + circles_rad[i] * sin(radians(start_angle + 360.0 * i / n_points));

        fill(-10 + noise(5 + frameCount * 0.01) * 255, -10 + noise(15 + frameCount * 0.008) * 255, -10 + noise(30 + frameCount * 0.007) * 255, 50);

        ellipse(x_, y_, 6, 6);
    }

    start_angle = -180 + 360 * noise(frameCount * 0.001)

    // start_angle += 1 * sin(radians(frameCount / 2));


    if (mouseIsPressed &&
        mouseX <= width && mouseX >= 0 &&
        mouseY <= height && mouseY >= 0 &&
        frameCount - capFrame > 120) {
        name_ = new Date();
        var imgName = "myCanvas_" + name_.getDate() + '_' + name_.getHours() + ':' + name_.getMinutes() + ':' + name_.getSeconds();
        saveCanvas(imgName, 'png');
        mouseIsPressed = 0;
        capFrame = frameCount;
    }

}