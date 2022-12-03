import { War } from "./class.js";
import { generatePlayers } from "./utils.js";
const game = new War(generatePlayers("A", "B", "C", "D"));

let finished = game.isGameFinished();

while (!finished) {
  if (!game.currentCards.length) {
    game.getOneOrTwoCard(undefined, 1);
  } else {
    let winner = game.runAndCompare();

    while (winner.length > 1 && !finished) {
      game.getOneOrTwoCard(winner, 3);
      winner = game.runAndCompare(winner);
      finished = game.isGameFinished();
    }

    game.addCardsToWinner(winner[0]);

    console.log(game.logResult());

    game.emptyCurrent();
    game.getOneOrTwoCard(undefined, 1);
  }

  finished = game.isGameFinished();
}

console.log(`WINNER:${game.logResult()[0].name}`);
