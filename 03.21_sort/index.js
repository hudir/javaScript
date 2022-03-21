// scrollTo() change the original array
let reSort = [3, 0 , 4].sort((a, b) => {/*...*/})

// (a, b) => {/*...*/} ComparingFunction

// a the first element for comparison

// b the second element for comparison

// if comparingFunction(a, b) is < 0 then (a) will be sorted to a lower index than (b), (a) will come first
// if comparingFunction(a, b) is = 0 then (a) and (b) wont change
// if comparingFunction(a, b) is > 0 then (b) will be sorted to a lower index than (a), (b) will come first

const sortedArr_1 =  [3, 1, 66, 12].sort((a, b) => b - a);
// console.log(sortedArr_1);  // [ 66, 3, 1 ]

const sortedArr_2 =  [3, 1, 66].sort((a, b) => a - b);
// console.log(sortedArr_2);  // [ 1, 3, 66 ]

// console.log([5, 2, 1, -10, 8].sort((a, b) => b - a)) // ==> [ 8, 5, 2, 1, -10 ]


let arr_2 = ['HTML', 'AAVASCRIPT', 'CSS'];

function copySorted(arr) {
    let cop = [...arr].sort();
    return cop;
};
// console.log(copySorted(arr_2)) // [ 'CSS', 'HTML', 'JAVASCRIPT' ]

// csonsole.log(['ATML', 'AAVASCRIPT', 'CSS'].sort((a, b) => a.length - b.length))




const school=[
    {
      name: "FbW1",
      students: [
        {
          name: "Alex",
          email: "alex@yahoo.com",
          city: "Berlin",
        },
        {
          name: "Max",
          email: "max@yahoo.com",
          city: "Hamburg",
        },
      ],
    },
  
    {
      name: "FbW2",
      students: [
        {
          name: "Jon",
          email: "jon@yahoo.com",
          city: "Berlin",
        },
        {
          name: "Pilar",
          email: "pilar@yahoo.com",
          city: "Berlin",
        },
      ],
    },
    {
      name: "FbW3",
      students: [],
    },
  ];

// 1. createClass function which takes argument(object) holds class name
  const createClass = obj => {
    school.push(obj);
  };
// testing \/
createClass({name: 'E10', students: [{
  name: "Max",
  email: "max@yahoo.com",
  city: "Hamburg",
},{
  name: "Pilar",
  email: "pilar@yahoo.com",
  city: "Berlin",
}]});
// console.log(school); // creat a class E10


// 2. create student function which takes argument(object) holds class ID and the student data
  const student = obj => {
    for (let ele of school) {
      ele.name == obj.classID ? ele.students.push(obj) : null;
    };
  };
// testing \/
student({
  classID: 'E10',
  name: "Jon",
  email: "jon@yahoo.com",
  city: "Berlin",
});
// console.log(school[3]) // add Jon to class E10


// 3. create removeClass function which takes ID and remove class by ID
  const removeClass = str => {
    for (let ele of school) {
     if (ele.name == str) {
       school.splice(school.indexOf(ele), 1);
       return true;
     }; 
    };
    return false;
  };
// testing \/
removeClass('FbW3');
// console.log(school);  // delete class FbW3


// 4. create removeStudent function which takes argument(object) holds class ID and the student ID
const removeStudent = obj => {
  for (let eleCla of school) {
    if (eleCla.name == obj.classID) {
      for (let eleStu of eleCla.students) {
        if (eleStu.name == obj.stuID) {
          eleCla.students.splice(eleCla.students.indexOf(eleStu), 1);
          return true;
        };
      };
    };
  };
  return false;
};
// testing \/
removeStudent({classID: 'E10', stuID: "Pilar"});
// console.log(school[2]); //  delete student Pilar in class E10
  

// 5. create editStudent function which takes argument(object) with holds class ID and the student ID
const editStudent = obj => {
  for (let eleCla of school) {
    if (eleCla.name == obj.classID) {
      for (let eleStu of eleCla.students) {
        if (eleStu.name == obj.stuID) {
          for (let props in obj) {          // copy all property form obj
            eleStu[props] = obj[props]
          };
          return true; 
        };
      };
    };
  };
  return false;
};
// testing \/
// console.log(school[2])
editStudent({
  classID: 'E10',
  stuID: 'Jon',
  city: 'Wien'
});
// console.log(school[2])  // change the city form Berlin to Wien


// 6. create function call RenderSchoolTemplate
const RenderSchoolTemplate = (obj = school) => {
  let claSum = 0, stuSum = 0;

  console.log(' School Classes: ');
  console.log('------------------ ');
  for (let [classIndex, classes] of school.entries()) {
    console.log(`${classes.name} - (class ID: ${classIndex + 1}):`)
    for (let [studentIndex, stu] of school[classIndex].students.entries()) {
      console.log(`  ${studentIndex + 1}- ${stu.name}, ${stu.email}, ${stu.city} - (student ID: ${studentIndex + 1}).`);
      stuSum++;
    };
    console.log('******************************************** ');
    claSum = classIndex;
  };
  console.log(` Total Classes ${claSum + 1}, total students ${stuSum}`);
};
// testing \/
// RenderSchoolTemplate();