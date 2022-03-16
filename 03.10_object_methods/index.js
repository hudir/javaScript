// console.log(Object.keys({a:1 ,b:2})) // is the same with a for in loop to get keys
// console.log(Object.values({a:1 ,b:2}))

function getValues(obj) {
    const arr = [];
    for (let key in obj) {
        arr.push(obj[key]); 
    };
    return arr;
};
// console.log(getValues({a:1 ,b:2}));

const person = {
    fname: 'Alex',
    lname: 'Jinx',
    age: 35,
    job: 'LOL'
};
const address = {
    city: 'Berlin',
    country: 'Germany',
    'zip code': 12524
};
const info = Object.assign(person, address);
// console.log(person)

function entries(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push([key, obj[key]]);
    };
    return arr;
};
// console.log(entries(person))
// console.log(Object.entries(person))

// form ahmed
let first = { firstName: 'John' }; 
let last = { lastName: 'Smith' };
// console.log({...first, ...last})

// form Olivia
const mergeObj = function () {
    const joinedObj = {};
    for (let i = 0; i < arguments.length; i++) {  // looping all arguments
        for (let key in arguments[i]) {               // looping in the (i)th object
            joinedObj[key] = arguments[i][key];        // copy key and value to joinedObj
        }; 
    };
    return joinedObj; 
};
//  console.log(mergeObj(first, last, person)); 