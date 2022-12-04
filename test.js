import { Deck, War } from "./class.js";
import { generatePlayers } from "./utils.js";
const players = generatePlayers("a", "b", "c", "d", "f", "g");
const game = new War(players);
console.log(game.players[0].stack.length);
