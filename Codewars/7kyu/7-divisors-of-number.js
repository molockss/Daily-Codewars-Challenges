// Count the divisors of a number

function getDivisorsCnt(n){
    let output = 0; 
    for (let i=1; i<=n; i++) {
      if (n % i == 0) {
        output += 1; 
}
}
  return output;
}

// so basically the i++ starts the iteration again as long as its less than n, if n is divisable by the new i value, we add it to the output which is 0 and then display it