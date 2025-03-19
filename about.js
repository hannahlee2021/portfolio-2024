let x,y;
let speed= 0.5;
let colors = [];

let textBank= [
  "i have seen the bluest blue",
  "can you be my manhattan moon", 
  "there are more forms of happiness than there are forms of waves", 
  "you are the moon unaware of the dawn", 
  "but i do believe that for love to grow there must first be the impact of novelty", 
  "the internet and technology has created an idea of infinity, and the reason why life is beautiful is because it is fundamentally limited", 
  "she postponed tomorrow by transforming today into yesterday", 
  "i am the canvas in which good things paint over me", 
  "vulnerable, expressive, a little unpredictable, this is the heart laid bare", 
  "슬픔이 파도처럼 밀려오는 사람이 있고, 물에 잉크가 퍼지듯이 서서히 물드는 사람도 있다",
  "the difference between 'was' and 'used to be' is that 'used to be' carries a sense of loss",
  "why live in the future when the future will come anyway",
  "in every ending, there is also a beginning",
  "like salt in the sea, they become part of you, and you carry them"]

// Get the form and add event listener
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('text1');
  const textbox = document.getElementById('textbox');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const inputText = textbox.value.trim();
    
    if (inputText) {
  
      textBank.push(inputText);

      
      
      
      textbox.value = '';
      

      alert('thanks for the quote!');
      
     
      console.log('Updated textBank:', textBank);
    }
  });
});

function setup() {
  createCanvas(windowWidth, windowHeight); // Set the size of the canvas
  colors[0] = color(45, 244, 0); // Initialize colors
  colors[1] = color(0, 0, 255);
  colors[2] = color(255,0,0);


  
//    text[1] = "park"
//     text[2] = "orange"
//      text[0] = "meow"



}

function draw() {
  if (mouseX >= windowWidth/4) {
      //background(255,255,255,sin(10));
      background(255,255,255,tan(.5))
      
    
       // Clear the canvas
  } else {
    background(255,255,255,60); 
  }


  // Generate random coordinates for the point
  x = random(width/cos(20));
  y = random(height);


  // Update the position of the point
  x += random(-speed, speed);
  y += random(-speed, speed);

  // Draw the point on the canvas
  fill(random(colors),random(colors),random(colors),80); // Set the point color to black
  circle(x, y, random(20,40)); 
  


  drawWithMouse();// Draw a circle at (x, y) with a radius of 10
}

function drawWithMouse() {
    if (mouseIsPressed) {
        background(0,0,0,0);
        
        // Draw a circle at the mouse position
        fill(random(colors),70); // Set color to black

        let randomText = random(textBank)
        textSize(random(15,40))
        text(randomText, mouseX, mouseY); // Draw a circle
    }
}