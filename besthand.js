// take two hands of seven cards and count the values and award a winner
// function(player1, player2)
// each player contains a hand, this can either be an array of cards or an object with other attributes
// each card is an object { suit: 0-3, value: 2-14}

// let hand1 = [{ suit: 0, value: 4 }, { suit: 3, value: 12 }, { suit: 0, value: 3 }, { suit: 2, value: 3 }, { suit: 3, value: 5 }, { suit: 2, value: 4 }, { suit: 0, value: 13 }];
// let hand2 = [{ suit: 1, value: 11 }, { suit: 1, value: 9 }, { suit: 2, value: 11 }, { suit: 3, value: 8 }, { suit: 0, value: 7 }, { suit: 3, value: 3 }, { suit: 1, value: 6 }];

let randomizedHand1 = [];
let randomizedHand2 = [];

// function randomizeHandsWithDuplicates(numberOfCards) {
//   for (let i = 0; i < numberOfCards; i++) {
//     let player1Cards = {
//       suit: Math.floor(Math.random() * 4),
//       value: Math.floor(Math.random() * 13) + 2
//     }
//     let player2Cards = {
//       suit: Math.floor(Math.random() * 4),
//       value: Math.floor(Math.random() * 13) + 2
//     }
//     randomizedHand1.unshift(player1Cards);
//     randomizedHand2.unshift(player2Cards);
//   }
// }
// randomizeHandsWithDuplicates(7);
// console.log(randomizedHand1);
// console.log(randomizedHand2);
let deckOfCards = [];
function createDeck() {
  let deck = {
    suits: [0, 1, 2, 3],
    card: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
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
  console.log(deckOfCards)
}
createDeck()

function besthand(player1, player2) {
  let player1handvalue = 0;
  let player2handvalue = 0;


  for (let i = 0; i < player1.length; i++) {
    player1handvalue += player1[i].value
  }
  for (let i = 0; i < player2.length; i++) {
    player2handvalue += player2[i].value
  }
  console.log('Player 1 value =', player1handvalue);
  console.log('Player 2 value =', player2handvalue);
  console.log('And the winnner is ... ')
  if (player1handvalue > player2handvalue) {
    console.log('Player 1');
  } else {
    console.log('Player 2');
  }
}

besthand(randomizedHand1, randomizedHand2);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// value 2-14
// console.log(Math.floor(Math.random() * 13) + 2)