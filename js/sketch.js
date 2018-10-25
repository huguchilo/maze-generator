var ship;
var flowers = [];
var num_flowers = 9;
var drops = [];

var hits = 1;
var win = false;
var lost = false;
var restart = false;
var alien = new Image();

function preload() {
    alien = loadImage("alien2.jpg");
}

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    alien.src = 'images/alien1.png';

    for (var i = 0; i < num_flowers; i++) {
        flowers[i] = new Flow(i * 65 + 80, 60, hits);
        flowers[i].preload(alien);
    }
}

function draw() {
    if (!win && !lost) {
        background(0);

        for (var i = 0; i < drops.length; i++) {
            drops[i].show();
            drops[i].move();
            for (var j = 0; j < flowers.length; j++) {
                if (drops[i].hits(flowers[j])) {
                    flowers[j].grow();
                    drops[i].evaporate();
                }
            }
        }

        var edge = false;
        for (var i = 0; i < flowers.length; i++) {
            flowers[i].show();
            flowers[i].move();
            if (flowers[i].x > width || flowers[i].x < 0) {
                edge = true;
            }
        }
        if (edge) {
            for (var i = 0; i < flowers.length; i++) {
                flowers[i].shiftDown();
            }
        }

        for (var i = drops.length - 1; i >= 0; i--) {
            if (drops[i].toDelete) {
                drops.splice(i, 1);
            }
        }

        for (var i = flowers.length - 1; i >= 0; i--) {
            if (flowers[i].toDelete) {
                flowers.splice(i, 1);
            }
        }


        if (flowers.length - 1 < 0) {
            win = true;
        }
        for (var i = 0; i < flowers.length; i++) {
            if (flowers[i].y > height - flowers[i].r) {
                lost = true;
            }
        }

        if (win) {
            textSize(100);
            textAlign(CENTER);
            stroke(10);
            fill(255);
            text("Win!", width / 2, height / 2);
            noStroke();
        }
        if (lost) {
            textSize(100);
            textAlign(CENTER);
            stroke(10);
            fill(255);
            text("Lost!", width / 2, height / 2);
            noStroke();
        }

        ship.show();
        ship.move();

    }
    if (restart) {
        for (var i = flowers.length - 1; i >= 0; i--) {
            flowers[i].toDelete = true;
            if (flowers[i].toDelete) {
                flowers.splice(i, 1);
            }
        }
        for (var i = 0; i < num_flowers; i++) {
            flowers[i] = new Flow(i * 65 + 80, 60, hits);
        }
        win = false;
        lost = false;
        restart = false;


    }
}


function keyReleased() {
    ship.setDir(0);
}


function keyPressed() {

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
    if (key === ' ') {
        var drop = new Drop(ship.x + 8, height - 10);
        drops.push(drop);
    }

    if (key === 'r') {
        win = false;
        lost = false;
        restart = true;
    }


}