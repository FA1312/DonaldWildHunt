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
}

//Initialize variables
let player;
let enemies = [];
let bullets = [];


function start() {
  //paint my player and given features
  player = new Player(canvas.width/2, canvas.height, 40, 'red')
}

function spawnEnemies() {
  setInterval(()=>{
    let x = Math.random() * canvas.width /* Problema 1 los enemigos aparecen en punto random del mapa, yo quiero que esten al borde del canvas */
    let y = Math.random() * canvas.height
    const radius = 20
    const color = "green"
    const speed = 10 // Ni idea?!?!? crear distancia y que se vaya quedando mas cerca???
    let dist = 
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
  }
  //enemies.update is not a function solucionado iterando dentro del array de enemies
}

spawnEnemies()
start()
update()
