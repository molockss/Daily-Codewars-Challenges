/* Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john" */

function nameShuffler(str){
    let m = str.split(' ')
    return `${m[1]} ${m[0]}`
    
    }

    // you split the name into 2 and then use a template string to add them together.