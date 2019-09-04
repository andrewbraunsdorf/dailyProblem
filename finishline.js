let deckOfCards = [];

function createDeck() {
  let tempDeckOfGoodCards = [];
  let deckGood = {
    // suits: [0, 1, 2, 3],
    suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    card: [3, 4, 5, 6, 7, 8, 9, 10],
  }
  for (let i = 0; i < deckGood.suits.length; i++) {
    for (j = 0; j < deckGood.card.length; j++) {
      let object = {
        suit: deckGood.suits[i],
        card: deckGood.card[j]
      }
      deckOfCards.push(object);
    }
  }
  console.log(deckOfCards);
}
createDeck();