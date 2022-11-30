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
while (newGame.playerOne.length < 52 && newGame.playerTwo.length < 52) {
  if (newGame.playerOneCardValue !== newGame.playerTwoCardValue) {
    if (newGame.playerOneCardValue > newGame.playerTwoCardValue) {
      newGame.win("playerOne");
    } else {
      newGame.win("playerTwo");
    }
    newGame.emptyCurrent();
    newGame.getOneOrTwoCard("playerOne", 1);
    newGame.getOneOrTwoCard("playerTwo", 1);
  } else if (
    newGame.playerOneCardValue === newGame.playerTwoCardValue &&
    (newGame.playerOneCardValue || newGame.playerTwoCardValue)
  ) {
    newGame.win("war");
    newGame.getOneOrTwoCard("playerOne", 2);
    newGame.getOneOrTwoCard("playerTwo", 2);
  } else {
    newGame.getOneOrTwoCard("playerOne", 1);
    newGame.getOneOrTwoCard("playerTwo", 1);
  }
  if (
    newGame.playerOne.length === 0 &&
    newGame.playerOneCardValue <= newGame.playerTwoCardValue
  ) {
    newGame.win("playerTwo");
    newGame.emptyCurrent();
    // console.log(newGame.showResult());
    console.log("The winner is playerTwo");
    break;
  }
  if (
    newGame.playerTwo.length === 0 &&
    newGame.playerTwoCardValue <= newGame.playerOneCardValue
  ) {
    newGame.win("playerOne");
    newGame.emptyCurrent();
    console.log("The winner is playerOne");
    break;
  }

  console.log(newGame.showResult());
}

// console.log(newGame.winner);
// newGame.compare();
// newGame.compare();
// newGame.compare();
// newGame.compare();
// newGame.compare();
// console.log(playerOne);
