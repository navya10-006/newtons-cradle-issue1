
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5,roof1,rope1,rope2,rope3,rope4,rope5
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	bob1=new Bob(400,400,30);
	bob2=new Bob(370,400,30);
	bob3=new Bob(340,400,30);
	bob4=new Bob(430,400,30);
	bob5=new Bob(460,400,30);
	roof1=new Roof(410,200,200,20);
	rope1=new Rope(roof1.body,bob1.body,0,0);
	//rope2=new Rope(170,bob2);
	//rope3=new Rope(140,bob3);
	//rope4=new Rope(230,bob4);
	//rope5=new Rope(260,bob5);
	//Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  background("yellow");
  rectMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  //rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();
  drawSprites();
}