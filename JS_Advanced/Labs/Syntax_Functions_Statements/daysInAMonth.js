function getDaysInMonth(month,year) {
   let date = new Date(year, month, 0).getDate();
   console.log(date);
};

getDaysInMonth(1, 2012);
