// TWO SYNTAXES FOR DEFINING A FUNCTION:

// this:
function add1(number) {
    return number + 1
}
// or this (don't need return keyword because arrow does that job):
const add2 = number => number + 2; 


// EITHER IS FINE, THEY'LL DO THE SAME THING
add1(7)
// => 8

add2(7)
// => 9

// BONUS 1: WHEN DO I USE PARENTHESES?

// NO ARGUMENT
// if there's zero arguments, you need empty parentheses
const sayHello = () => console.log("Hello!")
sayHello()
// will print: "Hello!"

// ONE ARGUMENT
// if there's only one argument, you don't need parentheses (but you can if you want)
const sayHelloToFriend = name => console.log(`Hello ${name}!`);
sayHelloToFriend("Amy")
// will print: "Hello Amy!"

// MULTIPLE ARGUMENTS
// if there's more than one argument, you HAVE to use parentheses and separate with comma
const giveMessageToPerson = (message, recipient) => console.log(`${message} for ${recipient}`);
giveMessageToPerson("Incoming call", "John")
// will print: "Incoming call for John"


// EXTRA WORD OF CAUTION

// Watch out, if you use arrow but also parentheses, you NEED return keyword
// e.g. this won't work as expected:
const add3 = number => {
    number + 3
} 
console.log(add3(10));
// => undefined

// but this will work as expected:
const add4 = number => {
    return number + 4
}
add4(10)
// => 14