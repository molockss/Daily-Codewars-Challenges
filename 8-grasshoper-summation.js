/* Grasshopper - Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

Parameters
- number should always be positive
- sum of numbers

Return
- return the sum of all the numbers before

Example

describe('summation', function () {
  it('should return the correct total', function () {
    assert.strictEqual(summation(1),  1);  
    assert.strictEqual(summation(2),  3); 1+2


    */

    var summation = function (num) {
  
        let sum = 0 
        
        for (let i=0; i<=num; i++){
          
          sum += i
      
        }
        return sum
      }
      