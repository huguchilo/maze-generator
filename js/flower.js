class Flow {
    constructor(x, y, hits) {
        this.x = x;
        this.y = y;
        this.ri = 20;
        this.r = this.ri;
        this.aumento = 2;
        this.tiros = hits;
        this.toDelete = false;
        this.xdir = 1;
        this.ydir = 0;
        this.img = new Image();

        this.preload = function (pic) {
            this.img = pic;
        }

        this.grow = function() {
            this.r = this.r + 2;
            if (this.r >= this.ri + this.aumento * this.tiros) {
                this.toDelete = true;
            }
        };
        this.shiftDown = function() {
            this.xdir *= -1;
            this.y += this.r;
        };
        this.move = function() {
            this.x = this.x + this.xdir;
            this.y = this.y + this.ydir;
        };
        this.show = function() {
            noStroke();
            fill(255, 0, 200, 150);
            ellipse(this.x, this.y, this.r * 2, this.r * 2);
            image(this.img, this.x, this.y);
        };
    }
}
