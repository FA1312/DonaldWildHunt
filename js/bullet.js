class Bullet {
  constructor(x, y, radius, color, speed){
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.speed = speed;   
  }

  move() {
      this.x = this.x + this.speed.x;
      this.y = this.y + this.speed.y;
  }
  
}