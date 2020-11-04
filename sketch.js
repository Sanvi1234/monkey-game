
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

survivalTime=0;

function setup() {
  //createCanvas(600,600)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.11
 
    ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  
  foodGroup=createGroup()
 obstacleGroup=createGroup()
  
}


function draw() {
background("white")

   if(ground.x<0){
  ground.x=ground.width/2
   }
 if(keyDown("space")&& monkey.y>=311){
   monkey.velocityY=-12
 }
  
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  
  food()
  spawnObstacles()
  drawSprites()
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityX=0
    obstacleGroup.setVelocityXEach(0)
    foodGroup.setVelocityXEach(0)
     obstacleGroup.setLifetimeEach(-1)
     foodGroup.setLifetimeEach(-1)
  }
  
  
  
  
   text("SURVIVAL TIME:"+survivalTime,470,50)
  survivalTime= Math.round(frameCount/frameRate())
}

function food(){
  if(frameCount%80===0){
  var banana=createSprite(400,200,20,20)
  banana.addImage(bananaImage)
    banana.y=Math.round(random(120,200))
    banana.velocityX=-7
    banana.setLifetime=60
    banana.scale=0.1
    foodGroup.add(banana)
    
  }
}
function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(600,325,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-8
    obstacle.lifetime=70
    obstacleGroup.add(obstacle)
    obstacle.scale=0.1
  }
}



