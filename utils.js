import { Player } from "./class.js";
import { Deck } from "./class.js";

export const generatePlayers = function (...players) {
  const deck = new Deck();
  const splitedDeck = deck.shuffle().split(undefined, players.length);
  const generatedPlayers = [];
  // if (typeof splitedDeck === "string") {
  //   return splitedDeck;
  // }
  for (let i = 0; i < players.length; i++) {
    const player = new Player(players[i], splitedDeck[i]);
    generatedPlayers.push(player);
  }
  return generatedPlayers;
};
