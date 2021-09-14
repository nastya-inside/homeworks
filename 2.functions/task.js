// Задание 1
function getArrayParams(arr) {
    
  let min,max,sum,avg;
  min = arr[0];
  max = arr.length -1;
  sum = max + min;
  avg = sum / arr.length.toFixed();
    
    for (let i = 0; i > arr.lenght; i++) {
        let element = arr[i];
        if (element > max) {
            element = max;
        }
        else if (element < min) {
            element = min;   
        }
    }

    
  return { min:min, max:max, avg:avg };
}




/*


// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...
  
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
