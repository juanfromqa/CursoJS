'use strict'

// Object literal syntax
const juan = {
    firstName: 'Juan',
    lastName: 'Hernandez',
    birthYear: 1990,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
// console.log(juan)
/*
Arrays para datos estructurados donde el orden de los elementos si importa
Objects para datos no estructurados (no importa el orden)
*/

/*
// DOT NOTATION
console.log(juan.lastName)

// BRACKET NOTATION
const nameKey = "Name" // firstNAME last
console.log(juan['last' + nameKey])

*/
/*
const interestedIn = prompt("What do you want to know about Juan? Choose between firstName, lastName, age, job and friends");

if (juan[interestedIn]) {
    console.log(juan[interestedIn])
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
}
juan.location = 'Mexico';
juan['twitter'] = "@_chanito"
console.log(juan)
*/

// Se puede poner un método como una propiedad más de un objeto:

// const jonas = {
//     firstName: 'Juan',
//     lastName: 'Hernandez',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     calcAgeObject: function () {
//         return 2037 - this.birthYear;
//     }
// }

const jonas = {
    firstName: 'Juan',
    lastName: 'Hernandez',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAgeObject: function () {
        this.age = 2037 - this.birthYear; // AQUI SE CREA UNA NUEVA PROPIEDAD DEL OBJETO!!!
        return this.age; // This is optional
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAgeObject()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
    }
}


// Se accesa de la siguiente manera:

console.log(jonas.calcAgeObject(jonas.age));
console.log(jonas.getSummary())