//ＧＡＭＥＢＯＹ ＳＮＡＫＥ


//VARIABLES
const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext("2d"); //ctx == canvas context

const GAME_SPEED = 100;
const CANVAS_BORDER_COLOR = '#346856';
const CANVAS_BACKGROUND_COLOR = '#88c070';
const SNAKE_COLOR = '#081820'; //is the food color too
const SNAKE_BORDER_COLOR = '#e0f8d0';

let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150}
];
let score = 0;
let food_x;
let food_y;
let velocity_x = 10;
let velocity_y = 0;
let changingDirection = false;

//CALL FUNCTIONS
main();
createFood();
document.addEventListener("keydown", changeDirection)



//FUNCTIONS

    //MAIN
function main() {

    if (didGameEnd()) return;

    setTimeout(function onTick() {
      changingDirection = false;
      clearCanvas();
      ctx.fillText("SCORE:" + score,5,16);
      drawFood();
      advanceSnake();
      drawSnake();

      main();
    }, GAME_SPEED)
}

function clearCanvas(){
  ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
  ctx.strokeStyle = CANVAS_BORDER_COLOR;
  ctx.fillRect(0,0,gameCanvas.width,gameCanvas.height);
  ctx.strokeRect(0,0,gameCanvas.width,gameCanvas.height);
  ctx.font = "15px monospace";
  ctx.fillStyle = SNAKE_COLOR;
  ctx.moveTo(0,20);
  ctx.lineTo(320,20);
  ctx.stroke();
}

function didGameEnd() {
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
  }

  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > gameCanvas.width - 10;
  const hitToptWall = snake[0].y < 25;
  const hitBottomWall = snake[0].y > gameCanvas.height - 10;

  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}


    //FOOD
function randomCoordinates(min, max) {
  return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function createFood() {
  food_x = randomCoordinates(0, gameCanvas.width - 10);
  food_y = randomCoordinates(21, gameCanvas.height - 10);

  snake.forEach(function isFoodOnSnake(part) {
    const foodIsOnSnake = part.x == food_x && part.y == food_y
    if (foodIsOnSnake) createFood();
   });
}

function drawFood() {
    ctx.fillStyle = SNAKE_COLOR;
    ctx.strokeStyle = SNAKE_BORDER_COLOR;
    ctx.fillRect(food_x, food_y, 10, 10);
    ctx.strokeRect(food_x, food_y, 10, 10);
}


    //SNAKE
function advanceSnake() {
  const head = {x:snake[0].x + velocity_x, y:snake[0].y + velocity_y};
  snake.unshift(head);

  const didEatFood = snake[0].x === food_x && snake[0].y === food_y;
  if (didEatFood) {
     score += 10;
     createFood();
  }else {
     snake.pop();
  }
}

function drawSnake(){
  snake.forEach(drawSnakePart);
}

function drawSnakePart(snakePart){
  ctx.fillStyle = SNAKE_COLOR;
  ctx.strokeStyle = SNAKE_BORDER_COLOR;
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}





    //CONTROLS
function changeDirection(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  if (changingDirection) return;
  changingDirection = true;

  const keyPressed = event.keyCode;

  const goingUp = velocity_y === -10;
  const goingDown = velocity_y === 10;
  const goingRight = velocity_x === 10;
  const goingLeft = velocity_x === -10;

  if (keyPressed === LEFT_KEY && !goingRight) {
    velocity_x = -10;
    velocity_y = 0;
  }
  if (keyPressed === UP_KEY && !goingDown) {
    velocity_x = 0;
    velocity_y = -10;
  }
  if (keyPressed === RIGHT_KEY && !goingLeft) {
    velocity_x = 10;
    velocity_y = 0;
  }
  if (keyPressed === DOWN_KEY && !goingDown) {
    velocity_x = 0;
    velocity_y= 10;
  }
}
