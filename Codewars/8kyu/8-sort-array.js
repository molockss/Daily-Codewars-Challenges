// Create a function that takes in Arrays
//Alert the sum of the second lowest and the second highest number

function takesinArray (arr) {

    let sorted = arr.sort ( (a,b) => a-b)
    alert (sorted[1] + sorted [sorted.length-2])
}