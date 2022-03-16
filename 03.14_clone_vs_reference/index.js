// copy primitives 

let user = 'Alex';

let person = user;

user = 'Pilar'; // change user

// console.log('user==> ', user);
// console.log('person==>' , person);

// copy non primitives OR Reference data type

let x = [1, 2, 4]; // x is reference to [1, 2, 4]  

let y = x; // y is reference to x | NOT COPY

x.push(5);

// console.log('x ==> ', x);
// console.log('y ==> ', y);

//--------object--------

let person_1 = {
    name: 'Jon',
    age: 35
}

let person_2 = person_1

// console.log('Person1--> ', person_1);
// console.log('Person2--> ', person_2);

person_2.age = 66;

// console.log('Person1--> ', person_1);
// console.log('Person2--> ', person_2);

const person_3 = 'We can copy this';
let person_4 = person_3;

// console.log('Person3--> ', person_3);
// console.log('Person4--> ', person_4);

person_4 = 'Not any more';

// console.log('Person3--> ', person_3);
// console.log('Person4--> ', person_4);


// ---------------   clone   --------------
// clone is copy the original element and make an independent new element
// - We can clone with Spread Operator (...) It's work with Objects and Arrays.

let odd = [1, 2, 3];
// ...odd ==> 1, 2, 3
// [...odd] ==> [1, 2, 3]

// clone odd array
let arrayOfNumbers = [...odd];

// Objects

let car = {
    name: 'BMW',
    year: 2010
};
// ...car ==> name: 'BMW', year: 2010
// {...car} ==> {name: 'BMW', year: 2010}

// clone car object
let cloneCar = {...car};


//---------------####----------------

let userObject = {
    name: 'Tommy',
    age: 44
};

// console.log('userObject==> ', userObject);

let cloneUser = {...userObject};

// console.log('cloneUser==> ', cloneUser);

userObject.email = 'tommy@gmail.com';

// console.log('userObject==> ', userObject);
// console.log('cloneUser==> ', cloneUser);

//---------------####----------------

let posts = [{title: 'JavaScript', image: 'js.png'}, {title: 'PHP', image: 'php.png'}];

let clonePosts = [...posts];

// console.log(clonePosts);

clonePosts[1].views = 405;

// console.log(clonePosts);



// Clone Array  form Ghasson


let posts_g = [{ title: 'javascript', image: 'js.png' }, { title: 'PHP', image: 'php.png' }]
let clonePosts_g = [...posts_g]

// console.log('posts ==> ', posts)
/**
 posts ==>  [
  { title: 'javascript', image: 'js.png' },
  { title: 'PHP', image: 'php.png' }
]
 */
// console.log('clonePosts ==> ', clonePosts)

/**
 clonePosts ==>  [
  { title: 'javascript', image: 'js.png' },
  { title: 'PHP', image: 'php.png' }
]
 */

clonePosts_g[1].views = 10
clonePosts_g.push(123)

console.log('posts_g ==> ', posts_g) 
console.log('clonePosts_g ==> ', clonePosts_g) 

/**
 posts ==>  [
  { title: 'javascript', image: 'js.png' },
  { title: 'PHP', image: 'php.png', views: 10 }
]
 */



// -------------####-----------
// **2. Scrabble.**
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
const scrabble = arr => {
  return arr.reduce((total, tile) => total += tile.score, 0);
};
 console.log(scrabble(
[
{ tile: "N", score: 1 },
{ tile: "K", score: 5 },
{ tile: "Z", score: 10 },
{ tile: "X", score: 8 },
{ tile: "D", score: 2 },
{ tile: "A", score: 1 },
{ tile: "E", score: 1 }
])); 