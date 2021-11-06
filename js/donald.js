class Player {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  playerHit(){
    this.enemies.forEach((enemy, index)=>{
      const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y)
      if (distance - enemy.radius - player.radius < 1) {
        console.log("gameover")
      }
    })
  }
}