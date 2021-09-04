status="";

function preload(){
    video =loadSound("YouCut_20210901_125616965.mp4");
}
function setup(){
canvas = createCanvas(500,500);
canvas.center();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting objects" ; 
    object_name = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model Loaded!!!!!");
    status = true ; 
}

function draw(){
    image(video , 0 , 0 , 5000 , 5000);
}