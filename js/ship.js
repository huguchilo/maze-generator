
class Ship {
    constructor() {
        this.x = width / 2;
        this.xdir = 0;
        this.show = function() {
            fill(255);
            rect(this.x, height - 60, 20, 60);
        };
        this.setDir = function(dir) {
            this.xdir = dir;
        };
        this.move = function(dir) {
            this.x += this.xdir * 5;
        };
    }
}
