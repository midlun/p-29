class Slingshot
{
    constructor(bodyA, pointB)
    {
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }

        this.polygon = loadImage("polygon.png");
        this.pointB = pointB;
        this.polygon = Constraint.create(options);
        World.add(world,this.polygon);
       
    }

    fly()
    {
        this.polygon.bodyA = null;
    }
}

display()
{
    image(this.polygon, 200, 60);
    if(this.sling.bodyA)
    {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
    }
}