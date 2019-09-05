function calculateInterest(principal, numberofmonths, monthlypercentinterest) {
  // let simpleInterest = principal * (1 + (monthlypercentinterest / 100));
  let compoundInterest = principal * (Math.pow(1 + (monthlypercentinterest / 12 / 100), numberofmonths) - 1);
  console.log(compoundInterest);
}
calculateInterest(1000, 24, 2);