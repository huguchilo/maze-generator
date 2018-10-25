﻿class Drop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 8;
        this.velocidade = 10;
        this.toDelete = false;
        this.show = function() {
            noStroke();
            fill(150, 0, 255);
            ellipse(this.x, this.y, this.r * 2, this.r * 2);
        };
        this.evaporate = function() {
            this.toDelete = true;
        };
        this.move = function() {
            this.y = this.y - this.velocidade;
        };
        this.hits = function(flower) {
            var d = dist(this.x, this.y, flower.x, flower.y);
            if (d < this.r + flower.r) {
                return true;
            }
            else {
                return false;
            }
        };
    }
}
