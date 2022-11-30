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

export class War {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.playerOneCardValue = 0;
    this.playerTwoCardValue = 0;
    this.winner = "war";
    this.currentCards = [];
  }
  getOneOrTwoCard(player, cardCount) {
    let card = null;
    let cardTwo = null;

    if (cardCount === 1) {
      if (player === "playerOne") {
        card = this.playerOne.shift();
        if (card) {
          this.playerOneCardValue = card.Value;
          this.currentCards.push(card);
        }
      }
      if (player === "playerTwo") {
        card = this.playerTwo.shift();
        if (card) {
          this.playerTwoCardValue = card.Value;
          this.currentCards.push(card);
        }
      }
    }
    if (cardCount === 2) {
      if (player === "playerOne") {
        card = this.playerOne.shift();
        cardTwo = this.playerOne.shift();
        if (card) {
          this.playerOneCardValue = card.Value;
        }
      }
      if (player === "playerTwo") {
        card = this.playerTwo.shift();
        cardTwo = this.playerTwo.shift();
        if (card) {
          this.playerTwoCardValue = card.Value;
        }
      }
      if (card) {
        this.currentCards.push(card);
      }
      if (cardTwo) {
        this.currentCards.push(cardTwo);
      }
    }
    return card;
  }
  showResult() {
    return [
      {
        playerOne: {
          card: this.playerOneCardValue,
          cardsLeft: this.playerOne.length,
        },
      },
      {
        playerTwo: {
          card: this.playerTwoCardValue,
          cardsLeft: this.playerTwo.length,
        },
      },

      { winner: this.winner },
      { cardsOnTable: this.currentCards.length },
    ];
  }
  win(player) {
    if (player === "playerOne" && this.currentCards.length) {
      this.currentCards = this.shuffle(this.currentCards);
      this.playerOne.push(...this.currentCards);
    }
    if (player === "playerTwo" && this.currentCards.length) {
      this.currentCards = this.shuffle(this.currentCards);
      this.playerTwo.push(...this.currentCards);
    }
    this.winner = player;
  }
  emptyCurrent() {
    this.currentCards = [];
  }
  shuffle(cards) {
    const deck = [...cards];
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
  }
}

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}
class Deck {
  constructor() {
    this.suits = ["diamonds", "hearts", "spades", "clubs"];
    this.deck = [];
    this.shuffledDeck = [];
  }
  deckOriginal() {
    for (let i = 2; i <= 14; i++) {
      for (let j = 0; j <= 3; j++) {
        const card = new Card(i, this.suits[j]);
        this.deck.push(card);
      }
    }
    return this;
  }
  shuffle(cards = this.deck) {
    const deck = [...cards];
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
    this.shuffledDeck = deck;
    return this;
  }
  split(cards = this.shuffledDeck, stacks = 2) {
    if (cards.length % stacks !== 0) {
      return "cannot be splitted evenly";
    }
  }
}
const deck = new Deck();
deck.deckOriginal();
console.log(deck.deck);
console.log(deck.shuffle());
