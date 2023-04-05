img = "";
model_status = "";

objects = [];

function preload() {
    img = loadImage('TV_AC.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(350, 140);

    //setup cocossd model
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting Objects...";

}

function draw() {
    image(img, 0, 0, 640, 420);

    if (model_status != "") {
        for (i = 0; i < objects.length; i++) {
            console.log(objects[i].label);
            document.getElementById("status").innerHTML = "Status:Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);


            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        document.getElementById("result").innerHTML = "There are 2 big objects from which cocossd model has detected " + objects.length + " object ";
    }
}

function modelLoaded() {
    console.log("Cocossd Model is Initialized");
    model_status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}