const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var myEngine,myWorld;
var ground,sling,ball;
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12, box13, box14;
var box15, box16, box17, box18, box19, box20, box21;

function setup(){
    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;
    
    box1 = new Box(500,555);
    box2 = new Box(500,485);
    box3 = new Box(500,415);
    box4 = new Box(500,345);
    box5 = new Box(500,275);
    box6 = new Box(500,205);
    box7 = new Box(500,135);
    box8 = new Box(650,555);
    box9 = new Box(650,485);
    box10 = new Box(650,415);
    box11 = new Box(650,345);
    box12 = new Box(650,275);
    box13 = new Box(650,205);
    box14 = new Box(650,135);
    ground = new Ground(600,595);
    ball = new Ball(350,300,65);
    sling = new Slingshot(ball.body,{x:350,y:250});
}

function draw(){
    background(0);
    Engine.update(myEngine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    ball.display();
    sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

