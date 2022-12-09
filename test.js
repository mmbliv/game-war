import { Deck, War } from "./class.js";

import { generatePlayers } from "./utils.js";
const players = generatePlayers("a", "b", "c", "d", "f", "g");
const game = new War(players);

console.log(game.players[0].stack.length);
const a = function (...players) {
  console.log(players);
  console.log(arguments);
};
a("a", "b");
const b = ["a"];
let bn = b[0];
bn = "b";
console.log(bn);

const classMate = ["Angelique", "Joe", "Su"];

classMate.splice(1, 0, "item");
console.log(classMate);
const nums = [1, 4, 2, 0, 1000];
console.log(nums.sort());
