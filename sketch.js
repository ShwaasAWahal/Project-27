
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400,50,600,40,"white")
	ground = new Ground(400,700,800,10,"red")

	bob1 = new Bob(400,200,50)
	bob2 = new Bob(300,200,50)
	bob3 = new Bob(200,200,50)
	bob4 = new Bob(500,200,50)
	bob5 = new Bob(600,200,50)

	rope1 = new Rope(bob1.body,{x:400, y:50},400,50)
	rope2 = new Rope(bob2.body,{x:300, y:50},300,50)
	rope3 = new Rope(bob3.body,{x:200, y:50},200,50)
	rope4 = new Rope(bob4.body,{x:500, y:50},500,50)
	rope5 = new Rope(bob5.body,{x:600, y:50},600,50)

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);

  if(keyDown(UP_ARROW)){
	Body.applyForce( bob3.body,{x: bob3.body.position.x, y: bob3.body.position.y},{x: -0.5, y: 0});
  }

  background(0);
  
  drawSprites();

  roof.display();
  ground.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



