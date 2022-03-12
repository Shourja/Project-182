img = "";
status = "";

function preload() {
    img= loadImage('https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80');

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
     text("Laptop", 45, 75);
     noFill();
     stroke("red");
     rect(30, 50, 600, 350);
     
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
    