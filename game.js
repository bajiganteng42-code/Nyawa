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
function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(
    foodItem.x + foodItem.size / 2,
    foodItem.y + foodItem.size / 2,
    foodItem.size / 2,
    0,
    Math.PI * 2
  );
  ctx.fill();
}

function checkFood() {
  if (
    player.x < foodItem.x + foodItem.size &&
    player.x + player.size > foodItem.x &&
    player.y < foodItem.y + foodItem.size &&
    player.y + player.size > foodItem.y
  ) {
    food = Math.min(100, food + 20);

    foodItem.x = Math.random() * (canvas.width - 20);
    foodItem.y = Math.random() * (canvas.height - 20);
  }
}

setInterval(() => {
  food--;

  if (food <= 0) {
    food = 0;
    hp--;
  }

  hpText.textContent = hp;
  foodText.textContent = food;

  if (hp <= 0) {
    alert("Game Over!");
    location.reload();
  }
}, 1000);
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawFood();
  drawPlayer();
  checkFood();

  requestAnimationFrame(draw);
}

draw();
