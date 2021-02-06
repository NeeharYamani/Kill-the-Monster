const Engine =Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world
var bgimg;
var heroimg;
var monsterimg;
var ground;
var string;
var superhero;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;

function preload() {
bgimg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1530, 750);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(650,600,900,20);
  box1 = new Box(550,550,70,70);
  box2 = new Box(550,480,70,70);
  box3 = new Box(550,410,70,70);
  box4 = new Box(550,340,70,70);
  box5 = new Box(550,270,70,70);

  box6 = new Box(680,550,70,70);
  box7 = new Box(680,480,70,70);
  box8 = new Box(680,410,70,70);
  box9 = new Box(680,340,70,70);
  box10 = new Box(680,270,70,70);
  box11 = new Box(680,200,70,70);

  box12 = new Box(810,550,70,70);
  box13 = new Box(810,480,70,70);
  box14 = new Box(810,410,70,70);
  box15 = new Box(810,340,70,70);
 
  monster = new Monster(1000,300,200,200);
  superhero = new Hero(200,200,200,200,{isStatic:false});
  string = new Rope(superhero.body,{x:200,y:150})



}

function draw() {
  background(bgimg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  monster.display();
  superhero.display();
  string.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  string.fly();
}

