let sushiX;
let sushiY;

let score = 0;
let time = 30;

let gameOver = false;

function setup(){

createCanvas(800,500);

textAlign(CENTER,CENTER);

moveSushi();

setInterval(function(){

if(!gameOver){

time--;

if(time<=0){

gameOver=true;

}

}

},1000);

}

function draw(){

background(250,245,240);

fill(0);

textSize(28);

text("Score: "+score,100,40);

text("Time: "+time,700,40);

if(gameOver){

textSize(50);

fill(200,0,0);

text("GAME OVER",width/2,170);

fill(0);

textSize(32);

text("Final Score: "+score,width/2,240);

fill(220);

rect(width/2-90,310,180,60,15);

fill(0);

textSize(28);

text("Play Again",width/2,340);

return;

}

textSize(60);

text("🍣",sushiX,sushiY);

}

function mousePressed(){

if(gameOver){

if(mouseX>width/2-90 &&
mouseX<width/2+90 &&
mouseY>310 &&
mouseY<370){

score=0;

time=30;

gameOver=false;

moveSushi();

}

return;

}

let d=dist(mouseX,mouseY,sushiX,sushiY);

if(d<35){

score++;

moveSushi();

}

}

function moveSushi(){

sushiX=random(60,width-60);

sushiY=random(90,height-60);

}