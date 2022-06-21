/* Your task is to create a method, Math.roundTo(number, precision) 
which rounds a given number to precision decimal places */

Math.roundTo = function (number, precision) {
    return + (Math.round (number + "e+" + precision) + "e-" + precision)
    }

    