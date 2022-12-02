import { Wa } from "./class.js";

import { Player } from "./class.js";
import { Deck } from "./class.js";
const deck = new Deck();
const generatePlayers = function (players) {
  const splitedDeck = deck
    .deckOriginal()
    .shuffle()
    .split(undefined, arguments.length);
  const generatedPlayers = [];
  for (let i = 0; i < arguments.length; i++) {
    const player = new Player(arguments[i], splitedDeck[i]);
    generatedPlayers.push(player);
  }
  return generatedPlayers;
};
const game = new Wa(generatePlayers("A", "B"));
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
    // console.log(game);
    // console.log(game.winner);
    game.winnerIs(winner[0]);
    console.log(game);
    game.emptyCurrent();
    game.getOneOrTwoCard(undefined, 1);
  }
  moreThan52cardes = game.checkResult();
}
console.log(`WINNER:${game.logResult()[0].name}`);
