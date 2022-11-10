/* 8kyu - A Needle in the Haystack

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle,


Parameters

- Array can contain integeres, booleans, numbers etc

Return
- should return a template literal with the position of the index

Examples

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 


Pseudo Code 

- to find the position  of any thing in an array we need to use "arr.indexOf (" ??")
- inside the quesiton mark we should write whatever we are searching for

Solution  */

function findNeedle(haystack) {
  
  
    let needleIndex = haystack.indexOf('needle')
    
    return `found the needle at position ${needleIndex}`
    
   }
  
  
 
