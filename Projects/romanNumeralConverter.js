const romanNumerals = {
    '1000': 'M',
    '500': 'D',
    '100': 'C',
    '50': 'L',
    '10': 'X',
    '5': 'V',
    '1': 'I'
}

function convertToRoman(num, obj=romanNumerals) {
    let keys = Object.keys(obj).sort((a,b)=>b-a),
    result = [];

    for(let i=0;i<keys.length;i++){
        // console.log(num)

    // deal with 4,9,40,90,400,900
         if(num<1000 && num>=900){
            result.push('C','M');
            num -= 900;
        } else if(num<500 && num>=400){
            result.push('C','D');
            num -= 400;
        } else if(num<100 && num>=90){
            result.push('X','C');
            num -= 90;
        } else if(num<50 && num>=40){
            result.push('X','L');
            num -= 40;
        } else if(num==9){
            result.push('I','X');
            num -= 9;
        } else if(num==4){
            result.push('I','V');
            num -= 4;

    // deal with all others
        } else if(num>=keys[i] && Math.floor(num/keys[i]) != 9 && Math.floor(num/keys[i]) != 4 && num != 9 && num != 4) {  
            let temp = [] 
            ,pos = Math.floor(num/keys[i]);
            
            for(let j=0;j<pos;j++){
                temp.push(obj[keys[i]])
            }
            result.push(temp);
            num -= pos*keys[i];
         } 
    }
    return result.flat(Infinity).join(''); 
}
   console.log(convertToRoman(3999))