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

