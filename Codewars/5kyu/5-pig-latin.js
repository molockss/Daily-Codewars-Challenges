

/* 5Kyu - Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched. */

/* Parameters

- Inserting a string of any length
- includes punctuation marks


Returns

- should return a string with the first letter added to the end of the word including the word ay


Examples

-- describe("Tests", () => {
  it("test", () => {
Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
});
});

Pseudocode

- create an array which would loop through it grabbing the first initial and adding "ay" to the end of the word
- .ChartAt(0) is useful at splitting the array
- problem would be since we dont know the length of the string, it would be difficult to return it. for example if it was full name we could just seperate the first and second name in the array

*/

function pigIt(str){
  
    // split string to words
    
    return str.split(' ').map(word => {
      
      // check if character is a letter
      
      
      // if not a letter, return as is
      
      if(word.toLowerCase() === word.toUpperCase()) return word
      
      
      // if a letter, slice 1 + str[0] + "ay"
      
        else return word.slice(1) + word[0] + "ay"
      
      
      // join

    }).join('')
}