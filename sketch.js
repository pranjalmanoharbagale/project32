const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var backgroundImg;

function preload() {
 backgroundImg = loadImage("milkyway.jpg");
 }

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,50,50);
    box2 = new Box(440,200,50,100);

    box3 = new Box(200,300,50,50);
    box4 = new Box(240,100,50,100);

    box5 = new Box(100,300,20,20);
    box6 = new Box(140,100,20,20);

    ground = new Ground(200,height,800,30)


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ground.display();
}