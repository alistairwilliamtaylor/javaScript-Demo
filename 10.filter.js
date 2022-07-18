// Map returns every single element in the array, but with their values transformed

// Filter only returns the elements in the array that pass a test!
// i.e. only the elements that return "true" when the function is applied to them
// Remember, it FILTERS IN rather than filtering out
const words = ["fish", "fruit", "banana", "flower", "rage"]

const wordsStartingWithF = words.filter(word => word.startsWith("f"))

console.log(wordsStartingWithF);
// => [ 'fish', 'fruit', 'flower' ]


// You can also use the index when filtering 
const alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// index is automatically the second variable that passed filter passes into a function
// we actually ignore the letter variable completely, just filter based on index
const oddLetters = alphabetLetters.filter((letter, index) => index % 2 == 0);
console.log(oddLetters)
// => ["a", "c", "e", etc.]