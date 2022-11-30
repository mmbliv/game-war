// 4. we need a method to get one card from each stack(subtrack one card from each stack, add 2 cards to current cards, and return two numbers)
// while none of the player's card is equal to 52, continue the game
// 5. we need a method to compare those two numbers
//  if someone wins, add current cards to winner's stack, print the imformation, and get one card from each stack again
//  if there is a war, get two cards from each stack
// 6. else end the game and print the winner
import { split } from "./utils.js";
import { War } from "./class.js";
const [playerOne, playerTwo] = split();
const newGame = new War(playerOne, playerTwo);
newGame.getOneOrTwoCard("playerOne", 1);
newGame.getOneOrTwoCard("playerTwo", 1);
while (newGame.playerOne.length < 52 && newGame.playerTwo.length < 52) {
  newGame.compare();
}
newGame.showResult();

// console.log(newGame.winner);
// newGame.compare();
// newGame.compare();
// newGame.compare();
// newGame.compare();
// newGame.compare();
// console.log(playerOne);
