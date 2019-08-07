// function evaulate(mathProblem) {
//   let answer = eval(mathProblem);
//   console.log(answer);
// }

// let addition = ("10 - 13 - 5");

// function evaulate(mathProblem) {
//   let answer = mathProblem.split(" ");
//   let result = 0;
//   // let newAnswer = 0;
//   for (let i = 0; i < answer.length; i++) {
//     if (answer[1] === "+") {
//       result = parseInt(answer[0], 10) + parseInt(answer[2], 10);

//       if (answer[3] === "+") {
//         result += parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "-") {
//         result -= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "*" || answer[i] === "x") {
//         result *= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "/") {
//         result /= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "%") {
//         result %= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//     }
//     else if (answer[i] === "-") {
//       let result = parseInt(answer[0], 10) - parseInt(answer[2], 10);
//       if (answer[3] === "+") {
//         result += parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "-") {
//         result -= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "*" || answer[i] === "x") {
//         result *= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "/") {
//         result /= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "%") {
//         result %= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//     }
//     else if (answer[i] === "*" || answer[i] === "x") {
//       let result = parseInt(answer[0], 10) * parseInt(answer[2], 10);
//       if (answer[3] === "+") {
//         result += parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "-") {
//         result -= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "*" || answer[i] === "x") {
//         result *= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "/") {
//         result /= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "%") {
//         result %= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//     }
//     else if (answer[i] === "/") {
//       let result = parseInt(answer[0], 10) / parseInt(answer[2], 10);
//       if (answer[3] === "+") {
//         result += parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "-") {
//         result -= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "*" || answer[i] === "x") {
//         result *= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "/") {
//         result /= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "%") {
//         result %= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//     }
//     else if (answer[i] === "%") {
//       let result = parseInt(answer[0], 10) % parseInt(answer[2], 10);
//       if (answer[3] === "+") {
//         result += parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "-") {
//         result -= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "*" || answer[i] === "x") {
//         result *= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "/") {
//         result /= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//       else if (answer[3] === "%") {
//         result %= parseInt(answer[4], 10);
//         // console.log(result);
//       }
//     }
//   }
//   console.log(result);
// }

let problem = "10 % 13";
let parseString = problem.split(" ");
let value1 = parseInt(parseString[0], 10);
let operator = parseString[1];
let value2 = parseInt(parseString[2], 10);
let answer = 0;

function stringCalculator(input, operator, value1, value2) {
  switch (operator) {
    case "+":
      console.log(value1 + value2)
      break;
    case "-":
      console.log(value1 - value2)
      break;
    case "x":
      console.log(value1 * value2)
      break;
    case "/":
      console.log(value1 / value2)
      break;
    case "%":
      console.log(value1 % value2)
      break;
  }
}

stringCalculator(problem, operator, value1, value2);

// if (answer[i] === "+" || "-") {
// if (answer[i] == "+") {
//   newAnswer += parseInt(answer[0], 10) + parseInt(answer[2], 10);
//   console.log(newAnswer);
// } else if (answer[i] == "-") {
//   newAnswer += parseInt(answer[0], 10) - parseInt(answer[2], 10);
//   console.log(newAnswer);
// }
// }

// evaulate(addition);
// evaulate("10 - 13");
// evaulate("10 * 13");
// evaulate("10 / 13");
// evaulate("13 % 10");
// evaulate("13 x 10");
  // evaulate("10 - 13 * 5");
  // evaulate("10 * 13 / 3");
  // evaulate("10 / 13 * 5");
  // evaulate("13 % 10 % 2");
