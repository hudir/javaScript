// B. Find the person with the most complited todos and console.log their name and how many todos they have comleted
// use the following object to do the task B
const data1 = {
Mark: [
{title: "read more about js",
completed: true},
{title: "call a friend",
completed: false},
{title: "make dinner",
completed: true},
{title: "watch a movie",
completed: false},
{title: "go to the grocery shop",
completed: true}
],
Lara : [
{title: "go to the doctor",
completed: false},
{title: "feed the dog",
completed: true},
{title: "do some sports",
completed: false},
{title: "clean my car",
completed: true},
{title: "get new clothes",
completed: false}
],
Michael: [
{title: "sing a song",
completed: false},
{title: "sleep well",
completed: false},
{title: "love my self",
completed: true},
{title: "go out for drinks",
completed: false},
{title: "read a nice book",
completed: true}
]
};


const mostCompleted1 = obj => {
    let newObj = {},
    most = 0,
    winner = '';
    
    for(let key in obj){
        newObj[key] = obj[key].filter(el=>el.completed===true);
        newObj[key] = newObj[key].length;

        if(newObj[key]>most){
            most = newObj[key];
            winner = key;
        };
    };

    // console.log(newObj); // { Mark: 3, Lara: 2, Michael: 2 }
    return `${winner} has done the most tasks: ${most}.`;
};
// console.log(mostCompleted1(data1));




// -------------------------------md 01----------------------------
// Q1. Given the following arrays:

const marksTodos = [
  {
    title: "read more about js",
    completed: true,
  },
  {
    title: "call a friend",
    completed: false,
  },
  {
    title: "make dinner",
    completed: true,
  },
  {
    title: "watch a movie",
    completed: false,
  },
  {
    title: "go to the grocery shop",
    completed: true,
  },
];

const larasTodos = [
  {
    title: "go to the doctor",
    completed: false,
  },
  {
    title: "feed the dog",
    completed: true,
  },
  {
    title: "do some sports",
    completed: false,
  },
  {
    title: "clean my car",
    completed: true,
  },
  {
    title: "get new clothes",
    completed: false,
  },
];

const michaelsTodos = [
  {
    title: "sing a song",
    completed: false,
  },
  {
    title: "sleep well",
    completed: false,
  },
  {
    title: "love my self",
    completed: true,
  },
  {
    title: "go out for drinks",
    completed: false,
  },
  {
    title: "read a nice book",
    completed: true,
  },
];
// A. Create a function that returns only the todos that are not complited yet and console.log all the arrays

function notCompletedToDos(arr){
    return arr.filter(el=>el.completed===false).map(el=>el.title);
};
// console.log(notCompletedToDos(marksTodos));
// console.log(notCompletedToDos(larasTodos));
// console.log(notCompletedToDos(michaelsTodos));

// B. Find the person with the most complited todos and console.log their name and how many todos they have comleted

function mostCompleted(...arrOfArr){
    let newArr = arrOfArr.map(el=> el.filter(ele=>ele.completed===true));
    newArr = newArr.map(el=>el.length)

    const most = Math.max(...newArr);
    const who = newArr.indexOf(most)+1;
    return `the ${who}th person has ${most} completed todos, pls check the name by yourself`;
};

// console.log(mostCompleted(marksTodos,larasTodos,michaelsTodos));


// Q2. Given the following array: marksTodos

// A. Mark has completed all the todos for today. Make an array that all the todos inside are completed
// B. Mark has completed the "call a friend to do" Update the array and make this todo completed.

function completed(arr){
    return arr.filter(el=>el.completed===true);
};
// console.log(completed(marksTodos));
// console.log(marksTodos)

function updateTodo(str,arr){
    return arr.map(el=>{
        if (el.title === str && el.completed === false) {
            el.completed = true;
            return el;
        } else return el;
    });
};
// console.log(updateTodo("call a friend",marksTodos));



// Q3. Given the following array:
const numOne = [4,46,32,112,54,5];
const numTwo = [12,33,46,98,66,101];
const numThree = [76,7,53,90,20,78];
const numFour = [1,88,102,122,42,2];

// A. Make a function that returns an array sorted from smallest to bigger number

const sorted = arr => arr.sort((a,b)=>a-b);
// console.log(sorted(numOne))
// console.log(sorted(numTwo))
// console.log(sorted(numThree))
// console.log(sorted(numFour))


// B. Make a function that returns the bigger number from every array
const biggest=arr=>Math.max(...arr);
// console.log(biggest(numOne))
// console.log(biggest(numTwo))
// console.log(biggest(numThree))
// console.log(biggest(numFour))


// C. Make a function that returns the sum of the numbers in the array
const sumOfArr= (arr) => arr.reduce((x,y)=>x+y,0);

// function sum(arr){
//     return arr.reduce((acc,el)=>acc+el,0);
// };

