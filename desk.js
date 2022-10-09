status3 = "";
image3 = "";
objects = [];

function preload(){
    image3 = loadImage("desk.jpg");
}
function setup(){
    canvas = createCanvas(640,500);
    canvas.position(315,200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded 🏳️‍🌈");
    status3 = true;
    objectDetector.detect(image3,gotResults);
}
function gotResults(results,error){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(image3,0,0,640,350);
    if(status3 != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill("#fc0303");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x - 180, objects[i].y - 200);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 180, objects[i].y - 200, objects[i].width - 2693, objects[i].height - 1750);
        }
    }
}