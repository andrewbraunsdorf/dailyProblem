function datecheck(m, y) {
  if (m < 0 || m > 11) {
    console.log("Please provide a month between 0 and 11");
    return false;
  }
  if (y < 1900 || y > 2019) {
    console.log("Please provide a year between 1900 and 2019");
    return false;
  }
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  let monthDecimal = m / 12;
  let oldDate = y + monthDecimal;
  let newMonthDecimal = currentMonth / 12;
  let newDate = currentYear + newMonthDecimal;
  let timeBetween = newDate - oldDate;

  console.log(timeBetween.toFixed(2));
}

datecheck(07, 2018);
// datecheck(-1, 2019);
// datecheck(0, 2020);
// datecheck(12, 1820);
// datecheck(11, 1990);
console.log(Date());
