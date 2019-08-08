// create a function that takes the following:
// "guess" as a string , "code" as a string
// compare the guess against the code and return [int, int]

// array[0] represents the # of currect chars that are in code
// array[1] represents the # of items in the correct position

function mastermind(guess, code) {
  let guessChars = guess.split('');
  let codeChars = code.split('');
  let correctArray = [0, 0];

  for (let i = 0; i < guess.length; i++) {
    if (guessChars[i] === codeChars[i]) {
      correctArray[0]++;
    }
  }
  console.log(correctArray);

}

mastermind("code", "code");