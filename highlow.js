// accept (current card as int, Guess 'str' or int)
// inputs current card integer value at a card 2-10 11-14
// Guess Accept either str ' high' or ' low' or 0 / 1 to represent high or low

let card = 7;

function highlow(currentCard, guess) {
  let nextCard = 8;
  if (currentCard > nextCard && guess == 'high') {
    console.log('Current card is', card);
    console.log('Next card is', nextCard);
    console.log('You lose!');
  } else if (currentCard < nextCard && guess == 'high') {
    console.log('Current card is', card);
    console.log('Next card is', nextCard);
    console.log('You Win!');
  } else if (currentCard == nextCard) {
    console.log('Play again');
  }
  else if (currentCard < nextCard && guess == 'low') {
    console.log('Current card is', card);
    console.log('Next card is', nextCard);
    console.log('You Lose!');
  } else if (currentCard > nextCard && guess == 'low') {
    console.log('Current card is', card);
    console.log('Next card is', nextCard);
    console.log('You Win!');
  } else {
    console.log('Enter high or low.');
  }
}

highlow(card, 'low')
  // if (guess == 'higher' || guess == 'high'){
  //   if (currentCard > guess) {
  //     'You Win!'
  //   } else if ( )
  // }
  // if (currentCard > guess) {

  // }
