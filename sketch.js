
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     roof = new ground (400, 300, 400, 30);
     
     ba1 = new ball(300, 600, 25);
     ba2 = new ball(350, 600, 25);
     ba3 = new ball(400, 600, 25);
     ba4 = new ball(450, 600, 25);
     ba5 = new ball(500, 600, 25);
     

     rope1 = new Chain(ba1.body, roof.body, -100, 0);
     rope2 = new Chain(ba2.body, roof.body, -50, 0);
     rope3 = new Chain(ba3.body, roof.body, 0, 0);
     rope4 = new Chain(ba4.body, roof.body, 50, 0);
     rope5 = new Chain(ba5.body, roof.body, 100, 0);
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ba1.display();
  ba2.display();
  ba3.display();
  ba4.display();
  ba5.display();
 
  drawSprites();
 
}
function keyPressed() {
	if(keyCode 	=== UP_ARROW) {
       Matter.Body.applyForce(ba1.body, ba1.body.position, {x:-60, y:-50});
	}
}



