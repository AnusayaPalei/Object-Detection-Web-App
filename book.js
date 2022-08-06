Status = "";
book_image = "";
objects = [];

function preload(){
    book_image = loadImage("Books.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelloaded(){
    console.log("Modelloaded");
    Status = true;
    object_Detector.detect(book_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(book_image,0,0,640,350);
    if(Status != ""){
        objectDetector.detect(video,gotresults);
        for(i=0; i<object.length; i++){
            document.getElementById("status").innerHTML="Status: Object Detected";
            document.getElementById("number_of_objects").innerHTML="Number of Objects Detected: "+ object.length;
            fill("green");
            percent=floor(object[i].confidence*100);
            text(object[i].label + "" + percent + "%", object[i].x, object[i].y);
            noFill();
            stroke("green");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
    
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}