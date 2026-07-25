const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const hpText = document.getElementById("hp");
const foodText = document.getElementById("food");

const left = document.getElementById("left");
const right = document.getElementById("right");
const up = document.getElementById("up");
const down = document.getElementById("down");

let hp = 100;
let food = 100;

const player = {
  x: 160,
  y: 230,
  size: 20,
  speed: 15
};

left.onclick = () => player.x = Math.max(0, player.x - player.speed);
right.onclick = () => player.x = Math.min(canvas.width - player.size, player.x + player.speed);
up.onclick = () => player.y = Math.max(0, player.y - player.speed);
down.onclick = () => player.y = Math.min(canvas.height - player.size, player.y + player.speed);

const foodItem = {
  x: 80,
  y: 120,
  size: 15
};
