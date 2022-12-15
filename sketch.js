
var blue ;
var red;
var green;
var yellow;
var box
var ball;
var edges;

function setup() {
	createCanvas(800, 700);
    box = createSprite(400,350,40,40)
    box.shapeColor = "black"        	
   
	blue = createSprite(100,100,40,80)
	blue.shapeColor = "blue"

	red = createSprite(700,100,80,40)
	red.shapeColor = "red"

	green = createSprite(700,600,80,40)
	green.shapeColor = "green"

	yellow = createSprite(100,600,40,80)
	yellow.shapeColor = "yellow"

	obstacle = createSprite(50,50,60,60)
	obstacle.shapeColor = "orange"
	obstacle.velocityX = 5
    obstacle.velocityY = 5
	edges = createEdgeSprites()
  
}


function draw() {
  background(200);
  if(keyIsDown(RIGHT_ARROW)){
	box.x += 5
  }
  if(keyIsDown(LEFT_ARROW)) {
	box.x -= 5
  }
  if(keyIsDown(UP_ARROW)) {
	box.y -= 5
  }
  if(keyIsDown(DOWN_ARROW)){
	box.y += 5
  }
  if(box.isTouching(blue)){
	box.shapeColor = "blue"
	obstacle.velocityX += 1
	obstacle.velocityY += 1
  }
  if(box.isTouching(red)){
	box.shapeColor = "red"
	obstacle.velocityX += 1
	obstacle.velocityY += 1
  }
  if(box.isTouching(green)){
	box.shapeColor = "green"
	obstacle.velocityX += 1
	obstacle.velocityY += 1
  }
  if(box.isTouching(yellow)){
	box.shapeColor = "yellow"
	obstacle.velocityX += 1
	obstacle.velocityY += 1
  }
  if(box.isTouching(obstacle)){
	obstacle.destroy()
	box.destroy()
	blue.destroy()
	red.destroy()
	green.destroy()
	yellow.destroy()

	
  }
  obstacle.bounceOff(edges)
  drawSprites();
 
}


