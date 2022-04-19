// if there is unknowen level of Array
const numbersUn = [
    [1, [ 2, [8, 54]]],
    [3, 8, 3, 10, 13],
    [7, 45]
  ];

// i call my self to working
  function explorer(NestedArr){
    let res = [];
    getAllElementFromUnknownLevelNestedArray(NestedArr);
    return res;

    function getAllElementFromUnknownLevelNestedArray(arr) {
        if (!arr[0]) return null;
        if (typeof arr[0]== 'number') {
            res.push(arr.shift());
            return getAllElementFromUnknownLevelNestedArray(arr);  
        } else if (Array.isArray(arr[0])) {
            getAllElementFromUnknownLevelNestedArray(arr.shift());
            return getAllElementFromUnknownLevelNestedArray(arr);
        }
    };
  }
 
  console.log(explorer(numbersUn));
//   [
//     1, 2,  8, 54, 3,
//     8, 3, 10, 13, 7,
//    45
//  ]
  
function steamrollArray(arr1) {
  let res = [], arrTem = arr1.map(el=>el);
    getAllElementFromUnknownLevelNestedArray(arrTem);
    return res;

    function getAllElementFromUnknownLevelNestedArray(arr) {
        if (!arr[0]) return null;
         if (Array.isArray(arr[0])) {
            getAllElementFromUnknownLevelNestedArray(arr.shift());
            return getAllElementFromUnknownLevelNestedArray(arr);
        } else {
            res.push(arr.shift());
            return getAllElementFromUnknownLevelNestedArray(arr);  
        }
    };
}

  



//answer form nico
const createGrid1 = function (size, char) {
  let newArray = [];
  let nestedArray = []     // that was so smart, this two are in function scope, so after for loop,it like [newArray,newArray,newArray]
  for (let i = 0; i < size; i++) {       //   and each time in looping, we also update newArray, and all the value referes to it will change 
  newArray.push(char);
  nestedArray.push(newArray);
  console.log(newArray)
  console.log(nestedArray,111)
  }
  return nestedArray;
  }; 
console.log(createGrid1(3, "*"));