//ＧＡＭＥＢＯＹ ＳＮＡＫＥ

const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext("2d"); //ctx == canvas context

const GAME_SPEED = 100;
const CANVAS_BORDER_COLOR = '#346856';
const CANVAS_BACKGROUND_COLOR = '#88c070';
const SNAKE_COLOR = '#081820'; //is the food color too
const SNAKE_BORDER_COLOR = '#e0f8d0';

let snake = [{x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150},];
//let score =;
//let food_x =;
//let food_y =;
//let velocity_x =;
//let velocity_y =;

function drawSnakePart(snakePart){
  ctx.fillStyle = SNAKE_COLOR;  ctx.strokestyle = SNAKE_BORDER_COLOR;
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);}

function drawSnake() {  snake.forEach(drawSnakePart);}

ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
ctx.strokeStyle = CANVAS_BORDER_COLOR;

ctx.fillRect(0,0,gameCanvas.width,gameCanvas.height);
ctx.strokeRect(0,0,gameCanvas.width,gameCanvas.height);
