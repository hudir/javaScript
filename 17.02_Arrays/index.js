/* 
// array length
let numbers_1 = [1, 2, 3, 4];
console.log(numbers_1);
numbers_1 = 'Hello';
console.log(numbers_1); 

const numbers_2 = [2, 3, 4, 5];
console.log(numbers_2);

console.log(numbers_2.length); 

// get element in array with array + [element index]

const colors = ['red', 'blue', 'black'];

console.log(colors[1]);
console.log(colors[colors.length - 1]);

// old example from string
let str = 'Alex';
str = 'Max';

// change the value of array element;
const classNames = ['Alex', 'Nico', 'Tommy'];
classNames[2] = 123;
delete classNames[2];
console.log(classNames);
console.log(classNames[2]);

classNames[2] = classNames[0] + classNames[1];
console.log(classNames);

const complexArray = [[1, 2, 'targets', 3], true, ['alex', 'tommy', ['text', `catch me!`]]];
console.log(complexArray[0][2]);
console.log(complexArray[2][2][1]);

const chars = ['a', 'b', 'c', 'd'];
console.log(chars.length);
console.log(chars[5]);

chars[9] = 'g';
console.log(chars.length);
console.log(chars);
console.log(typeof chars[7]);

 */


// array stack methods---------------
// .push()
const names = ['Alex', 'Max'];
console.log(names);
console.log(names.length);

names.push('Tommy');
console.log(names);
console.log(names.length);

names.push('john', 'nico', 'pilar');
console.log(names);
console.log(names.length);

// .pop()  
const colors = ['red', 'blue', 'pink', 'yellow'];
console.log(colors);
console.log(colors.length);

colors.pop();
console.log(colors);
console.log(colors.pop());
console.log(colors);
console.log(colors.length);



// array queue methods---------------
// shift() remove the first element
colors.push('black')
console.log(colors);
colors.shift();
console.log(colors);

// unshift add one or more element in the beginning of the array
console.log(colors);
colors.unshift('pink');
console.log(colors);

colors.unshift('pink', 1 , 2);
console.log(colors);

// remove and get back
const blogs = ['javascript', 'html', 'css', 'python'];
console.log(blogs);
const storeAndRemoveFirstItem = blogs.shift();
console.log(blogs);
console.log(storeAndRemoveFirstItem);
// get back
blogs.unshift(storeAndRemoveFirstItem);
console.log(blogs);



// array manipulation methods---------------
const numbers_3 = [22, 5, 88, 201, 209, 1];
console.log(numbers_3);
const sliceOfNumber = numbers_3.slice(1,5);
console.log(numbers_3);
console.log(sliceOfNumber);

// splice(index, howMany to remove, replace[element1][, ..., elementN])
const names_splice = ['alex', 'ander', 'nico', 'pilar'];
console.log(names_splice);

names_splice.splice(1 , 2);
console.log(names_splice);

names_splice.splice(1 , 1, 'Max', 'Ghaasan');
console.log(names_splice);

names_splice.splice(1 , 0, 'Ha', 'Ali');
console.log(names_splice);

// concat(value1, value2, ..., valueN)
const x = [1, 2, 3];
const y = ['a', 'b', 'c'];
const z = x.concat(y);
console.log(z);



// array search and location methods-----------
const colors_1 = ['red', 'blue', 'black'];
const colorToCheck = "RED";
console.log(colors_1.includes(colorToCheck.toLowerCase()));




// array reordering methods---------------




// array converse methods---------------
const names_toString = ['Ali', 'Max', 123];
console.log(names_toString.toString());

// join(glue)
const chrs = ['a', 'b', 'Max', 22, true]
console.log(chrs.join(" "));
console.log(chrs.join("_"));
console.log(chrs.join("#"));