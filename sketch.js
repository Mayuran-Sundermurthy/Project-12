var garden,rabbit, apple,leaf,orange_leaf, score = 0;
var gardenImg,rabbitImg,appleImg, leaf_image,orange_leafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leaf_image = loadImage("leaf.png");
  orange_leafImage = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
garden.depth = rabbit.depth -2;



}


function draw() {
  background(0);
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

if(apple.y > 350){
score = score +1; 
console.log(score);
}

  rabbit.x = World.mouseX;



  createApples();
  createLeaves();
  drawSprites();

  
}

function createApples() {

  
  if(frameCount% 60 == 0) {
    apple = createSprite(200,50);
    apple.addImage(appleImg);
  apple.scale = 0.05;
  
  console.log(apple.y);
    apple.x = Math.round(random(50,350));
    apple.velocityY = 5; 
    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth +1; 
    apple.lifetime = 80; 


  }
  

}

function createLeaves(){
  
  
  

  if(frameCount% 60 == 0) {
    leaf = createSprite(200,0);
    leaf.x = Math.round(random(50,350));
    leaf.depth = 0;
    leaf.lifetime = 80;
    leaf.addImage(leaf_image);
    leaf.velocityY = 3; 
    leaf.scale = 0.03;

  }

  if(frameCount% 90 == 0) {
    orange_leaf = createSprite(200,0);
    orange_leaf.x = Math.round(random(50,350));
    orange_leaf.lifetime = 80;
    orange_leaf.addImage(orange_leafImage);
    orange_leaf.velocityY = 3;
    orange_leaf.scale = 0.03;

  }
}
