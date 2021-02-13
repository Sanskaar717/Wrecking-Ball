class Slingshot{
    constructor(bodyA,pointB){
        var con = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length : 250
        }
        this.pointB = pointB;
        this.sling = Constraint.create(con);
        World.add(myWorld,this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
             push(); 
             stroke("white");
             strokeWeight(3);
             line(pointA.x,pointA.y,pointB.x,pointB.y);
             pop();
        }
    }
}