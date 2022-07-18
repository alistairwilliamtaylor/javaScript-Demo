// SPREAD OPERATOR
// FOR MAKING A COPY OF AN ARRAY AND THEN ADDING TO IT
var twoFriends = ["James", "Jill"];
const threeFriendsWithAndrew = [...twoFriends, "Andrew"];
//=> ["James", "Jill", "Andrew"]

//BUT twoFriends remains completely unchanged (there's no mutation of twoFriends array)
console.log(twoFriends)
// => ["James", "Jill"]


// You can spread as much stuff together as you like!
const sixFriends = [...threeFriendsWithAndrew, ...twoFriends, "Alexander"]
//=>["James", "Jill", "Andrew", "James", "Jill", "Alexander"]
