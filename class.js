// 1. splitting 52 cards into two stacks evenly and randomly.
//  there should be value to keep each player's card's value and cards' account, current cardsand winner.
// 2. use class to represent the game, and pass those two stacks as augments.
// 3. we need a method to get two cards from each stack (subtract two cards from each stack, add 4 cards to current cards,and return two numbers)
// 4. we need a method to get one card from each stack(subtrack one card from each stack, add 2 cards to current cards, and return two numbers)
// while none of the player's card is equal to 52, continue the game
// 5. we need a method to compare those two numbers
//  if someone wins, add current cards to winner's stack, print the imformation, and get one card from each stack again
//  if there is a war, get two cards from each stack
class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

export class Deck {
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
    const cardsAmountForEachStack = cards.length / stacks;
    const splittedCards = [];
    for (let i = 0; i < cards.length; i += cardsAmountForEachStack) {
      let cardsInEachStack = [];
      if (i + cardsAmountForEachStack >= cards.length) {
        cardsInEachStack = cards.slice(i);
      } else {
        cardsInEachStack = cards.slice(i, i + cardsAmountForEachStack);
      }
      splittedCards.push(cardsInEachStack);
    }
    return splittedCards;
  }
}

export class Player {
  constructor(name, stack) {
    this.name = name;
    this.stack = stack;
    this.cardValue = 0;
  }
}

export class War {
  constructor(players) {
    this.players = players;
    this.winner = [];
    this.currentCards = [];
  }
  getOneOrTwoCard(players = this.players, cardCount) {
    players.forEach((player) => {
      let cardOne = null;
      let cardTwo = null;
      let cardThree = null;
      if (cardCount === 1) {
        cardOne = player.stack.shift();
        if (cardOne) {
          this.currentCards.push(cardOne);
          player.cardValue = cardOne.value;
        } else {
          player.cardValue = null;
        }
      }
      if (cardCount === 3) {
        cardOne = player.stack.shift();
        cardTwo = player.stack.shift();
        cardThree = player.stack.shift();
        if (cardOne) {
          this.currentCards.push(cardOne);
          player.cardValue = cardOne.value;
        } else {
          player.cardValue = null;
        }
        if (cardTwo) {
          this.currentCards.push(cardTwo);
        }
        if (cardThree) {
          this.currentCards.push(cardThree);
        }
      }
    });
  }
  compare(players = this.players) {
    this.winner = players.reduce(
      (winner, current) => {
        if (current.cardValue > winner[1]) {
          return [[current], current.cardValue];
        }
        if (current.cardValue === winner[1]) {
          return [[...winner[0], current], current.cardValue];
        }
        if (current.cardValue < winner[1] || !current.cardValue) {
          return winner;
        }
      },
      [[], 0]
    )[0];
    return this.winner;
  }
  logResult(players = this.winner) {
    const winner = players.map((player) => {
      return { ...player, stack: player.stack.length };
    });
    return winner;
  }
  emptyCurrent() {
    this.currentCards = [];
  }

  winnerIs(player) {
    player.stack.push(...this.shuffle(this.currentCards));
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
    return deck;
  }
  checkResult(players = this.players) {
    const winner = this.players.filter((player) => {
      if (player.stack.length >= 51) {
        return player;
      }
    });
    if (winner.length) {
      return winner;
    } else {
      return false;
    }
  }
}
