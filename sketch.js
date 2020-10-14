var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0,
  survivalTime = 0

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 350)
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1

  ground = createSprite(400, 350, 900, 10)
  ground.velocityX = -4

  console.log(ground.x)

  FoodGroup = createGroup();
  obstacleGroup = createGroup()

}


function draw() {

  background("white");

  stroke("grey")
  textSize(20)
  fill("grey")
  text("score :" + score, 500, 50)

  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount / frameRate())
  text("survivalTime :" + survivalTime, 100, 50)

  food();
  obstacles();

  if (keyDown("space")) {
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY + 0.6

  monkey.collide(ground)
  ground.x = ground.width / 2

  drawSprites()
}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400, 320, 20, 20);
    banana.y = Math.round(random(120, 200))
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -4
    banana.lifetime = 150;
    FoodGroup.add(banana)
  }
}

function obstacles() {
  if (frameCount % 80 === 0) {
    var obstacle = createSprite(400, 340, 20, 20)
    obstacle.x = Math.round(random(450, 600))
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityX = -4;
    obstacle.lifeTime = 150;

    obstacleGroup.add(obstacle)

  }

}