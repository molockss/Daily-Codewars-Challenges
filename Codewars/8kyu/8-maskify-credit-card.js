// Create a credit card with a * except last four digits

let creditCard = "465784399948291";
let last4Digits = creditCard.slice(-4); //will leave you with the last 4 digits only
let maskedNumber = last4Digits.padStart(creditCard.length,"*") //

console.log (maskedNumber)