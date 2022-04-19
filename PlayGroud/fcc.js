
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
      // console.log(el)
      newArray.push(el);
    }
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

//  console.log(new_s)

function urlSlug(title) {
  return title.split(' ').join('-').toLowerCase();
  }
  // console.log(' Winter Is  Coming'.split(' ').filter(el=>el!==''))


  function sumAll(arr) {
    const newA = arr.sort((a,b)=>a-b);
    let sum = 0;
    for(let i=newA[0];i<=newA[1];i++) sum+=i;
    console.log(sum)
    return sum;
    }
    
    // console.log(sumAll([1, 4]))


    function destroyer(...arr) {
      return arr[0].filter(el=>{
        let counter = 0
       for(let i=1;i<arr.length;i++){
        
         if (arr[i] == el) counter++;
       }
      
       if (counter == 0) return el;
      });
    }
    
    destroyer([1, 2, 3, 1, 2, 3], 2, 3);


  /*   function whatIsInAName(collection, source) {
      let arr = [];
      // Only change code below this line
       arr = collection.filter(obj => {
        let check =0;
        for(let key in obj) {
          // if(!(key in source)) check++;
          // if(obj[key] != source[key]) check++;
          // console.log(check)
        };
        if(check==0) return obj
      })

      
      arr= arr.filter(obj=> {
        let check = 0;
        for(let key in source) {
          if (!(key in obj)) check++
        };
        if (check ===0) return obj
      })
      console.log(arr)
    
      // Only change code above this line
      return arr;
    }
    
   
    whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) */


    function whatIsInAName(collection, source) {
      const arr = [];
      // Only change code below this line
     collection.forEach(obj=>{
       let x =0;
       for(let key in source){
         if (source[key]==obj[key]) x++;
       }
       if (x==Object.keys(source).length) arr.push(obj)
     })
      // Only change code above this line
      // console.log(arr)
      return arr;
    }

    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })




    function spinalCase(str) {
      let arr = str.split(/[ _-]/),
      arrN = [];
      arr.forEach((el,i)=>{
        if(el.slice(1) === el.slice(1).toLowerCase()) {
          arrN.push(el);
        } else{
          let indexStart=0;
          el.split('').forEach((chr,j)=>{
            if(j!==0 && chr !== chr.toLowerCase()){
              arrN.push(el.slice(indexStart,j));
              indexStart=j
            } else if(j == el.length-1){
              arrN.push(el.slice(indexStart,j+1));
            };
          })
        }
      })
      // console.log(arrN)
      return arrN.join('-').toLowerCase();
    }
    
    
    // console.log(spinalCase('This Is Spinal Tap'));
    // console.log(spinalCase("The_Andy_Griffith_Show"))
    // console.log(spinalCase("Teletubbies say Eh-oh"))
    // console.log(spinalCase("AllThe-small Things"))
    // console.log(spinalCase("thisIsSpinalTap"))

    function translatePigLatin(str) {
  
      if(str[0]=='a'
      ||str[0]=='e'
      ||str[0]=='i'
      ||str[0]=='o'
      ||str[0]=='u'
      ) {
        return str+'way';
      };
      
      for(let [i,el] of str.split('').entries()){
          if(el[0]=='a'
          ||el[0]=='e'
          ||el[0]=='i'
          ||el[0]=='o'
          ||el[0]=='u'){  
            return str.slice(i)+str.slice(0,i)+'ay';
          } 
      }
    
      return str+'ay'
    }
    
    
    // console.log(translatePigLatin("california"));
    // console.log(translatePigLatin("rhythm"));


    function myReplace(str, before, after) {
      return str.split(' ').map(el=>{
        if(el.toLowerCase() == before.toLowerCase()) {
          if(el.toLowerCase() == el) return after.toLowerCase() ;
          return after[0].toUpperCase()+after.slice(1);
        } else return el
      }).join(' ');
    }
    
    // console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


    function pairElement(str) {

      return str.split('').map(el=>{
        switch (el) {
          case 'A': return ['A', 'T'];
          case 'T': return ['T', 'A'];
          case 'C': return ["C", 'G'];
          case 'G': return ['G', 'C']
        }
      });
    }
    
    // console.log(pairElement("GCG"));



    function fearNotLetter(str) {
      let aToZ = 'abcdefghijklmnopqrstuvwxyz'.split('');
      let index = aToZ.indexOf(str[0]);
      console.log(aToZ.slice(index, index+str.length))
      for(let [i,el] of aToZ.slice(index, index+str.length+1).entries()){
        if (str[i] !== el) return el
      }
    }
    
    // console.log(fearNotLetter("abce"))
    // console.log(fearNotLetter("abcdefghjklmno"))
    // console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))


    function uniteUnique(...arr) {
      return arr.reduce((acc,el)=>{
      acc.push(...el.filter((num,i) => !acc.includes(num) && el.indexOf(num) == i));
      return acc
      },[]);
    }
    // console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
    // console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));


    function convertHTML(str) {
      return str.split('').map(el=>{
        switch(el){
          case '&': return '&amp;';
          case '<': return '&lt;';
          case '>': return '&gt;';
          case '"': return '&quot;'+el.slice(1);
          case `'`: return '&apos;'+el.slice(1);
        }
        return el
      }).join('');
    }
    



    function sumFibs(num) {
      let arr = [1,1],i=2;
      while(arr[i-1]+arr[i-2] <= num){
        arr.push(arr[i-1]+arr[i-2]);
        i++;
      }
      console.log(arr)
      return arr.filter(el=>el%2!=0).reduce((x,y)=>x+y)
    }
    
    function sumFibs1(num) {
      let arr = [];
      for(let i=0;i<9999;i++){
        if (i==0 || i==1) {
          arr.push(1);
          continue;
        };
        if(arr[i-1]+arr[i-2] > num) break;
        arr.push(arr[i-1]+arr[i-2]);
      };
      return arr.filter(el=>el%2!=0).reduce((x,y)=>x+y)
    }
    
    
  
    // console.log(sumFibs1(1700));




    function sumPrimes1(num) {
      let arr=[];
      for(let i=1;i<=num;i++){
        let check = true;
        for(let j=i-1;j>1;j--){
          i%j === 0 ? check = false : null
        }
        check ? arr.push(i) : 0
      } 
      // console.log(arr)
      return arr.reduce((x,y)=>x+y,0);
    }
    
    // console.log(sumPrimes(10));
    // console.log(Array(10 + 1).fill(true))

    function sumPrimes(num) {
      // Prime number sieve
      let isPrime = Array(num + 1).fill(true);
      // 0 and 1 are not prime
      console.log(isPrime)
      isPrime[0] = false;
      isPrime[1] = false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (isPrime[i]) {
          // i has not been marked false -- it is prime
          for (let j = i * i; j <= num; j += i)
            isPrime[j] = false;
        }
      }
    
      // Sum all values still marked prime
      return isPrime.reduce(
        (sum, prime, index) => prime ? sum + index : sum, 0
      );
    }


    // function smallestCommons(arr) {
    //   arr = arr.sort((a,b)=>a-b);
    //   let num = arr[1];
    //   for(let i = arr[0]; i<=arr[1];i++){
    //     if(i==1) continue;
        
    //     let arrTem = [i,num].sort((a,b)=>a-b);
        
    //     for(let j=2;j<=arrTem[0];j++){
    //           console.log(j)
    //           if(arrTem[0]%j==0 && arrTem[1]%j==0) {
    //             arrTem[0]=arrTem[0]/j;
    //             arrTem[1]=arrTem[1]/j;
    //             arrTem.push(j);
    //             j--;
                
              
    //         };
          
    //       num = arrTem.reduce((x,y)=>x*y) 
    //     }
    //   }
    //   return num
    // }
    
    // console.log(smallestCommons([1,5]));
    // console.log(smallestCommons([2, 10]));
    // console.log(smallestCommons([1,13]));
    // console.log(smallestCommons([23,18]));

    function smallestCommons1(arr) {
      arr = arr.sort((a,b)=>a-b);

      const isPrime = num => {
        for(let i = 2;i<=Math.sqrt(num);i++){
          if(num%i===0) return false;
        }
        return true;
      };

      let num = 1;
      for(let i = arr[0]; i<=arr[1];i++){
        if(i==1) continue;
        if(isPrime(i) || isPrime(num)){ 
          num*=i;
        }
        else {
          let arrTem = [i,num].sort((a,b)=>a-b);
          
            for(let j=2;j<=arrTem[0];j++){
              if(arrTem[0]%j==0 && arrTem[1]%j==0) {
                arrTem[0]=arrTem[0]/j;
                arrTem[1]=arrTem[1]/j;
                arrTem.push(j);
                j--;
              }
            };
          num = arrTem.reduce((x,y)=>x*y) 
        }
      }
      return num
    }
    
    // console.log(smallestCommons1([1,218]));
    // console.log(smallestCommons1([2, 10]));
    // console.log(smallestCommons1([1,13]));


   

    const isPrime1 = num => {
          for(let i = 2;i<=Math.sqrt(num);i++){
            if(num%i===0) return false;
          }
          return true;
        };

        // console.log(isPrime1(1))





        function dropElements(arr, func) {
          let first = arr.filter(el=>{
            if(func(el)) return el
          })[0];
          let index = arr.indexOf(first)
          return arr.slice(index)
          }

