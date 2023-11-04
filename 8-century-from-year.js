/* 8Kyu Century from Year

Given a year, return the century it is in.


Parameters
- function with one argument
- argument is an integer only


Return
- given a year return the centrury it's in
- should be an integer only

Examples
1705 --> 18 century
1900 --> 19 century
1601 --> 17 cemtury

Pseudo code 
- 1st cenutyr is 1-100
- 2nd century is 101-200
- 3rd is 201 -300

divide by 100; if the number is gretear than it rounded down then reutrn century + 1, if not reutn 

e.g 
1705 / 100 = 17.05 > 17 so it should return 18
1900 / 100 = 19 = 19 so it should reutn 19
1601 / 100 = 16.01 > 16 so it should return 17
 */


//Using arrow function
const century = year => (year / 100) > Math.ceil (year/100) ? Math.ceil (year/100) + 1 : Math.ceil (year/100)

// if 17.05 > 17 then reuturn 18th century otherwise return 17

// normal function


// function century (year) {
  
//     let cent = year / 100
    
//     if (cent > Math.ceil (cent)) {
//       return Math.ceil (cent) + 1
//     } else {
      
//       return Math.ceil (cent)
//     }
//   }

