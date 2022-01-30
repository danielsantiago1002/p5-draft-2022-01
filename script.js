let points = [];
// let mult = 0.0004954
let mult = 0.006

let windowWidth = window.screen.width - 15

let windowHeigth = window.screen.height - 135

// drawing shapes
function setup() {
    createCanvas(windowWidth, windowHeigth);
    background(0);
    angleMode(DEGREES)

    let heigth = windowHeigth
    let width = windowWidth

    let density = 14;
    let space = width / density;

    for (let x = 0; x < width; x += space) {
        for (let y = 0; y < heigth; y += space) {

            let p = createVector(x + random(0, 10), y + random(0, 10))
            points.push(p)
        }
    }

}

function draw() {

noStroke()

    for (let i = 0; i < points.length; i++) {

        let r = map (points[i].x, random(100, 200), 0, 234  , 255)
        let g = map (points[i].y, random(50, 100), random(150, 200), 221 , 255)
        let b = map (points[i].y, random(50, 100), 10, 250 , 255)

        fill(r,g,b)

        let angle = map(noise(points[i].x * mult, points[i].y * mult), 0 , 8, 0 , 99000)

        points[i].add(createVector(sin(angle), cos(angle)  ))

        ellipse(points[i].x, points[i].y, 1)
    }
}
