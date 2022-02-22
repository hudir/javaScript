// 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
let color = 'red';
switch(color) {
    case 'red': console.log('the color is',color); break;
    case 'blue': console.log('the color is',color); break;
    case 'green': console.log('the color is',color); break;
    case 'yellow': console.log('the color is',color); break;
    default: console.log('pls give a color');
}

// 2. Grading
// Create a switch statement that prints different comments depending on a grade.
let grade = 'A';
switch(grade) {
    case 'A': console.log('Nice!!!'); break;
    case 'B': 
    case 'C': console.log('Good'); break;
    case 'D': 
    case 'E': console.log('Not so good'); break;
    case 'F': console.log('Pls try again'); break;
    default: console.log('pls give a grade');
}
// 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
// 4. Percentage Complete.
let percentageComplete = 3;
switch(percentageComplete) {
    case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
    case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19:
    case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: 
    console.log(`Still a long way to go`);
    break;
    default: console.log('i have nothing to say yet.');
}
// If percentageComplete is below 30, print “Still a long way to go”.
// If the percentageComplete is between 30 and 50, print “Slowly getting there”.
// If percentageComplete is between 51 and 80, print “You can do it!“.
// If percentageComplete is between 81 and 99, print “This is the last push!“.
// If percentageComplete is 100, print “You’re there. Well done!“.
switch(percentageComplete < 30) {
    case true: console.log('1'); break;
    case false: console.log('2'); break;
}

/* Let's play mini FizzBuzz! For any given number, if the number is:

divisible by 3, print "Fizz".
divisible by "5", print "Buzz".
divisible by both 3 and 5, print "FizzBuzz".
That is, if any of the above conditions apply, print the above words instead of the number.

Otherwise, just print the number. */

let num = 15;

num % 3 == 0 && num % 5 == 0 ? console.log("FizzBuzz") 
: num % 3 == 0 ? console.log("Fizz")
: num % 5 == 0 ? console.log("Buzz")
: console.log(num);