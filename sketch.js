
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
const Body = Matter.Body;
var ground;
var boxes =[]


function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,690,width,20);
	stand1=new Ground(390,300,250,10)
	stand2=new Ground(700,200,200,10)
	for(var i=300;i<481;i=i+30){
		boxes.push(new Box(i,275,30,40,"lightblue"))
	}
	for(var i=330;i<451;i=i+30){
		boxes.push(new Box(i,235,30,40,"salmon"))
	}
	for(var i=360;i<421;i=i+30){
		boxes.push(new Box(i,195,30,40,"lightgreen"))
	}
	for(var i=390;i<391;i=i+30){
		boxes.push(new Box(i,155,30,40,"violet"))
	}
	for(var i=640;i<761;i=i+30){
		boxes.push(new Box(i,175,30,40,"yellow"))
	}
	for(var i=670;i<731;i=i+30){
		boxes.push(new Box(i,135,30,40,"pink"))
	}
	for(var i=700;i<710;i=i+30){
		boxes.push(new Box(i,95,30,40,"blue"))
	}
	Engine.run(engine);
  ball=new Polygon(50,200,20);
  sling=new Slingshot(ball.body,{x:100,y:200})
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  sling.Display();
  ground.display();
  stand1.display();
  stand2.display();
 for(var i=0;i<boxes.length;i++){
	 boxes[i].display()
	 
 }
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode==32){
        sling.attach(ball.body)
    }
}
