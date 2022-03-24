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
     console.log('----------------  ---------------- ')
     console.log('-------- 1 day later -------- ')
     console.log('----------------  ---------------- ')


     return rev(rest) + str[0];
 }

 console.log(rev('hello woulddd'))