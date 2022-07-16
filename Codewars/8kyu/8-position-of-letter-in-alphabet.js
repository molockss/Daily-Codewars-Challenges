/* Find the position of a letter in the alphabet

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */


function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
  }


  //chatCodeAt returns UTF 16 decimal representation of one character into a string.

  //This takes only 1 parameter, index of the character we want.
//remember index starts at 0 (first letter = 0, second = 1)
//so if we enter 'e' decimal it should return number 5.


/* If you see this table 'a' represents 97 number and z represents 122,
 so alphabet starts at 97 number but we need 1 instead of 97, it's easy, 
 the only thing we need to do is to subtract '96' for each letter representation.*/

