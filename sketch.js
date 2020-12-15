const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var ball;
var dustbinImage;
function  preload (){
dustbinImage=loadImage("dustbingreen.png") ;

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
   
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,340,20,100);
    box2 = new Box(900,340,20,100);
    

    box3 = new Box(800,390,160,20);
   ball= new Ball();
}
function draw(){
    background(255);
    Engine.update(engine);
   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    image(dustbinImage,700,200,180,180);
   

    box3.display();
    ball.display();
    
}
function keyPressed(){
    if (keyCode===UP_ARROW){
    
       Matter.Body.applyForce( ball.body,ball.body.position , {x: 85, y: -85});    }
    }
