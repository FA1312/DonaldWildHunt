const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let enemies = [];
let bullets = [];


class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }
}


let player;

function start() {
  player = new Player(canvas.width/2, canvas.height, 30, 'blue')
}

function update() {
  requestAnimationFrame(update);
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  
   player.update()
}

start()
update()