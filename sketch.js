
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var rock1,ground1,boy,chain,boy, launchingForce=10, tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
function preload()
{
	boy=loadImage("boy.png");
	tree=loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 650);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	rock1=new rock(235,420,50)
	ground1=new Ground(width/2,600,width,20);
	
	chain=new slingshort(rock1.body,{x:220,y:420})
	
	 mango1=new mango(600,240,50);
	 mango2=new mango(700,260,50);
	 mango3=new mango(800,220,50);
	 mango4=new mango(850,270,50);
	 mango5=new mango(750,200,50);
	 mango6=new mango(750,140,50);
	 mango7=new mango(770,300,50);
	 mango8=new mango(680,170,50);
	 mango9=new mango(640,300,50);
	// World.add(world,tree);
	//c1 = Bodies.rectangle(750,500,20,300,{isStatic:true,restitution:0});
	//World.add(world, c1);
	 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  detectollision(rock1,mango1,{mangoisStactic: false})
  detectollision(rock1,mango2)
  detectollision(rock1,mango3)
  detectollision(rock1,mango4)
  detectollision(rock1,mango5)
  detectollision(rock1,mango6)
  detectollision(rock1,mango7)
  detectollision(rock1,mango8)
  detectollision(rock1,mango9)
 // Engine.update(engine);
  image(boy, 200, 370, 200, 300);
  image(tree,550,100,400,500);

  drawSprites();
 rock1.display();
 ground1.display();
 chain.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
}
function mouseDragged(){

	Matter.Body.setPosition(rock1.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	
	  chain.fly()
	}

	function keyPressed() {
		if (keyCode === 32) {
		Matter.Body.setPosition(rock1.body, {x:235, y:420}) 
		  chain.attach(rock1.body);
		}
	  }
function detectollision(lrock1,lmango){
	mangoBodyPosition=lmango.body.position;
	rock1BodyPosition=lrock1.body.position;

	var distance=dist(rock1BodyPosition.x,rock1BodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lrock1.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}