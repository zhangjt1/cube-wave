let angle = 0;
let w = 52;
let ma;
let ortho_dist = 1000;

function setup() {
    let cSize = Math.min(windowHeight, windowWidth);
    createCanvas(cSize, cSize, WEBGL);
    frameRate(30);
    ma = atan(1 / sqrt(2));
    maxD = dist(0, 0, 200, 200);
}

function draw() {
    background(0);
    ortho(-ortho_dist, ortho_dist, -ortho_dist, ortho_dist, 0, 2000);
    let r = color(floor(map(sin(angle), -1, 1, 50, 255)), 0, 0);
    directionalLight(r, 1, 1, sin(angle));
    let g = color(0, floor(map(sin(angle * 0.5 + PI/3), -1, 1, 50, 255)), 0);
    directionalLight(g, 1, sin(angle * 1.1), 1);
    let b = color(0, 0, floor(map(sin(angle * 0.13 + PI), -1, 1, 50, 255)));
    directionalLight(b, sin(angle * 1.2), 1, 1);

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
            // normalMaterial();
            specularMaterial(150);
            // shininess(100);
            box(w, h, w);
            // rect(x - width/2 + w / 2, 0, w - 2, h);
            pop();
        }
    }

    angle -= 0.1;
}