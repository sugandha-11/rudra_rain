const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var walking, thundering;
var Bruce,Ground; 

var maxDrops=100;
var drops=[];

function preload(){
 walking=loadAnimation("images/walking_8.png","images/walking_7.png","images/walking_6.png","images/walking_5.png","images/walking_4.png","images/walking_3.png",
  "images/walking_2.png","images/walking_1.png");   

 thunder=loadAnimation("images/4.png","images/3.png","images/2.png","images/1.png");
}

function setup(){
    createCanvas(400,700);

    engine = Engine.create();
    world = engine.world;

    Ground=createSprite(200,690,500,20);

    Bruce=createSprite(200,520,10,90);
    Bruce.addAnimation("walk",walking);
    Bruce.scale=0.5;
    
    for (var i = 0; i < maxDrops; i++) {
        drops.push(new Drops( random(0,400), random(0,400)));
      }
      
    
}

function draw(){
    background("black");
    Engine.update(engine);

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();        
    }
   
    drawSprites();
   
}   

