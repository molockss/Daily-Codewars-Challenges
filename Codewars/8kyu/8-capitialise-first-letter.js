// Capitialise first letter


function capitalizeWord(word) {
    let words = word[0].toUpperCase() + word.slice(1)
    return words;
  }
  
  /* slice(1) returns a portion of an array. Here it gets rid of the first letter in the array
  since we've already capitalised the first letter