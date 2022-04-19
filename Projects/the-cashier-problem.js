const notesAndCoinsOBJ = {
    "500": "€500 note",
    "200": "€200 note",
    "100": "€100 note",
    "50": "€50 note",
    "20": "€20 note",
    "10": "€10 note",
    "5": "€5 note",
    "2": "€2 coin",
    "1": "€1 coin",
    "0.5": "€0.5 coin",
    "0.2": "€0.2 coin",
    "0.1": "€0.1 coin",
    "0.05": "€0.05 coin",
    "0.02": "€0.02 coin",
    "0.01": "€0.01 coin"
  };

const change = (price, paidAmount,obj = notesAndCoinsOBJ) => {
    let num = paidAmount - price,
    arr = Object.keys(obj).sort((a,b)=>b-a);
    if(num<0) return `need pay more €${Math.abs(num)}`;
    return arr.reduce((acc,el,i)=>{
        num=Math.round(num*100)/100;
        if(Math.floor(num/el)>=1) {
            acc+=`${Math.floor(num/el)} x €${el} --> {${Math.floor(num/el)}} ${obj[el]} \n`;
            num-=Math.floor(num/el)*el;
            return acc
        } else return acc
    },`Price: €${price}, Paid amount: €${paidAmount}, Change: €${paidAmount - price} \n`);
};

console.log(change(3.75, 50))