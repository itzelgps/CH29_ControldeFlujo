// Ejercicio 3 para más información: https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow

/* 
Part 3

Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.

*/
function businessHours(dayNumber, hourNumber) {
  if ((dayNumber >= 1) && (dayNumber <= 5) &&
    (hourNumber >= 9) && (hourNumber <= 18)
  ){
    return true;
  } else {
    return false;
  }
}
function getDayNumber(janFirstDayNumber, yearDayNumber) {
  if ((yearDayNumber >= 0) && (yearDayNumber <= 365) && (janFirstDayNumber >= 0) && (janFirstDayNumber <= 6))
  {
    return (janFirstDayNumber + (yearDayNumber - 1) % 7);
  }
}


function todo(yearDayNumber,hourNumber) {
  let day = getDayNumber(0, yearDayNumber);

  return businessHours(day, hourNumber);
}

console.log(todo(72, 12));


