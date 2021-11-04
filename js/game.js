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
  draw () {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        /*The arc() method creates a circular arc centered at (x, y) with a radius of radius. The path starts at startAngle, ends at endAngle, and travels in the direction given by counterclockwise (defaulting to clockwise).*/

    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }
  update(){
    this.draw();
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