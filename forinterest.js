var principal = 1000;
var months = 60;
var interest = 5;

function interestCaclulate() {
  let monthlyBalance = principal;
  for (i = 0; i < months; i++) {
    let monthlyInterest = monthlyBalance * (interest / 12 / 100)
    monthlyBalance += monthlyInterest;
    console.log(monthlyBalance);
  }
}

function deposit(deposit) {
  let monthlyBalance = principal;
  for (i = 0; i < months; i++) {
    let monthlyInterest = monthlyBalance * (interest / 12 / 100)
    monthlyBalance += monthlyInterest + deposit;
    console.log(monthlyBalance);
  }
}

deposit(100);

