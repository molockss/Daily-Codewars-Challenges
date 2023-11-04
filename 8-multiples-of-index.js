// Multiples of Index



// Parameters
// Return a new array consisting of elements which are multiple of their own index
// the array should have more than 1 elements
// index starts with 0



// Returns

// Return a new array, with the elements that are multiples of their index

// Examples

// assert.deepEqual(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
//     assert.deepEqual(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
//     assert.deepEqual(multipleOfIndex([11, -11]), [-11]);


    // Psuedocode

    // - we need to sort through the array First
    // - return a new array with the same number if its divisable by its index


    function multipleOfIndex(array) {
 
        return  array.filter( (element, index) => element % index===0 );
        
        //checks if the current element (array[i]) is a multiple of it's index (i) and if it is returns the element
        
        
        
      }

