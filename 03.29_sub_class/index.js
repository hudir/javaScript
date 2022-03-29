class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.occupation = 'web develepor';
        this.property = 'i will show in the class Student'
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
    greet() {
        console.log(`Hello Student ${this.name}`)
        console.log(`welcome to your campus in ${this.address} from Student`)
    };
};

const stud1 = new Student('Max', 'Berlin', 'q1234', 'student');
stud1.greet();
console.log(stud1)

// const pers1 = new Person('Franko', 'Duessrdorf', 'e10333'); // Person class don't have studentID
// console.log(pers1)