function setup(){
    video= createCapture(VIDEO);
    video.size(520,500);

    canvas=  createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses',gotPoses);

}
function draw()
{
    background(white);
}

function modelLoaded()
{
    console.log("PoseNet is initialized!")

}
function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}