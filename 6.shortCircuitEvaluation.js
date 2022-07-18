function sayHello() {
    console.log("Hello friend");
}

function yellAbuse() {
    console.log("Go Away!!!");
}

let isGrumpy = true

// If it's true that isGrumpy, there's no need to look any further
// the || statement is true, because at least one thing (the first) is true
// therefore, sayHello is never executed
isGrumpy || sayHello()


// It's true that isGrumpy
// Since && requires ALL parts to be true
// it continues evaluating and runs the yellAbuse() function
isGrumpy && yellAbuse()