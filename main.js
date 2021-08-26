nosex = "";
nosey = "";
function preload() {
pic=loadImage('https://i.postimg.cc/Nf3JfQpJ/mustache.png')
}
function setup() {
    canvas = createCanvas(200, 200);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(200, 200);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);
}
function modelloaded() {
    console.log("Model is loaded");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nosex=xcoordinate " + results[0]. pose.nose.x);
        console.log("nosey=ycoordinate " + results[0]. pose.nose.y);
        nosex = results[0].pose.nose.x - 15;
        nosey = results[0].pose.nose.y - 5;
    }
}

function draw() {
    image(video, 0, 0, 200, 200);
    image(pic,nosex, nosey, 30, 30);
}
function takes() {
    save('Myfilterimg.png');
}