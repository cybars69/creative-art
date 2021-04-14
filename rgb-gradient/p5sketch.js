var size;
var noiseoff = 20;

function setup() {
    size = min(windowHeight, windowWidth);
    createCanvas(size, size);
    background(0);
}

function draw() {
    background(0);

    loadPixels();

    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            var inx = 4 * (x + y * size);
            pixels[inx + 0] = map(x, 0, size, 0, 255);
            pixels[inx + 1] = 255 * noise(x * 0.001, y * 0.001);
            pixels[inx + 2] = map(y, 0, size, 0, 255);
            pixels[inx + 3] = 255;
        }
    }

    noiseoff += 0.02;

    console.log(frameRate());

    updatePixels();
    noLoop();
}