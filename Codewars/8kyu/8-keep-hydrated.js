/* 8kyu Keep Hydrated 
Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

Parameters
- time in hours given, could be a decimal or integer
- function needs to take in the time & multiply it by 0.5

Return
- should return the smallest value it rounds to

Example 
time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

Psuedo code

- the function is taking in the argument of time
- that time needs to be multplied by 0.5
- maths.floor rounds number down to the nearest integer */

litres = time => Math.floor(time*0.5)