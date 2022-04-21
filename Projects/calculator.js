
class Calculator{
    constructor(){
        //properties
        this.pi=Math.PI;
        this.e=Math.E;
    };
    //getter
    
    //methods
    ratio(x,y,width){
        const height=x*width/y;
        return `height is ${height} on ratio ${x}:${y}.`;
    };

    percentage(x,y){
        const per = x/y*100;
        return `percentage of ${x} in ${y} is ${per}%.`;
    };

    add(x, y){
        return `sum of ${x} and ${y} is ${x+y}.`;
    };

    subtract(x, y){
        return `the difference of ${y} subtracted to ${x} is ${x-y}.`
    };

    multiply(x, y){return `the product of ${x} multiplied by ${y} is ${x*y}.`};

    divide(x, y){return y===0 ? `error` : `the quotient of ${x} divided by ${y} is ${x/y}.`}

    modulation(x, y){return y===0 ? `error` : `the remainder of ${x} divided by ${y} is ${x%y}.`}

    elevate(x, y){return `the power of ${x} elevated to ${y} is ${x**y}.`};

    sqrt(x){return `the square root of ${x} is ${Math.sqrt(x)}.`};
}


let test = new Calculator()
// console.log(test.pi);
// console.log(test.e);
// console.log(test.ratio(3,2,600));
// console.log(test.percentage(3,10));
// console.log(test.add(10,25));
// console.log(test.subtract(99,50));
// console.log(test.multiply(9,9));
// console.log(test.divide(9,3));
// console.log(test.modulation(111,100));
// console.log(test.elevate(4,2));
// console.log(test.sqrt(64));