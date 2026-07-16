let sushiX;
let sushiY;
let sushiSize = 80;

let score = 0;
let time = 30;
let startTime = 30;

let gameState = 'start';
let intervalId;

function setup() {
  const container = document.getElementById('game-container');
  const w = container ? container.clientWidth : 800;
  const h = 500;
  const cnv = createCanvas(w, h);
  if (container) cnv.parent('game-container');

  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  moveSushi();
}

function startGame() {
  score = 0;
  time = startTime;
  sushiSize = 80;
  gameState = 'playing';
  moveSushi();

  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    if (gameState === 'playing') {
      time--;
      if (time <= 0) {
        gameState = 'gameover';
      }
    }
  }, 1000);
}

function windowResized() {
  const container = document.getElementById('game-container');
  if (container) {
    const w = container.clientWidth;
    resizeCanvas(w, 500);
    moveSushi();
  }
}

function draw() {
  background(250, 245, 240);
  fill(40);
  textFont('Arial');

  if (gameState === 'start') {
    textSize(48);
    text('Sushi Chef Challenge', width / 2, 120);

    textSize(22);
    text('Click the sushi as fast as you can.', width / 2, 180);
    text('Each hit adds 1 second and makes sushi smaller.', width / 2, 220);

    drawButton(width / 2, 340, 220, 70, 'Start Game');
    return;
  }

  if (gameState === 'playing') {
    fill(0);
    textSize(28);
    text(`Score: ${score}`, 100, 40);
    text(`Time: ${time}`, width - 100, 40);

    if (time <= 0) {
      gameState = 'gameover';
      return;
    }

    textSize(sushiSize);
    text('🍣', sushiX, sushiY);
    return;
  }

  if (gameState === 'gameover') {
    textSize(50);
    fill(200, 0, 0);
    text('GAME OVER', width / 2, 140);

    fill(0);
    textSize(28);
    text(`Final Score: ${score}`, width / 2, 220);
    text('Click below to play again.', width / 2, 260);

    drawButton(width / 2, 340, 240, 70, 'Play Again');
    return;
  }
}

function mousePressed() {
  if (gameState === 'start') {
    if (isButtonClicked(width / 2, 340, 220, 70)) {
      startGame();
    }
    return;
  }

  if (gameState === 'gameover') {
    if (isButtonClicked(width / 2, 340, 240, 70)) {
      startGame();
    }
    return;
  }

  const d = dist(mouseX, mouseY, sushiX, sushiY);
  if (d < sushiSize * 0.5) {
    score++;
    time = min(time + 1, 60);
    sushiSize = max(40, 80 - score * 2);
    moveSushi();
  }
}

function drawButton(x, y, w, h, label) {
  fill(220);
  stroke(120);
  strokeWeight(2);
  rect(x, y, w, h, 18);
  noStroke();
  fill(20);
  textSize(24);
  text(label, x, y + 4);
}

function isButtonClicked(x, y, w, h) {
  return mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2;
}

function moveSushi() {
  sushiX = random(60, width - 60);
  sushiY = random(120, height - 80);
}
