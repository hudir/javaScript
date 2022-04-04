// for loop exercise:
// 1- use nested for loop or while loop to create this shape of stars :

//     * * * * * * * * * *
//     *                 *
//     *                 *
//     *                 *
//     *                 *
//     *                 *
//     *                 *
//     *                 *
//     *                 *
//     * * * * * * * * * * 
let str = '';
for (let i=0;i<10;i++){
    for(let j=0;j<10;j++) i==0 || i==9 || j==0 || j==9 ? str+='* ' : str+='  '; 
    str+='\n';
};
// console.log(str);



// 2- use nested for loop or while loop to create this shape of stars :

//       *
//       * *
//       *   *
//       *     *
//       *       *
//       *         *
//       *           *
//       *             *
//       *               *
//       * * * * * * * * * * 
str = '';
let i=0;
while(i<10){
    let j=0;
    while(j<=i){
        i==9 || j==0 || j==i ? str+='* ' : str+='  ';
        j++;
    };
    i++;
    str+='\n';
};
// console.log(str);

// 3- use nested for loop or while loop to create this shape of stars :

//       * * * * * * * * * *
//       *               *
//       *             *
//       *           *
//       *         *
//       *       *
//       *     *
//       *   *
//       * *
//       * 
str='';
i=0;
while(i<10){
    let j=0;
    while(j<=9-i){
        i==0 || j==0 || j==9-i ? str+='* ' : str+='  ';
        j++;
    };
    i++;
    str+='\n';
};
// console.log(str)


// 4- use nested for loop or while loop to create this shape of stars :

//        * * * * * * * * * *
//          *               *
//            *             *
//              *           *
//                *         *
//                  *       *
//                    *     *
//                      *   *
//                        * *
//                          *
str='';
i=0;
while(i<10){
    let j=0;
    while(j<10){
        i==0 || i==j || j==9 ? str+='* ' : str+='  ';
        j++;
    };
    i++;
    str+='\n';
};
console.log(str);