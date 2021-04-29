var thickness,wall;
 
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90)
    weight=random(400,1500)
 
thickness=random(22,83);


  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX= speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}



function draw (){

  background(0,0,0); 
  if(wall.x-bullet.x<(wall.width+bullet.width)/2) 
 
    bullet.velocityX=0;
    //hasCollided();
    drawSprites();
}

function hasCollided(lbullet,lwall) {
{
bulletRightEdge=lbullet.lbullet.width;
wallleftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{


  return true
}

return false;


}


  background(0,0,0)
if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{

wall.shapeColor=color("green");



}

if(damage<10)
{

wall.shapecolor=color("red")


}





}



}

