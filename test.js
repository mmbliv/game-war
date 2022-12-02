import { Wa } from "./class.js";

import { Player } from "./class.js";
import { Deck } from "./class.js";
const deck = new Deck();
const a = deck.deckOriginal().shuffle().split(undefined, 4);
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
const game = new Wa(generatePlayers("A", "B", "D", "C"));
game.getOneOrTwoCard(undefined, 1);
console.log(game);
game.compare();
console.log(game);
game.logResult();
