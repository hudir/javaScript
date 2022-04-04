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


const data =`
{
    "cakes": [
       {
          "type": "cakes",
          "author": "John Smith",
          "title": "Deliciously Decadent",
          "ingredients": [
             "chocolate",
             "milk",
             "flour",
             "vegetable oil",
             "sugar",
             "butter"
          ],
          "image": "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg"
       },
       {
          "type": "cakes",
          "author": "Jane Doe",
          "title": "Ridiculous Raspberry",
          "ingredients": [
             "raspberries",
             "milk",
             "flour",
             "vegetable oil",
             "sugar",
             "butter"
          ],
          "image": "https://thecakeblog.com/wp-content/uploads/2017/01/chocolate-raspberry-cake-thumb-sm.jpg"
       },
       {
          "type": "cakes",
          "author": "Tim Thomas",
          "title": "Famous NY Cheese Cake",
          "ingredients": [
             "cream cheese",
             "milk",
             "flour",
             "sugar",
             "butter",
             "biscuits"
          ],
          "image": "https://www.tasteofhome.com/wp-content/uploads/2017/10/Vanilla-Cheesecake_EXPS_THLS17_205125_D02_23_3b-1.jpg"
       }
    ],
    "biscuits": [
       {
          "type": "biscuits",
          "author": "Vincent Grey",
          "title": "Ginger Snaps",
          "ingredients": [
             "ginger",
             "flour",
             "butter",
             "sugar"
          ],
          "image": "https://www.joyofbaking.com/images/facebook/gingersnaps1.jpg"
       },
       {
          "type": "biscuits",
          "author": "Earl Senseo",
          "title": "Short Bread",
          "ingredients": [
             "sugar",
             "flour",
             "butter"
          ],
          "image": "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/butter_shortbread_74896_16x9.jpg"
       },
       {
          "type": "biscuits",
          "author": "Lily Shanes",
          "title": "Millionaires",
          "ingredients": [
             "sugar",
             "flour",
             "butter",
             "condensed milk",
             "milk chocolate"
          ],
          "image": "https://i0.wp.com/everydaycooks.co.uk/wp-content/uploads/2017/10/millionaire-shortbread-h2.jpg?fit=1800%2C1360&ssl=1"
       }
    ],
    "bread": [
       {
          "type": "bread",
          "author": "Martin Zammit",
          "title": "Sourdough",
          "ingredients": [
             "water",
             "flour",
             "salt",
             "yeast"
          ],
          "image": "https://amyinthekitchen.com/wp-content/uploads/2018/11/Beginners-Sourdough-Bread-AITK.jpg"
       },
       {
          "type": "bread",
          "author": "Pia Falzon",
          "title": "Beautiful Baguettes",
          "ingredients": [
             "water",
             "flour",
             "salt",
             "yeast"
          ],
          "image": "https://www.thespruceeats.com/thmb/mCTU2pQ6A-WZ7qQqxH4C8gSbR9E=/1428x1428/smart/filters:no_upscale()/GettyImages-636741221-e5442b2f0b3a4d33a26ebf7deb237fed.jpg"
       },
       {
          "type": "bread",
          "author": "Maria Mifsud",
          "title": "The best thing since sliced bread",
          "ingredients": [
             "water",
             "flour"
          ],
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfaG5Cv4oOjewDMyFitnCpsOBH3ifA5fkycKUy0_y_4Vv2P4IkA"
       }
    ]
 }`;

//  2- use the first function to convert the following string to object and create an array from all the recipes title.
const food = JSON.parse(data);
// console.log(food);
const arr =[];
for(let key in food) food[key].forEach(el => arr.push(el.title));

console.log(arr)