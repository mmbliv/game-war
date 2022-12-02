import { War } from "./class.js";
import { generatePlayers } from "./utils.js";
const game = new War(generatePlayers("A", "B", "C", "D"));

let moreThan52cardes = game.checkResult();
while (!moreThan52cardes) {
  if (!game.currentCards.length) {
    game.getOneOrTwoCard(undefined, 1);
  } else {
    let winner = game.compare();
    while (winner.length > 1 && !moreThan52cardes) {
      game.getOneOrTwoCard(winner, 3);
      winner = game.compare(winner);
      moreThan52cardes = game.checkResult();
    }
    game.winnerIs(winner[0]);
    console.log(game.logResult());
    game.emptyCurrent();
    game.getOneOrTwoCard(undefined, 1);
  }
  moreThan52cardes = game.checkResult();
}
console.log(`WINNER:${game.logResult()[0].name}`);
