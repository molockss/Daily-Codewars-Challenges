// 8kyu - Find Multiples of a Number

/* In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . 
If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. 
The limit will always be higher than the base. */

/* Parameters
- positive integers
- limit higher than integer, so if limit > integer return error

Return
- multiples of integer up to limit

example
- (3,12) = 3,6,9,12

pseudo code 
- use for loop */

function findMultiples(integer, limit) {
    // Create an empty array to store the multiples of 'integer'
    const multiples = [];
  
    // Loop starting from the given 'integer' up to 'limit' increasing by 'integer' steps each time
    for (let i = integer; i <= limit; i += integer) {
      // Add each multiple of 'integer' found in the loop to the 'multiples' array
      multiples.push(i);
    }
  
    // Return the array 'multiples' containing all the multiples of 'integer' within the 'limit'
    return multiples;
  }