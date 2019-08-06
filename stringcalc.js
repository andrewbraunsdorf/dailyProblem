function evaulate(mathProblem) {
  let answer = eval(mathProblem);
  console.log(answer);
}

evaulate("10 + 13 - 5");
evaulate("10 - 13 * 5");
evaulate("10 * 13 / 3");
evaulate("10 / 13 * 5");
evaulate("13 % 10 % 2");