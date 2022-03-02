/*
10 min
Create a function named "toPower" which takes two integers as an argument (base, power),
and returns an integer. 
You should use a Math object method to make the calculation.

 toPower(2, 2) ==> 4 
 toPower(2, 3) ==> 8
 toPower(3, 4) ==> 81
*/
const toPower = (base, power) => {
    return Math.pow(base, power);
};
// console.log(toPower(2,2));
// console.log(toPower(2,3));
// console.log(toPower(2,4));


/**
 * 10 min
 Create a function named "checkCityName".
  If a param string begins with "Ber" or "Lon",
  then return true. If not,
  return "The city name does not begin with Ber or Lon". 
  The function should be case insensitive

  checkCityName("Berlin") ==> true
  checkCityName("London") ==> true
  checkCityName("New York") ==> The city does not begin with Ber or Lon 
 */
  const checkCityName = str => {
      str = str.toLowerCase();
      if (
          (str[0] == 'B'
          && str[1] == 'e'
          && str[2] == 'r')
          ||
          (str[0] == 'L'
          && str[1] == 'o'
          && str[2] == 'n')
      ) {
          return true;
      }
      return 'The city does not begin with Ber or Lon';
  };
//   console.log(checkCityName("Berlin")); //==> true
//   console.log(checkCityName("London")); //==> true
//   console.log(checkCityName("New York")); //==> The city does not begin with Ber or Lon 
  
 /**
 * 10 min
 Create a function named "checkName".
  If a param string begins with "to" or "pi" or "ma",
  then return true. If not,
  return "The name does not begin with To or Pi or Ma". 
  The function should be case insensitive

  checkName("Tommy") ==> true
  checkName("Max") ==> true
  checkName("PITAR") ==> true
  checkName("Ghassan") ==> The city does not begin with To or Pi or Ma
 */

  const checkName = str => {
      let strNew = str.slice(0, 2).toLowerCase();
      if (strNew === 'to' || strNew === 'pi' || strNew === 'ma') {
          return true;
      };
      return "The name does not begin with To or Pi or Ma";
  };
//   console.log(checkName("Tommy"));
//   console.log(checkName("Max"));
//   console.log(checkName("PITAR"));
//   console.log(checkName("Ghassan"));

/**
 * 10 min
  Create a function and should take an number as an argument.
   If the number is divisible by 3, then return <number> divisible by 3. 
   If not, return not divisible by 3.

   isDivisibleByThree(15) ==> 15 divisible by 3
   isDivisibleByThree(9) ==> 9 divisible by 3.
   isDivisibleByThree(5) ==> 5 not divisible by 3 
  */
const isDivisibleByThree = num => num % 3 == 0 ? num + ' divisible by 3.' : num + ' not divisible by 3.';
// console.log(isDivisibleByThree(15)); // ==> 15 divisible by 3
// console.log(isDivisibleByThree(9) ); //==> 9 divisible by 3.
// console.log(isDivisibleByThree(5) ); //==> 5 not divisible by 3 

/**
 * 10 min
  Create a function and should take an number as an argument.
   If the number is 0 return false.
   If the number is divisible by 10, then return <number> divisible by 10. 
   If not, return not divisible by 10.

   isDivisibleBy10(0) ==> false
   isDivisibleBy10(1000) ==> 1000 divisible by 10.
   isDivisibleBy10(5) ==> 5 not divisible by 10 
  */
 const isDivisibleBy10 = num => num === 0 ? false 
 : num % 10 == 0 ? num + ' divisible by 10.' 
 : num + ' not divisible by 10';
//  console.log(isDivisibleBy10(0));
//  console.log(isDivisibleBy10(1000));
//  console.log(isDivisibleBy10(5));

/**
 * 15 min
 Create a function name "missingNumber"  which takes two numbers between (0 - 100) as arguments,
  and the function return:
  If the missing number is 0 or 100 return the missing number itself
  If the missing number is less than 100 return "Less than 100"
  If the missing number is biggest than 100 return "biggest than 100"

  Note: the total of 3 numbers is 200 ( Number1 + Number2 + MissingNumber = 200 )

  missingNumber(100, 100) ==> 0
  missingNumber(90, 80) ==> Less than 100 
  missingNumber(0, 100) ==> 100
  missingNumber(10, 30) ==> biggest than 100 
 */
const missingNumber_zhuo = (firNum, secNum) => {
    if (firNum >= 0 && firNum <= 100 && secNum >= 0 && secNum <= 100) {
        let missNum = 200 - firNum - secNum;
    return missNum == 0 || missNum == 100 ? missNum 
    : missNum < 100 ? 'Less than 100'
    : 'bigger than 100';
    };
    return 'pls enter two numbers both form 0 to 100.' 
};
// console.log(missingNumber_zhuo(100, 100));
// console.log(missingNumber_zhuo(90, 80));
// console.log(missingNumber_zhuo(0, 100));
// console.log(missingNumber_zhuo(10, 30));
// console.log(missingNumber_zhuo(10, 300));
// console.log(missingNumber_zhuo('10s', 300));

