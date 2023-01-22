const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, rope, fruit, fruit_con;

let engine;
let world;

var bg_img;
var food;
var bunny_img;

var button;
var bunny;

function preload(){
bg_img = loadImage('background.png')
food = loadImage("melon.png")
bunny_img = loadImage("Rabbit-01.png")

}

function setup() {
  createCanvas(600,700);
  
  engine = Engine.create();
  world = engine.world;

  button = createImg('cut_btn.png');
  button.position(270,30);
  button.size(50,50);
  button.mouseClicked(drop);

  ground = new Ground(300,690,width,20);
  rope = new Rope(5,{x: 300,y:20});
  fruit = Bodies.circle(300,200,30);
  Matter.Composite.add(rope.body,fruit);
  fruit_con = new Link(rope,fruit);

  bunny = createSprite(300,620);
  bunny.addImage(bunny_img)
  bunny.scale = 0.25

  



  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {
  background(51);
  image(bg_img,0,0,width,height);
  Engine.update(engine)
  ground.show()
  rope.show()
  push()
  image(food,fruit.position.x,fruit.position.y,100,100)
  pop()

  drawSprites()

}

function drop()
{
  rope.break();
  fruit_con.detatch();
  fruit_con = null;
}

