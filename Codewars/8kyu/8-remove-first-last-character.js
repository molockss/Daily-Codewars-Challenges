/* Remove First and Last Character

Create a function that removes the first and last character of a string


Parameters
- input is a string
- length doesn't matter
- we dont have to return anything if it's 2 letters

Returns
- return the string without the first and last letter

Examples
describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');

    Pseudocode

- We can use Splice, since its used only for arrays
- charAt ONLY returns the character at a speciifced index
- Therefore we can use Substring to return part of the string
 */


function removeChar(str){
    let stringlength = str.length -1
    let string = str.substring(1, stringlength)
    return string
    };
    

    // arrow function format

    
//removeChar = (str) => str.substring (1, str.length - 1)