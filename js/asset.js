const playerSprite = {
  sprite: new Image(), // Creo un nuevo objeto imagen
  width: 150, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
  height: 170, // Le digo cuántos píxeles tiene que coger de height
  x: 0, // En qué x del archivo tiene que empezar a coger personaje
  y: 0 // En qué y del archivo tiene que empezar a coger personaje
};
playerSprite.sprite.src = "./img/donald.png";

