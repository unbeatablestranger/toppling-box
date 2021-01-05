const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1,box2,ground;

function setup() {
  var canvas=createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  box1 = new box(300,250,50,50);
  box2 = new box(250,200,70,70);

  var ground_prop = 
  {isStatic :true}

  ground = Bodies.rectangle(200,390,400,20,ground_prop);
  World.add(world,ground);

  

  
  
}

function draw() 
{
  background("black");  

  Engine.update(engine);

  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);

  box1.show();
  box2.show();

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  

  drawSprites();
}