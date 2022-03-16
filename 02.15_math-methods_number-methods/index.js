console.log(Math.min("800", 2, 'q', false));

//get a bigger int
console.log(Math.ceil(0.1));
console.log(Math.ceil(0.9));

//get a smaller int
console.log(Math.floor(0.1));
console.log(Math.floor(0.9));

console.log(Math.random());



let str = '1234';
let num = +str;
// let num = Number(str);
console.log('str:', str , 'is', typeof str,
            'num:', num , 'is', typeof num);

// boolean ==> number
console.log('true:', true , 'is', typeof true,
            '.  true as a number:', Number(true) , 'is', typeof Number(true));

console.log('null:', null , 'is', typeof null,
            '.  null as a number:', Number(null) , 'is', typeof Number(null));

console.log('undefined:', undefined , 'is', typeof undefined,
            '.  undefined as a number:', Number(undefined) , 'is', typeof Number(undefined));
        
console.log('10.3:', 10.3 , 'is', typeof 10.3,
            '.  10.3 as a number:', Number(10.3) , 'is', typeof Number(10.3));

console.log('abc:', 'abc' , 'is', typeof 'abc',
            '.  "abc" as a number:', Number("abc") , 'is', typeof Number("abc"));


// parseFloat
console.log(
    '"10" after use parseFloat is'
    , parseFloat("10")
    , 'the data type of "10" is'
    , typeof parseFloat("10")
);
console.log(
    '"10 20" after use parseFloat is'
    , parseFloat("10 20")
    , 'the data type of "10 20" is'
    , typeof parseFloat("10 20")
);
const afterParseFloat = (stri) => {
    console.log(
        typeof stri
        ,`---> ${stri} after use parseFloat is`
        , parseFloat(stri)
        , `the data type of ${stri} is`
        , typeof parseFloat(stri)
    );
};
console.log(afterParseFloat("haha"));
console.log(afterParseFloat(true));
console.log(afterParseFloat('7%'));

// parseInt
const afterParseInt = (stri) => {
    console.log(
        typeof stri
        ,`---> ${stri} after use parseInt is`
        , parseInt(stri)
        , `the data type of ${stri} is`
        , typeof parseInt(stri)
    );
};
console.log(afterParseInt(0.1));
console.log(afterParseInt(0.9));

// toFixed()
const afterToFixedt = (stri,x) => {
    console.log(
        typeof stri
        ,`---> ${stri} after use toFixed(${x}) is`
        , stri.toFixed(x)
        , `the data type of ${stri} is`
        , typeof stri.toFixed(x)
    );
};
console.log(afterToFixedt(0.1111, 3));

// toString()
const afterToString = (stri) => {
    console.log(
        typeof stri
        ,`---> ${stri} after use toString is`
        , stri.toString()
        , `the data type of ${stri} is --->`
        , typeof stri.toString()
    );
};
console.log(afterToString(123));
console.log(afterToString('123'));
console.log(afterToString(true));

// isNaN  to check x == NaN and return boolean value
const afterIsNaN = (stri) => {
    console.log(
        typeof stri
        ,`---> ${stri} after use isNaN is`
        , isNaN(stri)
        , `the data type of ${stri} is --->`
        , typeof isNaN(stri)
    );
};
console.log(afterIsNaN(NaN));
console.log(afterIsNaN(123));
console.log(afterIsNaN(null));
console.log(afterIsNaN(undefined));