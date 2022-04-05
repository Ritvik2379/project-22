screen_width=0;
screen_height=0;
apple="";
speak_data="";
to_number=0;

x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  loadImage(apple.png);
  apple= apple.png;
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 to_number=Number(content);
 if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "Started drawing apple";
  draw_apple="set";
 }
 else{
    document.getElementById("status").innerHTML = "The speech has not been recognized"; 
 }

 document.getElementById("status").innerHTML = "The speech has been recognized: " + content;   
}

function setup() {
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width,screen_height-150);
    canvas.positison(110);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    i=1;
    if(i == to_number){
      i + 1;
    }
    else if(i < to_number){
      i + 1;
    }
  }
  x="Math.floor(Math.random*700)";
  y="Math.floor(Math.random*400)";
  image(apple,x,y,50,50);
  document.getElementById("status").innerHTML= to_number + "Apples drawn";
  speak_data="";
  speak(speak_data);
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
