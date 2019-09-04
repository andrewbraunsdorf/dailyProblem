let deckOfCards = [];

function createDeck() {
  let tempDeckOfGoodCards = [];
  let deckGood = {
    // suits: [0, 1, 2, 3],
    suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    card: [3, 4, 5, 6, 7, 8, 9, 10]
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
  let m = deckOfCards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = deckOfCards[m];
    deckOfCards[m] = deckOfCards[i];
    deckOfCards[i] = t;
  }

  tempDeckOfGoodCards = deckOfCards.slice(0, 4);
  let deckBad = {
    // suits: [0, 1, 2, 3],
    suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    card: [2, 11, 12, 13, 14],
  }
  for (let i = 0; i < deckBad.suits.length; i++) {
    for (j = 0; j < deckBad.card.length; j++) {
      let object = {
        suit: deckBad.suits[i],
        card: deckBad.card[j]
      }
      deckOfCards.push(object);
    }
  }
  console.log(deckOfCards);
}
createDeck();