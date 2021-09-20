function preload() {

}
function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide()

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", obtainedPoses);
}

function modelLoaded(){
    console.log("The PoseNet model is Initialised");
    canvas.center();
}

function obtainedPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("The nose x = " + results[0].pose.nose.x);
        console.log("The nose y = " + results[0].pose.nose.y);
        canvas.center();
    }
    canvas.center();
}
function draw() {
    image(video, 0, 0, 350, 300);
    canvas.center();
}
function clickThePhoto() {
    save("MyClownFilterImage.png");
    canvas.center();
}