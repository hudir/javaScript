

// sss = 'to the vast qui...'.split(' ').sort((a,b)=>a.length-b.length);
// console.log(sss);
// if(sss.every((x,i)=>{
//     if (i<sss.length-1 && x.length+1!=sss[i+1].length) return false
//     else return true
// })) console.log(sss.join(' '))
// else console.log('ERROR')



//  const N = 2
//  if(N===0) console.log(0)
//  else {
//      var inputs = '-10 -10'.split(' ').sort((a,b)=>Math.abs(a)-Math.abs(b));
 
//      console.log(inputs);
     
//      if (Math.abs(inputs[0])==Math.abs(inputs[1])) {
//          if(inputs[1]>0) console.log(inputs[1])
//          else console.log(inputs[0])
//      }
//      else console.log(inputs[0])
//  }





// const prompt = require("prompt-sync")({ sigint: true });

// // console.log(playerName);
// // console.log(guessNum);
// let secNum = () => {
//   let arr = [];
//   for (let i = 0; arr.length < 4; i++) {
//     let newNumber = Math.floor(Math.random() * 10);
//     if (arr.length == 0 && newNumber == 0) continue;
//     if (!arr.includes(newNumber)) arr.push(newNumber); 
//   }
//   return arr.join("");
// };
// const secretNumberIsSet = secNum();
// console.log('secretNumber: ', secretNumberIsSet);


// class BullsAndCows {
//   constructor(playerName, secretNumber = secretNumberIsSet) { // set secretNumberIsSet als default value of secretNumber
//     this.name = playerName;
//     //this.secretNumber = "1234";
//     this.secretNumber = secretNumber;
//   }
//   //  guessNumber method
//   guessNumber = (guessNum) => {
     
//     if (guessNum.length != 4) {
//       guessNum = prompt(
//         `${guessNum} not acceptable,It should be just four digits , Inter new guess number: `
//       );
//       return this.guessNumber(guessNum);
//     }
//     for (let i = 0; i < guessNum.length; i++) {
//       for (let j = 0; j < guessNum.length; j++) {
//         if (guessNum[i] === guessNum[j] && i != j) {
//           guessNum = prompt(
//             `${guessNum} It should be four unique digits, Inter new guess number: `
//           );
//           return this.guessNumber(guessNum);
//         }
//       }
//     }
//     let allMachNum = 0;
//     let bull = 0;
//     let cows = 0;
//     let secNumArr = this.secretNumber.split('')
//     for (let i = 0; i < secNumArr.length; i++) {
//       for (let j = 0; j < guessNum.length; j++) {
//         if (secNumArr[i] === guessNum[j]) {
//           allMachNum++;
//         }
//         if (i === j && this.secretNumber[i] === guessNum[j]) {
//           bull++;
//         }
//       }
//     }
//     cows = allMachNum - bull;
//     if (this.secretNumber === guessNum) {
//       return `${bull} bull and ${cows} cows,congratulation your guess is right`;
//     } else {
//       console.log(`Hint: ${bull} bull and ${cows} cows`);
//       guessNum = prompt("Inter new guess number: ");
//       return this.guessNumber(guessNum);
//     }
//   };
// };


// const playerName = prompt("Your name: ");
// const guessNum = prompt("Your guess number: ");

// let newPlyer = new BullsAndCows(playerName, secretNumberIsSet); // or here we pass the secretNumberIsSet to secretNumber
// console.log(newPlyer.guessNumber(guessNum)); //'1234'
// console.log(newPlyer.secretNumber);











let arr= []

const n = parseInt(readline());
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const v = parseInt(inputs[i]);
    arr.push(v)
}

let ma=Math.max(...arr)
let str = ''

for (let i = ma; i>0 ;i--){
    for (let j =0; j<n ;j++){
       j!=0 ? str+=' ' : 0
       
        i > arr[j] ? str+='   ' : 
        i == arr[j] ? str+= '***' :
        str+= '* *'
    }
    str+='\n'
}

print(str)
