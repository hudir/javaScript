// Task
//1- input "f-o-o"  ==>  output "oof"
let input = 'f-o-o';
let output = input.split("-").reverse().join('');
console.log(output)

//2- input 'ES6 in Practice' ==> output "ecitcarP ni 6SE"
input = 'ES6 in Practice';
output = input.split("").reverse().join('');
console.log(output)