//Exercises 
// Math
// Perform Mathematical Tasks with JavaScript. Remember: you must use the Math functions and print all results to the console!

// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 0, 1, 2, 3, 4));
// b. Highest Number
// Print out the highest number between -1 and 4.
console.log(Math.max(-1, 0, 1, 2, 3, 4));
// 2. Rounding
// a. Round up
// Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
console.log(
    Math.round(3321.32321)
    , Math.round(326.76)
    , Math.round(76788.7)
    , Math.round(-9.78)
    , Math.round(43.342)
);
// b. Round down
// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
console.log(
    Math.floor(3321.32321)
    , Math.floor(326.76)
    , Math.floor(76788.7)
    , Math.floor(-9.78)
    , Math.floor(28.329)
);
// 3. Dice Roll!
// Print a random integer between 1 and 6.
console.log(
    Math.round(
        Math.random() * (6 - 1) + 1   
    )
);


// Strings and Numbers
// 1. Concatenation.
// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let introSentence = "hello, my name is Fran and I am";
let age = 25;
// Expected Output:
// "hello, my name is Fran and I am 25"
console.log(introSentence, age);
// In this case, what is the + operator doing? Comment your answer in the js file.
// In this case, there is no + operator, so it does nothing. 


// 2. Converting
// Create a variable with the value of "1005". Convert it to a number.
const a = '1005';
// Create a variable with the value of "10.05". Convert it to a number.
const b = '10.05';
console.log('a is', +a, 'b is', +b, 'type is', typeof +a);


// 1. NaN
// Question: Comment your answer in your js file: What does NaN stand for?  <=== Not a Number
// Check if "hello" is NaN.
console.log('"hello" is NaN', isNaN('hello'));
// Check if 3 is NaN.
console.log('3 is NaN is', isNaN(3));
// What is the type of NaN?
console.log('The type of NaN is', typeof NaN);
// 2. Rounding
// console.log(0.1 * 0.2);
// The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed.
// console.log((0.1 * 0.2).toFixed(2));
const keepTwo = (num) => {
    return (Math.round(num * 100)) / 100;
};
console.log(keepTwo(0.1 * 0.2));
console.log(keepTwo(0.19385));