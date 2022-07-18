// HIGHER ORDER FUNCTIONS

const threeFriends = ["Tania", "Matt", "Vinh"]

// forEach in JavaScript is a "higher order function"
// it is a function which takes another function as an argument
// forEach applies the function to every single item in the array  
threeFriends.forEach(friend => console.log(friend));
// => Tania
// => Matt
// => Vinh

// You can write an "anonymous function" on the fly as the argument in the forEach function
threeFriends.forEach(friend => console.log(friend));

// Or you can define the function elsewhere and pass it in as the argument.
function print(word) {
    console.log(word);
}

var print = word => console.log(word);

threeFriends.forEach(print);
// => Tania
// => Matt
// => Vinh