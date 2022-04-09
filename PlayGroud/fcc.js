
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
      // console.log(`${n}`.repeat(i)); 
};



 const transpose = (arr) => {
  //throw new Error('Remove this statement and implement this function');
  let res = [];

  if (arr.length ==1) {
    arr[0].split('').forEach((el,i)=>{
    res.push(el)
  });
  return res;
  }
  
  let maxLen = Math.max(...arr.map(el=>el.length));

  console.log(maxLen)
  for(let i=0;i < maxLen;i++) {
    let tem = '';

    arr.forEach((el,index)=>{
      if (el.length <= i) tem+=' ' 
      else tem+= el[i] 
    });

    if (i == maxLen -1) tem =tem.trimRight()
    res.push(tem)
    
  }
  return res;
};

// console.log(transpose([
//   'Chor. Two households, both alike in dignity,',
//   'In fair Verona, where we lay our scene,',
//   'From ancient grudge break to new mutiny,',
//   'Where civil blood makes civil hands unclean.',
//   'From forth the fatal loins of these two foes',
//   "A pair of star-cross'd lovers take their life;",
//   "Whose misadventur'd piteous overthrows",
//   "Doth with their death bury their parents' strife.",
//   "The fearful passage of their death-mark'd love,",
//   "And the continuance of their parents' rage,",
//   "Which, but their children's end, naught could remove,",
//   "Is now the two hours' traffic of our stage;",
//   'The which if you with patient ears attend,',
//   'What here shall miss, our toil shall strive to mend.',
// ]))


function cutSpace(tem){
    let temArr =tem.split("");

    for (let i=temArr.length-1; i>-1;i--) {
      // console.log(i)
      if (temArr[i] == ' ') {
        console.log(i)
        temArr.pop()
      } else {
      break;
      };   
    };
    return [temArr.join('')]
}
// console.log(cutSpace('123    '));

(function () {
  // console.log("Chirp, chirp!");
})();


// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);




const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  this.forEach(el=>{
    if (callback(el)) {
      console.log(el)
      newArray.push(el);
    }
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

 console.log(new_s)