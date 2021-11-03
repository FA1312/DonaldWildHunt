const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let enemies = [];
let bullets = [];

let mouse = {
  x: canvas.width/2,
  y: canvas.height/2
}

addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
  console.log(mouse)
});

addEventListener('click', shoot);
addEventListener('keypress', (event) => {
  if(event.code == "Space") {
    shoot();
  }
})

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

function shoot() {
  let bullet = new Player(player.x, player.y, 15, 'white')
  let velocityx = mouse.x - bullet.x
  let velocityy = mouse.y - bullet.y
  let speed = 6
  let distance = Math.sqrt(velocityy * velocityy + velocityx + velocityx)
  bullet.dx = velocityx / distance
  bullet.dy = velocityy / distance
  bullet.dx *= speed;
  bullet.dy *= speed;
  bullets.push(bullet);
}

let player;

function start() {
  player = new Player(canvas.width/2, canvas.height, 30, 'blue')
}

function update() {
  requestAnimationFrame(update);
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // Bullets
  for (let i = 0; i < bullets.length; i++) {
    let bullet = bullets[i];

    bullet.x += bullet.dx;
    bullet.y += bullet.dy;

    if (
      bullet.x < 0 ||
      bullet.x > canvas.width ||
      bullet.y < 0 ||
      bullet.y > canvas.height
    ) {
      bullets.splice(i, 1);
      console.log(bullets);
    }

    bullet.update();
  }
  //Enemies
   player.update()
}

start()
update()