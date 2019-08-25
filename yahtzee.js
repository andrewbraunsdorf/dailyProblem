// create a function to roll a 6 sided die
// create function roll 5 dice
// create a game loop to roll all dice three times
// allow the user to pick a die to reroll (do not need to roll yet) print out chosen dice values
// allow the user to give you multiple dice to reroll( same as above )
// allow to roll a set number of dice
// allow the player to roll the dice 3 times after each roll ask the player for dice to reroll and reroll the dice
// display only the newly rolled dice
// which rolls that were changed with the original dice

// bonus if you get all five numbers yahtzee
const readline = require("readline");

let rollNumber = 0;
let rollArray = rollFiveDie();

function rolldice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
};

function rollFiveDie() {
  let arrayOfRolls = [];
  for (let rollTimes = 0; rollTimes < 5; rollTimes++) {
    arrayOfRolls.push(rolldice())
  }
  return arrayOfRolls;
}

function rolldiceThreeTimes() {
  let dice = [];
  for (let eachDice = 0; eachDice < 3; eachDice++) {
    rollFiveDie();
  }
}
function yahtzee() {
  rollNumber++;
  if (rollNumber === 4) {
    return 0;
  }
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`dice: [${rollArray}]\n Input the index of dice to reroll (1-5) `, (answer) => {
    console.log(`You want to roll ${answer} dice`);

    rl.close();
    if (rollNumber < 4) {
      rollArray = rerollDie(answer);
    }
    yahtzee();
    console.log(rollArray);
  });
}

function rerollDie(answer) {
  let arrayOfDice = answer.split("");
  if (arrayOfDice.indexOf("1") > -1) {
    rollArray[0] = rolldice();
    console.log("1 rolled");
  }
  if (arrayOfDice.indexOf("2") > -1) {
    rollArray[1] = rolldice();
    console.log("2 rolled");
  }
  if (arrayOfDice.indexOf("3") > -1) {
    rollArray[2] = rolldice();
    console.log("3 rolled");
  }
  if (arrayOfDice.indexOf("4") > -1) {
    rollArray[3] = rolldice();
    console.log("4 rolled");
  }
  if (arrayOfDice.indexOf("5") > -1) {
    rollArray[4] = rolldice();
    console.log("5 rolled");
  }

  return rollArray;
}

yahtzee();