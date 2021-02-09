class Ground{
    constructor(x,y){
        var rest = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,1200,10,rest);
        this.width = 1200;
        this.height = 10;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}