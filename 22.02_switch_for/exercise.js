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


// Programming Basics: For Loops
// These exercises are designed for practising "for" loops. Print all your results to the console.

// Addition. Write a program to add up the numbers 1 to 20.
let sum = 0;
for (let i = 0; i < 21; i++) {
    sum += i;
};
console.log('ex-1 is',sum);


// There are i bottles of beer on the wall. Write a program that will output, "There is 1 bottle of beer on the wall." "There are 2 bottles of beer on the wall" up until there are five bottles.
for (let i = 1; i < 6; i++ ) {
    i == 1 ? console.log(`There is ${i} bottle of beer on the wall.`) : console.log(`There are ${i} bottles of beer on the wall.`)
};


// The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (let i = 0; i < 21; i++) {
    i % 2 == 0 ? console.log(i, 'is even') : console.log(i, 'is odd');
};



// Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (let i = 0; i < 11; i++) {
    for (let x = 1; x < 11; x++) {
        console.log(i, '*', x, '=', i * x);
    }
};


// Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (let i = 1; i < 101; i++) {
    i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") 
    : i % 3 == 0 ? console.log("Fizz")
    : i % 5 == 0 ? console.log("Buzz")
    :console.log(i);
};


// Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.
let sum1 = 0;
for (let i = 1; i < 1000; i++) {
    i % 3 == 0 || i % 5 == 0 ? sum1 += i : sum1 = sum1;
};
console.log('The add multiples of 3 and 5 under 1000 is', sum1);


// Bonus

// Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000
for (let i = 100; i < 1001; i += 100) {
    console.log(i);
};
// 0 2 4 6 8 10
for (let i = 0; i < 11; i += 2) {
    console.log(i);
};
// 3 6 9 12 15
for (let i = 3; i < 16; i += 3) {
    console.log(i);
};
// 9 8 7 6 5 4 3 2 1 0
for (let i = 9; i > -1; i--) {
    console.log(i);
};
// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i < 5; i++) {
   for (let x = 1; x < 4; x++) {
       console.log(i);
   }
};
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
console.log('// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4')
for (let i = 1; i < 4; i++) {
    for (let x = 0; x < 5; x++) {
        console.log(x);
    }
 };
// isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
/* let i;
const isPalindrome = (word, i = 0) => {
    if (word[i] != word[word.length - 1 - i]) {
        return word + ' is not a palindrome';
    } else if (i < (word.length - 1) / 2 ) {
        isPalindrome(word, ++i);
    }; 
    return word + ' is a palindrome';
};
console.log(isPalindrome('abc'));
console.log(isPalindrome('abvba'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('tarrattarrat')); */

let check = 0
, x = 0
, word = 'aavbhaa';
for ( x = 0; x < (word.length - 1) / 2 ; x++) {
    word[x] == word[word.length - 1 - x] ? check++ : check = check;
}
check == x ? console.log(word, 'is a palindrome') : console.log(word, 'is not a palindrome')