// console.log(dropElements([1, 2, 3], function(n) {return n < 3; }))
// console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))


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
let text = String.fromCharCode(45);

// console.log(text)


function binaryAgent(str) {
  return str.split(' ').map(el=>String.fromCharCode(parseInt(el,2))).join('');
}

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


function truthCheck(collection, pre) {
  return collection.every(el=>el[pre]) ? true : false;
}

// console.log(truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id"));

function addTogether(x,y1) {
  console.log( arguments.length )
  if(typeof x == 'number' && typeof y1 == 'number') return x + y1
  else if (typeof x == 'number' && !y1 && arguments.length == 1) return step2
  
  function step2(y){
    if(typeof y == 'number') return x+y
  };
}

// console.log(addTogether(2)([3]));


const Person = function(firstAndLast) {
  this.getFirstName = function(){
    return firstAndLast.split(' ')[0];
  }
  this.getLastName = function(){
    return firstAndLast.split(' ')[1];
  }
  this.getFullName = function(){
    return firstAndLast;
  }
  this.setFirstName = function(first){
    firstAndLast = first+firstAndLast.slice(firstAndLast.indexOf(' '));
  }
  this.setLastName = function(last){
    firstAndLast = firstAndLast.slice(0,firstAndLast.indexOf(' ')+1) + last;
  }
  this.setFullName = function(firstAndLastNew){
    firstAndLast = firstAndLastNew
  }
};

const bob = new Person('Bob Ross');
bob.setFirstName('Tom')
bob.setLastName('Rp')
// console.log(bob.getFullName());

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(obj=>({name: obj.name, orbitalPeriod: 
    Math.round(Math.sqrt((earthRadius+obj.avgAlt)**3/GM)*2*Math.PI) 
  }));
}

// console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));