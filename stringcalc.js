// function evaulate(mathProblem) {
//   let answer = eval(mathProblem);
//   console.log(answer);
// }

let addition = ("10 + 13");

function evaulate(mathProblem) {
  let answer = mathProblem.split(" ");
  // let newAnswer = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == "+") {
      let result = parseInt(answer[0], 10) + parseInt(answer[2], 10);
      console.log(result);
    }
    if (answer[i] == "-") {
      let result = parseInt(answer[0], 10) - parseInt(answer[2], 10);
      console.log(result);
    }
    if (answer[i] == "*") {
      let result = parseInt(answer[0], 10) * parseInt(answer[2], 10);
      console.log(result);
    }
    if (answer[i] == "/") {
      let result = parseInt(answer[0], 10) / parseInt(answer[2], 10);
      console.log(result);
    }
    if (answer[i] == "x") {
      let result = parseInt(answer[0], 10) * parseInt(answer[2], 10);
      console.log(result);
    }
    if (answer[i] == "%") {
      let result = parseInt(answer[0], 10) % parseInt(answer[2], 10);
      console.log(result);
    }
  }
}
// if (answer[i] === "+" || "-") {
// if (answer[i] == "+") {
//   newAnswer += parseInt(answer[0], 10) + parseInt(answer[2], 10);
//   console.log(newAnswer);
// } else if (answer[i] == "-") {
//   newAnswer += parseInt(answer[0], 10) - parseInt(answer[2], 10);
//   console.log(newAnswer);
// }
// }

evaulate(addition);
evaulate("10 - 13");
evaulate("10 * 13");
evaulate("10 / 13");
evaulate("13 % 10");
evaulate("13 x 10");
  // evaulate("10 - 13 * 5");
  // evaulate("10 * 13 / 3");
  // evaulate("10 / 13 * 5");
  // evaulate("13 % 10 % 2");
