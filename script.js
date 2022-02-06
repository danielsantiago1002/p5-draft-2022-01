// let points = [];
// // let mult = 0.0004954
// let mult = 0.006

let windowWidth = window.screen.width - 15

let windowHeigth = window.screen.height - 135

// drawing shapes
function setup() {
    createCanvas(windowWidth, windowHeigth, WEBGL)
    angleMode(DEGREES)
}

function draw() {
    background(30)

    rotateX(30)
    noFill()
    stroke(90000)

    for (let i = 0; i < 50; i++) {

        let r = map(sin(frameCount * 0.04 ), -1, 1, 0, 100)
        let g = map(i, 0, 20, 0, 250)
        let b = map (cos(frameCount), -1, 1, 90, 200)

        stroke(r,b,g)

        rotate(frameCount / 100)

        rotateY(frameCount/120)
        

        beginShape()
        for (let j = 0; j< 5000; j += 300){
            let rad = i * 4.5
            let x = rad * cos(j) 
            let y = rad * sin(j) - 10
            var z = sin(frameCount + j * 2) * 200

            vertex(x,y, z)
        }




        endShape(CLOSE)

    }
}
