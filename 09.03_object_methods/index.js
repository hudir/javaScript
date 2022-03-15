const newObject = {
    name: 'Alex',
    age: 30,
    myAge: () => {
        return 'I am 33';
    }
};
// console.log(newObject.myAge())

const user = {
    name: 'hudir',
    email: 'info@hudir.com',
    greeting() {
        return 'Hallo ' + this.name
    },
    greeting1: () => {
        return 'Hallo ' + this.name + ' why'
    },
    myAge: () => {
        return "I am 33 " + this.email;
      },
    myFunc: () => {
        console.log(this);
    }
};
// console.log(user.myAge())
// user.myFunc()

const recipe = {
    'title recipe':"Mole",
    serving: 2,
    ingredients: ['Cumin', 'cinnamon', 'cocoa']
};
// console.log(recipe['title recipe'])
for (let i = 0; i < recipe.ingredients.length; i++) {
    // console.log('with for loop ==>', recipe.ingredients[i]);
};
for (let i of recipe.ingredients) {
    // console.log(i);
};

const numberArray = [1,3,45,80,54,44];
for (let item of numberArray) {
    // console.log(item);
};

for (const name of ['Alxe', 'Bob']) {
    // console.log(name)
}

// for of for strings

const str = 'hudir';
for (let letter of str) {
    // console.log(letter);
};


// ========for in with object =========
const person = {
    name: 'Bob',
    age: 29,
    city: 'Berlin',
    email: 'bob@gmail.com'
};
for (const keys in person) {
    // console.log(keys + ': ' + person[keys]);
};
/**
 * 
 * 15 min
 Create a function named 'objectToArray' take an object as an argument and return

 array with 2 elements:

 objectToArray({name:'Jon', age:29, email:'jon@gmail.com'}) ==> [['name', 'age', 'email'],['Jon', 29, 'jon@gmail.com']] 
 objectToArray({name:'BMW', color:'Black', year:2005}) ==> [['name', 'color', 'year'],['BMW', 'Black', 2005]]

 */

 const objectToArray = obj => {
     let key = [], value = [], arr = [];
     for (let ele in obj) {
         key.push(ele);
         value.push(obj[ele]);
     };
    //  arr.push(key);
    //  arr.push(value);
    // arr= key.concat(value)
    // arr.splice(0,0,key,value)
    arr = [key, value]
     return arr;  
 };

//  console.log(objectToArray({name:'BMW', color:'Black', year:2005})) //      ==> [['name', 'color', 'year'],['BMW', 'Black', 2005]]
//  console.log(objectToArray({name:'Jon', age:29, email:'jon@gmail.com'})) // ==> [['name', 'age', 'email'],['Jon', 29, 'jon@gmail.com']] 
const arrayToObject_fromArray = arr => {
    const obj = {};
    let i = 0;
    for (let key of arr[0]) {
        obj[key] = arr[1][i];
        i++
    };
    return obj;
}

// console.log(arrayToObject_fromArray([['name', 'age', 'email'], ['Jon', 29, 'jon@gmail.com']])) // ==> {name:'Jon', age:29, email:'jon@gmail.com'}
// console.log(arrayToObject_fromArray([['name', 'color', 'year'], ['BMW', 'Black', 2005]])) // ==> {name:'BMW', color:'Black', year:2005}console.log(

/**
 * 
 * 20 min
 Create a function named 'arrayToObject' take 2 arrays as an arguments and return
 an object

 arrayToObject(['name', 'age', 'email'], ['Jon', 29, 'jon@gmail.com']) ==> {name:'Jon', age:29, email:'jon@gmail.com'}
 arrayToObject(['name', 'color', 'year'], ['BMW', 'Black', 2005]) ==> {name:'BMW', color:'Black', year:2005}

 Please solve this exercise in 2 different ways:
 1- classic for loop.
 2- for ... of loop
 */

 const arrayToObject = (keys, values) => {
     const obj = {};
     for (let i = 0; i < keys.length; i++) {
         obj[keys[i]] = values[i];
     };
     return obj;
 };
// console.log(arrayToObject(['name', 'age', 'email'], ['Jon', 29, 'jon@gmail.com'])) // ==> {name:'Jon', age:29, email:'jon@gmail.com'}
// console.log(arrayToObject(['name', 'color', 'year'], ['BMW', 'Black', 2005])) // ==> {name:'BMW', color:'Black', year:2005}console.log(

    const arrayToObject_forOf = (keys, values) => {
        const obj = {};
        let counter = 0;
        for (let item of keys) {
            obj[item] = values[counter];
            counter++;
        }
        return obj;
    };
//    console.log(arrayToObject_forOf(['name', 'age', 'email'], ['Jon', 29, 'jon@gmail.com'])) // ==> {name:'Jon', age:29, email:'jon@gmail.com'}
//    console.log(arrayToObject_forOf(['name', 'color', 'year'], ['BMW', 'Black', 2005])) // ==> {name:'BMW', color:'Black', year:2005}

const arrayToObject_forOf_entries = (arr1, arr2) => {
    const output = {};
   
    for (let [index, item] of arr1.entries()) {
        
        output[item] = arr2[index];
    };
    return output;
};
//    console.log(arrayToObject_forOf_entries(['name', 'age', 'email'], ['Jon', 29, 'jon@gmail.com'])) // ==> {name:'Jon', age:29, email:'jon@gmail.com'}
//    console.log(arrayToObject_forOf_entries(['name', 'color', 'year'], ['BMW', 'Black', 2005])) // ==> {name:'BMW', color:'Black', year:2005}

//    console.log(['name', 'color', 'year'].entries())


var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined
let arr1 = [];
for (let e of iterator) {
    arr1.push(e);
    // console.log(e);
};
// console.log(arr1)

// [0, "a"]
// [1, "b"]
// [2, "c"]

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
// array like object with random key ordering

const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
