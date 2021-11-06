class Game {
  constructor(options) {
    this.ctx = options.ctx;
    this.player = options.player;
    this.enemies = [];
    this.bullets = [];
    this.canvas = options.canvas;
    this.target = {
      x: options.canvas.width / 2,
      y: options.canvas.height / 2,
    };
  }

  _clean() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  _drawPlayer() {
    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
    /*The beginPath() method begins a path*/
    this.ctx.arc(
      this.player.x,
      this.player.y,
      this.player.radius,
      0,
      Math.PI * 2
    );
    /*The arc() method creates a circular arc centered at (x, y) with a radius of radius. The path starts at startAngle, ends at endAngle, and travels in the direction given by counterclockwise (defaulting to clockwise).*/
    this.ctx.fillStyle = this.color;
    /*The CanvasRenderingContext2D.fillStyle property of the Canvas 2D API specifies the color, gradient, or pattern to use inside shapes. */
    this.ctx.fill();
  }

  _drawEnemies() {
    this.enemies.forEach((enemy) => {
      this.ctx.fillStyle = "green";
      this.ctx.beginPath();
      this.ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = enemy.color;
      this.ctx.fill();
      enemy.move();
    });
  }

  _spawnEnemies() {
    setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = 0;
      const radius = 20;
      const color = "green";
      const angle = Math.atan2(canvas.height - y, canvas.width / 2 - x);
      const speed = {
        x: Math.cos(angle),
        y: Math.sin(angle),
      };
      this.enemies.push(new Enemy(x, y, radius, color, speed));
    }, 1500);
    // if (this.enemies.y > 400) {
    //   this.enemies.splice(i, 1);
    // }
  }

  _assignControls() {
    window.addEventListener("mousemove", (event) => {
      this.target.x = event.clientX;
      this.target.y = event.clientY;
    });
  }

  _cleanEnemiesOutsideCanvas() {
    this.enemies.forEach((enemy, index) => {
      if (enemy.y > this.canvas.height) {
        enemy.removeInterval();
        this.enemies.splice(index, 1);
      }
    });
  }

  _update() {
    //clear the screen
    this._clean();
    this._drawPlayer();
    this._drawEnemies();
    this._cleanEnemiesOutsideCanvas();
    requestAnimationFrame(this._update.bind(this));
  }

  start() {
    this._spawnEnemies();
    window.requestAnimationFrame(this._update.bind(this));
  }
}

const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");
const donaldGame = new Game({
  canvas: canvas,
  ctx: ctx,
  player: new Player(canvas.width / 2, canvas.height, 40, "red"),
});
donaldGame.start();
