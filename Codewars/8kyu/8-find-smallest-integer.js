/* 
Find the smallest integer in the array


Paramters
- Array will not be empty
- can take negative and positive numbers

Return
- Return the smallest number in the array

Examples
- Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345

PseduoCode

- Math.min will be used to find the smallest
- spread syntax will be used in the function call, as it "expands" and iterable object args into the list of arguments */

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args) //Spread syntax 
    }
  }