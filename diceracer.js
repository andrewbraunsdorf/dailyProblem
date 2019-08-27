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

  var m = deckOfCards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = deckOfCards[m];
    deckOfCards[m] = deckOfCards[i];
    deckOfCards[i] = t;
  }

  // return deckOfCards;
  console.log(deckOfCards);
}

function rolldice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log("You rolled a " + roll);
  return roll;
};

rolldice();
createDeck();