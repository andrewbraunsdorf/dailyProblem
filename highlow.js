// accept (current card as int, Guess 'str' or int)
// inputs current card integer value at a card 2-10 11-14
// Guess Accept either str ' high' or ' low' or 0 / 1 to represent high or low

// let card = 7;
let randomCard = {
  suit: Math.floor(Math.random() * 4),
  value: Math.floor(Math.random() * 13) + 2
}

function highlow(currentCard, guess) {
  let nextCard = {
    suit: Math.floor(Math.random() * 4),
    value: Math.floor(Math.random() * 13) + 2
  };

  if (currentCard.value == nextCard.value) {
    console.log('Play again');
  } else if (currentCard.value < nextCard.value && guess == 'high') {
    console.log('Current card is', currentCard.value);
    console.log('Next card is', nextCard.value);
    console.log('You Win!');
  } else if (currentCard.value > nextCard.value && guess == 'high') {
    console.log('Current card is', currentCard.value);
    console.log('Next card is', nextCard.value);
    console.log('You lose!');
  } else if (currentCard.value < nextCard.value && guess == 'low') {
    console.log('Current card is', currentCard.value);
    console.log('Next card is', nextCard.value);
    console.log('You Lose!');
  } else if (currentCard.value > nextCard.value && guess == 'low') {
    console.log('Current card is', currentCard.value);
    console.log('Next card is', nextCard.value);
    console.log('You Win!');
  } else {
    console.log('Enter high or low.');
  }
}

highlow(randomCard, 'low')
  // if (guess == 'higher' || guess == 'high'){
  //   if (currentCard > guess) {
  //     'You Win!'
  //   } else if ( )
  // }
  // if (currentCard > guess) {

  // }
