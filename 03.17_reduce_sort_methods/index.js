// ---------------- reduce() -----------
// When we give a starting value when using 'reduce()'...
// ... we can also choose which TYPE of value to return!

// The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value
// The reduce() method create also a new copy and modify the copied data


//                                        function                                    defaut is 0
output = [1, 2, 3].reduce(((accumulater, currentvalue) => accumulater + currentvalue) , '');
//                            element ,      index                     start point / the store to return


// =========================================================================================
let total = [1,2,2].reduce(
    function(acc, itemOfArr) {
        return acc + itemOfArr
}, 0);

// console.log(total)

// it's work just like this \/

function total_fun(sum , arr) {  
    if (arr.length == 0 ) return sum;
    else {
        sum += arr[0];
        arr.splice(0, 1);
        return total_fun(sum,arr);
    };
};
// console.log(total_fun(0, [1,2,2]))

let getString = [1,2,2,0].reduce((str, number) => str + number, '');
// console.log(getString)

let evenNum = [1,4,6,8,9].reduce((acc, ele) => {
    if (ele % 2 == 0) acc.push(ele);
    // console.log(acc)
    return acc;
}, []);

// console.log(evenNum)


// Returning an object as the result of calling .reduce() on an array

let pets = [
    { name: 'Bob', species: "cat" },
    { name: 'Gruffles', species: "dog" },
    { name: 'Tiara', species: "dog" },
    { name: 'Cleo', species: "fish" },
    { name: 'Hunter', species: "cat" },
    { name: 'Moby', species: "fish" },
    { name: 'Jess', species: "cat" },
    { name: 'Fido', species: "dog" },
    { name: 'Rover', species: "dog" }
];

// Use reduce() to loop through every element (object) in the "pets" array...
// Every time we loop, we can update an object which stores the number of each type of pet as a property.

// For example, { dogs: 4, cats: 3, fish: 2 }
/**
 Steps:
 // If the animal in the current loop is a dog...
 // Add 1 to the "dogs" property of the object we are building...
**************************
 // Else if the animal in the current loop is a cat...
 // Add 1 to the "cat" property of the object we are building...
**************************
 // If the animal in the current loop is neither a cat nor a dog, it must be a fish
// Add 1 to the "fish" property of the object we are building...

 acc (object we are building) ==> { dogs: 0, cats: 0, fish: 0 }
 */

 
let newObj = pets.reduce((acc, item) => acc[item.species] ? acc[item.species]++ : acc[item.species] = 1, {});
// console.log(newObj); // 1   why this not work ?

let newObj_1 = pets.reduce((acc, item) => {
    acc[item.species] ? acc[item.species]++ : acc[item.species] = 1
    return acc;
}, {});
// console.log(newObj_1); // { cat: 3, dog: 4, fish: 2 }   this one works

let biggerThan0 = x => x > 0 ? true : false;
// console.log(biggerThan0(-1))











// ---------------- sort() -----------
