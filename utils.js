// 1. splitting 52 cards into two stacks evenly and randomly.
//  there should be value to keep each player's card's value and cards' account, current cardsand winner.
// 2. use class to represent the game, and pass those two stacks as augments.
// 3. we need a method to get two cards from each stack (subtract two cards from each stack, add 4 cards to current cards,and return two numbers)
// 4. we need a method to get one card from each stack(subtrack one card from each stack, add 2 cards to current cards, and return two numbers)
// while none of the player's card is equal to 52, continue the game
// 5. we need a method to compare those two numbers
//  if someone wins, add current cards to winner's stack, print the imformation, and get one card from each stack again
//  if there is a war, get two cards from each stack
// 6. else end the game and print the winner

export const deckOrigin = () => {
  const A = 14;
  const J = 11;
  const Q = 12;
  const K = 13;
  const cards = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];
  const suits = ["diamonds", "hearts", "spades", "clubs"];
  const deckOrigin = cards.reduce(
    (res, card) => [
      ...res,
      ...suits.map((suit) => ({ Value: card, Suit: suit })),
    ],
    []
  );
  return deckOrigin;
};
const shuffle = () => {
  const deck = deckOrigin();
  let currentIndex = deck.length;
  let randomIndex = 0;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex],
      deck[currentIndex],
    ];
  }
  return deck;
};
export const split = () => {
  const deck = shuffle();
  const half = Math.floor(deck.length / 2);
  return [deck.slice(0, half), deck.slice(half)];
};
