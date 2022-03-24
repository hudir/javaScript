// countdown using for loop

for (let i = 10; i > 0; i--) {
    // console.log(i)
}

function countdown(i = 10) {
    if (i < 0) return;
    console.log(i);
    i--;
    return countdown(i)
}
// countdown();

function countup(i = 0) {
    if (i > 10) return;
    console.log(i);
    return countup(i + 1);
};
// countup();

function countup2(i = 0) {
    if (i <= 10) {
        console.log(i);
        i++;
        return countup2(i);
    } else console.log('we are done!')
};
// countup2()

// factorial 5 = 5 

function factorial(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum *= i;
    };
    return sum;
};
// console.log(factorial(3));


let res = 1, i = 1;
function factorial2(num) {
    if (num === 1) return 1;
    // res *= num;
    // num--;
    // return factorial2(num);
    return (num * factorial2(num-1));
};
// console.log(factorial2(3))

function printString() {
    console.log('ABC');
    printString();
};
// printString();


// ---------------------- https://www.youtube.com/watch?v=oBt53YbR9Kk&t=8732s ------------------

const fib = n => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50))


// time c
const dib = n => {
    if (n <= 1) return;
    // console.log(n)
    dib(n - 1);
    dib(n - 1);
    // dib(n - 1);
};
dib(3)