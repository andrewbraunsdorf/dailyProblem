// create a function to roll a 6 sided die
// create function roll 5 dice
// create a game loop to roll all dice three times
// allow the user to pick a die to reroll (do not need to roll yet) print out chosen dice values
// allow the user to give you multiple dice to reroll( same as above )
// allow to roll a set number of dice
// allow the player to roll the dice 3 times after each roll ask the player for dice to reroll and reroll the dice

function rolldice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
};



function rollFiveDie() {
  let arrayOfRolls = [];
  for (let rollTimes = 0; rollTimes < 5; rollTimes++) {
    arrayOfRolls.push(rolldice())
  }
  console.log(arrayOfRolls);
}

function rolldiceThreeTimes() {
  let dice = []
  for (let eachDice = 0; eachDice < 3; eachDice++) {
    // dice[eachDice] = dice.push(rollFiveDie());
    // console.log(dice[eachDice]);
    rollFiveDie();
  }
  // console.log(dice[0]);
}


rolldice()
// rolldice()
// rolldice()
// rolldice()
// rolldice()
// rolldice()

rollFiveDie()
rolldiceThreeTimes()