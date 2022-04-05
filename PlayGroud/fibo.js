
// ---------------------- https://www.youtube.com/watch?v=oBt53YbR9Kk&t=8732s ------------------

const fib = n => {
    if (n <= 2) return 1;56
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

