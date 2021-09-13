"use strict";

function solveEquation(a, b, c) {
let arr = [];
let arr1 = [];
    
  if ((a || a == 0) && (b || b == 0) && (c || c == 0)) {
    const D = b**2-4*a*c;
    let x1;
    let x2;
    if (D === 0) {
        arr = -b/(2*a);
        console.log(arr);
    }
      else if (D > 0) {
          arr = (-b + Math.sqrt(d) )/(2a);
          arr1 = (-b - Math.sqrt(d) )/(2a);
          console.log(arr, arr1);
      }
  }
  return arr; // array
}




function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
