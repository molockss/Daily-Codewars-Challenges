/* Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

Parameters
- array consists of true and false parameters
- we have to ignore null/undefined and not add it to the count

return
- should return an integer of the number of sheep which correlates to true

example 

- describe("Tests", () => {
  it("test", () => {
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
  });
});

Pseudo Code- 

- The find method looks for a single (first) element that makes the function return true.
-If there may be many, we can use arr.filter(fn).
- index here the current index, item the value at the current index  */

function countSheeps(arrayOfSheep) {
    const count1 = arrayOfSheep.filter(value => value ===true).length
    return count1
  }

  //const countSheeps = count1 => count1.filter(value => value ===true).length

