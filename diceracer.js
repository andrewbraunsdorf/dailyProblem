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
  deckOfCards.slice(0, 4);

  let deckBad = {
    // suits: [0, 1, 2, 3],
    suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    card: [1, 2, 6, 7],
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

createDeck();
var player1Position = -1;
let player2Position = -1;

function deckRacer() {
  // createDeck();
  let rollCounter = 0;
  // let diceRoll = rolldice();
  let i = 0;
  let j = 0;
  // while ((player1Position || player2Position) <= 28) {
  // console.log(diceRoll);
  while ((player1Position || player2Position) <= 27 && i <= 27) {
    // while ((player1Position <= 27 && i <= 27) || (player2Position <= 27 && j <= 27)) {
    let diceRoll = rolldice();
    if (rollCounter % 2 === 0) {
      if (diceRoll < deckOfCards[0].card || diceRoll == deckOfCards[0].card) {
        console.log(diceRoll);
        player1Position++;
        i++;
        rollCounter++;
      }
      else {
        // console.log(diceRoll <= deckOfCards[i].card);
        while (diceRoll < deckOfCards[i].card || diceRoll == deckOfCards[i].card) {
          player1Position += 1;
          i++;
          rollCounter++;
        }
      }
    } else {
      if (diceRoll < deckOfCards[0].card || diceRoll == deckOfCards[0].card) {
        console.log(diceRoll);
        player2Position++;
        j++;
        rollCounter++;
      }
      else {
        // console.log(diceRoll <= deckOfCards[i].card);
        while (diceRoll < deckOfCards[j].card || diceRoll == deckOfCards[j].card) {
          player2Position += 1;
          j++;
          rollCounter++;
        }
      }
    }
    // for (let rolls = 0; rolls < diceRoll; rolls++) {
    //   // if (deckOfCards[rolls].value < diceRoll)
    //   if (diceRoll < deckOfCards[rolls].value)
    //     rollCounter++;
    //   player1Position++;
    // }
    // console.log(rollCounter);
    console.log("Roll Counter:" + rollCounter);
    console.log("Player 1 position:" + player1Position);
    console.log("Player 1 i position:" + i);
    console.log("Player 2 position:" + player2Position);
    console.log("Player 2 j position:" + j);

    if (player1Position >= 27 && i >= 27) {
      console.log("Player 1 wins:" + player1Position);
      return;
    }
    if (player2Position >= 27 && j >= 27) {
      console.log("Player 2 wins:" + player2Position);
      return;
    }
    // deckRacer();
  }
}
deckRacer();

// const deckRacer2 = () => {
//   let deck = createDeck();


//   //   keep track of how far along player is through deck (gameboard)
//   let playerOnePosition = -1;
//   let playerTwoPosition = -1;

//   //   keep track of how many rolls each player takes
//   let playerOneTotalRolls = 0;
//   let playerTwoTotalRolls = 0;

//   //   the size of our dice to roll
//   let diceSize = 6;

//   // loop threw the deck until a player has reached the last card (card 27)
//   for (let j = 1; j < deckOfCards.length; j++) {
//     while (playerTwoPosition < 27 && playerOnePosition < 27) {
//       let firstRoll = rolldice();
//       let secondRoll = rolldice();

//       console.log("Player one roll: ", firstRoll);
//       console.log("Player one position", playerOnePosition);

//       console.log("Player two roll: ", secondRoll);
//       console.log("Player two position", playerTwoPosition);

//       //   if the current player one/two roll is greater than the current card value than we increase the position by the card index
//       //   if not greater than we increase the rolls, and try again
//       if (firstRoll >= deckOfCards[j]) {
//         playerOnePosition += j;
//       } else if (firstRoll < deckOfCards[j]) {
//         playerOneTotalRolls++;
//       }
//       if (secondRoll >= deckOfCards[j]) {
//         playerTwoPosition += j;
//       } else if (secondRoll < deckOfCards[j]) {
//         playerTwoTotalRolls++;
//       }
//     }
//   }
// }
// deckRacer2();