/**
 * 5 min
 Create a function named "greeting".
  If passed true, return "Good Morning!".
  If passed false, return "Good Night!".

  greeting(true) ==> Good Morning! 
  greeting(false) ==> Good Night! 

  Use a ternary operator to complete this task. 
 */
const greeting = hi => hi ? "Good Morning!" : "Good Night!";
// console.log(greeting(true));
// console.log(greeting(false));

/**
 * 12 min
Create a function name `sequence` and use a loop to return the following sequence: 
sequence(16) ==> 1 2 4 8 16
sequence(128) ==> 1 2 4 8 16 32 64 128

Concatenate each value to a string and return a string.
 */
const sequence_z = num => {
    if (isNaN(Number(num)) || Number(num) < 1 || num === true) {
        return 'pls enter a number bigger than 1';
    };
    num = Number(num);
    let arr = [];
    for (let i = num; i >= 1; i /= 2) {
        arr.unshift(i);
    }; 
    return arr.join(' ');
};
// console.log(sequence_z('16'));
// console.log(sequence_z(128));
// console.log(sequence_z(15));
// console.log(sequence_z(true));
// console.log(sequence_z(false));

/**
 10 min
 Create a function and use a loop to return just the numbers divisible by 3
 multiples(9) ==> 3 6 9 
 multiples(15) ==> 3 6 9 12 15
 multiples(30) ==> 3 6 9 12 15 18 21 24 27 30 

Concatenate each value to a string and return a string.
 */
const multiples_z = num => {
    if (isNaN(Number(num)) || Number(num) < 3) {
        return 'pls enter a number bigger than 3';
    };
    num = Number(num);
    let arr = [];
    for (let i = num; i >= 3; i -= 3) {
        arr.unshift(i);
    }; 
    return arr.join(' ');
};
// console.log(multiples_z(9));  // 3 6 9
// console.log(multiples_z(15)); // 3 6 9 12 15
// console.log(multiples_z(30)); // 3 6 9 12 15 18 21 24 27 30
// console.log(multiples_z([45])); // 
// console.log(multiples_z()); // 

// use concat form Diala
// function multiples(num) {
//     let result =[];   //let result = ' ';
//     for(let i = 1; i <= num; i++){ 
//     if (i % 3 === 0) {
//         let arr = [i]; // we put i in a new array
//         result = result.concat(arr); // concat creat a new array
//     }
//     // else { return false }
//     } 
//     return result.join(' ');
//     }
//     console.log(multiples(9));
//     console.log(multiples(15));
//     console.log(multiples(30)); 

/**
 10 min
 Create a function and use a loop to return array of numbers following sequence: 
 multiplesByTwo(8) ==> [2, 4, 6, 8]
 multiplesByTwo(14) ==> [2, 4, 6, 8, 10, 12, 14]
 multiplesByTwo(21) ==> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] 

 The function return array of numbers and The biggest number in the array should be equal to or smaller than the function's argument
 */
const multiplesByTwo = num => {
    const arr = [];
    for (let i = 2; i <= num; i += 2) {
        arr.push(i);
    };
    return arr;
};
// console.log(multiplesByTwo(8));
// console.log(multiplesByTwo(14));
// console.log(multiplesByTwo(21));

/**
 * 15 min
 Create a function named "charsCount" that accepts a string as an argument.
  Check how many chars (`abcdefxyz`) the string contains,
  if any. Return the count of the string.

  charsCount("test") ==> 1
  charsCount("ABC") ==> 3

  The function should be case insensitive
 */

const deleteTheSameLetter = chars =>{
    let arr = chars.split('')
    , charsNew;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j ,1);
                j--;
            };
        };
    };
    return arr.join("");
};
console.log(deleteTheSameLetter('aaaaabasdsdabcdefxyzz'));

const charsCount = (str, chars = 'abcdefxyz') => {
    let counter = 0;
    str = str.toLowerCase();
    chars = chars.toLowerCase();
    chars = deleteTheSameLetter(chars);
    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < str.length; j++) {
            chars[i] === str[j] ? counter++ : null
        };
    };
    return counter;
};
// console.log(charsCount("test"));
// console.log(charsCount("ABC"));
// console.log(charsCount("Zzzz"));
// console.log(charsCount("Tom"));
console.log(charsCount("ZZZZ", 'zzzzz'));