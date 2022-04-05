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
  

  