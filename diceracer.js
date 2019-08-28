// Create a deck of 28 cards (A-7)
// create one 6 sided die
// shuffle deck
// confirm the first 2 cards and the last 2 cards are not A, 2, 6, or 7

let deckOfCards = [];


function createDeck() {
  let tempDeckOfGoodCards = [];
  let deckGood = {
    // suits: [0, 1, 2, 3],
    suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    card: [3, 4, 5],
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
    card: [3, 4, 5],
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
  deckOfCards.push(tempDeckOfGoodCards[0]);
  deckOfCards.push(tempDeckOfGoodCards[1]);
  deckOfCards.unshift(tempDeckOfGoodCards[2]);
  deckOfCards.unshift(tempDeckOfGoodCards[3]);

  // // Adds them as an array
  // deckOfCards.push(tempDeckOfGoodCards.splice(0, 1));
  // deckOfCards.push(tempDeckOfGoodCards.splice(0, 1));
  // deckOfCards.unshift(tempDeckOfGoodCards.splice(0, 1));
  // deckOfCards.unshift(tempDeckOfGoodCards.splice(0, 1));


  // while (deckOfCards[0] === 1 || deckOfCards[1] === 2 || deckOfCards[1] === 6 || deckOfCards[1] === 7) {
  //   let temp = [];
  //   if (deckOfCards[0] <= 2 || deckOfCards[0] >= 6) {
  //     deckOfCards.splice(0, 1);
  //   }
  // }

  // while (deckOfCards[1] === 1 || deckOfCards[1] === 2 || deckOfCards[1] === 6 || deckOfCards[1] === 7) {
  //   let temp = [];
  //   if (deckOfCards[0] <= 2 || deckOfCards[0] >= 6) {
  //     deckOfCards.splice(1, 1);
  //   }

  // }

  // for (let i = 0; i < deckOfCards.length; i++) {
  //   if (deckOfCards[i] != "A", 2, 3, 4) {

  //   }
  // }

  // return deckOfCards;
  console.log(deckOfCards);
  console.log(tempDeckOfGoodCards);
}

function rolldice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log("You rolled a " + roll);
  return roll;
};

rolldice();
createDeck();