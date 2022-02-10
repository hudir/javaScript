# JavaScript

- ** Exponentiation

string and number

     let num = 20;
     let txt = 'lorem';

     console.log(num + txt) // get '20lorem'
     console.log(txt + num) // get 'lorem20'
     
     console.log(txt + num + 50) // 'lorem2050'
     console.log(num + 50 + txt) // '70lorem'
     console.log(num * 50 + txt) // '1000lorem'

     console.log(txt * num) // NaN
     console.log(txt / num) // NaN
     console.log(txt - num) // NaN 

number and string
  
    console.log(5 + '10') // '510' addition don't converts string to num? like + 'num'
    console.log(10 - '4') // 6
    console.log(10 * '4') // 40
    console.log('10' / 2) // 5
    console.log('10' ** 2 ) // 100  

- ++ Increment
- -- Decrement

what's the difference?

    num++; // Postfix form
    ++num; // Prefix form

    let num = 10; // num = 10
    let x = ++num; // x = 11, num = 11

    let counter = 10; // counter = 10
    let y = counter++; // y = 10, counter = 11
    console.log(y); // 10
    console.log(counter); // 11

The Prefix form return a new value, while the Postfix form return a old value

## Assignment Operators

    += // x += y ==> x = x + y
    -=
    *=
    /=
    %= // x %= y ==> x = x % y
    **=  // x **= y ==> x = x **y

## Comparison Operators

- ==   equal to
- === equal type and equal value
- != not equal
- !== not equal type and not equal value
- (>) 
- (<)
- (>=)
- (<=)
- ? ternary operator // what is this

a

    console.log(undefined == null) // true, undefined and null is both 0
    console.log(undefined === null) // false

### ? ternary operator // what is this

    (condition) ? actions if true : action if false

    let a = 25;
    let b = 36; 
    let c = 25;

    (a < b) ? console.log('a is less than b') : console.log('a is greater than OR equal to b ') // ==> a is less than b