var car,wall;

var speed,weigth;



function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weigth=random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.spritescolor=color(255);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color(255);
}

function draw() {
  background(0); 
if (wall.x-car.x < (car.weigth+wall.weigth)/2){
   car.velocityX=0;
   var deformation=0.5*weigth*speed*speed/22509;
if (deformation>180){
  car.shapeColor=color(255,0,0);
}   
if (deformation<180 && deformation>100){
   car.shapeColor=color(230,230,0);
}
if (deformation<100){
   car.shapeColor=color(0,255,0);
}
} 
  drawSprites();
}