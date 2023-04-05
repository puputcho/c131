img = "";

function preload() {
    img = loadImage('fruit_basket.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(350, 300);
}

function draw() {
    image(img, 0, 0, 640, 420);

    //add label near dog
    fill('#FF0000');
    text('fruits', 45, 75);

    noFill();
    stroke("#FF0000");
    rect(30, 60, 350, 350);

}