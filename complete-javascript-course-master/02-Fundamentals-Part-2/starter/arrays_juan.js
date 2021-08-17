'use strict';

const friends = ['Michael', 'Steven', 'Peter']

// console.log(friends)

const years = new Array(1991, 1984, 2008, 2021)

// console.log(friends.length)
// console.log(years[0])

//console.log(friends[friends.length - 1]) // SE puede poner una expresion aqui adentro de los []

// Mutate array - Reemplazando el valor anterior. UN ARRAY ES MUTABLE
friends[2] = 'Jay'
// console.log(friends)

const firstName = "juan"
const juan = [firstName, "Hernandez", 2021 - 1990, 'teacher', friends]
//console.log(juan)

const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const age1 = calcAge(years[1])
//console.log(age1)

// Se guardan en otro array los resultados y se puede ingresar en lugar de parametros una expresion que regrese valor
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]
// console.log(ages)

friends.push('Juan')


friends.unshift('Juan') // Para agregar un elemento al inicio del array
const elementoEliminado = friends.pop() // Last



const elemento = friends.shift() // Delete first element, opposite to POP

console.log(elemento)
console.log(friends.indexOf('Jay'))


// ES6 method
console.log(friends.includes('Steven')) // Bool and strict validation 

if (friends.includes('Steven')) {
    console.log("You have a friend called Peter")
}



