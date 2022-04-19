function telephoneCheck(str) {
    if(str.includes('(')) {
        if(!str.includes(')')) return false;
    };
    if(str.includes(')')) {
        if(!str.includes('(')) return false;
    };
    if(str[0]=='(' && str[str.length-1]==')') return false;
    if(str[0]=='-') return false;
    if(str.split('').filter(el=>el=='-').length>2) return false;

    let arr = str.split(/[-()\s]/).join('').split('');
    if (arr.length == 10 && arr.every(el=>typeof +el == 'number')) return true;
    if (arr.length == 11 && arr[0]==1 && arr.every(el=>typeof +el == 'number')) return true;
    
    return false;
   
  }
  
  console.log(telephoneCheck("(555)-555 5555"));

  console.log(telephoneCheck("123**&!!asdf#"));
  console.log(telephoneCheck("(6054756961)"));