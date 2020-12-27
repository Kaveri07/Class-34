class Box {
    constructor(x, y, w, h) {
        var options = {
            isStatic: false,
            restitution: 0.04,
            friction: 1
        }
        this.w = w;
        this.h = h;
        this.color = color(random(0,255), random(0, 255), random(0, 255));
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.w, this.h);
        pop();
    }
}