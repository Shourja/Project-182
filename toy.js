img = "";

function preload() {
    img= loadImage('https://media.istockphoto.com/photos/small-teddy-bear-isolated-on-white-picture-id182834193?b=1&k=20&m=182834193&s=170667a&w=0&h=E74uv79mhHNg7Or77veTPojJkW7EjQnV5mCKPpIutDY=');

}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw () {
     image (img, 0, 0, 640, 420);
     fill("red");
     text("Teddy bear", 45, 75);
     noFill();
     stroke("red");
     rect(30, 60, 600, 350);
     
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
  }
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    
  }
    