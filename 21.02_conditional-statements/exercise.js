//LOGICAL THINKING
// Inputs & Outputs
// Write down pseudo-code on pen and paper for the following patterns:
// 1.
// Input    Output
// 2, 5 5
// 0, 100   100
// 52, 35   52
// Solution:
// Let a be the first input. 
// Let b be the second input. 
// If a is greater than b, print a. 
// If b is greater than a, print b.

let a,b;
const findBiggerOne = (a,b) => {
    if (a == b) {
        console.log(a, 'is equal to', b);
    } else {
        a > b ? console.log(` a is greater than b,`, a) : console.log(` b is greater than a,`, b);
    }
};
findBiggerOne(2, 5); findBiggerOne(0, 100); findBiggerOne(52, 35);


// 2.
// Input    Output
// 5, 5 true
// 40, 40   true
// 50, 51   false
// Solution:
// Let a be the first input. 
// Let b be the second input. 
// If a and b are equal, print true. Else, print false.
const checkEqual = (a, b) => {
    a == b ? console.log('exercise 2 check', a, 'is equal to', b, 'is', true) : console.log('exercise 2 check',a,'is equal to', b,false);
}
checkEqual(5, 5); checkEqual(40, 40); checkEqual(50, 51);


// 3.
// Input    Output
// 110, 100 true
// 150, 100 true
// 50, 100  false
// Solution:
// Let a be the first input. 
// Let b be the second input. 
// If a is greater than b, print true. Else, print false.
const aIsGreaterThanB = (a, b) => {
    a > b ? console.log('exercise 3 check', a, 'is greater than', b, 'is', true) : console.log('exercise 3 check',a,'is greater than', b,false);
}
aIsGreaterThanB(110, 100);aIsGreaterThanB(150, 100);aIsGreaterThanB(50, 100);


// Programming Basics: Conditionals 
// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)
// Print your results to the console
// Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
// 1a) Calculate the average score for each team.
let aleezaAverage = (89 + 120 + 103) / 3;
let lisAverage = (116 + 94 + 123) / 3;
console.log('AleezaAverage is', aleezaAverage, 'and LisAverage is', lisAverage);

// 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if (aleezaAverage > lisAverage) {
    console.log('Aleeza is winner, the average score is', aleezaAverage);
} else if  (aleezaAverage < lisAverage) {
    console.log('Lis is winner, the average score is', lisAverage);
} else {
    console.log('They have the same average score', lisAverage)
};

// 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
aleezaAverage = (110 + 120 + 103) / 3;
lisAverage = (116 + 94 + 123) / 3;
if (aleezaAverage > lisAverage) {
    console.log('Aleeza is winner, the average score is', aleezaAverage);
} else if  (aleezaAverage < lisAverage) {
    console.log('Lis is winner, the average score is', lisAverage);
} else {
    console.log('They have the same average score', lisAverage)
};

// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
let maryAverage = (111 + 120 + 103) / 3;
if (aleezaAverage > lisAverage && aleezaAverage > maryAverage) {
    console.log('Aleeza is winner, the average score is', aleezaAverage);
} else if  (aleezaAverage < lisAverage && lisAverage > maryAverage) {
    console.log('Lis is winner, the average score is', lisAverage);
} else if  (maryAverage > lisAverage && maryAverage > aleezaAverage) {
    console.log('Mary is winner, the average score is', maryAverage);
} 
else {
    console.log('They have the same average score', lisAverage)
};
// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.
aleezaAverage = (112 + 120 + 103) / 3;
lisAverage = (118 + 94 + 123) / 3;
maryAverage = (112 + 120 + 103) / 3;

if (aleezaAverage > lisAverage && aleezaAverage > maryAverage) {
    console.log('Aleeza is winner, the average score is', aleezaAverage);
} else if  (aleezaAverage < lisAverage && lisAverage > maryAverage) {
    console.log('Lis is winner, the average score is', lisAverage);
} else if  (maryAverage > lisAverage && maryAverage > aleezaAverage) {
    console.log('Mary is winner, the average score is', maryAverage);
} else if (aleezaAverage == lisAverage) {
    if (aleezaAverage > maryAverage) {
        console.log('aleeza and lis win', lisAverage);
    } else {
        console.log('they 3 have the same score', maryAverage);
    };
} else if (aleezaAverage == maryAverage) {
    if (aleezaAverage > lisAverage) {
        console.log('aleeza and mary win', lisAverage);
    } else {
        console.log('they 3 have the same score', maryAverage);
    };
} else if (lisAverage == maryAverage) {
    if ( maryAverage > aleezaAverage) {
        console.log('lis and mary win', lisAverage);
    } else {
        console.log('they 3 have the same score', maryAverage);
    };
};




// Programming Basics: Conditionals
// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.
// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let int1 = 50, int2 = 44; 
if ((int1 >= 50 && int1 <=99) || (int2 >= 50 && int2 <=99)) {
    console.log('either of two given integer values are in the range 50 to 99:',true); 
} else {
    console.log('none of the given integer values are in the range 50 to 99.')
};  

// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let int3 = 1098;
if ((int1 >= 50 && int1 <=99) || (int2 >= 50 && int2 <=99) || (int3 >= 50 && int3 <=99)) {
    console.log('either of one or more given integer values are in the range 50 to 99:',true); 
} else {
    console.log('none of the given integer values are in the range 50 to 99.')
}; 






// Ternary Operator
// Rewrite this if using the conditional operator '?':
let result;
let a1 = 3;
let b1 = 6;
 a1 + b1 < 4 ? result = 'Below' : result = 'Over';

console.log(result);


// Rewrite the code below to use the ternary operator (?:) (you should be able to condense the if-else logic into one line).
let score = 42;
let msg = "";

score > 1337 ? msg = "This is a new highscore!" : msg = "You need more points to beat the highscore!";

console.log(msg);



// Rewrite if..else using multiple ternary operators '?'.

// For readability, it`s recommended to split the code into multiple lines.

let message;
let login="Employee"

login == 'Employee' ? message = 'Hello' 
: login == 'Director' ? message = 'Greetings' 
: login == '' ? message = 'No login' 
: message = '';

console.log(message)



//  Percentage Complete.
// create variable called percentageComplete and print the following if percentageComplete:
// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".
let percentageComplete = 101;

percentageComplete < 30 ? console.log("Still a long way to go") 
: percentageComplete >= 30 && percentageComplete <= 50 ? console.log("Slowly getting there") 
: percentageComplete >= 51 && percentageComplete <= 80 ? console.log("You can do it!") 
: percentageComplete >= 81 && percentageComplete <= 99 ? console.log("This is the last push!") 
: percentageComplete == 100 ? console.log("You're there. Well done!") 
: console.log("pls give a inter up to 100") ;