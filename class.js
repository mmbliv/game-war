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
        this.playerOneCardValue = card.Value;
      }
      if (player === "playerTwo") {
        card = this.playerTwo.shift();
        this.playerTwoCardValue = card.Value;
      }
      this.currentCards.push(card);
    }
    if (cardCount === 2) {
      if (player === "playerOne") {
        card = this.playerOne.shift();
        cardTwo = this.playerOne.shift();
        this.playerOneCardValue = card.Value;
      }
      if (player === "playerTwo") {
        card = this.playerTwo.shift();
        cardTwo = this.playerTwo.shift();
        this.playerTwoCardValue = card.Value;
      }
      this.currentCards.push(card, cardTwo);
    }
    return card;
  }
  showResult() {
    console.log([
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
    ]);
  }
  compare() {
    if (this.playerOneCardValue === this.playerTwoCardValue) {
      this.showResult();
      this.getOneOrTwoCard("playerOne", 2);
      this.getOneOrTwoCard("playerTwo", 2);
    } else {
      if (this.playerOneCardValue > this.playerTwoCardValue) {
        this.playerOne.push(...this.currentCards);
        this.winner = "playerOne";
      } else {
        this.playerTwo.push(...this.currentCards);
        this.winner = "playerTwo";
      }
      this.showResult();
      this.playerTwoCardValue = 0;
      this.playerOneCardValue = 0;
      this.getOneOrTwoCard("playerOne", 1);
      this.getOneOrTwoCard("playerTwo", 1);
      this.currentCards = [];
    }
  }
}
