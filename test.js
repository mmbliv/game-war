import { Wa } from "./class.js";

import { Player } from "./class.js";
import { Deck } from "./class.js";
const deck = new Deck();
const a = deck.deckOriginal().shuffle().split();
console.log(a[0].length);
