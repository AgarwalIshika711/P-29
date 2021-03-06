const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 
var engine, world;
var box1,box2,box3,box4,box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30;  

 
function preload() {


}
function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(width/2,520,500,20);
  ground2 = new Ground(1150,300,350,20);

  

  box1 = new Box(600,510,50,40);
  box2 = new Box(640,510,50,40);
  box3 = new Box(680,510,50,40);
  box4 = new Box(720,510,50,40);
  box5 = new Box(760,510,50,40);
  box6 = new Box(800,510,50,40);
  box7 = new Box(840,510,50,40);
  box8 = new Box(880,510,50,40);

  box9 = new Box(640,505,50,40);
  box10 = new Box(680,505,50,40);
  box11 = new Box(720,505,50,40);
  box12 = new Box(760,505,50,40);
  box13 = new Box(800,505,50,40);
  box14 = new Box(840,505,50,40);

  box15 = new Box(680,500,50,40);
  box16 = new Box(720,500,50,40);
  box17 = new Box(760,500,50,40);
  box18 = new Box(800,500,50,40);

  box19 = new Box(720,495,50,40);
  box20 = new Box(760,495,50,40);
 
  box21 = new Box(1070,290,50,40);
  box22 = new Box(1110,290,50,40);
  box23 = new Box(1150,290,50,40);
  box24 = new Box(1190,290,50,40);
  box25 = new Box(1230,290,50,40);

  box26 = new Box(1112,285,50,40);
  box27 = new Box(1150,285,50,40);
  box28 = new Box(1190,285,50,40);
  
  box29 = new Box(1150,280,50,40);

  box30 = new Box(1150,275,50,40);

  
 
  polygon = new Pentagon(200,200,60,60);
  sling = new SlingShot(polygon.body, {x:250,y:260})
  
  Engine.run(engine);


}
 
function draw(){
    background("black");
    Engine.update(engine);

    fill("brown");
    ground1.display();
    ground2.display();
  
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
  
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
  
    fill("lightGreen");
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
  
    box26.display();
    box27.display();
    box28.display();
  
    fill("red");
    box15.display();
    box16.display();
    box17.display();
    box18.display();
  
    box29.display();
  
    fill("yellow");
    box19.display();
    box20.display();
  
    box30.display();
  
  
    polygon.display();
    sling.display();
  

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
  }
  
  function mouseReleased(){
    sling.fly();
  }
  
  