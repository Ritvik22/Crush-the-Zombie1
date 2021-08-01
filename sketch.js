const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var wall1;
var wall2;
var joinPoint;
var bridge;
var hook;
var stone;
var stones = [];



function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Base(width/2, height - 25, width, 50);
  wall1 = new Base(100, height-225, 200, 350);
  wall2 = new Base(width - 100, height-225, 200, 350);
  jointPoint = new Base(width - 220, height-390, 10, 10);
  bridge = new Bridge(17, {x: 200, y: height-400});
  
  Matter.Composite.add(bridge.body, jointPoint);
  hook = new Link(bridge, jointPoint);

  for (var i = 0; i < 8; i++){

    var x = random(400, width-400)
    var y = random(-50, -100)
    stone = new Stone(x, y, 80, 80);
    stones.push(stone);

  }

  frameRate(80);
  rectMode(CENTER);

}

function draw() {
  background(51);

ground.display();
wall1.display();
wall2.display();
bridge.show();

for (var i = 0; i < 8; i++) {

 stones[i].display();

}

  Engine.update(engine);

}
