/* 1. Write a JavaScript function to truncate a string to a certain number of words. */

// write your code here 
function truncate(str,num){
    return str.split(' ').filter((el,i)=>{
      if(i<num) return el;
    }).join(' ');
  };
  // console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"
  
  
  /* 2. Write a JavaScript function to alphabetize a given string. */
  
  // write your code here 
  function alphabetize_string(str){
    return str.split('').filter(el=>{if(el!=' ') return el}).sort().join('')
  }
  // console.log(alphabetize_string("United States"));
  //"SUadeeinsttt"
  
  /* 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
   */
  
   // write your code here 
  function ascii_to_hexa(str){
    return str.split('').reduce((acc,el,)=>acc+(el.charCodeAt(0).toString(16)) ,'')
  }
  // console.log(ascii_to_hexa("12")); //3132    ===>  7380
  // console.log(ascii_to_hexa("100")); //313030  ===>  737272
  // console.log(("12".charCodeAt(0).toString(16)))
  
  /* 4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
   */
  
   // write your code here 
  function humanize(num){
    if (num%100 == 11 || num%100 == 12 || num%100 == 13) return num.toString()+'th';
    switch(num%10){
      case 1: return num.toString()+'st';
      case 2: return num.toString()+'nd';
      case 3: return num.toString()+'rd';
      default: return num.toString()+'th';
    }
  }
  
  // console.log(humanize(1)); //"1st"
  // console.log(humanize(20)); //"20th"
  // console.log(humanize(302)); //"302nd"
  
  
  /* 5. Write a JavaScript function to get the successor of a string. */
  
  // write your code here 
  function successor(str){
    let arr = str.split('') ,add = 1 ,regex = /[a-zA-Z]/ //alp='abcdefghijklmnopqrstuvwxyz'+'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  // console.log(arr)
    for(let i=arr.length-1 ; i>=0 ; i--){
  
      if (add != 0) {  // this mean we need to add 1 to some where
  
        if(!isNaN(arr[i]) && arr[i] != ' '){   // if str[i] is a number
          arr[i]= +arr[i]+add;
          add=0;
          
          if(arr[i]==10){    // deal if element is 10, but it can only take one digits
            arr[i]=0;
            add++;
          };
  
        } else if(regex.test(arr[i])){ // if str[i] is one of /[a-zA-Z]/
  
          if(arr[i] == 'z') arr[i] = 'a';
          else if(arr[i] == 'Z') arr[i] = 'A';
  
          else {   // change str[i] to uni-code , add 1 ,change it back to string
            arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + add);
            add=0;
          };
        }; 
      }; 
  
      if(i == 0 && add != 0 && regex.test(arr[i])) { // for this console.log(successor("ZZZ9999")); // "AAAA0000"
        // console.log(arr)
        arr.unshift(arr[i])
        // console.log(arr)
      }
  
      // console.log(arr[i], 'add is',add)
    }; // end for loop
  
    return arr.join('')
  }
  // console.log(successor("abcd")); // "abce"
  // console.log(successor("THX1138")); // "THX1139"
  // console.log(successor("< >")); // "< >"
  // console.log(successor("1999zzz")); // "2000aaa"
  // console.log(successor("ZZZ9999")); // "AAAA0000"
  // console.log(successor("za999")); // "AAAA0000"
  // console.log('1'.charCodeAt())
  // console.log(String.fromCharCode(98));
  // console.log(!isNaN('2'))
  // console.log(/[a-zA-Z]/.test('<'))
  
  /* 6. Write a JavaScript function to sort the following array of objects by title value. */
  
  // write your code here 
  
  let library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      libraryID: 3245,
    },
  ];
  
  // function sortByTitleValue(arr = library){
  //   let arrNew = arr.map(obj=>{
  //     obj.value = Math.round(+obj.title.split('').reduce((acc,el)=>acc+el.charCodeAt(),''));
  //     return obj;
  //   });
  //   arrNew.sort((a,b)=>b.value-a.value)
  //   arrNew.map(obj=>{
  //     delete obj.value;
  //     return obj;
  //   });
  //   return arrNew
  // }
  
  function sortByTitleValue(arr = library){
    return arr.sort((a,b)=>{
      if(a.title>b.title) return 1;
      if(a.title<b.title) return -1;
    })
  }
  // console.log(sortByTitleValue());
  
  
  /* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. */
  
  // write your code here 
  function num_string_range(first,second,num){
    let result=[]
  
    if (first>=second) { 
      for(let i = first.charCodeAt(); i>= second.charCodeAt(); i = i-num){
        result.push(String.fromCharCode(i));
      };
      return result;
    }
    
    for(let i = first.charCodeAt(); i<= second.charCodeAt(); i = i+num){
      result.push(String.fromCharCode(i));
    };
    return result;
  };
  
  // console.log(num_string_range("a", "z", 2));  // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
  // console.log(num_string_range("z", "a", 2));
  
  
  /* 8. Write a JavaScript program to create a Clock.
     `Note`: The output will come every second. */
  
     // write your code here 
  function my_Clock(){
  
    this.run=function(){
  
      const func =()=> {
        let time = new Date
      ,hours = time.getHours().toString().length == 1 ? '0'+time.getHours() : time.getHours()
      ,mins = time.getMinutes().toString().length == 1 ? '0'+time.getMinutes() : time.getMinutes()
      ,secs = time.getSeconds().toString().length == 1 ? '0'+time.getSeconds() : time.getSeconds()
      console.log(hours+':'+mins+':'+secs)
      };
  
      setInterval(func,1000)
    }
  }
  
    // let clock = new my_Clock();
    //  clock.run();
  // "14:37:42";
  // "14:37:43";
  // "14:37:44";
  // "14:37:45";
  // "14:37:46";
  // "14:37:47";
  
  /* 9. Write a JavaScript function to print all the methods in an JavaScript object.
   */
  
   // write your code here 
   function all_properties(obj){
     let arr=Object.getOwnPropertyNames(obj), result=[];
     for(let key of arr){
       if(typeof obj[key] == 'function') {
        result.push(key);
        }
     };
     return result;
   }
  
  //  console.log(typeof Array.from);
  // console.log(all_properties(Array));
  // ["isArray", "from", "of"]
  // console.log(all_properties(Math));
  // ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]
  
  
  /* 10. Write a JavaScript function to print all the properties in an JavaScript object. */
  function all_properties(obj){
    return Object.getOwnPropertyNames(obj);
  }
  
  // write your code here 
  
  
  // console.log(all_properties(Math));
  // ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
  // console.log(all_properties(Array));
  // ["length", "name", "prototype", "isArray", "from", "of"]
  
  