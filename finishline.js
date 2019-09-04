var deckOfCards = [];

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

  tempDeckOfGoodCards = deckOfCards.slice(0, 6);
  deckOfCards.slice(0, 6);
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
  let m2 = deckOfCards.length, t2, i2;

  // While there remain elements to shuffle…
  while (m2) {

    // Pick a remaining element…
    i2 = Math.floor(Math.random() * m2--);

    // And swap it with the current element.
    t2 = deckOfCards[m2];
    deckOfCards[m2] = deckOfCards[i2];
    deckOfCards[i2] = t2;
  }
  // Works
  // deckOfCards.push(tempDeckOfGoodCards.splice(0, 1));
  // deckOfCards.push(tempDeckOfGoodCards.splice(0, 1));
  // deckOfCards.push(tempDeckOfGoodCards.splice(0, 1));
  // deckOfCards.unshift(tempDeckOfGoodCards.splice(0, 1));
  // deckOfCards.unshift(tempDeckOfGoodCards.splice(0, 1));
  // deckOfCards.unshift(tempDeckOfGoodCards.splice(0, 1));

  deckOfCards.push(tempDeckOfGoodCards[0]);
  deckOfCards.push(tempDeckOfGoodCards[1]);
  deckOfCards.push(tempDeckOfGoodCards[2]);
  deckOfCards.unshift(tempDeckOfGoodCards[3]);
  deckOfCards.unshift(tempDeckOfGoodCards[4]);
  deckOfCards.unshift(tempDeckOfGoodCards[5]);

  console.log(deckOfCards);
  console.log(tempDeckOfGoodCards);
}
createDeck();