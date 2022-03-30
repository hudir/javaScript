class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.occupation = 'web develepor';
        this.property = 'i will show in the class Student';
        let bankID = 12323323;


        this.changeBankID = function(newID){
            bankID=newID
            return bankID;
        };

        this.getBankID = function(){
            return bankID;
        };
    };

    greet() {
        console.log(`Hello ${this.name} form Person`);
    };
};

// inheriting parent 
class Student extends Person {
    constructor(name, address, studentID, occupation) {
        super(name, address);  // calling the constructor of the parent class and we pass values to
        this.studentID = studentID;
        this.occupation = occupation;

        // overrite address value:
        this.address = 'Bonn';
    };

    // overriding Person greet
    // greet() {
    //     console.log(`Hello Student ${this.name}`)
    //     console.log(`welcome to your campus in ${this.address} from Student`)
    // };
};

const stud1 = new Student('Max', 'Berlin', 'q1234', 'student');
// stud1.greet();

const hudir =  new Person('Yang','Berlin');
hudir.changeBankID(9527)
console.log(hudir.getBankID())



// const pers1 = new Person('Franko', 'Duessrdorf', 'e10333'); // Person class don't have studentID
// console.log(pers1)










function maskify(str) {
    let arr = str.split('')
    return arr.map((el,i)=> {
        if (i < arr.length - 4) return '#';
        return el;
    }).join('');
};

// console.log(maskify("Nananananananananananananananana Batman!"));
// console.log(maskify("4556364607935616"));
// console.log(maskify("1"));

// return masked string function maskify(cc) { cc = cc.toString(); if (cc.length>4) { for (let i = 0; i < cc.length - 4; i++) { cc = cc.replace(cc[i], "#"); } return cc }else{ return cc } } console.log(maskify(1)) 