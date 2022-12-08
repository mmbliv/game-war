# GAME-WAR

## About The Game

"Game-WAR" is a poker game where players compete to be the one with all of the cards. The game is easy to play - each player reveals one card per round, and the player with the highest card wins the round and all of the cards on the table. The game ends when one player has all of the cards.

### The Deal

- The deck is divided evenly, with each player receiving the same amount of cards.

### The Play

- Each player give out one card for each round, and the player with the highest card takes all the cards and put them on the bottom of its stack.
- If there are more than one players who have the highest card, it is War. Those players will give out another three cards out, and compare the one on the top of those extra three cards. If there is only one winner this time, it can get all the cards on table. Otherwise, repeat this step, until we only get one who has the highest card.

## Instructions

- This game will run autamatically when you run the `index.js` file.
- This game will generate four players by default who have name of "A", "B", "C" and "D" with the function `generatePlayers("A", "B", "C", "D")`
- You can change how many players you want to have to play this game and their name by changing the input of `generatePlayers()`
- The result of each round will be logged out to the console.
- When the game ends, the winner be be logged out to the console.
