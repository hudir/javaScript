let firstName = 'Ghassan'; //String
let last_name = 'Aldarwish';

//  camel case ==> firstName
//  snake case ==> last_name

// log (firstName)  ==> Ghassan
// log (last_Name)  ==> Error
// log (last_name)  ==> Aldarwish

let user = 'John';

user = 'Max';// user ==> Max
user = 'Tommy'; //user ==> Tommy

let age = 30; // number
age = 25;

let number = 40.5;
number = number + 5;
console.log(number); // 45.5
//------------------------

const userName = 'Mona'; // string
userName = 'Max'; // Error

console.log(userName); // Error

// -----

// form
const user_id = '98765';
let user_name = 'John';
let user_email = 'john@gmaol.com';
let user_pass = '12345';


let firstName = "Max";
let lastName = 'Tommy';
let age = `29`;

let message_1 = 'It's a nice day'; // Error
let message_1c = 'It \'s a nice day'; // right
let message_2 = "It's a nice day"; // right
let message_3 = 'It"s a nice day'; // right
let message_4 = `It's a "nice" day`; // right
message_1.length; //==>15

//get the first chr in message_4
// the index start from 0
// indet(last) = length -1
message_4[0]; // ==> I

let userName = 'Pilar';
let greeting = `Hello ${userName}`;
let greeting_1 = 'Hello ' + userName;
let greeting_1 = 'Hello  ${userName}'; //==> Hello ${userName}

// numbers
// a Integer
let num_1 = 3;
// b Float
let num_2 = 2.4;
// c + Infinity
let num_3 = 6 / 0;
// d - Infinity
let num_4 = -23 / 0;
// f Nan
let num_5 = 'A' * 33;
let num_6 = 'bb' * 'hello';

let name; // undefined

//Null ==> nothing empty unknown value
let first_name = null;

// non - primitive date
// Array []
let names = ['Max', 'Tommy', 'Pilar'];
let myArray = ['Ghassan', true, 11 ,'Max']

// Objects {}
let user = {
    name: 'Dave',
    email: 'dave@gmail.com',
    age: 30
}

// Function
function greeting() {
    //
}