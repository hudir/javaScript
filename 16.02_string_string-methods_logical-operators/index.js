// String length
console.log('H'.length); // 1
console.log('Hello World'.length); // 11

let text = 'I like js!';
console.log(text.length);  // 10

// String index / the index start form 0
let content = 'This is long content!';
console.log(content[0]); // T
console.log(content[8]); // l
console.log(content[20]); // !

console.log(content[content.length]); // out of the string index -->here length is 21
console.log(content[content.length - 1]); // !


let text_1 = 'Hallo   Alex   ';
console.log(text_1.length);

const text_2 = "It's a nice day$&";
console.log(text_2[text_2.length - 2]); // $

// String Methods
// string.trim()
let myString_trim = " tom@gmail.com   ";
console.log(myString_trim.length); // 17
console.log(myString_trim);
console.log(myString_trim.trim());
console.log(myString_trim.trim().length); // 13

// string.split()
let myString_split = 'My name is Hudir and i live in Berlin';
console.log(myString_split);
console.log(myString_split.split());
console.log(myString_split.split(' '));
console.log(myString_split.split('i'));

let keywords = 'javascript, php, python, webdev';
console.log(keywords.split(','));

let splitKey = ',';
console.log(keywords.split(splitKey));

let myString_split_1 = 'Hallo Max  how are you  !';
console.log(myString_split_1.split(' '));
/* [
    'Hallo', 'Max',
    '',      'how',
    'are',   'you',
    '',      '!'
  ] */ 
//   the 2th white space is als a empty element in the array

// charAt(index)
let myString_charAt = 'I like python!';
console.log(myString_charAt[7]); // p
console.log(myString_charAt.charAt(7));

// includes(string) return true or false
let myString_includes_id = '123 567 000 34555';
console.log(myString_includes_id.includes('000'));
console.log(myString_includes_id.includes('5'));
console.log(myString_includes_id.includes('9'));

let myString_includes_name = 'Hallo my name is: Max';
console.log(myString_includes_name.includes('max'));
console.log(myString_includes_name.includes('Max'));