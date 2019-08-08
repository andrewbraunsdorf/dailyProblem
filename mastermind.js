// create a function that takes the following:
// "guess" as a string , "code" as a string
// compare the guess against the code and return [int, int]

// array[0] represents the # of currect chars that are in code
// array[1] represents the # of items in the correct position

function mastermind(guess, code) {
  let guessChars = guess.split('');
  let codeChars = code.split('');
  let correctArray = [0, 0];
  let minimum = Math.min(guessChars.length, codeChars.length);

  for (let i = 0; i < minimum; i++) {
    if (guessChars[i] === codeChars[i]) {
      correctArray[1]++;
    }
  }

  for (let i = 0; i < minimum; i++) {
    for (let j = 0; j < minimum; j++) {
      if (guessChars[i] == codeChars[j]) {
        codeChars[j] = ' ';
        correctArray[0]++;
      }
    }
  }

  // for (let j = i; j < guess.length; j++) {
  //   if (guessChars[j] == codeChars[i]) {
  //     correctArray[0]++;
  //   }
  // }

  console.log(correctArray);
}

mastermind("code321code", "code123");
mastermind("2112", "1221");
mastermind("1111", "1111");