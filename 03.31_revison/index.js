//##### Transform data ######

//1- Array to Object
// Create a function named arrayToObject takes an array as an argument and return object.
function arrayToObject(arr){
    return arr.reduce((acc,el)=>{
        acc[el[0]]=el[1]
        return acc
    },{})
}

// console.log(arrayToObject([['firstName', 'John'], ['lastName', 'Do'], ['age', 31]])) //==> {firstName:'John',lastName:'Do', age:31}


//-----------------//

//2- Object to Array
// Create a function named objectToArray takes an object as an argument and return array.
function objectToArray(obj){
    let keys = Object.keys(obj), vals = Object.values(obj);
    return keys.map((el,i)=> [el,vals[i]]);

    // or use Object.entries()
    return Object.entries(obj);
}

//  console.log(objectToArray({name:'Alex', age: 29}))  // ==> [['name', 'Alex'],  ['age', 29]]
 

//---------------//
//3- Create a function named addWord takes an array of names as first argument and a string (Hello) as second argument.
function addWord(arr,str){
    return arr.map(el=> str+' '+el);
};

 let names = ['John', 'Bob'];
//  Look at the expected output:
// console.log( addWord(names,'Hello')) //==> ['Hello John', ' Hello Bob']
 

//--------------------------------------------------------------------------------//
//######### Nested for loop ###########
//4-  Create a function named grid takes a number of grids as first argument and a string char as second argument.
function grid(num,str){
    let arr = [];
    for (let i =0; i<num;i++){
        let row =[]
        for(let j=0; j<num; j++){
            row.push(str);
        };
        arr.push(row);
    };
    return arr;
};

    // Look at the expected output:
//    console.log( grid(3, "$")) //==> [
                    //   [ '#', '#', '#', '#', '#' ],
                    //   [ '#', '#', '#', '#', '#' ],
                    //   [ '#', '#', '#', '#', '#' ],
                    //   [ '#', '#', '#', '#', '#' ],
                    //   [ '#', '#', '#', '#', '#' ]
                    // ]
   
  

//----------------------------------------------------------------------------------//
//######### Arrays & objects ###########
//5- Create a function named freelanceInvoice takes an object (hourAndDays) as the first argument and cost per hour as the second argument.
function freelanceInvoice(arr, num){
    return arr.reduce((acc,obj)=> acc + (obj.end - obj.start) * num, 0)
}

//  Look at the expected output:
 const hourAndDays = [
    { day: 'Monday', start: 8, end: 15},
    { day: 'Wednesday', start: 9, end: 17},
    { day: 'Friday', start: 7, end: 12},
];
// console.log(freelanceInvoice(hourAndDays , 20))  // ==> 400 Euro


//----------------------------------------------------------------------------------//
//######### Classes ###########
/**
6- Create class named Shop.
    Add a constructor to initialize the properties in the given order.
    Class' properties:
    the name as a string (name of the shop),
    the area as a number (the area of the shop)
    the space as a number (the space needed `square meter` for each person in the shop)
    Class' methods:
    totalPeopleToGetIn() // Maximum people should get in the shop
    details() // The shop details
    If name = Netto, area = 200 and space for each person is 5 square meter
    Expected Output:
    shop.totalPeopleToGetIn();
    `We allow 40 people to get in.`
    shop.details();
    `The shop name is Netto. 5 square meter for each person.`
 */
class Shop{
    constructor(name,area,space){
        this.name=name;
        this.area=area;
        this.space=space;
        let sec = 9527;

        this.see = sec
  
    };

    totalPeopleToGetIn(){
        return `We allow ${Math.floor(this.area/this.space)} people to get in.`;
    };

    details(){
        return `The shop name is ${this.name} and has ${this.area} square meters. ${this.space} square meter for each person.`;
    };

    get9527(){
        return sec
    }
};
const lidl = new Shop('lidl', 200, 13);
// console.log(lidl.totalPeopleToGetIn());
// console.log(lidl.details());
lidl.see = 9999
// console.log(lidl.see)



//----------------------------------------------------------------------------------//
//######## Arrays ################

//7- Create a function named capitalize takes a string as the first argument and returns the string by capitalizing the first letters.
function capitalize(str){
    let arr = str.split(' ');
    return arr.map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
};
// Example: 
// console.log(capitalize('hello world')); //==> Hello World

//-------------------------------------------------------------------------------//
//########## Problem Solving ############
/**
 8- Create a function named checkPassword takes a password as an argument and check:
    The password must consist of only numbers.
    The password must be at lest 5 digits long.
    The password should have at least two different numbers.
    checkPassword function return true if the password is valid and false if it not valid.
    Look at the expected output:
    checkPassword('xxxxx')// false
    checkPassword(1234) // false
    checkPassword(123433) // true
    checkPassword(222222) // false
    checkPassword('123456') // true
    checkPassword('1234xx56') // false
 */
function checkPassword(password){
    let check = +password.toString()[0]

    if (isNaN(+password)
    || password.toString().length < 5
    || password.toString().split('').filter(num=> +num != check).length < 2
    ) return false;

    return  true;
};

// console.log(checkPassword('xxxxx')); // false
// console.log(checkPassword(1234));  // false
// console.log(checkPassword(123433));  // true
// console.log(checkPassword(222222));  // false
// console.log(checkPassword('123456')); // true
// console.log(checkPassword('1234xx56')); // false


//9- Nested array with map/reduce
// Create a function named getOddNumbers takes nested array of numbers as an argument and return array of odd numbers.
const numbers = [
    [1, 2, 3, 4, 5],
    [3, 8, 3, 10, 13],
    [7, 45]
  ];

// nested .reduce() can have the same acc
 const getOddNumbers1 = arr => arr.reduce((acc,el)=>{
     el.reduce((acc,y)=>{
        if (y % 2 != 0 && !acc.includes(y)) acc.push(y);
        return acc;
     },acc);
     return acc
    }, []).sort((a,b)=>a-b);
//  console.log(getOddNumbers1(numbers)) // [ 1, 3, 5, 7, 13, 45 ]

// filter in reduce
 const getOddNumbers2 = arr => arr.reduce((acc,el)=>{
    acc.push(...el.filter(num=> num % 2 !== 0 && !acc.includes(num)))
    return acc
    }, []).sort((a,b)=>a-b);
//  console.log(getOddNumbers2(numbers)) // [ 1, 3, 5, 7, 13, 45 ]




// if there is unknowen level of Array
const numbersUn = [
    [1, [ 2, [8, 54]]],
    [3, 8, 3, 10, 13],
    [7, 45]
  ];

 let res = []
function getAllElementFromUnknownLevelNestedArray(arr) {
    if (!arr[0]) return 0;

    if (typeof arr[0]== 'number') {
        res.push(arr.shift());
        return getAllElementFromUnknownLevelNestedArray(arr);  
    } else if (Array.isArray(arr[0])) {
        getAllElementFromUnknownLevelNestedArray(arr.shift());
        return getAllElementFromUnknownLevelNestedArray(arr);
    }

};
getAllElementFromUnknownLevelNestedArray(numbersUn);
//   console.log(res)
  // output ==> [1, 3, 5, 13, 7, 45]
  