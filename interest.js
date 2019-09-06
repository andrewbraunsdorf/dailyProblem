function calculateInterest(principal, numberofmonths, monthlypercentinterest, depositAmount, periodicDeposits, withdrawalAmount, periodicWithdrawal) {
  let interestCalculation = (Math.pow(1 + (monthlypercentinterest / 12 / 100), numberofmonths) - 1);
  let monthlyInterest = (monthlypercentinterest / 12 / 100);

  // let simpleInterest = principal * (1 + (monthlypercentinterest / 100));
  let compoundInterest = principal * interestCalculation;

  let compoundInterestOfDeposits = depositAmount * ((interestCalculation / monthlyInterest));

  let compoundInterestOfPeriodicDeposits = depositAmount * (periodicDeposits / 12) * ((interestCalculation / monthlyInterest));

  // let withdrawalWithPeriodicWithdrawal = -withdrawalAmount * (periodicWithdrawal / 12) * ((interestCalculation / monthlyInterest));

  let withdrawalWithPeriodicWithdrawal = -withdrawalAmount * ((periodicWithdrawal / 12) * ((interestCalculation / monthlyInterest))) * (1 + monthlyInterest);

  let total = principal + compoundInterest + compoundInterestOfPeriodicDeposits;

  let totalWithWithdrawal = principal + compoundInterest + withdrawalWithPeriodicWithdrawal;
  console.log(compoundInterest);
  console.log(compoundInterestOfDeposits);
  console.log(total);

  console.log(totalWithWithdrawal);
}
calculateInterest(5000, 1, 5, 0, 0, 100, 12);