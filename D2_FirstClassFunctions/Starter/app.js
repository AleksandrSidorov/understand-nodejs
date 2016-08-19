// Your Javascript Code Goes Here

// function statement
function greet () {
    console.log('hi');
}
greet();

// Functions are first-class
function logGreeting (fn) {
    fn();
}
logGreeting(greet);

// Function expression
var greetMe = function () {
    console.log('Hi all!');
}

greetMe();

// it's still first-class
logGreeting(greetMe);

// Use a function expression on the fly
logGreeting(function () {
    console.log("Hello, world!");
});
