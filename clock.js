img = "";

function preload() {
    img= loadImage('https://m.media-amazon.com/images/I/812L5zyAmpL._AC_SX522_.jpg');
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
     text("Clock", 45, 75);
     noFill();
     stroke("red");
     rect(30, 10, 600, 390);
     
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
  
    