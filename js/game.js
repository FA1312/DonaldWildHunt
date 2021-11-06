// Getting canvas as a variable and defined context
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Class Player
class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }
  draw () {
    ctx.beginPath()
    /*The beginPath() method begins a path*/
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        /*The arc() method creates a circular arc centered at (x, y) with a radius of radius. The path starts at startAngle, ends at endAngle, and travels in the direction given by counterclockwise (defaulting to clockwise).*/
    ctx.fillStyle = this.color
    /*The CanvasRenderingContext2D.fillStyle property of the Canvas 2D API specifies the color, gradient, or pattern to use inside shapes. */
    ctx.fill()    
  }
  update(){
    this.draw();
  }
}

//class Enemy
class Enemy {
  constructor(x, y, radius, color, speed){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.speed = speed
  }
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
  update() {
    this.draw()
  }
  move() {
    setInterval(()=>{
      this.x = this.x + this.speed.x
      this.y = this.y + this.speed.y
  }, 1500)
  }
}

//Initialize variables
let player;
let enemies = [];
let bullets = []; // crear funcion shoot dentro de class Player o crear class Bullet y que maniobre como objeto solitario?


function start() {
  //paint my player and given features
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

  //enemies.update is not a function solucionado iterando dentro del array de enemies
}

spawnEnemies()
start()
update()
