let blogs = ['Blog1','Blog2'];
let cloneBlogs = [...blogs];

// console.log(blogs, cloneBlogs)


let posts = [{title: 'Javascript', image: 'js.png'}, {title: 'php', image: 'php.png'} ];

let clonePosts = [...posts];

clonePosts[1].new = 'new property';

let postsToJson = JSON.stringify(posts)  // this json file is very very small without anything(function) but String 

let clonePosts_json = JSON.parse(postsToJson);

clonePosts_json[1].comments = 5;

// console.log(posts, '000', postsToJson, '111', clonePosts_json)
// console.log(posts, clonePosts)

let pet = [{name: 'dog', age: 3}, {name: 'cat', age:5}];
// let clonePet = []
// structuredClone(pet);
// console.log(structuredClone(pet, clonePet))

function deepClone(data) {
    return JSON.parse(JSON.stringify(data));
};



//  ---------------####-----------------
// Array destructuring

let arrayOfNames = ['Pilar', 'Byron', 'Diala'];

let name_1 = arrayOfNames[0];
let name_2 = arrayOfNames[1];
let name_3 = arrayOfNames[2];

// console.log('name_1====> ', name_1);
// console.log('name_2====> ', name_2);
// console.log('name_3====> ', name_3);

// with Array destructuring

let [item_1, item_2, item_3] = ['Pilar', 'Byron', 'Diala'];

// console.log('item_1 ==> ', item_1);
// console.log('item_2 ==> ', item_2);
// console.log('item_3 ==> ', item_3);





// -------------- REST - with ... we slice the rest of the array ---------------- 
// with array destructuring follow the indexes order

let [a, , , d, ...restOfNumbers] = [22, 5, 6, -2, 44, 100, 0];

// console.log('a ==> ', a);
// console.log('d ==> ', d);
// console.log('...restOfNumbers ==> ', restOfNumbers);

const blogs1 = ['blog 1', 'blog 2'];
const coments =  ['comment 1', 'comment 2', 'comment 3'];

let [el_1, el_2, el_3, ...restElements] = [...blogs1 , ...coments];

// console.log('el_1 ==>' ,el_1);
// console.log('el_2 ==>' ,el_2);
// console.log('el_3 ==>' ,el_3);
// console.log('...restElements ==>' ,restElements);





// ------------ REST - with ... we slice the rest of the object ---------------- 
// with Object destructuring follow the key name in the object (we do not have indexed in object)
// in Object the order is not important.

let person = {
    name: 'Elena',
    email: 'elena@gmail.com',
    tel: 1234567
};

// let {name, tel, email} = person;

// console.log('name ==>',name);
// console.log('email ==>', email);
// console.log('tel ==>', tel);

let user = {
    id: 1234,
    userName: 'Fidan',
    email: 'fidan@gmail.com',
    password: '676767',
    emails: ['fidan@gmail.com', 'test@gmail.com']
};

let address = {
    str: 'Berliner Str 1',
    city: 'Berlin',
    'zip code': 12345
};

//       here we do not take email out, but copy it to the new varibel
const {city, email : userEmail, ...restPorperty} = {...user, ...address};

// console.log('city ==>', city);
// console.log('userEmail ==>', userEmail);
// console.log('...restPorperty ==>', restPorperty);





// ------------ Function destructuring ---------------- 

function createBlog_1(title,views, likes, comments, image) {
    return `
    title: ${title}
    image: ${image}
    views: ${views}
    likes: ${likes}
    comments: ${comments}
    `;
};

// console.log(createBlog_1('JavaScript', 20, 2, 5, 'js.png'));



//------ with destructuring ------
function createBlog_2({views, title, comments, image, likes}) {
    return `
    title: ${title}
    image: ${image}
    views: ${views}
    likes: ${likes}
    comments: ${comments}
    `;
};

// console.log(createBlog_2({title:'JavaScript', views:20, likes:2, comments:5, image:'js.png'}));

function createBlog_3(obj) {
    return `
    title: ${obj.title}
    image: ${obj.image}
    views: ${obj.views}
    likes: ${obj.likes}
    comments: ${obj.comments}
    `;
};

// console.log(createBlog_3({title:'JavaScript', views:20, likes:2, comments:5, image:'js.png'}));






// ------------ REST - with ... in functions ---------------- 
function numbers(num_1, num_2, num_3, num_4) {
    return num_1 + num_2 + num_3 + num_4;
};

// console.log(numbers(1,2,3,5));

function numbers(...myParams) {
    // ... myParams => [ 1, 2, 3, 5 ]
    let sum = 0;
    for (let ele of myParams) sum += ele;
    return sum;
};

// console.log(numbers(1,2,3,5));

function printArguments(...myParams) {  // the ...myParams will always an Array
    console.log(myParams);
    for (let ele of myParams) console.log(ele);
};
// printArguments(1)
// printArguments('1', 'us', [1,2,3], {cat: 'miao'});


// Nested loop
// loop inside loop

for (let i = 1; i < 6; i++) {
    // console.log('i ==>',i);
    // for (let j = 1; j < 4; j++) console.log('j ==>', j)
};

// Create a function named getEvenNumbers accept a 2D array as an argument,
//   and return the even numbers in an array.
  const arrayInsideOfAnArray = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14], 
    [3, 10, 26, 7, 2]
];
const getEvenNumbers = arr => {
    let arrEvenNum = [];
    for (let eleLv1 of arr) {
        for (let eleLv2 of eleLv1) {
            arrEvenNum.indexOf(eleLv2) === -1 && eleLv2 % 2 === 0
            ? arrEvenNum.push(eleLv2) : null;
        };
    };
    return arrEvenNum;
};
// console.log(getEvenNumbers(arrayInsideOfAnArray)); // ==> [2,24,8,4,0,28,14,10,26]