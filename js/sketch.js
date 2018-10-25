var cols, rows;
var grid = [];


var w = 40;

function setup() {
    createCanvas(400, 400);

    cols = floor(width / w);
    rows = floor(height / w);

    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }



}

function draw() {
    background(51);

    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }



}

function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.show = function () {
        var x = this.i*w;
        var y = this.j * w;

        stroke(255);
        noFill();
        line(x, y, x + w, y);
        line(x + w, y, x + w, y + w);
        line(x + w, y + w, x, y + w);
        line(x, y + w, x, y);


        //rect(x, y, w, w);
    }

}