// console.log(sumOfArr(numOne))
// console.log(sumOfArr(numTwo))
// console.log(sumOfArr(numThree))
// console.log(sumOfArr(numFour))









// -------------------------------md 02----------------------------

// Q1. Given the following array:

let users = [
    {
        name : "Mark",
        age : 32,
        country : "Spain"
    },
    {
        name : "John",
        age : 35,
        country : "Sweden"
    },
     {
        name : "Emily",
        age : 24,
        country : "Germany"
    },
    {
        name : "Myriam",
        age : 30,
        country : "Sudan"
    },
    {
        name : "Alfred",
        age : 28,
        country : "Argentina"
    },
    {
        name : "Byron",
        age : 23,
        country : "Slovenia"
    },
]

// A. return an array that contains only the users that they live in countries starting with an "S"

const countriesStartWithS = arr => arr.filter(el=>el.country[0]==='S');
// console.log(countriesStartWithS(users));

// B. add a new key in every user for gender. If the name contains the letter "m" the person is female, if not is male. return the new array  

const addGender=arr=>arr.map(el=>{
    el.name.includes('m') ? el.gender = 'female' : el.gender = 'male';
    return el;
});
// console.log(addGender(users));


// Q2. Given the following array:
const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// A. change the objects in every employ. every object should have the name and the income of it's user after the bonus and the tax e.g {name:"Adam" , income:4500}

const employ = arr => arr.map(el=>{
    el.income = el.salary + el.bonus - el.tax;
    delete el.salary;
    delete el.bonus;
    delete el.tax;
    return el;
});
// console.log(employ(employees));


// Q3. Given the following strings          
let str1 = "LlIiOoNn"
let str2 = "CaAtT"
let str3 = "pEeaCcoCcKk"
let str4 = "GgirRaFfFfe"

// A. Make a function that removes all the uperCase letters from the string. convert each string to an array and use an array method

const removeUpperCase = str => str.split('').filter(el=> el.toUpperCase() !== el).join('');

// console.log(removeUpperCase(str1));
// console.log(removeUpperCase(str2));
// console.log(removeUpperCase(str3));
// console.log(removeUpperCase(str4));











// -------------------------------md 03----------------------------

// Q1. Given the following arrays:
const markTodosToday = [
    {
      title: "read more about js",
      completed: true,
    },
    {
      title: "call a friend",
      completed: false,
    },
    {
      title: "make dinner",
      completed: true,
    },
  ];

  const markTodosYesterday = [
    {
        title: "watch a movie",
        completed: false,
      },
      {
        title: "go to the grocery shop",
        completed: true,
      },
  ]

// A. Make an array that contains the items from both arrays, use the spread operator (3 dots)

const markToDo = [...markTodosToday, ...markTodosYesterday];
// console.log(markToDo);

// B. Mark has completed the "call a friend to do" Update the array and make this todo completed.

// console.log(updateTodo("call a friend",markToDo));
   
// C. Add an id to all the todos, id should start from 1 and increase by one (use the index)           
function addID(arr){
    return arr.map((el,i)=>{
        el.id = i+1;
        return el;
    });
};
// console.log(addID(markToDo));


// Q2. Given the following Objects:
let obj1 = { age: 7, name: 'Alfred' }
let obj2 = { animal: 'dog' }
// A. Merge the 2 objects together with 2 different methods
// Use the spread operator (3 dots)
// Use object.assign   

let obj3 = {...obj1, ...obj2};
// console.log('use spread operator',obj3)

let obj4 = {};
Object.assign(obj4,obj1,obj2)
// console.log('use Object.assign',obj4)


// Q3. Given the following Array:
const person = [
{
        name : "David" , 
        lastname : "Smith",
        age : 30,
        city : "Madrid"
    },
    {
        name : "Marry" , 
        lastname : "Leer",
        age : 24,
        city : "New York"
    },
    {
        name : "Mark" , 
        lastname : "Almont",
        age : 34,
        city : "Kathmandu"
    }
 ]
// *A. Use the find method to find the user that lives in Madrid 

// console.log(person.find(el=>el.city === 'Madrid'))

// B. Create a variable with name userName and add assign the name of the user you found to it. we use 'name' to find the obj in Arr ?

let userName = 'Marry';
// console.log(person.find(el=>el.name === userName));













// -------------------------------md 04----------------------------
// ## Javascript Assignments
// ![enter image description here](https://media.giphy.com/media/AOSwwqVjNZlDO/giphy.gif)

//  1. Create a function to merge two arrays.
//  this function should have 2 arguments: example :

const concat = (...arrOfArr) => arrOfArr.reduce((acc,el)=>acc.concat(el),[]);

// console.log(concat([4, 8, 9], [2, 6, 8], [1,3,5]))  // ➞ [4, 8, 9, 2, 6, 8]


