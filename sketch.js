
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash1;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new ground(500, 390, 1000, 20);

	trash1 = new trash(750, 375, 90, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY, mouseX, mouseY);

  ground.display();
  trash1.display();
  drawSprites();
 
}



