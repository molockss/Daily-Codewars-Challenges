/* *** No Loops Allowed ***

You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

Parameters

- No loops
- All values are numbers


Returns

- The max value should be less or equal to the limit set 


Examples

describe("Example tests",() =>{
Test.assertEquals(smallEnough([66, 101], 200), true);


Psuedo Code 
- since no loop is allow, we will use the spread syntax, and Math.max and return true if its less than limit
- spread syntax is just a shorter way of finding the max so we would do
Math.max (...a) */


function smallEnough(a, limit){
  
    // spread syntax  (...a)
  return Math.max(...a) <= limit  

}