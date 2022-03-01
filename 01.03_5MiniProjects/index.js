// ## 5.Mini Projects

// ## The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// -   Write a function named  `tellFortune`  that:
//     -   takes 4 arguments: number of children, partner's name, geographic location, job title.
//     -   outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// -   Call that function 3 times with 3 different values for the arguments.
const tellFortune = (numChi, parNam, loc, job) => {
    return `You will be a ${job} in ${loc}, and married to ${parNam} with ${numChi} kids.`;
};
// console.log(tellFortune(1, 'Hali', 'Berlin', 'Teacher'));
// console.log(tellFortune(2, 'Hallo', 'Tokeyo', 'Acter'));
// console.log(tellFortune(3, 'Kali', 'Ostsee', 'Policeman'));


// ## The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!
// -   Write a function named  `calculateDogAge`  that:
//     -   takes 1 argument: your puppy's age.
//     -   calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//     -   outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// -   Call the function three times with different sets of values.
// -   **Bonus**: Add an additional argument to the function that takes the conversion rate of human to dog years.
const calculateDogAge = (age, rate = 7) =>  `Your doggie is ${age * rate} years old in dog years!`;
// console.log(calculateDogAge(1));
// console.log(calculateDogAge(2));
// console.log(calculateDogAge(3, 5));


// ## The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// -   Write a function named  `calculateSupply`  that:
//     -   takes 2 arguments: age, amount per day.
//     -   calculates the amount consumed for rest of the life (based on a constant max age).
//     -   outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// -   Call that function three times, passing in different values each time.
// -   **Bonus**: Accept floating point values for amount per day, and round the result to a round number.
const calculateSupply = (age, amountPerDay, maxAge = 99) => `You will need ${Math.round((maxAge - age) * 365 * amountPerDay)} to last you until the ripe old age of ${maxAge}`;
// console.log(calculateSupply(35, 1, 80));
// console.log(calculateSupply(35, 1.25));
// console.log(calculateSupply(45, 1.33));


// ## The Geometrizer
// Create 2 functions that calculate properties of a circle, using the  [definitions](http://math2.org/math/geometry/circles.htm)  here.
// Create a function called  `calcCircumfrence`:
// -   Pass the radius to the function.
// -   Calculate the circumference based on the radius, and output "The circumference is NN".
const calcCircumfrence = radius => `The circumference is ${radius * 2 * 3.1415926}`;
// console.log(calcCircumfrence(1));

// Create a function called  `calcArea`:
// -   Pass the radius to the function.
// -   Calculate the area based on the radius, and output "The area is NN".
const calcArea = radius => `The area of the circle is ${radius ** 2 * 3.1415926}`;
// console.log(calcArea(2));


// ## The Temperature Converter
// It's hot out! Let's make a converter based on  [the steps](http://www.mathsisfun.com/temperature-conversion.html)  here.
// Create a function called  `celsiusToFahrenheit`:
// -   Store a celsius temperature into a variable.
// -   Convert it to fahrenheit and output "NN°C is NN°F".
const celsiusToFahrenheit = celsius => `${celsius}°C is ${celsius / 5 * 9 + 32}°F`;

// Create a function called  `fahrenheitToCelsius`:
// -   Now store a fahrenheit temperature into a variable.
// -   Convert it to celsius and output "NN°F is NN°C."
const fahrenheitToCelsius = fahrenheit => `${fahrenheit}°F is ${(fahrenheit - 32) * 5 / 9}°C`;

// console.log(celsiusToFahrenheit(20));
// console.log(fahrenheitToCelsius(68));

