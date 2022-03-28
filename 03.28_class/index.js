class Person1{
    constructor(uname, uage,ujob) {
        this.name = uname;
        this.age = uage;
        this.job = ujob;
    }
}

const person1 = new Person1('Max', 34, 'teacher');
// console.log(person1);

const person2 = new Person1('Sara', 24, 'web developer');
// console.log(person2);

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.stop = function() {
            console.log('the car will stop');
        }
    }
    drive() {
        return 'the car ' + this.brand + '-' + this.model + ' is driving...'
    }
    brand1 = 11
}

const myCar = new Car('toyota', 'yaris');
const car2 = new Car('vw', 'up');
// console.log(myCar.brand1); // ==> 11
// console.log(typeof car2);
// console.log(car2.drive());
// car2.stop() // ==> the car will stop

class Person {
    constructor(name, email, address){
        this.name = name;
        this.email = email;
        this.address = address;
    };

    greet(){
        console.log(`Hello ${this.name} how are you?`);
        
    };

    set place(newaddress){  // set is not a function, we can't call it normoly like .place() but .place = ...
        this.address = newaddress;
    };

    get place() {
        return this.address;
    };
    static age(){
        console.log(`${this.name} is 35 years old`)
    }
};

const person_1 = new Person('Jonas', 'Jonas@gmail.com', 'Berlin');
// console.log(person_1); person_1.greet();
// person_1.place = 'Hamburg';
// console.log(person_1)
Person.age()