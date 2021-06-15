
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

var ball_options={
isStatic:false,
density:1.2,
restitution:0.3,
friction:0
}

ball=Bodies.circle(200,100,15,ball_options)
World.add(world,ball)


ground2=new Ground(600,580,1200,10)
ground3=new Ground(700,522,10,125)
ground4=new Ground(1000,522,10,125)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine)
  
  fill("white")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,15,15)
  
 
  ground2.display()
 ground3.display()
 ground4.display()

}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:40,y:-40})

}
}

