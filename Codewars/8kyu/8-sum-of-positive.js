// INSTRUCTIONS
// You get an array of numbers, return the sum of all of the positives ones.


// SOLUTION


function sumOfPositive(arr){

    var total = 0

    for (var i=0; i<= arr.length; i++){
        if (arr[i]>0){
            total += arr[i]  //total = total +arr
        }
      
    }
    return total
}