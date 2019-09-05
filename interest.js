function calculateInterest(principal, numberofmonths, monthlypercentinterest, deposit) {
  // let simpleInterest = principal * (1 + (monthlypercentinterest / 100));
  let compoundInterest = principal * (Math.pow(1 + (monthlypercentinterest / 12 / 100), numberofmonths) - 1);

  let compoundInterestOfDeposits = deposit * (((Math.pow(1 + (monthlypercentinterest / 12 / 100), numberofmonths) - 1) / (monthlypercentinterest / 12 / 100)))

  let total = principal + compoundInterest + compoundInterestOfDeposits;
  console.log(compoundInterest);
  console.log(compoundInterestOfDeposits);
  console.log(total);
}
calculateInterest(5000, 120, 5, 100);