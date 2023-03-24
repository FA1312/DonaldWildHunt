# Donald Wild Hunt
​
Donald wild Hunt
​
## Description
​
Democracy is at stake, there is only one person that can defend us all!
Take the lead and guide our president to save the democracy.
​
## MVP
​
The MVP includes the following items graphically represented by colors:
​
- One defender
- Bullet to shoot at the direction of the enemies
- Incoming attackers to destroy coming at you
- 5 lives
​- Once touched by an enemy you lose one life
​
## Backlog / nice to have
​
- Funny sounds
- Bomb item - clear the game
- Pause game
- Animation when item is destroyed 
​
## Data structure
- class Player {
properties: x, y, radius, color
Methods: _shoot
}
​
- class Enemy {
properties: direction, x, y, radius
Methods: _spawn, _move
}
​
- class Game { properties: player, enemies. Methods:
\_start
\_update
\_paint
}
​
## States & States Transitions
​
Definition of the different states and their transition (transition functions):
​
- Introduction
- splashScreen - Start button
- gameScreen - Game itself
- gameoverScreen - If you have been hit three times, the game is over (start again)
​
## Links
​
​
[Link url]
​
### Git
​
URls for the project repo and deploy
Link Repo
https://github.com/FA1312/DonaldWildHunt
​
Deploy
https://fa1312.github.io/DonaldWildHunt/
