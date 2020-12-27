class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 300
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
            var posA = this.rope.bodyA.position;
            var posB = this.pointB;
            push();
            strokeWeight(5);
            stroke(255);
            line(posA.x,posA.y,posB.x,posB.y);
            pop();
    }
}