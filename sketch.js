//variable declarations

//icons
let hair1 = [];
let hair2 = [];
let hair3 = [];
let hair4 = [];

//# of iterations per icon
let iconNum = 20;

//declaring icon as arrays (for placement)
let icon_hair1 = [];
let icon_hair2 = [];
let icon_hair3 = [];
let icon_hair4 = [];

// Check if screen size allows sketch
let isSketchEnabled = true;

// Check if screen size allows sketch
const checkScreenSize = () => {
    const shouldEnable = window.innerWidth >= 440;
    if (shouldEnable !== isSketchEnabled) {
        isSketchEnabled = shouldEnable;
        if (isSketchEnabled) {
            // Re-enable sketch
            loop();
            // Show canvas
            if (canvas) {
                canvas.style.display = 'block';
            }
        } else {
            // Disable sketch
            noLoop();
            // Hide canvas
            if (canvas) {
                canvas.style.display = 'none';
            }
        }
    }
};

//loading + declaring image files
function preload(){
  

   icon_hair1 = loadImage('img-placeholder/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.webp');
   icon_hair2 = loadImage('img-placeholder/girl.png');
   icon_hair3 = loadImage('img-placeholder/poop-svg.png');
   icon_hair4 = loadImage('img-placeholder/girl.png');

  
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Check initial screen size
  checkScreenSize();
  
  // Listen for window resize
  window.addEventListener('resize', checkScreenSize);
  
  //declaring randomized placements of each icon
  for (let i = 0; i < iconNum; i++){
    hair1[i] = new Hair(random(windowWidth),random(windowHeight));
    hair2[i] = new Hair2(random(windowWidth), random(windowHeight));
    hair3[i] = new Hair3(random(windowWidth), random(windowHeight));
    hair4[i] = new Hair4(random(windowWidth), random(windowHeight));
  }
}

function draw() {
  // Only run if sketch is enabled
  if (!isSketchEnabled) return;
  
  background(255)

  //calling the function where everything that happens is defined
  scene0();
}

//assigning what happens in scene 0 (aka the content)
function scene0() {

  //creating constant iterations
  for (let i = 0; i < iconNum; i++){
  
  //calling the body + move constructors defined
  hair1[i].body()
  hair1[i].move()

  hair2[i].body()
  hair2[i].move()

  hair3[i].body()
  hair3[i].move()

  hair4[i].body()
  hair4[i].move()

 
  }

  }


//declaring icons for scene 0
/* HAIR1 ICON */

//defining the class for each hair icon
class Hair{
  constructor(x,y){
	this.x = x;
	this.y = y;
   
  }
  
  //defines how the image is to be presented + placement on canvas
  body(){
    
    noStroke()
    image(icon_hair1,this.x,this.y,50,50);
   }
  
   //defines how the image will move down the canvas
  move(){
    this.y++;
    if (this.y>height){
      this.y=0;
    }
  }

  //defines when the image is to be removed from the canvas
  remove(){
    this.x = -100;
    this.y = -100;
  }

}

class Hair2 {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  body() {
    noStroke();
    image(icon_hair2, this.x, this.y, 50, 50);
  }

  move() {
    this.y++;
    if(this.y>height) {
      this.y=0;
    }
  }

  remove() {
    this.x = -100;
    this.y = -100;
  }
}

class Hair3 {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  body() {
    noStroke();
    image(icon_hair3, this.x, this.y, 50, 50);
  }

  move() {
    this.y++;
    if(this.y>height) {
      this.y=0;
    }
  }

  remove() {
    this.x = -100;
    this.y = -100;
  }
}

class Hair4 {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  body() {
    noStroke();
    image(icon_hair4, this.x, this.y, 50, 50);
  }

  move() {
    this.y++;
    if(this.y>height) {
      this.y=0;
    }
  }

  remove() {
    this.x = -100;
    this.y = -100;
  }
}


