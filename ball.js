class Ball {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.04,
            friction: 1,
            density: 5
        }
        this.r = r;
        this.color = color(random(0,255), random(0, 255), random(0, 255));
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();
    }
}