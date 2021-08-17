'use strict'

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

for (let index = 0; index < bills.length; index++) {
    const tip = calcTip(bills[index]);
    tips.push(tip)
    totals.push(tip + bills[index])
}
console.log(totals);


function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function calcAverage(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {

        sum += arr[index];

    }

    return sum / arr.length;
}

console.log(calcAverage(totals))
console.log(calcAverage(tips))