function higherOrder(greeting) {
    // greeting(parm) is the Callback Function
    return greeting;
};

higherOrder(() => 'Good Morning');

//-------#####-------------
// Array prototype {
//     Map(){}
//     filter(){}
// }

// Function

function fn() { };

// Method

let obj = {
    fnMethod() {

    }
};




// Map() method creates a new array with the results of calling a provided function on every ele in the calling
// Map() dot not execute the function for array elements without values.
// Map() does not change the original array.

                //   element form the arr |
// const result = arr.map(function(item, index, array) {
    // return the new value instead of item
// })
// when we need to iterate and return the data for each element - we can use map.

let arr_1 = [1, 2, 3, 4, 5];

// add 2 for each element in the arr_1
// console.log(arr_1.map((item) => item + 2))  // [ 3, 4, 5, 6, 7 ] with arrow function

// use map to deep clone arr_1

let deepCloneArr_1 = arr_1.map((item) => item); // we have hidden return
// console.log(deepCloneArr_1);  //[ 1, 2, 3, 4, 5 ]

// Square of the numbers (number ** 2)
let callback = (ele) => {
    // for (let ele of arr_1)
    return ele **2;  // update element and push it
};
// console.log(arr_1.map(callback)); // [ 1, 4, 9, 16, 25 ]

// Square of the numbers (number ** 2) in one line
let suqare = arr_1.map((item) => item ** 2)
// console.log(suqare); // [ 1, 4, 9, 16, 25 ]

// Square of the numbers (number ** 2) with for loop
let store_1 = [];
for (let ele of arr_1) {
    store_1.push(ele ** 2);
};
// console.log(store_1);  // [ 1, 4, 9, 16, 25 ]

// item and index
//                                         index of element
let mapContent = ['A', 'B', 'C'].map((ele, index) => {
    return index > 0 ? `${ele}:${index+1}` : null;
});
// console.log(mapContent); // [ null, 'B:2', 'C:3' ]
// Map always returns an array with the same length of the original. for example if you don't write return it will return an array of undifined but with the same length , If we want to reduce the length of the original array we will use Filter

// 2) passing a function to map

let names = ['Alex', 'Uri', 'Franko'];

let sayHalloArray = names.map(function (name, index) {
    return `ID: ${index + 1} - Hallo ${name}`;
});
// console.log(sayHalloArray);  // [ 'ID: 1 - Hallo Alex', 'ID: 2 - Hallo Uri', 'ID: 3 - Hallo Franko' ]
let callbackGreeting = function(ele, i) {
    return `${i + 1} - Hallo ${ele}`;
}

let sliceAndGreeting = names.slice(1).map(callbackGreeting);
// console.log(sliceAndGreeting); //  [ '1 - Hallo Uri', '2 - Hallo Franko' ]

/* console.log(names.map((ele, index) => {
    if (index > 1) {
        return ele;
    };
}));  // [ undefined, undefined, 'Franko' ]

console.log(names.map((ele, index) => {
    if (index > 1) {
        return ele;
    } else {
        return 'Index < 2'
    };
}));  // [ undefined, undefined, 'Franko' ] */


// using map to reformat object element in an array
const newArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];
const reformat_map = (ele, i) => {
    let output = {};
//     {      '1'   :  10  }
    output[ele.key] = ele.value;
    return output;
};
// console.log(newArray.map(reformat_map));  // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]