// // ARRAY DESTRUCTURING ASSIGNMENT
const threeFriends = ["Tania", "Matt", "Vinh"]

// this:
var [firstFriend, secondFriend, thirdFriend] = threeFriends

// console.log(firstFriend)
// => Tania

// is equivalent to:
var firstFriend = threeFriends[0]
var secondFriend = threeFriends[1]
var thirdFriend = threeFriends[2]

// // because we are lazy and like shorthand, who has time for THREE LINES OF CODE?!?!

    // The names of the variables can be anything, the naming is up to you
    const [peanut, chicken, footprint, jackfruit] = threeFriends;

    console.log(peanut);
    // => "Tania"

    console.log(jackfruit);
    // => undefined