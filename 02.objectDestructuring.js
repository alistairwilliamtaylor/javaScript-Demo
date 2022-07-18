// OBJECT DESTRUCTURING
    const tomsDetails = {
        firstName: "Tom",
        lastName: "van Dinther",
        location: "Auckland",
        age: 26,
    }

    // this:
    var { firstName, lastName, location, age } = tomsDetails;

    // is equivalent to this:
    var lastName = tomsDetails.lastName;
    var firstName = tomsDetails.firstName;
    var location = tomsDetails.location;
    var age = tomsDetails.age;

// But remember, there must be a matching key

    var { firstName, IQ } = tomsDetails;

    console.log("his name is " + firstName)
    //=> his name is Tom

    console.log("his IQ is " + IQ);
    // => undefined

    // order doesn't matter because only matching key matters
    var { lastName, age, firstName, location } = tomsDetails;

    // you can just grab one value if you don't care about the others
    var { firstName } = tomsDetails;