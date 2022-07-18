//TWO SYNTAXES FOR DEFINING A FUNCTION:

// this function which takes no arguments:
function sayHello() {
    console.log("Hello!");
}

// or this function which takes no arguments:
const sayHelloWorld = () => console.log("Hello world!"); 

// EITHER IS FINE :) 

// Arrow Functions can also be used when the function takes arguments:

// if there's only one argument, you don't need parentheses
const sayHelloToFriend = name => console.log(`Hello ${name}`);

// if there's more than one argument, you HAVE to use parentheses
const giveMessageToPerson = (message, recipient) => console.log(`${message} for ${recipient}`);