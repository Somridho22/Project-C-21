var canvas;
var music;
var s1 , s2, s3 , s4;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    s1 = createSprite(5,590,190,20);
    s1.shapeColor="blue";
    s2 = createSprite(205,590,190,20);
    s2.shapeColor="yellow";
    s3 = createSprite(405,590,190,20);
    s3.shapeColor="red";
    s4 = createSprite(605,590,190,20);
    s4.shapeColor="black";

    

    //create box sprite and give velocity
    
    box=createSprite(random(20,750),300,30,30);
    box.shapeColor="white";
    box.velocityX = 7;
    box.velocityY = 9;

}

function draw() {
    background("pink");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(s1.isTouching(box) && box.bounceOff(s1)){
        box.shapeColor="blue";
        music.play();
    }

     if(s2.isTouching(box)){
        box.shapeColor="yellow";
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;

    }

     if(s3.isTouching(box) && box.bounceOff(s3)){
        box.shapeColor="red";
        music.play();
    }

     if(s4.isTouching(box) && box.bounceOff(s4)){
        box.shapeColor="black";
        music.play();
    }

    drawSprites();
}
