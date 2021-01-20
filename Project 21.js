/*var canvas;
var music;
var Ball;
var box1;
var box2;
var box3;
var box4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  box1 = createSprite(20,20,10,10);
  box1 = createSprite(20,20)
    
     
    //create 4 different surfaces



    //create box sprite and give velocity
    Ball = createSprite(20,30,400,300);
    Ball.shapecolor = "blue";
    Ball.velocityX = 0;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    function isTouching () {
        
    }
    if(box1.isTouching(Ball)){
       Ball.shapecolor = "green";
       music.stop();
}

    if (box2.isTouching(Ball)) {
        Ball.shapecolor = "red"
        music.stop();
    }

    if (box3.isTouching(Ball)) {
        Ball.shapecolor = "yellow"
        music.stop();
    }

    if(box4.isTouching(Ball))
       Ball.shapecolor = "orange"
0












































      


    //add condition to check if box touching surface and make it box
}
