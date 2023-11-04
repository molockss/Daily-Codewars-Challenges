// 8 - calculate-average of array

/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function findAverage(array) {
  
    // Using the reduce method to calculate the sum of all elements in the 'array'
    let sum = array.reduce((a, c) => {return a + c}, 0);
    
    // Calculating the average by dividing the 'sum' by the number of elements in the 'array'
    let avg = sum / array.length;
    
    // Returning the calculated average
    return avg;
  }
  

  /* let sum = array.reduce((a, c) => {return a + c}, 0);
    Uses the reduce method to calculate the sum of all elements in the array.
    The reduce method iterates over each element (c for current value) in the array.
    For each element, it adds the current value (c) to the accumulator (a) which starts at 0. */