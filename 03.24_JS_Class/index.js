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


 
let  store = ''
 function rev(str) {
     if (str == '') return str;

     let rest = str.slice(1)
  
     console.log('i cut first: ', str[0],', and get rest: ' , rest, );
     console.log('i will deal rest tomorrow, and now i have: ', store += str[0]);
     console.log('      ----------------  ---------------- ')
     console.log('      ----------- 1 day later ---------- ')
     console.log('      ----------------  ---------------- ')

     return rev(rest) + str[0];
 }

 console.log(rev('hello woulddd'));

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