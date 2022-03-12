img = "";

function preload() {
    img= loadImage('https://media.istockphoto.com/photos/water-bottle-on-white-background-picture-id1126933760?k=20&m=1126933760&s=612x612&w=0&h=XiYk9aT68Iru-OeENe1JXi0-8BU8wXKKj7dfgkbjy9A=');

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
     text("Bottle", 45, 75);
     noFill();
     stroke("red");
     rect(40, 10, 600, 390);
     
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
    