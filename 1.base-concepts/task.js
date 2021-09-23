"use strict";

function solveEquation(a, b, c) {
let arr = [];
    
  if ((a || a == 0) && (b || b == 0) && (c || c == 0)) {
    const D = b**2-4*a*c;
    if (D === 0) {
        arr = -b/(2*a);
        console.log(arr);
    }
      else if (D > 0) {
          arr = (-b + Math.sqrt(d))/(2*a);
          console.log(arr);
          arr.push(-b - Math.sqrt(d))/(2*a);
          console.log(arr);
      }
  }
  return arr; // array
}

solveEquation();



/*
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

