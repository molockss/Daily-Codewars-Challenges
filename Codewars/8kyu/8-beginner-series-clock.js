// 8 - Beginner Series Clock

/* Your task is to write a function which returns the time since midnight in milliseconds

// 1hr = 3600000 milliseconds
// 1minute = 60000 milliseconds
// 1 second = 1000 milliseconds

// multiply them together to get the answer */

function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000;
  }