/* Credit Card Validation
You’re starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16

The following credit card numbers are valid:
9999777788880000
6666666666661666
The following credit card numbers are invalid:
a92332119c011112 invalid characters
4444444444444444 only one type of number
1111111111111110 sum less than 16
6666666666666661 odd final number

Bonus #1: A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:
9999-7777-8888-0000
6666-6666-6666-1666
Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)
Bonus #2: Return an object indicating whether the credit card is valid, and if not, what the error is
{ valid: true, number: '9923-3211-9c01-1112' }
{ valid: false, number: '9923-3211-9c01-1112', error: 'wrong_length' }

Bonus #3: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration. */

// const validateCreditCard = cardNum => {
//     if (
//         typeof cardNum !== 'number'          // all of them must be numbers
//         || cardNum.toString().length !== 16  // Number must be 16 digits
//         || cardNum.toString()[15] % 2 !== 0  // The final digit must be even
//     ) {
//         return false;
//     };
//     let sum = 0, change = 0;
//     for (let i = 0; i < cardNum.toString().length; i++) {
//         sum += +cardNum.toString()[i];         // The sum of all the digits must be greater than 16
//         if (i < cardNum.toString().length - 1 &&  cardNum.toString()[i] !== cardNum.toString()[i + 1]) {  // You must have at least two different digits represented (all of the digits cannot be the same)
//             change++;
//         };
//     };
//     if (sum <= 16 || change == 0) {
//         return false;
//     };
//     // console.log(sum);
//     return true;
// };

const validateCreditCard = cardNum => {
    if (
        typeof cardNum !== 'number'          // all of them must be numbers
        || cardNum.toString().length !== 16  // Number must be 16 digits
      //  || cardNum.toString()[15] % 2 !== 0  // The final digit must be even
    ) {
        return false;
    };
    let sum = 0, change = 0;
    for (let i = 0; i < cardNum.toString().length; i++) {
        sum += +cardNum.toString()[i];         // The sum of all the digits must be greater than 16
        if (i < cardNum.toString().length - 1 &&  cardNum.toString()[i] !== cardNum.toString()[i + 1]) {  // You must have at least two different digits represented (all of the digits cannot be the same)
            change++;
        };
    };
    if (sum <= 16 || change == 0) {
        return false;
    };
    // console.log(sum);
    return true;
};
// console.log(validateCreditCard(9999777788880000));
// console.log(validateCreditCard(6666666666661666));
// console.log(validateCreditCard('a92332119c011112'));
// console.log(validateCreditCard(4444444444444444));
// console.log(validateCreditCard(1111111111111110));
// console.log(validateCreditCard(6666666666666661));


// const validateCreditCard_removeDash = cardNumStr => {
//     if (typeof cardNumStr == 'number') {
//         return validateCreditCard(cardNum);
//     };
//     let cardNumStrNew = cardNumStr.replace('-', '').replace('-', '').replace('-', ''); 
//     return validateCreditCard(+cardNumStrNew);  
// };

let cardNumStrNew ='';
const validateCreditCard_removeDash = cardNumStr => {   
    if (typeof cardNumStr == 'number') {
        return validateCreditCard(cardNumStr);
    } else if (cardNumStr.includes('-') === false) {
       cardNumStrNew = cardNumStr;
    } else if (cardNumStr.includes('-')) {
        cardNumStr = cardNumStr.replace('-', ''); 
       // console.log(cardNumStr)
        validateCreditCard_removeDash(cardNumStr);
    }
    return validateCreditCard(+cardNumStrNew);
};

const removeDash = cardNumStr => {   
    if (typeof cardNumStr == 'number') {
        return  cardNumStrNew = +cardNumStr;
    } else if (cardNumStr.includes('-') === false) {
       cardNumStrNew = cardNumStr;
    } else if (cardNumStr.includes('-')) {
        cardNumStr = cardNumStr.replace('-', ''); 
       // console.log(cardNumStr)
        validateCreditCard_removeDash(cardNumStr);
    }
    return (+cardNumStrNew);
};

//  console.log(validateCreditCard_removeDash('9999-7777-88---88-0000'));
//  console.log(validateCreditCard_removeDash('6666-6666-6666-1666'));
//  console.log(validateCreditCard_removeDash('66-66-66-66-6666-1665'));
//  console.log(validateCreditCard_removeDash('9999777788880000'));

const luhnAlgorithm = num => {
    if (validateCreditCard_removeDash(num) == false) {
        let newObi = {value: false + ' number: ' + num + ' error: wrong.'};
        return newObi['value'];                
    };
    let arr = removeDash(num).toString().split('').reverse();
    // console.log(arr)
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
      
        if (i % 2 !== 0) {
            arr[i] = +arr[i] * 2;

            if (arr[i] >= 10) {

                sum += +arr[i].toString()[0] + +arr[i].toString()[1];
                // console.log(+arr[i].toString()[0])

            } else {
                sum += +arr[i];
            };
        } else {
            sum += +arr[i];
        };  
    };
   // console.log(sum);
    let sumNew = 10 - (+sum.toString()[sum.toString().length - 1]);
   // console.log(sumNew);

    if (+arr[0] === sumNew ) {
        let newObi1 = {value: true + ' number: ' + num};
        return newObi1['value'];                
    } else {
        let newObi2 = {value: false + ' number: ' + num + ' error: Luhn Algorithm fail'};
        return newObi2['value']; 
    };
};
//  console.log(luhnAlgorithm('a92332119c011112'))
//  console.log(luhnAlgorithm('66-66-66-66-6666-1665'))
//  console.log(luhnAlgorithm('1212-1212-1212-1218'))
//  console.log(luhnAlgorithm('1212-1212-1212-1218'))



const luhnAlgorithm_test = num => {
    // if (validateCreditCard_removeDash(num) == false) {
    //     let newObi = {value: false + ' number: ' + num + ' error: wrong.'};
    //     return newObi['value'];                
    // };
    let arr = removeDash(num).toString().split('').reverse();
    // console.log(arr)
    let sum = 0;

    for (let i = 1; i < arr.length; i++) {
      
        if (i % 2 !== 0) {
            arr[i] = +arr[i] * 2;

            if (arr[i] >= 10) {
                sum += +arr[i].toString()[0] + +arr[i].toString()[1];
                // console.log(+arr[i].toString()[0])

            } else {
                sum += +arr[i];
            };
        } else {
            sum += +arr[i];
        };  
    };
   // console.log(sum);
    let sumNew = 10 - (+sum.toString()[sum.toString().length - 1]);
   // console.log(sumNew);

    if (+arr[0] === sumNew ) {
        let newObi1 = {value: true + ' number: ' + num};
        return newObi1['value'];                
    } else {
        let newObi2 = {value: false + ' number: ' + num + ' error: Luhn Algorithm fail'};
        return newObi2['value']; 
    };
};

console.log(luhnAlgorithm_test('79927398713')); // wikipedia example number
console.log(luhnAlgorithm_test('79927398717'));