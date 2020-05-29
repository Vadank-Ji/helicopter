const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World=  Matter.World;

var engine, world, ground;
var load, box;
function preload(){

   load = loadImage("helicopter.png");

}

var box1;
function setup()
{

	createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;

 	box1 = new Box(200, 200, 50, 50)

 var is_static = { isStatic: true}

 	ground = Bodies.rectangle(600, 790, 1200, 20, is_static)
 	World.add(world, ground);

   box1.body.restitution = 1;

}


function draw()
{



   background("white");

   Engine.update(engine);

 //matter.body.restitution = 2;
   box1.display()



	 //evessel.display()

   rect(ground.position.x, ground.position.y, 1200, 20)

   image(load, 200, 100, 250, 150);

     //box1.restitution = 2;

}
