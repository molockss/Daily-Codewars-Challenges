// 8Kyu - School Paperwork

/* Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0 


PREP
// n and m can only be integers
// if n or m is less than 0 return 0
// n=5 m=5 ; 25   n=-3 ,=4 ;0
// brute force - use conditionals if n or m is greater than 0 then multiply it else return 0 */

function paperwork(n, m) {
  
    if (n>0 && m>0) {
      return n*m
    }else { 
      return 0}
    
  }
  
  
// using turnary operator

// function paperwork(n, m) {
  
//     return n>0 && m>0 ? n*m : 0
//   }
