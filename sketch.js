


var cat, mouse;


function preload() {
backgroundImg = loadImage("images/garden.png");
cat1 = loadAnimation("images/cat1.png");
cat_collided = loadAnimation("images/cat2.png","images/cat3.png")
catRunning = loadAnimation("images/cat4.png");
mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation(cat1);
    cat.scale=0.3;

    mouse = createSprite(200,600);
    mouse.addAnimation(mouseImg1);
    mouse.scale=0.2;

    //create tom and jerry sprites here

}

function draw() {

    background(backgroundImg);
    if(cat.x-mouse.x<cat.width-mouse.width/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImg",catRunning);
        cat.changeAnimation("catLastImg");
        cat.x = 300;
        mouse.addAnimation("mouseLastImg",mouseImg3);
        mouse.changeAnimation("mouseLastImg");
    }
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
}
