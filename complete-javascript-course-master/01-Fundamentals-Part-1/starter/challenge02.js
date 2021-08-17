const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJhon = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJohn / (heightJhon * heightJhon)
const markHigherBMI = BMIMark > BMIJhon;

if (BMIJhon > BMIJhon) {
    console.log("Mark's BMI is higher than Jhon's")
} else {
    console.log("Jhon's BMI is higher than Mark's")
}

// Type Coercion
console.log(' I AM ' + 23 + ' years old')
console.log(' I AM ' + String(23) + ' years old')

console.log(18 == '18') // TRUE 
console.log(18 === '18') // FALSE porque no hace type coercion el operador === USAR === SIEMPRE!!

const fav = Number(prompt("What is your fav number"));
if (fav === 23) {
    console.log(fav + " is a grteat number")
}


const day = "monday"

switch (day) {
    case 'monday': /// strict comparison day === 'monday'

        break;
    case 'tuesday':
    case 'wednesday':
        console.log("Para tuesday y wednesday se ejecuta este codigo")
        break;

    default:
        console.log("Invalid day")
}