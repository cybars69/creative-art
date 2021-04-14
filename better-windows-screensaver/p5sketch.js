var xOff = 0;
var yOff = 40;
var inc = 1;
var radius = 20;
var capFrame = 0;
var size;
var name_;

function setup() {
    size = Math.min(displayWidth, displayHeight)
    createCanvas(size, size);
    background(0);
}


function draw() {
    if (mouseIsPressed &&
        mouseX <= size && mouseX >= 0 &&
        mouseY <= size && mouseY >= 0 &&
        frameCount - capFrame > 120) {
        name_ = new Date();
        var imgName = "myCanvas_" + name_.getDate() + '_' + name_.getHours() + ':' + name_.getMinutes() + ':' + name_.getSeconds();
        saveCanvas(imgName, 'png');
        mouseIsPressed = 0;
        capFrame = frameCount;
    }
    varx = map(noise(xOff), 0, 1, -width / 10, width * 1.1);
    vary = map(noise(yOff), 0, 1, -height / 10, height * 1.1);
    xOff += 0.008;
    yOff += 0.008;
    strokeWeight(1);
    fill(random(80, 200), random(80, 200), random(80, 200))

    ellipse(varx, vary, random(radius / 1.1, radius), random(radius / 1.1, radius));
    if (frameCount % 3 == 0) {
        radius += inc;
    }
    if (radius > 80 || radius < 15) {
        inc *= -1;
    }
}