var bullet1, bullet2, bullet3, wall;
var weight, speed;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed1 = random(223, 321);
  speed2 = random(223, 321);
  speed3 = random(223, 321);
  thickness = random(22, 83);
  weight = random(30, 52);
  bullet1 = createSprite(50, 150, 10, 5);
  bullet2 = createSprite(50, 200, 10, 5);
  bullet3 = createSprite(50, 250, 10, 5);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);
  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;
  bullet1.shapeColor = "White";
  bullet2.shapeColor = "White";
  bullet3.shapeColor = "White";
}

function draw() {
  background(0, 0, 0);
  
  bullet1.collide(wall);
  bullet1.collide(wall);
  bullet2.collide(wall);
  bullet3.collide(wall);

  if(hasCollided1(bullet1, wall))
  {
    bullet1.velocityX = 0;
    var damage = 0.5 * weight * speed1 * speed1/ (thickness * thickness * thickness);

    if(damage > 10)
    {
      wall.shapeColor = color(255, 0 ,0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  if(hasCollided2(bullet2, wall))
  {
    bullet2.velocityX = 0;
    var damage = 0.5 * weight * speed2 * speed2/ (thickness * thickness * thickness);

    if(damage > 10)
    {
      wall.shapeColor = color(255, 0 ,0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  if(hasCollided3(bullet3, wall))
  {
    bullet3.velocityX = 0;
    var damage = 0.5 * weight * speed3 * speed3/ (thickness * thickness * thickness);

    if(damage > 10)
    {
      wall.shapeColor = color(255, 0 ,0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

function hasCollided1(bullet1, wall)
{
  bullet1RightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall.x;

  if(bullet1RightEdge >= wallLeftEdge)
  {
    return true;
  }
  else
  {
    return false;
  }

}

function hasCollided2(bullet2, wall)
{
  bullet2RightEdge = bullet2.x + bullet2.width;
  wallLeftEdge = wall.x;

  if(bullet2RightEdge >= wallLeftEdge)
  {
    return true;
  }
  else
  {
    return false;
  }

}

function hasCollided3(bullet3, wall)
{
  bullet3RightEdge = bullet3.x + bullet3.width;
  wallLeftEdge = wall.x;

  if(bullet3RightEdge >= wallLeftEdge)
  {
    return true;
  }
  else
  {
    return false;
  }

}