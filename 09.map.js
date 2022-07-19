// Previously we saw this use of forEach:
const threeFriends = ["Tania", "Matt", "Vinh"]
threeFriends.forEach(friend => console.log(friend));
// prints:  "Tania"
//          "Matt"
//          "Vinh"

// This is a nice use of for each because console.log doesn't return anything
// We are doing an action (printing) but not calculating/transforming values
// But now let's imagine we want to make some changes to an array:

const someNumbers = [1, 2, 3];
// this doesn't do anything at all
someNumbers.forEach(number => number + 1);
console.log(someNumbers);
// => [1, 2, 3]
// hmmm that's a shame... forEach is only good at side-effect actions


// MAP
// Mapping returns a new array in which all of the elements have had the function applied to them
// In this example, the "mapped" values are stored in incrementedNumbers
const otherNumbers = [4, 5, 6];
const incrementedNumbers = otherNumbers.map((number) => number + 1);

// // IMPORTANT:  the original does not change at all!
// console.log(otherNumbers);
// // => [4, 5, 6]

// // we get a new array with the new values
// console.log(incrementedNumbers);
// // => [5, 6, 7]

// IMAGINE THIS, YOU COULD MAP OUT SOME HTML WITH THE VALUES
// const listItems = otherNumbers.map((number) => `<li>${number}</li>`)

// const chunkOfHtmlLookingStuff = 
// `<ul>
// ${listItems.join("\n")}
// </ul>`

// console.log(chunkOfHtmlLookingStuff);

