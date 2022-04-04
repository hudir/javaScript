for (let i=0;i<10;i++) {
    // console.log(i)
    if (i===5){
        // break;
        // return;
    }
}

let num = 0;
while(num<10){
    // console.log('num value is ', num);
    num++;
}

const cars = ['vw', 'bmw', 'kia', 'honda']
let index = 0;
while(index<cars.length){
    // console.log(cars[index]);
    index++
}


let counter = 0, i = 0;
while(i !== 6){
    i = Math.floor((Math.random()*10)+1);
    counter++;
};
// console.log(counter)

counter = 0;
i = 0;
do {
    i = Math.floor((Math.random()*10)+1);
    counter++;
} while (i !==8);

// console.log(counter)

let str = '';
for(let i=0;i<10;i++){
    for (let j =0;j<10;j++){
        if (i==0 || i ==9 || j==0 || j==9 || i == j || i == 9 -j) {
            str+='* '; 
            continue; 
        };
        // if (j==0 || j==9) {
        //     str+='* ';
        //     continue; 
        // };
        // if (i == j || i == 9 -j) {
        //     str+='* ';
        //     continue; 
        // }
        str+='  '
    };
    str+="\n";
}
console.log(str)