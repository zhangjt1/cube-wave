let angle = 0;
let w = 52;
let ma;
let ortho_dist = 2000;
let cSize = min(windowHeight, windowWidth);

function setup() {
    createCanvas(windowHeight, windowHeight, WEBGL);
    frameRate(30);
    ma = atan(1 / sqrt(2));
    maxD = dist(0, 0, 200, 200);
}

function draw() {
    background(0);
    ortho(-ortho_dist, ortho_dist, -ortho_dist, ortho_dist, 0, 2000);

    rotateX(-QUARTER_PI);
    rotateY(-QUARTER_PI);

    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < width; x += w) {
            push();
            let d = dist(x, z, width/2, height/2);
            let offset = map(d, 0, maxD, -QUARTER_PI, QUARTER_PI);
            let a = angle + offset;
            let h = floor(map(sin(a), -1, 1, 100, 1000));
            translate(x - width / 2, 0, z - height / 2);
            normalMaterial();
            box(w, h, w);
            // rect(x - width/2 + w / 2, 0, w - 2, h);
            pop();
        }
    }

    angle -= 0.1;
}