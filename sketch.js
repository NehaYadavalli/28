
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boy_Image;

var stone;

var ground, tree;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;

var constraint1;

function preload()
{
	boy_Image=loadImage("Plucking mangoes 2/boyImage.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.


	Engine.run(engine);

	stone = new Stone(150,100,15);

	ground = new Ground(400,690,800,20);

	tree = new Tree(580,450,500,500);

	mango1 = new Mango(600,300,15);
	mango2 = new Mango(690,300,15);
	mango3 = new Mango(600,240,15);
	mango4 = new Mango(500,300,15);
	mango5 = new Mango(700,400,15);
	mango6 = new Mango(700,300,15);
	mango7 = new Mango(500,400,15);
	mango8 = new Mango(400,400,15);

	constraint1 = new ConstraintConnector(stone.body, {x:170 , y:600});

  
}


function draw() {
  background("blue");

  ground.display();

  imageMode(CENTER);
  image(boy_Image,130,610,200,300);

    detectCollision(stone.body,mango1.body);
	detectCollision(stone.body,mango2.body);
	detectCollision(stone.body,mango3.body);
	detectCollision(stone.body,mango4.body);
	detectCollision(stone.body,mango5.body);
	detectCollision(stone.body,mango6.body);
	detectCollision(stone.body,mango7.body);
	detectCollision(stone.body,mango8.body);

	
	tree.display();


	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	stone.display();

	constraint1.display();

	


 
}

function mouseDragged(){
    stone.body.position.x = mouseX;
    stone.body.position.y = mouseY;
}

function mouseReleased(){
    constraint1.fly();
}


function keyPressed(){
    if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:170, y:600})
		constraint1.attach(stone.body);
    }
}

function detectCollision(STONE,MANGO){
	var distance = dist(STONE.body.position.x, STONE.body.position.y, MANGO.body.position.x, MANGO.body.position.y)
	if(distance<=MANGO.r+STONE.r){
		Matter.Body.setStatic(MANGO.body,false);
	}
}
