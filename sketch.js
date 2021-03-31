var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("cat2.png","cat3.png",);
    mouseimg2 = loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(250,150,50,70);
    tom.shapeColor = "yellow";

    jerry = createSprite(150,50,20,20);
    jerry.shapeColor = "grey";

}

function draw() {

    background("add image variable name here");
    //Write condition here to evaluate if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        //write code here to change animation
        cat.addAnimation("catRunning",catimg2);
        cat.changeAnimation("catRunning");

        
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }

} 