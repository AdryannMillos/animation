/** @type {HTMLCanvasElement}  */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
let gameFrame = 0;

const NUMBER_OF_ENEMIES = 100;
const enemiesArray = [];

class Enemy {
  constructor() {
    this.enemyImage = new Image();
    this.enemyImage.src = "./images/enemy1.png";
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHight / 2.5;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.enemyImage,
      this.frame * this.spriteWidth,
      this.frame,
      this.spriteWidth,
      this.spriteHight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < NUMBER_OF_ENEMIES; i++) {
  enemiesArray.push(new Enemy());
}
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach((item) => {
    item.update();
    item.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
