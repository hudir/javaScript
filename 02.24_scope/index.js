let num = 5; // Global scope

function testScope() {
   console.log(num);
};
testScope();

function greeting() {
    // local scope
    let name = 'Anna';
    console.log('Hallo' + name);
};
greeting();


// A return statement determines the value the function returns.
// A return keyword without an expression after it will cause the function to return undefined.
// Functions that don’t have a return statement at all return undefined.

function greeting() {
    let say = 'Hallo Max';
    return say;
};
console.log(greeting());

// The function could have multiple return statements BUT in different scopes. In the end, one scope will dominate.

function multiScope(isOpen) {
    if (isOpen) {
        // if block scope nr-1
        return 'if block scope nr-1';
    } else {
       // else block scope nr-2
       return 'else block scope nr-2';
    };    
};
console.log(multiScope(0));