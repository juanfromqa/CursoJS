const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJhon = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJohn / (heightJhon * heightJhon)
const markHigherBMI = BMIMark > BMIJhon;



// ES6 introduced Template literals, se utiliza con las comillas invertidas

const jonasNew = `Im ${BMIJhon} 
and ${massJohn} 
and ${heightJhon}`;
console.log(jonasNew)

console.log(`String
Multiple
line
`)
