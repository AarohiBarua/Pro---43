const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var sHand,lHand;
var clockFrame;
var world,engine;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
lHand = createSprite(400, 200, 5, 150);
lHand.shapeColor = "black";
sHand = createSprite(400,250,5,100);
sHand.shapeColor = "red";
clockFrame = new Clock(400,200,70,70);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();
}