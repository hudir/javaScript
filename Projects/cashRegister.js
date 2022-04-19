const amount ={
    PENNY:0.01,
    NICKEL:0.05,
    DIME:0.1,
    QUARTER:0.25,
    ONE:1,
    FIVE:5,
    TEN:10,
    TWENTY:20,
    'ONE HUNDRED':100
}

function checkCashRegister(price, cash, cid, obj = amount) {
    let result ={change:[]}, num = cash- price

    // don't have enough to change
    const total = Math.round(cid.reduce((acc,arr)=>acc+arr[1],0)*100)/100;
    if(num > total) return {status: "INSUFFICIENT_FUNDS", change: []};

    // deal change
    let amountArr = Object.values(obj);
    for(let i= amountArr.length-1; i>=0; i--){
        console.log(num)
        if(num >= amountArr[i]) {
            let need = Math.floor(num/amountArr[i]) * amountArr[i]
               ,have = cid[i][1];

            if(have>=need) {
                result.change.push([cid[i][0], need]);
                num-=need;
            } else {
                result.change.push([cid[i][0], have]);
                num-=have;
            };
            num = Math.round(num*100)/100;  
        }
    }

    if (num == 0 && total == cash - price){
        result.status="CLOSED";
        result.change=cid;
        return result;
    }
    if (num == 0) {
        result.status="OPEN";
        return result;
    } else {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  }
  
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))