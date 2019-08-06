// size: int
// start [int, int]
// instructions [{heading: str, steps: int}]

// size denotes a size by size grid
// start is the starting coordinates
// instructions is an arrayof objects containing heading "N", "S", "E", "W" the four cardinal directions
// steps: the number of steps taken

// return the coordinates of the treasure

// 1.1: if steps 50 & over on edge loop to other side
// 1.2 accept directions: NW SW SE SW

let size = 10;
let start = [2, 2];
let instructions = [{ heading: "se", steps: 11 }];
// let instructions = [{ heading: "s", steps: 8 }, { heading: "e", steps: 19 }, { heading: "s", steps: 2 }, { heading: "w", steps: 1 }];
let currentPosition = start;

function findTreasure(size, start, instructions) {

  for (let instructionNumber = 0; instructionNumber < instructions.length; instructionNumber++) {

    if (instructions[instructionNumber].heading == "n") {
      //increment [0, X]
      currentPosition[1] += instructions[instructionNumber].steps
      if (currentPosition[1] > size) {
        currentPosition[1] = currentPosition[1] % size;
      }

      console.log(currentPosition);
    }
    if (instructions[instructionNumber].heading == "s") {
      //increment [0, -X]
      currentPosition[1] -= instructions[instructionNumber].steps
      if (currentPosition[1] < 0) {
        currentPosition[1] = (currentPosition[1] % size) + size
      }
      console.log(currentPosition);
    }
    if (instructions[instructionNumber].heading == "e") {
      //increment [x, 0]
      currentPosition[0] += instructions[instructionNumber].steps
      if (currentPosition[0] > size) {
        currentPosition[0] = currentPosition[0] % size;
      }

      console.log(currentPosition);
    }
    if (instructions[instructionNumber].heading == "w") {
      //increment [-x, 0]
      currentPosition[0] -= instructions[instructionNumber].steps
      if (currentPosition[0] < 0) {
        currentPosition[0] = (currentPosition[0] % size) + size
      }
      console.log(currentPosition);
    }
    if (instructions[instructionNumber].heading == "nw") {
      currentPosition[1] += instructions[instructionNumber].steps
      if (currentPosition[1] > size) {
        currentPosition[1] = currentPosition[1] % size;
      }
      currentPosition[0] -= instructions[instructionNumber].steps
      if (currentPosition[0] < 0) {
        currentPosition[0] = (currentPosition[0] % size) + size
      }
      console.log(currentPosition);
    }
    if (instructions[instructionNumber].heading == "sw") {
      currentPosition[1] -= instructions[instructionNumber].steps
      if (currentPosition[1] < 0) {
        currentPosition[1] = (currentPosition[1] % size) + size
      }

      currentPosition[0] -= instructions[instructionNumber].steps
      if (currentPosition[0] < 0) {
        currentPosition[0] = (currentPosition[0] % size) + size
      }
      console.log(currentPosition);
    }
    if (instructions[instructionNumber].heading == "ne") {

      currentPosition[1] += instructions[instructionNumber].steps
      if (currentPosition[1] > size) {
        currentPosition[1] = currentPosition[1] % size;
      }

      currentPosition[0] += instructions[instructionNumber].steps
      if (currentPosition[0] > size) {
        currentPosition[0] = currentPosition[0] % size;
      }
      console.log(currentPosition);
    }
    if (instructions[instructionNumber].heading == "se") {
      currentPosition[1] -= instructions[instructionNumber].steps
      if (currentPosition[1] < 0) {
        currentPosition[1] = (currentPosition[1] % size) + size
      }
      currentPosition[0] += instructions[instructionNumber].steps
      if (currentPosition[0] > size) {
        currentPosition[0] = currentPosition[0] % size;
      }
      console.log(currentPosition);
    }
  }
  console.log(currentPosition);
};
findTreasure(size, start, instructions);