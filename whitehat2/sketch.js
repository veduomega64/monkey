
var monkey , monkey_running
var bananaImage,obstacle,banan,  obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleground,lol



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  lol = loadImage("sprite_0.png");

 
}



function setup() {
 createCanvas(600, 200);
 monkey = createSprite(50,161,20,50);
  
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  invisibleground = createSprite(50,205,100,10)
  invisibleground.visible = false;
  
   obstaclesGroup = new Group();
  
}


function draw() {
 background(255);
   obstacle = createSprite(600,180,10,40);
  
   if(keyDown("space") && monkey.y >= 149) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleground);

  obstaclespawn();
  spawnBanana();
  
   if(obstaclesGroup.isTouching(monkey)){
        monkey.velocityY=0
       banana.velocityY=0
   obstaclesGroup.setVelocityXEach (0)
    obstaclesGroup.setLifetimeEach(-1)
     
      

    }
  
  drawSprites();
  
}
function obstaclespawn()
{
  
   if(frameCount % 60 === 0) 
     {
     obstacle = createSprite(600,180,10,40);
      obstacle.addImage(obstaceImage)
      obstacle.lifetime = 300;
  obstacle.scale = 0.1
  
    //obstacle.debug = true;
    obstacle.velocityX = -(6);
    }
  obstaclesGroup.add(obstacle)
  

   

}
function spawnBanana(){
  if (frameCount % 100 === 0) {
   banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
}
}