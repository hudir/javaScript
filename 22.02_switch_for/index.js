/* switch () {
    case 1: statment 
    break;
    case 2: statment 
    break;
    
    ...

    default: statment 
} */

let month = 4;
if (month == 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month === 3) {
    console.log('March');
} else if (month === 4) {
    console.log('April');
} else if (month === 5) {
    console.log('May');
} else if (month === 6) {
    console.log('June');
} else if (month == 7) {
    console.log('July');
} else if (month == 8) {
    console.log('August');
} else if (month == 9) {
    console.log('September');
} else if (month == 10) {
    console.log('Octorber');
} else if (month == 11) {
    console.log('November');
} else if (month == 12) {
    console.log('December');
} else {
    console.log('pls give a mouth form 1 to 12');
}

month = 13;
switch(month) {
    case 1:
    console.log('January');
    break;
    case 2:
    console.log('February');
    break;
    case 3:
    console.log('March');
    break;
    case 4:
    console.log('April');
    break;
    case 5:
    console.log('May');
    break;
    case 6:
    console.log('June');
    break;
    case 7:
    console.log('July');
    break;
    case 8:
    console.log('August');
    break;
    case 9:
    console.log('September');
    break;
    case 10:
    console.log('Octorber');
    break;
    case 11:
    console.log('November');
    break;
    case 12:
    console.log('December');
    break;
    default: 
    console.log('pls give a mouth form 1 to 12');
    break;
}


const grade = 'G';
switch(grade) {
    case 'A': console.log("Excellent!");
    break;
    case 'B':
    case 'C': console.log('Good');
    break;
    case 'D':
    case 'F': console.log('Not so good');
    break;
    default: console.log('Pls give a grade form A to F');
}

for (let i = 0; i < 6 ; i++) {
    for (let y = 5; y > 0; y--) {
        console.log('y is', y);
    }
    console.log(i);
}

const str = 'Today is a sunny day.'
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
};

let str2 = '';
for (let i = 0; i < str.length; i++) {
    str2 += str[i];
    console.log(str2);
};

let str3 = '';
for (let i = (str.length - 1); i >= 0 ;i--) {
    str3 += str[i];
    console.log(str3);
};

let arrOfStr = [];
for (let i = 0; i < str.length; i++) {
    arrOfStr.push(str[i]);
};
console.log(arrOfStr);