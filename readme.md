# Donald Wild Hunt
​
Donald wild Hunt
​
## Description
​
Deomocracy is at stake, there is only one person that can defend us all!
Take the lead and guide our president to save the democracy.
​
## MVP
​
The MVP includes the following items graphically represented by colors:
​
- One defender
- Tower to shoot
- Building to defend
- Incoming attackers to destroy
​
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
properties: life, direction.
Methods: goRight, goLeft
}
​
- class Enemy {
properties: direction.
Methods: _appear, _move
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
- splashScreen - Instructions and start button
- gameScreen - Game itself
- Score 
- gameoverScreen - If you have been hit three times, the game is over (start again)
​
## Links
​
### Trello
​
[Link url]
​
### Git
​
URls for the project repo and deploy
[Link Repo]
[Link Deploy]
​
### Slides
​
URls for the project presentation (slides)
[Link Slides.com]