//  2. Create a function that accepts an array and returns the last item in the array.
const getLast=arr=>arr.pop();

// console.log(getLast([1, 2, 3]));     // ➞ 3
// console.log(getLast(["cat", "rabbit", "penguin"]));     // ➞ "penguin"


//  3. Create a function that takes an array and a string as arguments and return the index of the string.

const findIndex =(arr,str)=>{
    return arr.indexOf(str) != -1 ? arr.indexOf(str) : `there is no ${str} in Array [${arr}]`;
};

// console.log(findIndex(["Hi", "FBW6", "DCI", "Hamburg"], "FBW6")) // ➞ 1
// console.log(findIndex(["Hi", "FBW6", "DCI", "Hamburg"], "E10")) 


//  4. create a function to Skip the Drinks with Too Much Sugar, this function takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
// Drinks that contain too much sugar (in this challenge) are:
//     Cola
//    Fanta

const skipSugarDrinks=arr=>arr.filter(el=> el!='cola' && el!='fanta')

// console.log(skipSugarDrinks(["fanta", "cola", "water"])) // ➞ [water]


//  5. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. **(222) 222-222**).
//  Don't forget the space after the closing parenthesis.

const formatPhoneNumber = ([a,b,c,d,e,f,g,h,i,j]) => '('+a+b+c+') '+d+e+f+'-'+g+h+i+j;

// console.log(formatPhoneNumber([0, 1, 5, 7, 5, 5, 4, 4, 6, 8])) // ➞ "(015) 755-4468"






let chatroomUsers = [
    {
        name : "Mark",
        age : 32,
        country : "Spain"
    },
    {
        name : "John",
        age : 35,
        country : "Sweden"
    },
     {
        name : "Emily",
        age : 24,
        country : "Germany"
    },
    {
        name : "Myriam",
        age : 30,
        country : "Sudan"
    },
    {
        name : "Alfred",
        age : 28,
        country : "Argentina"
    },
    {
        name : "Byron",
        age : 23,
        country : "Slovenia"
    }
];
//  6. Write a function that returns the number of users in a chatroom based on the following rules:
//  - If there is no one, return `"no one online"`.
//  - If there is 1 person, return `"[user1] online"`.
//  - If there are 2 people, return `[user 1] and [user 2] online"`.
//  - If there are `n>2` people, return the first two names and add `"and n-2 more online"`.

function chatroomStatus(arrOfObj){
    const len = arrOfObj.length;
    switch(len){
        case 0:
        return "no one online";

        case 1: 
        return `[${arrOfObj[0].name}] from ${arrOfObj[0].country} online]`;

        case 2:
        return `[${arrOfObj[0].name}] and [${arrOfObj[1].name}] online]`;

        default:
        return `[${arrOfObj[0].name}], [${arrOfObj[1].name}] and ${len-2} more online]`;
    };
};

// console.log(chatroomStatus(chatroomUsers))
// console.log(chatroomStatus([]))
// console.log(chatroomStatus([{name : "Emily",age : 24,country : "Germany"}]))

// console.log(chatroomStatus([{
//     name : "Alfred",
//     age : 28,
//     country : "Argentina"
// },
// {
//     name : "Byron",
//     age : 23,
//     country : "Slovenia"
// },]))
 

//  7. Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
// Notice in the second example above, "KOSTAS" is returned as "Kostas".

const capMe = arr => arr.map(el=>el[0].toUpperCase()+el.slice(1).toLowerCase());

// console.log(capMe(["mansour", "franco", "daniel", "sara"]));   // ➞ ["Mansour", "Franco", "Daniel", "Sara"];
// console.log(capMe(["lana", "KOSTAS", "mara", "steven"]));   // ➞ ["Lana", "Kostas", "Mara", "Steven"]


//  8. Write a function take two arguments ( object , string) that returns `true` if the object contains the specified string as a  key, and `false` otherwise. (Does the Object Contain a Given Key?)

const keyFinder =(obj,str) => str in obj;

// console.log(keyFinder({ name: 'Rania', age: 37, id: 101 }, "address"));   // ➞ false
// console.log(keyFinder({ isProgrammer: true, city: 'Paris', hasKids: true }, "city"));   // ➞ true


//  9. Write a function that converts an object into an array of keys and values.

const objectToArray = obj => {
    let arr =[];
    for(let key in obj){
        arr.push([key,obj[key]]);
    };
    return arr;
};

// console.log(objectToArray({D: 1,B: 2,C: 3})) //➞ [["D", 1], ["B", 2], ["C", 3]]
// console.log(objectToArray({likes: 2,dislikes: 3,followers: 10})) // ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]


// 10. Create the function that takes an array with objects and returns the sum of people's budgets.

const getBudgets=arr=>arr.reduce((acc,obj)=>acc+obj.budget,0);

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])) // ➞ 65700

// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])) // ➞ 62600
