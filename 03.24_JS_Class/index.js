let email=  'aa'

class Person {
    constructor(personName, personEmail) {
  // propertyName
        this.name = personName;
        this.email = personEmail;
    };

  // method
    greeting() {
        return (`Hallo ${this.name}`)
    }

    test() {
        console.log(email);
    }
    
};

let personInit = new Person('Pilar', 'Pilar@gmail.com')

// console.log(personInit);
// personInit.greeting();
// console.log(new Person('Tom', 'tom@gmail.com'));

let personInit2 = new Person('Max', 'max@gmail.com');

// console.log(personInit2.greeting())
// personInit2.test()

// console.log(typeof Person)

// console.log((10).constructor)
// console.log(Function.prototype)

var jerichoMissile = { amountOfMissiles: 10 }
Object.prototype.containsShrapnel = true
// console.log("containsShrapnel" in jerichoMissile) // 


var o = new Object;
// console.log(o.constructor === Object); // true

/* ---------------------------------------
class
extends
constructor
super
get 
set 
static
 --------------------------------------- */


 
// let  store = ''
//  function rev(str) {
//      if (str == '') return str;

//      let rest = str.slice(1)
  
//      console.log('i cut first: ', str[0],', and get rest: ' , rest, );
//      console.log('i will deal rest tomorrow, and now i have: ', store += str[0]);
//      console.log('      ----------------  ---------------- ')
//      console.log('      ----------- 1 day later ---------- ')
//      console.log('      ----------------  ---------------- ')

//      return rev(rest) + str[0];
//  }

//  console.log(rev('hello woulddd'));

/*  
i cut first:  h , and get rest:  ello woulddd
i will deal rest tomorrow, and now i have:  h
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  e , and get rest:  llo woulddd
i will deal rest tomorrow, and now i have:  he
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  l , and get rest:  lo woulddd
i will deal rest tomorrow, and now i have:  hel
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  l , and get rest:  o woulddd
i will deal rest tomorrow, and now i have:  hell
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  o , and get rest:   woulddd
i will deal rest tomorrow, and now i have:  hello
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:    , and get rest:  woulddd
i will deal rest tomorrow, and now i have:  hello 
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  w , and get rest:  oulddd
i will deal rest tomorrow, and now i have:  hello w
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  o , and get rest:  ulddd
i will deal rest tomorrow, and now i have:  hello wo
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  u , and get rest:  lddd
i will deal rest tomorrow, and now i have:  hello wou
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  l , and get rest:  ddd
i will deal rest tomorrow, and now i have:  hello woul
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  d , and get rest:  dd
i will deal rest tomorrow, and now i have:  hello would
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  d , and get rest:  d
i will deal rest tomorrow, and now i have:  hello wouldd
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
i cut first:  d , and get rest:  
i will deal rest tomorrow, and now i have:  hello woulddd
      ----------------  ---------------- 
      ----------- 1 day later ---------- 
      ----------------  ---------------- 
dddluow olleh
*/




 
let  store = []
 function rev(str) {
     if (str == '') return str;

     let rest = str.slice(1) // we cut first element, and put the rest elements in variable 'rest'
     store.unshift(str[0])

     console.log('the rest: ' , rest,'|| we cut : ', str[0], '|| now we have: ', store.join('') );
     console.log('      ----------------  ---------------- ')
     
     return rev(rest) + str[0]; //  we pass the rest als param and call the function again.   we build the result form right to left
 }

 console.log(rev('hello woulddd'));

 /* the rest:  ello woulddd || i cut first:  h || now i have:  h
      ----------------  ---------------- 
the rest:  llo woulddd || i cut first:  e || now i have:  eh
      ----------------  ---------------- 
the rest:  lo woulddd || i cut first:  l || now i have:  leh
      ----------------  ---------------- 
the rest:  o woulddd || i cut first:  l || now i have:  lleh
      ----------------  ---------------- 
the rest:   woulddd || i cut first:  o || now i have:  olleh
      ----------------  ---------------- 
the rest:  woulddd || i cut first:    || now i have:   olleh
      ----------------  ---------------- 
the rest:  oulddd || i cut first:  w || now i have:  w olleh
      ----------------  ---------------- 
the rest:  ulddd || i cut first:  o || now i have:  ow olleh
      ----------------  ---------------- 
the rest:  lddd || i cut first:  u || now i have:  uow olleh
      ----------------  ---------------- 
the rest:  ddd || i cut first:  l || now i have:  luow olleh
      ----------------  ---------------- 
the rest:  dd || i cut first:  d || now i have:  dluow olleh
      ----------------  ---------------- 
the rest:  d || i cut first:  d || now i have:  ddluow olleh
      ----------------  ---------------- 
the rest:   || i cut first:  d || now i have:  dddluow olleh
      ----------------  ---------------- 
dddluow olleh */