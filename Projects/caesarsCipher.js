const arr_1='abcdefghijklm'.toUpperCase().split('')
     ,arr_2='nopqrstuvwxyz'.toUpperCase().split('');

function rot13(str,arr1=arr_1,arr2=arr_2) {
    return str.split('').map(el=>{
        if(arr1.includes(el)) return arr2[arr1.indexOf(el)];
        else if(arr2.includes(el)) return arr1[arr2.indexOf(el)];
        else return el
    }).join('')
  
}

console.log(rot13("SERR PBQR PNZC"));

