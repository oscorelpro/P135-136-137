video = "";
status = "";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}


function draw() {
    image(video, 0, 0, 380, 380);
}


function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estado: Detectando objetos";
}


function modelLoaded() {
    console.log("¡Modelo cargado!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
