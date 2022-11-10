/* 8Kyu Returning string\\\

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

Parameters
- function containing one argument
- name will be entered in

Retrun
- name inside a sentence

Example
- 
describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");

    Pseudocode
    - Template literal has to be used 


*/

// function greet(name){
//  return ( `Hello, ${name} how are you doing today?`)
// }


const greet = name => `Hello, ${name} how are youu doing today?`