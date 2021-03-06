class Ball{

    constructor(x,y,radius){

        var rest = {
            density : 3
        }

        this.body = Bodies.circle(x,y,radius,rest);
        this.radius = radius;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill("red");
        stroke("black");
        strokeWeight(2);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}