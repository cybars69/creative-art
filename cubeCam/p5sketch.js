var video;

var input;
let img;

var scale__ = 10;

var rad_mi = 3;

function setup() {
    createCanvas(windowWidth, windowHeight);


    background(0);
    video = createCapture(VIDEO);
    video.size(Math.floor(width / scale__), Math.floor(width * 300 / 400 / scale__));
    video.hide();

}


function makeDie(x_pos, y_pos, index) {
    fill(0);
    rect(x_pos, y_pos, scale__, scale__);
    fill(255);
    switch (index) {
        case 1:
            circle(x_pos + scale__ / 2, y_pos + scale__ / 2, rad_mi);
            break;
        case 2:
            circle(x_pos + scale__ / 3, y_pos + scale__ / 3, rad_mi);
            circle(x_pos + 2 * scale__ / 3, y_pos + 2 * scale__ / 3, rad_mi);
            break;
        case 3:
            circle(x_pos + scale__ / 2, y_pos + scale__ / 2, rad_mi);
            circle(x_pos + 2 * scale__ / 3, y_pos + 2 * scale__ / 3, rad_mi);
            circle(x_pos + scale__ / 3, y_pos + scale__ / 3, rad_mi);
            break;
        case 4:
            circle(x_pos + 2 * scale__ / 3, y_pos + 2 * scale__ / 3, rad_mi);
            circle(x_pos + scale__ / 3, y_pos + scale__ / 3, rad_mi);
            circle(x_pos + 2 * scale__ / 3, y_pos + scale__ / 3, rad_mi);
            circle(x_pos + scale__ / 3, y_pos + 2 * scale__ / 3, rad_mi);
            break;
        case 5:
            circle(x_pos + scale__ / 2, y_pos + scale__ / 2, rad_mi);
            circle(x_pos + 2 * scale__ / 3, y_pos + 2 * scale__ / 3, rad_mi);
            circle(x_pos + scale__ / 3, y_pos + scale__ / 3, rad_mi);
            circle(x_pos + 2 * scale__ / 3, y_pos + scale__ / 3, rad_mi);
            circle(x_pos + scale__ / 3, y_pos + 2 * scale__ / 3, rad_mi);
            break;
        case 6:
            circle(x_pos + 2 * scale__ / 3, y_pos + 2 * scale__ / 3, rad_mi);
            circle(x_pos + scale__ / 3, y_pos + scale__ / 3, rad_mi);
            circle(x_pos + 2 * scale__ / 3, y_pos + scale__ / 3, rad_mi);
            circle(x_pos + scale__ / 3, y_pos + 2 * scale__ / 3, rad_mi);
            circle(x_pos + 2 * scale__ / 3, y_pos + scale__ / 2, rad_mi);
            circle(x_pos + scale__ / 3, y_pos + scale__ / 2, rad_mi);
            break;
    }
}


function draw() {
    background(0);

    video.loadPixels();

    for (var y = 0; y < video.height; y++) {
        for (var x = 0; x < video.width; x++) {
            var inx = 4 * (x + y * video.width);

            var r = video.pixels[inx + 0];
            var g = video.pixels[inx + 1];
            var b = video.pixels[inx + 2];

            let avg = (r + g + b) / 3;

            let num_ = map(avg, 0, 255, 1, 7);

            makeDie(x * scale__, y * scale__, Math.floor(num_));

        }
    }
}