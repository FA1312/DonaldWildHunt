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
    this.bomb = 2;
    this.gameOver = options.gameOver;
  }

  _clean() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  _drawPlayer() {
    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
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
    this.ctx.fillStyle = "green";
    this.ctx.beginPath();
    this.ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = enemy.color;
    this.ctx.fill();
    enemy.move();
  });
}

  _drawBullets() {
    this.bullets.forEach((bullet) => {
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
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
      const radius = 65 * Math.random() + 10;
      const color = "#" + ((1<<24)*Math.random() | 0).toString(16);
      const angle = Math.atan2(canvas.height - y, canvas.width / 2 - x);
      const speed = {
        x: Math.cos(angle),
        y: Math.sin(angle)
      };
      this.enemies.push(new Enemy(x, y, radius, color, speed));
    }, 1000);
  }

/*  _shootBullets() {
      addEventListener('keypress', (event) => {
      if(event.code == "Space") {
      const x = this.player.x;
      const y = this.player.y;
      const radius = 5;
      const color = "white";
      const angle = Math.atan2(this.target.y - y, this.target.x - x);
      const speed = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5
      };
      this.bullets.push(new Bullet(x, y, radius, color, speed));
      }
      })
  }
*/

  _assignControls() {
    window.addEventListener("mousemove", (event) => {
      this.target.x = event.clientX;
      this.target.y = event.clientY;
    });
    window.addEventListener('keypress', (event) => {
      if(event.code == "Space") {
      const x = this.player.x;
      const y = this.player.y;
      const radius = 5;
      const color = "white";
      const angle = Math.atan2(this.target.y - y, this.target.x - x);
      const speed = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5
      };
      this.bullets.push(new Bullet(x, y, radius, color, speed));
      }
      });
    window.addEventListener('keypress', (event) => { 
      if(event.key === "b") {
        setTimeout(() => {
        this.player.radius = 10000;
        }, 0)
        setTimeout(() => {
        this.player.radius = 40;
          }, 300)
        this.bomb -= 1;
        this.enemies = [];
        this.score += 500;
          if (this.bomb === -1) {
            alert("Greta Thunberg is complaining that our bombs are polluting the world")
            setTimeout(() => {
              this.player.radius = 10000;
              }, 0)
              setTimeout(() => {
              this.player.radius = 40;
                }, 300)
            this.score -= 5000
          }
          if (this.bomb === -2) {
            alert("Here it comes another sanction from FAKE ONU organization")
            setTimeout(() => {
              this.player.radius = 10000;
              }, 0)
              setTimeout(() => {
              this.player.radius = 40;
                }, 300)
            this.score -= 10000
          }
        if(this.bomb === -3) {
          alert("It's over, I have been impeached by COMMUNISTS")
          setTimeout(() => {
            this.player.radius = 10000;
            }, 0)
            setTimeout(() => {
            this.player.radius = 40;
              }, 300)
          
          this.life = 0;
        }
      }
    });
    window.addEventListener('keypress', (event) => {
      if(event.key == "p") {
        alert("War for freedom is paused!")
      }
    })
  }

  _cleanBulletsOutsideCanvas() {
    this.bullets.forEach((bullet, index) => {
      if (bullet.y + 1000 < this.canvas.height) {
        this.bullets.splice(index, 1);
        this.score -= 50
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
    ctx.font = "32px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Score: "+ this.score, 18, 40);
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
  
  _drawBomb(){
    ctx.font = "24px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Bomb: "+ this.bomb, 38, 80);
  }

  _drawLives(){
    ctx.font = "42px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+ this.life, canvas.width -180, canvas.height -60);
  }

  _gameOver(){
    if (this.life == 0){
      this.gameOver.style.visibility = "visible";
      this.canvas.style.display = "none";
    }
    if (this.score === -30000){
      alert("Communists won! I am bankrupt!")
      this.gameOver.style.visibility = "visible";
      this.canvas.style.display = "none";
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
    this._gameOver();
    this._drawScore();
    this._drawLives();
    this._drawBomb();
    requestAnimationFrame(this._update.bind(this));
  }

  start() {
    this._assignControls()
    this._spawnEnemies();
    window.requestAnimationFrame(this._update.bind(this));
  }
}

const canvas = document.querySelector("#game");
canvas.width = innerWidth
canvas.height = innerHeight
const ctx = canvas.getContext("2d");
const gameOver = document.querySelector("#gameOver");
const donaldGame = new Game({
  canvas: canvas,
  ctx: ctx,
  player: new Player(canvas.width / 2, canvas.height, 40, "red"),
  gameOver: gameOver
});
donaldGame.start();
