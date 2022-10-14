var BackgroundImg 
var Ikea, IkeaImg
var Almondwater, AlmondwaterImg
var player 

function preload (){
BackgroundImg=loadImage("Background.gif");
IkeaImg=loadImage("mueble.png");
AlmondwaterImg=loadImage("agua_de_almendras.png");



}

function setup(){
    createCanvas(1200,600);
    Almondwater= createSprite(600,600,20,50);
    Almondwater.addImage(AlmondwaterImg);
    Almondwater.scale=0.5

    Ikea= createSprite(500,1000,20,50);
    Ikea.addImage(IkeaImg);
    Ikea.scale=0.9
    
    player= createSprite(500,1000,20,80);
    player.shapeColor=("black");

}
function draw(){
background(189);
image(BackgroundImg,0,0,width,height)
drawSprites();
spawnIkea();
spawnAW();
}   

function spawnIkea() {
    if (frameCount % 270 === 0) {
        var mueble = createSprite(600,120,40,10);
        
        mueble.y = Math.round(random(80,700));
        mueble.addImage(IkeaImg);
        mueble.scale = 0.5;
        mueble.velocityX = -3;
        mueble.lifetime = 200;
}   
} 
function spawnAW(){
    if (frameCount % 500 === 0) {
    Almondwater.y = Math.round(random(80,700));
    Almondwater.addImage(AlmondwaterImg);
    Almondwater.scale = 0.3;
    Almondwater.velocityX = -3;
    Almondwater.lifetime = 200;
}
}