const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg, slingshot;
var engine, world;
function preload(){
    backgroundImg = loadImage("background.jpg");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    chao1 = new Chao(220, 360, 100, 20);
    chao2 = new Chao(400, 300, 100, 20);
    chao3 = new Chao(570, 320, 100, 20);
    chao4 = new Chao(780, 280, 100, 20);
    chao5 = new Chao(840, 370, 100, 20);
    chao6 = new Chao(650, 240, 100, 20);
    isca = new Isca(200,30);
    peixe1 = new Peixe(220, 354);
    peixe2 = new Peixe(400, 294);
    peixe3 = new Peixe(570, 314);
    peixe4 = new Peixe(780, 274);
    peixe5 = new Peixe(840, 364);
    peixe6 = new Peixe(650, 234);
  
    slingshot = new SlingShot(isca.body,{x:100, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    chao1.display();
    chao2.display();
    chao3.display();
    chao4.display();
    chao5.display();
    chao6.display();
    peixe1.display();
    peixe2.display();
    peixe3.display();
    peixe4.display();
    peixe5.display();
    peixe6.display();
    slingshot.display();
    isca.display();
}

function mouseDragged(){
    Matter.Body.setPosition(isca.body, {x:mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fish();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.back({x:100, y:200});
    }
}

