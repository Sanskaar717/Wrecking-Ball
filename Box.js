class Box{
    constructor(x,y){
        var rest = {
            restitution : 0.5,
            friction : 5
        }

        this.body = Bodies.rectangle(x,y,40,40,rest);
        this.width = 40;
        this.height = 40;
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