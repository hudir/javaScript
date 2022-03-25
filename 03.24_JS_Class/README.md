# constructor function

syntactic sugar

```
let  store = []
 function rev(str) {
     if (str == '') return str;

     let rest = str.slice(1) // we cut first element, and put the rest elements in variable 'rest'
     store.unshift(str[0])

     console.log('the rest: ' , rest,'|| we cut : ', str[0], '|| now we have: ', store.join('') );
     console.log('      ----------------  ---------------- ')
     
     return rev(rest) + str[0]; //  we pass the rest als param and call the function again.   we build the result form right to left
 }

 console.log(rev('hello woulddd'));

 /* the rest:  ello woulddd || i cut first:  h || now i have:  h
      ----------------  ---------------- 
the rest:  llo woulddd || i cut first:  e || now i have:  eh
      ----------------  ---------------- 
the rest:  lo woulddd || i cut first:  l || now i have:  leh
      ----------------  ---------------- 
the rest:  o woulddd || i cut first:  l || now i have:  lleh
      ----------------  ---------------- 
the rest:   woulddd || i cut first:  o || now i have:  olleh
      ----------------  ---------------- 
the rest:  woulddd || i cut first:    || now i have:   olleh
      ----------------  ---------------- 
the rest:  oulddd || i cut first:  w || now i have:  w olleh
      ----------------  ---------------- 
the rest:  ulddd || i cut first:  o || now i have:  ow olleh
      ----------------  ---------------- 
the rest:  lddd || i cut first:  u || now i have:  uow olleh
      ----------------  ---------------- 
the rest:  ddd || i cut first:  l || now i have:  luow olleh
      ----------------  ---------------- 
the rest:  dd || i cut first:  d || now i have:  dluow olleh
      ----------------  ---------------- 
the rest:  d || i cut first:  d || now i have:  ddluow olleh
      ----------------  ---------------- 
the rest:   || i cut first:  d || now i have:  dddluow olleh
      ----------------  ---------------- 
dddluow olleh */
```