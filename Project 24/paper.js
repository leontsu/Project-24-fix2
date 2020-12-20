class Paper
{
    constructor(x, y, r)
    {
        var option ={
            'isStatic' : false,
            'resitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.circle(this.x,this.y,this.r/2,option);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }
    display()
    {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    strokeWeight(3);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r)
    pop()
    }

}