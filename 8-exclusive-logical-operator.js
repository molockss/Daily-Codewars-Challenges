// Exclusive "or" (xor) Logical Operator


/*  The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.  */


function xor(a, b) {
    if ( (a===true && b === false) || (a===false && b === true)){
      return true
    }else { return false}
    
  
  }