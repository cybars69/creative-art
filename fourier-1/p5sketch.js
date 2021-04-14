var time = 0;
var radius, x, y;
var r_init = 250;
var wave1 = [];
var wave2 = [];
let slider;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    background(0);
    translate(300, height / 3);
    line(350, -height / 3, 350, 2 * height / 3);


    x = 0;
    y = 0;


    let i = 1;

    var count = floor(map(mouseX, 0, width, 1, 100));
    for (i = 1; i < count; i++) {
        let n = i;
        radius = r_init / (n * PI * Math.pow(-1, n));
        let prev_x = x;
        let prev_y = y;

        noFill();
        stroke(255, 50);
        ellipse(x, y, radius * 2);

        x += radius * cos(n * time);
        y += radius * sin(n * time);

        fill(255);
        stroke(255);
        ellipse(x, y, 2);
        line(prev_x, prev_y, x, y);

    }

    fill(255);
    ellipse(350, wave1[0], 5);
    line(x, y, 350, wave1[0]);

    wave1.unshift(y);
    stroke(255);
    noFill();
    beginShape();
    for (i = 0; i < wave1.length; i++) {
        vertex(350 + i, wave1[i]);
    }
    endShape();

    if (wave1.length > width - 400)
        wave1.pop();


    translate(0, height / 3);

    x = 0;
    y = 0;
    for (i = 0; i < count; i++) {
        let n = i * 2 + 1;
        radius = r_init / (n * PI);
        let prev_x = x;
        let prev_y = y;

        noFill();
        stroke(255, 50);
        ellipse(x, y, radius * 2);

        x += radius * cos(n * time);
        y += radius * sin(n * time);

        fill(255);
        stroke(255);
        ellipse(x, y, 2);
        line(prev_x, prev_y, x, y);

    }
    fill(255);
    ellipse(350, wave2[0], 5);
    line(x, y, 350, wave2[0]);
    wave2.unshift(y);
    stroke(255);
    noFill();
    beginShape();
    for (i = 0; i < wave2.length; i++) {
        vertex(350 + i, wave2[i]);
    }
    endShape();

    if (wave2.length > width - 400)
        wave2.pop();


    time += 0.04;
}