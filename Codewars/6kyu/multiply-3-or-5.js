/* Multiples of 3 or 5

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Parameters
- Passing in a a positive integer
- count multiples of 3 and 5, only once in sum

Return
- sum of the multiples of 3 and 5 below that number
- if negative number is passed in return 0

Examples

if we pass in 10;  3+5+6+9 = 23

Pseudo code
- list all the multiples of 5 below the number
- list all the multiples of 3 below the number
- if the number is a multiple of 3 & 5 , count it once
- return the sum of these number added together */

function solution (number){

    let sum = 0

    for ( let i =1; i<number; i++){
        if ((i%3===0) || (i%5===0) || (i%3===0) && (i%5===0) ) {
            sum=+i
        }
    } return sum 
}

