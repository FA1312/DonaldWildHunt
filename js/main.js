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
    this.score = 0;
    this.life = 3;
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
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
}


  _drawEnemies() {
    this.enemies.forEach((enemy) => {
      this.ctx.fillStyle = "grthis._playerHit();en";
      this.ctx.beginPath();
      this.ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = enemy.color;
      this.ctx.fill();
      enemy.move();
    });
  }

  _drawBullets() {
      this.bullets.forEach((bullet) => {
      this.ctx.fillStyle = "white";querySelector("#gameOver")
      this.ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = bullet.color;
      this.ctx.fill();
      bullet.move();
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
    }, 2000);
    // if (this.enemies.y > 400) {
    //   this.enemies.splice(i, 1);
    // }
  }

  _shootBullets() {
      addEventListener('keypress', (event) => {
      if(event.code == "Space") {
      const x = this.player.x;
      const y = this.player.y;
      const radius = 5;
      const color = "white";
      const angle = Math.atan2(this.target.y - y, this.target.x - x);
      const speed = {
        x: Math.cos(angle) * 8,
        y: Math.sin(angle) * 8
      };
      this.bullets.push(new Bullet(x, y, radius, color, speed));
      }
      })
  }

  _assignControls() {
    window.addEventListener("mousemove", (event) => {
      this.target.x = event.clientX;
      this.target.y = event.clientY;
    });
  }

  _cleanBulletsOutsideCanvas() {
    this.bullets.forEach((bullet, index) => {
      if (bullet.y + 1000 < this.canvas.height) {
        this.bullets.splice(index, 1);
      }
      if (bullet.x - bullet.radius < 0) {
        setTimeout(()=> {
          this.bullets.splice(index, 1)
        }, 0)
      }
    });
  }

  _destroyEnemies() {
    this.enemies.forEach((enemy, index) => {
      this.bullets.forEach((bullet, j) => {
        const distance = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y)
        if (distance - enemy.radius - bullet.radius < 1) {
          setTimeout(() => {
          delete this.enemies[index]
          delete this.bullets[j]
          this.score += 100
          }, 0)
        }
      })
    })
  }

  _drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+ this.score, 8, 20);
  }

  _cleanEnemiesOutsideCanvas() {
    this.enemies.forEach((enemy, index) => {
      if (enemy.y > this.canvas.height) {
        enemy.removeInterval();
        this.enemies.splice(index, 1);
      }
    })
  }
  _playerHit(){
    this.enemies.forEach((enemy, index)=>{
        const distance = Math.hypot(this.player.x - enemy.x, this.player.y - enemy.y)
        if (distance - enemy.radius - this.player.radius < 1) {
          this.enemies.splice(index, 1)
          this.life -= 1
        }
      })
  }
  
  _drawLives(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+ this.life, canvas.width -100, canvas.height -20);
  }

  _gameOver(){
    if (this.life == 0){
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval);
    }
  }
  
  _update() {
    this._clean();
    this._drawPlayer();
    this._drawEnemies();
    this._drawBullets();
    this._destroyEnemies();
    this._cleanEnemiesOutsideCanvas();
    this._cleanBulletsOutsideCanvas();
    this._playerHit();
    this._drawScore();
    this._drawLives();
    this._gameOver();
    requestAnimationFrame(this._update.bind(this));
  }

  start() {
    this._assignControls()
    this._spawnEnemies();
    this._shootBullets();
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
