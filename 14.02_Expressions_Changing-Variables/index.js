let age = 15;
let vote = age >= 18 ? 'You can vote' : 'You can`t vote';
console.log(vote);

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let intOne=51;
let intTwo=48;

(99>=intOne && intOne>=50) ? console.log(`The first value is true.`) : console.log(`The first value is out of the range`);
(99>=intTwo && intTwo>=50) ? console.log(`The second value is true.`) : console.log(`The second value is out of the range`); 

// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let intThree=51;
let intFour=48;
let intFive=66;

(99>=intThree && intThree>=50) ? console.log(`The third value is true.`) : console.log(`The third value is out of the range`);
(99>=intFour && intFour>=50) ? console.log(`The fourth value is true.`) : console.log(`The fourth value is out of the range`);
(99>=intFive && intFive>=50) ? console.log(`The fifth value is true.`) : console.log(`The fifth value is out of the range`); 

// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a=32;
let b=22;
let c=32;

(a>b && a>c) ? console.log(`The largest value is ${a}`) : (b>a && b>c) ? console.log(`The largest value is ${b}`) : (c>a && c>b) ? console.log(`The largest value is ${c}`) : console.log(`At least one value is equal to another.`); 

// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let intSix = 15;
let intSeven = 12;
sum = intSix + intSeven;

sum <= 80 && sum >= 50 ? console.log(65) : console.log(80);

// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
sum == 8 || (intSix - intSeven) == 8 || (intSeven - intSix) == 8 ? console.log('Exercise5 is True') : console.log('Exercise5 is false');

// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
intSix == 15 || intSeven == 15 || sum == 15 ? console.log('Exercise6 is True') : console.log('Exercise6 is false');

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
intSix % 7 == 0 || intSix % 11 == 0 || intSeven % 7 == 0 || intSeven % 11 == 0 ? console.log('Exercise7 is True') : console.log('Exercise7 is false'); 

// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
intSix == intSeven ? console.log(`Exercise8 is ${sum * 3}`) : console.log(`Exercise8 two values are not the same.`);

// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let specNum = 2;
specNum -= 19;
specNum > 0 ? console.log(`Exercise9 is ${specNum * 2}`) : console.log(`Exercise9 the specified number is not greater than 19.`)

// if we delete specNum -= 19; it should be like this
/* let specNum = 2;
specNum > 19 ? console.log(`Exercise9 is ${(specNum - 19) * 2}`) : console.log(`Exercise9 the specified number is not greater than 19.`)
 */


// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".
const firstName = 'hudir';
const howOld = (age) => {
    age < 13 ? console.log(firstName, 'is a child') : age >= 13 && age < 20 ? console.log(firstName, 'is a teenager') : age >= 20 && age < 30 ? console.log(firstName, 'is a young adult') : console.log(firstName, 'is a adult');
}
howOld(10);

// BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.


// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
const givenString = 'pyPy333';
let newString = givenString[0] == 'P' && givenString[1] == 'y' ? givenString : 'Py' + givenString;
console.log('new String is', newString);


// 1. Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// Store Mark's and John's mass and height in variables.
const markMass = 80;
const markHeight = 1.75;

const johnMass = 90;
const johnHeight = 1.79;

let bmi;
// Calculate both their BMIs and store their BMIs in variables.
function BMIs(mass, height) {
   return mass / (height * height);
}
const markBmi = BMIs(markMass, markHeight);
const johnBmi = BMIs(johnMass, johnHeight);
console.log('Mark`s BMI is', markBmi, `and John's BMI is`, johnBmi);

// Create a boolean variable containing information about whether Mark has a higher BMI than John.
const higher = markBmi > johnBmi;

// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log(`Is Mark's BMI higher than John's? It is ${higher}.`);

// Create a statement which prints the name and BMI of the person with the highest BMI.
higher ? console.log('Mark has higher BMI --->', markBmi) : console.log('John has equal or higher BMI --->', johnBmi)



//2. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

//3. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

// 4.Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

//5. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

//6. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".

//7. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

// 30
// 939
// 40.9