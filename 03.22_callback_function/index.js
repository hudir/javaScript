function getLanguage(callback, language = 'English') {
    console.log('greeting language');
    callback(language);
};

function greeter(lang) {
    if (lang == 'English') console.log('Hello')
    else if (lang == 'German') console.log('Guten Tag')
};

// getLanguage(greeter, 'German');

const numbers = [1,2,3,4,5,6];
// get all numbers > 4

// const result = numbers.filter(el => {
//     return el > 4;
// });

function filterArr(item) {
    return item > 4;
};

let result = numbers.filter(filterArr);

// console.log(result)

// ##############################################3
function firstFunction(callback) {
    setTimeout( function(){
        console.log(1);
        callback()
    } , 1000)  
}

function secondFunction() {
    console.log(2);
}
// firstFunction(secondFunction);

function getData(callback) {
  setTimeout(function() {
    console.log('getting images from the server');
    callback();
  }, 500)
};
function renderData() {
    console.log('rendering images to browser');
};
// getData();renderData();
// getData(renderData);



// ############# https://www.youtube.com/watch?v=3a0I8ICR1Vg
// everything outside is visiting in the inside function // anything inside has the accse of the outer things
function outerFunction(outerVariable) {
    const outer2 = 'Hi, i can go inside the inner Functions'
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
        console.log(outer2);
        console.log('outer2 and outerVariable is out the insideFunction scope')
    };
};

const newFunction = outerFunction('outside'); // here we already 'have' the outerVariable, but not log yet;
// newFunction('inside');



// --------------# ---------------
// let name = 'Max';

// function greetUser() {
//     console.log('Hello ' + name);
// };
// greetUser();

// name = 'Mara';
// greetUser()

function greetUser() {
    let name = 'Peter';
    return function() {
        console.log(name);
    };
};
const greet = greetUser();
// greet(); 
// console.log(greetUser());  //  [Function (anonymous)]


function counter() {
    let counter = 0;
    return function() {
        return counter++ ;
    };
};
let count = counter();
// console.log(count()); // 0
// console.log(count()); // 1
// console.log(count()); // 2

// console.log(counter()()); // 0
// console.log(counter()()); // 0
// console.log(counter()()); // 0


// ---------#------------
function addNumber(num1) {
    return function(num2) {
        return num1 + num2;
    };
};
const innerFunction = addNumber(1); // passing 1 to num1  / executed
// console.log(innerFunction(2));      // passing 2 to num2  ====>  get 3


// ---------------------- https://www.freecodecamp.org/news/javascript-closure-tutorial-with-js-closure-example-code/


// function greetingMsg() {
//     console.log(customerName);// ReferenceError: customerName is not defined
//   }
  
//   function greetCustomer() {
//      var customerName = "anchal";
//      greetingMsg();
//   }
  
//   greetCustomer();

// ------------------

let number2 = 2
function addNumbers(number1) {
    console.log(number1 + number2);
//          10 form addNumbersGenerater
  }
  
  function addNumbersGenerate() {
    var number2 = 10;
    addNumbers(number2);
  }
  
//   addNumbersGenerate();

// ------------------

function greetCustomer() {
    const customerName = "anchal";
    function greetingMsg() {   // i have a property 'clusore' as an Object, in which wo save my parent function and variables
      console.log("Hi! " + customerName);
    }
    return greetingMsg;
  }
  
  const callGreetCustomer = greetCustomer();
//   callGreetCustomer(); // output – Hi! anchal

//   console.dir(callGreetCustomer);

// ------------------


// function countTheNumber() {
//     var arrToStore = [];
//     for (var x = 0; x < 9; x++) {
//       arrToStore[x] = function () {
//         return x;
//       };
//     }
//     return arrToStore;
//   }
  
//   const callInnerFunctions = countTheNumber();
//   console.log(callInnerFunctions[0]()) // 9
//   console.log(callInnerFunctions[1]()) // 9

// But what if you want an output of 0 to 8? Simple! Use a closure.

// function countTheNumber() {
//     var arrToStore = [];
//     let arr;
//     for (var x = 0; x < 9; x++) {
//       arrToStore[x] = function () {
//         return x;
//        // arrToStore[x].push(x); // TypeError: Cannot read properties of undefined (reading 'push')
        
//       };
//     }
//     return arrToStore;
//   }
  
//   const callInnerFunctions = countTheNumber();
//   console.log(callInnerFunctions[0]()) // 0
//   console.log(callInnerFunctions[1]()) // 1

function callTheNumber() {
    function getAllNumbers(number) {
      return function() {
        return number;
      };
    }
    var arrToStore = [];
    for (var x = 0; x < 9; x++) {
      arrToStore[x] = getAllNumbers(x);
    }
    return arrToStore;
  }
  
  const callInnerFunctions = callTheNumber();
  console.log(callInnerFunctions[0]()); // 0
  console.log(callInnerFunctions[1]()); // 1
  console.log(callInnerFunctions[2]()); // 2
  console.log(callInnerFunctions[3]()); // 3