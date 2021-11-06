let player;
let enemies = [];
let bullets = []; 
let target = {
  x: canvas.width,
  y: canvas.height
}

addEventListener('mousemove', (event) => {
  target.x = event.clientX
  target.y = event.clientY
});

function start() {
  player = new Player(canvas.width/2, canvas.height, 40, 'red')
}

function spawnEnemies() {
  setInterval(()=>{
    
    let x = Math.random() * canvas.width
    let y = 0
    const radius = 20
    const color = "green"
    const angle = Math.atan2(canvas.height - y, canvas.width / 2 - x)
    const speed = {
      x: Math.cos(angle),
      y: Math.sin(angle)
     }
    enemies.push(new Enemy(x, y, radius, color, speed))
  },1500)
  if (enemies.y > 400) {
    enemies.splice(i, 1)
  }
}
function shoot() {
  let x = player.x
}

function update() {
  requestAnimationFrame(update);
  //window.requestAnimationFrame(callback)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  //clear the screen
  player.update()
  for (var i = 0; i < enemies.length; i++){
    enemies[i].update()
    enemies[i].move()
  }
  
}

spawnEnemies()
start()
update()
