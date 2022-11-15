/* 8-kyu abbreviate name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


Psuedo Code

/* Pseudo Code
1. first we split the string into leetters
2. we grab the first letter in the first element using shift
3. we grab the first letter in the last element using pop
4. we then return it
 */

function abbrevName(name){

    const fullName = name.split(' ') 
    const initials = fullName.shift().charAt(0) + '.' + fullName.pop().charAt(0)
      return initials
    }