// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them
 /* e.g a = 1
b = 4
--> [1, 2, 3, 4] */


function between(a, b) {
    let arr = [] // set up our array
    
    for (let i = a; a<= b; a++){ //index where we are starting = a, as long as a is less than be add one each time
     arr.push(i) // push our answer into the loop each time
    } 
    return arr // return the array
    
   }