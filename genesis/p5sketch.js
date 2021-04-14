var noiseOff = 0.1;
var rad, rad_noise = 5;
var rot;
var speed = 0.01;
var z_off = 20;

function setup() {
    var size = min(windowHeight, windowWidth);
    const myCan = createCanvas(windowWidth, windowHeight);
    myCan.parent('canvasDiv');
    background(0);
    rad = size;
    frameRate(10);


}


function draw() {
    background(0);
    translate(width / 2, height / 2);
    stroke(noise(frameCount * 0.008) * 255, noise(15 + frameCount * 0.008) * 255, noise(30 + frameCount * 0.008) * 255, 50);
    noFill();
    beginShape();
    var z_temp = z_off;
    for (rad = 0; rad < max(width, height) / 1.3; rad += 15) {
        for (var i = 0; i < TWO_PI; i += 0.007) {
            var x_off = 10 + rad_noise * cos(i);
            var y_off = 10 + rad_noise * sin(i);
            var ns = noise(x_off, y_off, noiseOff + z_temp);
            var x = 20 + rad * cos(i) * ns;
            var y = 20 + rad * sin(i) * ns;
            vertex(x, y);
        }
        z_temp -= 0.02;
    }
    endShape(CLOSE);
    endShape();
    noiseOff += 0.009;
    z_off += 0.005;
    if (mouseIsPressed)
        if (mouseX <= width && mouseX >= 0 &&
            mouseY <= height && mouseY >= 0)
            noLoop();
}