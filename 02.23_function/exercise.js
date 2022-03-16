//! You have 30 min. If you finish feel free to jump to other rooms and help your classmates
//! I'll pick one person from the list to solve the task
/** Task 1**
 * Topics include: Arrays, variables,  if, for, data type, typeof, and function
 * Create a function call arrayToNumber handle the following cases
 * INPUT                      OUTPUT
 arrayToNumber([2,4,5])       ==> 11
 arrayToNumber([1,2,1,1,1])   ==> 6
 arrayToNumber([2,0])         ==> 2

 // Bonus 
 arrayToNumber([2,'ABC',2,1]) ==> 5
*/


const arrayToNumber = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
         isNaN(Number(arr[i])) == false
          ? sum += Number(arr[i])
          :null;
    }
    return sum;
}
console.log(arrayToNumber([2,4,5]) )
console.log(arrayToNumber([1,2,1,1,1]))
console.log(arrayToNumber([2,0]))
console.log(arrayToNumber([2,'ABC','2',1,5]))
console.log(arrayToNumber(['2',2,1]))
console.log(arrayToNumber(['2',2,1, undefined]))
console.log(arrayToNumber(['2',2,1, null]))

