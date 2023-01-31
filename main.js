noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(600,550);
video.position(20,100);

canvas= createCanvas(600,550);
canvas.position(800,100);

poseNet=ml5.poseNet(video,modelLoaded);         //initializing the posenet model and storing it in a variable//
poseNet.on('pose',gotPoses);                    //executing or running the model//
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWrist);

        console.log("leftWristX = " + leftWristX +"rightWristX = "+ rightWristX + "difference = " + difference);
    }
    
}

function modelLoaded(){
    console.log("model is loaded");
}

function draw(){
background("#51a2e8");

document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = "+ difference+"px";

fill('orange');
stroke('orange');
square(noseX, noseY, difference);

}
