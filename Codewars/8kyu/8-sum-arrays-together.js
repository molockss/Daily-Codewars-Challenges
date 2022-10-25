// 8kyu sum arrays 

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.



/* Parameters 

- numbers can be negative or non-integer
- if array doesn't contain any numbers, return 0


// Returns

Return the sum off all the numbers, if nothing insid earray return 0 

// Examples 
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sum([]), 0);
Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});

// Pseudo Code

When we need to iterate over an array – we can use forEach, for or for..of.

When we need to iterate and return the data for each element – we can use map.

when we need to return a single value/ sum we use arr.reduce or arr.reduceRight (which just starts the count from the right instead of left nothing major)
*/


function sum (numbers) {


   let result = numbers.reduce((sum, current) => sum + current, 0);
// sum is initial value (last arguement of reduce so 0)
// current is the first element in the array
// it keeps running until it has added all the values in the array together
   return result 
    
};

