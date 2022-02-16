let content = 'This is very very long content:)';

let sliceContent_1 = content.slice(13, 23);
console.log(sliceContent_1);

let sliceContent_2 = content.slice(5);
console.log(sliceContent_2);

let sliceContent_3 = content.slice(-5);
console.log(sliceContent_3);

let sliceContent_4 = content.slice(0, -5);
console.log(sliceContent_4);

let sliceContent_5 = content.slice(0, 888); 
console.log(sliceContent_5);

// substring()
let text = 'I like javescript and python';

console.log(text.substring(2, 18));

console.log(text.substring(2, -2));
