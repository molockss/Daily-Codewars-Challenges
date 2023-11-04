/* Your task is to create a method, Math.roundTo(number, precision) 
which rounds a given number to precision decimal places */

Math.roundTo = function (number, precision) {
    return + (Math.round (number + "e+" + precision) + "e-" + precision)
    }

    // or you could of done this - much easier

    Math.roundTo = (number, precision) => Number(number.toFixed(precision));

    //. toFixed method (then enter number of decimal places)