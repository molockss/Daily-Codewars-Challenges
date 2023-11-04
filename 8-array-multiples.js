//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultiple(arr){
    return arr.filter((e,i ) => e % i === 0 )


}

// filter is a method, e is the element and i is the index
// we use the arrow function, if e goes into i without  a remainder, return the new array
// so iff 22 goes into 0, return 22, it doesnt so we move to -6 which goes into 1
// we then return -6 in the new array