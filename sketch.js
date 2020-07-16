//global variables
var bullet,gun1,gun2
var wall,reset,reset1
var thickness,speed,weight,damage
var wall1,wall2,wall3,wall4,wall5,wall6

function setup(){
  createCanvas(1525,400);
  //creating bullet , gun and collision wall
  bullet=createSprite(50,200,25,7)
  bullet.shapeColor="white"
  gun1=createSprite(75,200,80,15)
  gun2=createSprite(50,215,20,20)
  gun1.shapeColor=rgb(21,40,82)
  gun2.shapeColor=rgb(21,40,82)
  wall=createSprite(1400,200,thickness,height/2)
  wall.shapeColor=rgb(255,255,0)

  // setting speed , weight , reset, thickness
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  reset1=createSprite(width/2,370,100,80)
  reset1.shapeColor=rgb(0,128,120)
  reset=createSprite(width/2,367.5,70,50)
  reset.shapeColor=rgb(0,255,239)

  //creating additional walls
  wall1=createSprite(825,290,1350,20)
  wall1.shapeColor=rgb(255,255,0)
  wall2=createSprite(825,110,1350,20)
  wall2.shapeColor=rgb(255,255,0)
  wall3=createSprite(150,110,20,70)
  wall3.shapeColor=rgb(255,255,0) 
  wall4=createSprite(150,290,20,70)
  wall4.shapeColor=rgb(255,255,0)
  wall5=createSprite(350,70,420,20)
  wall5.shapeColor=rgb(255,255,0)
  wall6=createSprite(350,325,420,20)
  wall6.shapeColor=rgb(255,255,0)
}

function draw(){
  background(0,0,0)
  //giving bullet speed
  bullet.velocityX=speed
  //giving is collided condition for wall color change
  if(hasCollided(bullet,wall)){
    //giving bullet velocity 0  
    bullet.velocityX=0
    //giving damage equations
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
    //giving equations for wall color after wall collide bullet
    if(damage>10 && bullet.x>1300){
      //giving text and wall color red
      textFont('Georgia');
      textSize(16);
      text("wall's strength is weak",width/2,90)
      wall.shapeColor="red"
    }
    if(damage<10 && bullet.x>1300){
     // giving text and wall color green
      textFont('Georgia');
      textSize(16);
      text("wall's strength is strong",width/2,90)
      wall.shapeColor="green"
    }
  }
  // giving mouseDown reset system
  if(mouseDown() && bullet.x>wall.x){
   button()
  }
  //giving wall color before collision
  if(bullet.x<wall.x){
    wall.shapeColor=rgb(255,255,0)
  }
  // giving gun recoil system
  if(mouseDown()){
    gun1.velocityX=-10
    gun2.velocityX=-10
  }
  if(bullet.x>700){
    gun1.x=75
    gun2.x=50
    gun1.velocityX=0
    gun2.velocityX=0
  }
  // invisible bullet after bullet passes wall 
  if(bullet.x>wall.x){
    bullet.visible=false
  }
  if(bullet.x<wall.x){
    bullet.visible=true
  }

  drawSprites()
  //giving text for reset on reset button
  textFont('Georgia');
  textSize(16);
  text("reset",width/2-15,373.5)
}

function button(){
  // setting bullet back to start and giving it velocity  
  bullet.x=50
  bullet.velocityX=speed
  //declaring speed,weight,thickness again for button
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  //stating wall thickness to thickness
  wall.width =thickness
  // giving damage equations 
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
  // giving equations for wall color after wall collide bullet
  if(damage>10 && bullet.x>1300){
    textFont('Georgia');
    textSize(16);
    text("wall's strength is weak",width/2,90)
    wall.shapeColor="red"
  }
  if(damage<10 && bullet.x>1300){
    textFont('Georgia');
    textSize(16);
    text("wall's strength is strong",width/2,90)
    wall.shapeColor="green"
  }  
}   