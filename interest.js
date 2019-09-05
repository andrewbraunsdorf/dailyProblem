function calculateInterest(principal, numberofmonths, monthlypercentinterest) {
  let simpleInterest = principal * (1 + (monthlypercentinterest / 100));
  console.log(simpleInterest);
}
calculateInterest(1000, 24, 2);