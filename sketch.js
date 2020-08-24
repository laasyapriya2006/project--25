
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var dustbin1,dustbin2,dustbin3,dustbinImg;


function preload()
{  
  
}

function setup() {
	var canvas = createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(650,370,1300,20);

  //Create the Bodies Here.
  paper = new Paper(40,360,40);
  
  dustbin1 = new Dustbin(900,345,150,20);
  dustbin2 = new Dustbin(980,255,20,200);
  dustbin3 = new Dustbin(820,255,20,200);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  ground.display();

  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});
  }
}