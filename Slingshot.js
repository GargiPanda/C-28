class Slingshot {
    constructor (BodyA, pointB){
        var options = {bodyA:BodyA, 
        pointB:pointB, length:10, stiffness:0.04}
        this.chain = Matter.Constraint.create (options)
        World.add (world, this.chain)
        this.pointB = pointB 
    }
    fly(){
        this.chain.bodyA = null
    }
    display() {
        if (this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
}