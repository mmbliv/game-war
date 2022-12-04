import { War } from "./class.js";
import { generatePlayers } from "./utils.js";
const players = generatePlayers("A", "B", "C", "D", "E", "F", "G");

const game = new War(players);
// generatePlayers is a function which will generate an array of players;
// It will take players' name as input.

let finished = game.isGameFinished();
// isGameFinished method is used to check if anyone has got all cards.
// isGameFinished will by defalut take all player as an array as input.
//  If there is one who has got all cards, this method will return the winner. If there is no, this method will return false.
while (!finished) {
  // If there is no one getting all cards, we continue the game
  if (!game.currentCards.length) {
    // currentCards property contains the cards that players have given out but have not given to the winner
    // for the first round, currentCards is an empty array, in this scenario, we will use getOneOrTwoCard method to give each player one card to play
    game.getOneOrTwoCard(undefined, 1);
    // the getOneOrTwoCard method will take two arguments, the first one is an array which has a default value of all the players, and the second is how many cards you want to have from each player, you you shoose 1 or 3;
    // this method  will cards from each player's stack property and put them into currentCards
    // also it will assign the card value to each player's cardValue property.
  } else {
    let winner = game.runAndCompare();
    // runAndCompare method will take an array of players as the argument, and the default input is all of the players
    // this method will compare each player's cardValue, and put the players who has the biggest cardValue into game's property winner as an array.
    // and will also return those winners as an array.

    while (winner.length > 1 && !finished) {
      // if we have more than one players who have the biggest cardValue, which means there is a war
      //  we will let those players to play this game until we only have one player who has the biggest cardValue
      // at the same time we need to check if someone has got all cards. If there is one, we need to get out of this loop also.
      game.getOneOrTwoCard(winner, 3);
      // we use getOneOrTwoCard method again to get three cards from each of those 'winners'.
      winner = game.runAndCompare(winner);
      // we use runAndCompare method again to compare cardValue of those 'winners'
      finished = game.isGameFinished();
      // isGameFinished will be used to update 'finished' status in each round of game.
    }

    game.addCardsToWinner(winner[0]);
    // when we finally get the winner of each round
    // we use addCardsToWinner method to put currentsCards into this winner's stack property.
    // this method will take a player as an argument
    console.log(game.logResult());
    // logResult will return the result of this round

    game.emptyCurrent();
    // emptyCurrent method will empty the currentCards property, in this way, we can start next round
    finished = game.isGameFinished();
    // we need to use isGameFinished to update if we have someone got all cards before we start next round.
    game.getOneOrTwoCard(undefined, 1);
    // we use getOneOrTwoCard to start the next round
  }
}
console.log(`Winner: ${finished[0].name}`);
