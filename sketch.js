
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2;
var world,boy;
var stone;
var attach;

function preload(){ 
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango (1150,85,30)
	mango3 = new mango (1000,50,30)
	m4 = new mango(1000,150,30)
	m5 = new mango (1100,200,30)
	m6 = new mango (1050,170,30)
	m7 = new mango(1200,170,30)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone(240,460)
	attach = new Throw(stone.body,{x:240,y:460})

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();
  attach.display();
  m4.display();
  m5.display();
  m6.display();

  groundObject.display();
}
function mouseReleased(){
	attach.fly();

}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}