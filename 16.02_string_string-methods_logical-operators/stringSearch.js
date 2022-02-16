let text = 'Hallo my name is Tommy! and i live in Spain!'

console.log(text.indexOf('is')); // 14  
console.log(text.indexOf('!'));  // 22 the first !
console.log(text.indexOf('!', 24));  // 43 the second !
console.log(text.indexOf('Tommy'));  // 17
console.log(text.indexOf('Tommy', 18));  // -1