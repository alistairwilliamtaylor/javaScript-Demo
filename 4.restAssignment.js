// REST ASSIGNMENT 
// FOR ASSIGNING THE REST OF THE STUFF IN AN ARRAY TO A VARIABLE
    const threeFriends = ["Tania", "Matt", "Vinh"]

    var [firstFriend, ...otherFriends] = threeFriends
    console.log(firstFriend)
    // => Tania

    console.log(otherFriends);
    // => ["Matt", "Vinh"]

// REST ASSIGNMENT
    const fiveFriends = ["Tania", "Matt", "Vinh", "Andrew", "Maddi"]

    // this:
    var [firstFriend, secondFriend, ...theRestOfTheFriends] = fiveFriends;

    // is equivalent to this:
    var firstFriend = fiveFriends[0];
    var secondFriend = fiveFriends[1]
    var theRestOfTheFriends = fiveFriends.slice(2) // copy of everything from fiveFriends[2] onwards

// Look, we did it in one line instead of 3! Wow, JavaScript!

//CAN'T DO THIS, REST ASSIGNMENT MUST BE AT THE END TO GET THE REST OF THE STUFF:
    // var [...firstFourFriends, thisIsMaddi] = fiveFriends;
    // var [thisIsTania, ...twoFriends, ...anotherTwoFriends] = fiveFriends;