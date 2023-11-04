// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.


// PREP

// Paramters

// Numbers may be positive or negative, integers or floats.

// Returns

// if its even it should return true otherwise false

// Examples

// assert.strictEqual(testEven(0), true, "testEven for 0");
//     assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
//     assert.strictEqual(testEven(1), false, "testEven for 1");
//     assert.strictEqual(testEven(2), true, "testEven for 2");
//     assert.strictEqual(testEven(-4), true, "testEven for 2");

// Pseudocode
// going to use a turnary operation, so return true if its divisable by 2 with no remainder otherwise false

//Solution

function testEven(n) {
    return true ? n %2===0 : "false"
}

// // other solution 

// function testEven2(n) {
//     return !(n % 2);
//   }
//   // The "!" exclamation point is part of JavaScript's logical operators.
//   // It is called the "unary negation operator", or more simply "logical NOT".
//   // Tt tries to convert whatever follows it into a boolean value ( true / false ).