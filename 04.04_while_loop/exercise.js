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
// console.log(str);

// JSON
// create a function to convert from json to object this function should take one argument and return the object.

const data = `[
 {
   "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
 },
 {
   "userId": 1,
   "id": 2,
   "title": "quis ut nam facilis et officia qui",
   "completed": false
 },
 ,
 
 ]`;
function jsonToObj(json){
   let obj={};
   for(let i=0;i<json.length;i++){
       if(json[i] === '"') {
           let j = i+1,
           keyIndexBegin = i+1,
           keyIndexEnd=0,
           valueIndexBegin=0,
           valueIndexEnd=0;
           while(json[j] !== ',' && json[j] !== '}'){
               if (json[j]=='"' && keyIndexEnd == 0) keyIndexEnd=j;
               if (json[j]==':') valueIndexBegin=j+2;
               if (json[j+1] == ',' || json[j+1] == '}') valueIndexEnd=j+1;
            //    console.log(1,keyIndexEnd)
            //    console.log(2,valueIndexBegin)
            //    console.log(3,valueIndexEnd)              
               if (keyIndexEnd && valueIndexBegin && valueIndexEnd) {
                   if (json[valueIndexBegin] === '"' && json[valueIndexEnd-1] === '"') {
                     obj[json.slice(keyIndexBegin,keyIndexEnd)] = json.slice(valueIndexBegin+1,valueIndexEnd-1);
                    //  console.log(json[valueIndexEnd-1]);
                     break;  
                   }
                   obj[json.slice(keyIndexBegin,keyIndexEnd)] = json.slice(valueIndexBegin,valueIndexEnd);
                   break;   
               }; 
               j++;
               i++;
           }; // end while 
       };  //end  if(json[i] === '"')
   };  // end for(let i=0;i<json.length;i++)
   return obj;
};
// console.log(jsonToObj(`{"userId": 1,"id": 1,"title": "delectus aut autem","completed": false}`))
// console.log(jsonToObj(`{"userId": 1,"id": 3,"title": "fugiat veniam minus","completed": false}`))
// console.log(jsonToObj(`{"userId": 1,"id": 4,"title": "et porro tempora","completed": true}`))