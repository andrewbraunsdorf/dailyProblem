// Create a deck of 28 cards (A-7)

let deckOfCards = [];

function createDeck() {
  let deck = {
    // suits: [0, 1, 2, 3],
    suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    card: ["A", 2, 3, 4, 5, 6, 7],
  }
  for (i = 0; i < deck.suits.length; i++) {
    for (j = 0; j < deck.card.length; j++) {
      let object = {
        suit: deck.suits[i],
        card: deck.card[j]
      }
      deckOfCards.push(object);
    }
  }

  // return deckOfCards;
  console.log(deckOfCards);
}

createDeck();