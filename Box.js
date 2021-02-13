class Box{
    constructor(x,y){
        var rest = {
            restitution : 0.2,
            friction : 5
        }

        this.body = Bodies.rectangle(x,y,70,70,rest);
        this.width = 70;
        this.height = 70;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        stroke("black");
        strokeWeight(2);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }
}