// Fill Array

const { arrayBuffer } = require("stream/consumers")

// Parameters

// pass in an array of numbers so arr(5) should be 0,1,2,3,4

// Returns

// Returns a blank with no argyement

// example

// describe('#arr creates a new array with the numbers 0 to N-1',() =>{
//     it('should return an array',_=>Test.expect(arr() instanceof Array));
//     it('should return a blank array when called with no argument',_=>Test.assertSimilar(arr(), []));
//     it('should return 0 to 3 when called with 4',_=>Test.assertSimilar(arr(4), [0,1,2,3]));
//   });


// PseudoCode

// we will use the number as the array.length so up until that number populate. Use one of the methods to push stuff into an array using a for loop

// Solution

function arr(n){
    var newArr = [];
    for(var i = 0; i < n; i++){
      newArr.push(i);  // here we're pushing everything we get back from the loop in the loops. starting from o
    }
    return newArr;
  }
  

//   so if we call arr(5), we will get 0 first then 1,2,3,4