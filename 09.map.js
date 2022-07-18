// FOREACH CAN BE USED TO DO ACTIONS, BUT IT RETURNS NOTHING
const someNumbers = [1, 2, 3];
// this doesn't do anything at all
someNumbers.forEach((number) => number + 1);

// But we could use FOREACH to update the values and store them
// somewhere else:
const putTheIncrementedNumbersHere = [];

someNumbers.forEach((number) => {
  putTheIncrementedNumbersHere.push(number + 1);
});

console.log(putTheIncrementedNumbersHere);
// => [2, 3, 4]

// MAP MAKES IT EASIER TO DO THIS
// It returns a new array in which all of the elements have had the function applied to them
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

