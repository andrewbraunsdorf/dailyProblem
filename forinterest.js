var balance = 1000;
var months = 60;
var interest = 5;

function interestCaclulate() {
  let monthlyBalance = balance;
  for (i = 0; i < months; i++) {
    let monthlyInterest = monthlyBalance * (interest / 12 / 100)
    monthlyBalance += monthlyInterest
    console.log(monthlyBalance);
  }
}

interestCaclulate();