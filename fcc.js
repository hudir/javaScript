
// function titleCase(str) {
//     let arr = str.split(' ')
//     , arrNew = [];
//     for (let i = 0; i < arr.length; i++) {
//       arrNew.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
//     };
//     return arrNew.join(' ');
//   }
  
//   console.log(titleCase("I'm a little tea pot"));

//   function frankenSplice(arr1, arr2, n) {
//     let arr3 = arr2.slice(0);
//     console.log(arr3);
//     arr3.splice(n, 0, ...arr1);
//     return arr3;
//   }
  
//   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// function getIndexToIns(arr, num, arr2 = []) {
//     if (arr.length == 0) {
//         let len2 = arr2.length;
//       for (let i = 0; i < len2; i++) {
//           if (arr2[i] >= num) {
//             arr2.splice(i, 0, num);
//            // console.log(arr2)
//             return arr2;
//           }
//       };  
//     } else {
//       arr2.push(Math.min(...arr));
//       arr.splice(arr.indexOf(Math.min(...arr)), 1);  
//       return getIndexToIns(arr, num, arr2)
//     };
//   };
  
//   console.log(getIndexToIns([40, 60, 55, 30], 45));


function getIndexToIns(arr, num, arr2 = []) {
    if (arr.length == 0 && arr2.length == 0) {
      return 0;
    };
      if (arr.length == 0) {
        if (arr2[arr2.length - 1] < num) return arr2.length;
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] >= num) {
              arr2.splice(i, 0, num);
             // console.log(arr2)
              return i;
            }
        };  
      } else {
        arr2.push(Math.min(...arr));
        arr.splice(arr.indexOf(Math.min(...arr)), 1);  
        return getIndexToIns(arr, num, arr2)
      };
    };
// console.log(getIndexToIns([2, 5, 10], 15))
// console.log(getIndexToIns([40, 60, 55, 30], 45));
// console.log(getIndexToIns([], 1));


function chunkArrayInGroups(arr, size) {
    let arrN = [];
    for (let i = 0; i < arr.length;) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(arr[i]);
        i++
      };
      arrN.push(row);
    };
    //console.log(arrN)
     if (arr.length % size == 0)  return arrN;
     for (let i = size - 1 ; i >= 0; i--) {
       if (!arrN[arrN.length - 1][i]) {
        arrN[arrN.length - 1].pop()
       }; 
     };
     return arrN;
  };
  
//  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
// console.log(Boolean(undefined))
  
// console.log(/Code/.test('freeCodeCamp'))
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/;
// console.log(jennyStr.match(myRegex));


// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;


// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex).length;
// console.log(movieName.match(noNumRegex))

// let username = "JackOfAllTrades";
// let userCheck = /^[a-z]([a-z][a-z]*|\d{2,})\d*$/i; // Change this line
// let result = userCheck.test(username);
// console.log('BadUs3rnam3'.match(userCheck));
// console.log('A1'.match(userCheck));

// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// console.log(quit.match(quRegex));
// noquit.match(qRegex);

// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// console.log(checkPass.test(password));


// let sampleWord = "astr1on11aut";
// let pwRegex = /(?=\w{6})(?=\D*\d{2})/; // Change this line
// let result = pwRegex.test(sampleWord);
// console.log(result);

let n = 6
let str = '';
for (let i = 1; i <= n; i++) {
      console.log(`${n}`.repeat(i)); 
};


