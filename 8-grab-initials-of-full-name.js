
/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H */


//solution

function abbrevName(name){

    const [firstName, lastName] = name.split(' ')
    // its in brackets as it an array, we're splitting it so that if its
    //james it will be 'j' 'a' 'm' etc
    const firstInitial = firstName.charAt(0).toUpperCase()
    // we're grabbing the fist name in the array, and taking the first letter
    const secondInitial = lastName.charAt(0).toUpperCase()
    // we're grabbing the second name and the intiial
    return firstInitial + '.' + secondInitial

    //here we are joing them together so that james smith will be J.S


}