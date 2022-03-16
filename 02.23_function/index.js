/* Functions are the main “building blocks” of the program.
 They allow the code to be called many times without repetition.*/

// To create a function we can use a function declaration.
// Syntax:
// function name() {
//     body of the function
// }

let name = 'max' ;

function showMassage() {
    name ='Bob';
    console.log(`Hallo ${name}!`);
}

console.log('name ==> ', name);
showMassage();
console.log('name ==> ', name);

// console.log('function ==> ', showMassage());

//-------#####------

// Global Scope
// The outer variable is only used if there's no local scope.
// If a same-named variable is declared inside the function, then it shows the outer one.
// Global variables are visible from any function.

// A variable declared inside a function is only visible inside that function.


let username = 'Hudir';  // Global Scope

function printHello() {
    // Local scope
    let username = 'John'; 
    console.log('Hello ' + username + '!');
};
printHello();


// There is another syntax for creating a function that is called a Function Expression.

// 1- create a function with function keyword we should give the fanction a name
// 2- create a function with function keyword we can call the Before or After 

saySomething();
function saySomething() {
    console.log('Hallo hudir!!!!');
};

let saySomething_2 = function() {
    console.log('Hallo hudir again!!!');
};
saySomething_2();

greeting_1();
function greeting_1() {
    console.log('Good morning Pilar');
};

const greeting_2 = function() {
    console.log('Good morning Max');
};
greeting_2();

// in Arrow function if we just have one line code we can remove {}
const greeting_3 = () => console.log('Good morning Hudir');
greeting_3();

// We can pass arbitrary data to functions using parameters (also called function arguments) .

// params are keys
function greeting_5(name) {
    console.log(`Hallo ${name}`);
};
// arguments are values
greeting_5('Tom');
greeting_5('Max');
greeting_5('Danial');

/* Parameters to a function behave like regular bindings,
 but their initial values are given by the caller of the function,
  not the code in the function itself.*/


const oddOrEven = num => {
    num % 2 == 0 ? num += " is even" 
    : typeof num === 'number' ?  num += " is odd"
    : num = "What!!! i want a number!";
    return num;
};
console.log(oddOrEven(3));
console.log(oddOrEven(9556));
console.log(oddOrEven(77));
console.log(oddOrEven('g'));

const contact = (firstName, lastName, email) => {
    let info = [];
    info.push('first name: ' + firstName);
    info.push('last name: '+ lastName);
    info.push('email: ' + email);
    console.log(info);
}
contact('Zhuo', 'Yang', 'hudirybw@msn.com');

const info = (fName, lName, email) => {
    let personInfo = `
    first name: ${fName}
    last name: ${lName}
    email: ${email}
  `;
  
    console.log(personInfo);
  };

  info('Tommy', 'Tomas', 'hffuf@fgg.com ')


  // hash#

  function addHash(str1, str2) {
      let str3 = '#' + str1 + ' #' + str2;
      console.log(str3);
  };
  addHash('Java', 'PHP');

  function hashMaker(arr) {
      let str = '';
      for (let i = 0; i < arr.length; i++) {
          str += '#' + arr[i] + ' ';
      }
      console.log(str);
  }

  hashMaker(['js', 'php', 'c', 'c#', 'c++']);