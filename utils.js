import { Player } from "./class.js";
import { Deck } from "./class.js";

export const generatePlayers = function (players) {
  const deck = new Deck();
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
