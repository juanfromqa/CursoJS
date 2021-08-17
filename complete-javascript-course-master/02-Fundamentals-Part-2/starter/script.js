'use strict';

/**
 *  Strict mode es un modo que se utiliza para hacer el codigo mas seguro.
 * Strict mode hace mas facil que se obtengan errores:
 *  - Prohibe hacer ciertaws cosas
 *  - Deja ver mas errores para debuggear mejor y no fallar silenciosamente
 * 
 * Lista de variables:
 * - interface
 * - 
 */

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriversLicenses = true; SIN STRICT ESTE ERROR NO SE VE EN LA CONSOLA

if (hasDriversLicense) console.log("Can Drive");

// const interface = 'Audio'
// const private = 5342;


function logger() {
    console.log("My name is Juan")
}

logger();
logger();
logger();

// Function declaration
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 9)
console.log(appleJuice)


function calcAge(birthYear) {
    return 2021 - birthYear
}

console.log(calcAge(1990))


// FUNCION ANONIMA- Function expression. Expresions return values!

const calcAge2 = function (birthYear) {
    return 2021 - birthYear
}

console.log(calcAge2(1990))

// FUNCION ARROW
const calcAge3 = birthYear => 2021 - birthYear // Solo funciona cuando tenemos exacamente un parametro de entrada y uno de salida

const age3 = calcAge3(1994)

console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`; // Return es necesario cuando es mas de una linea de codigo 
}

console.log(yearsUntilRetirement(1990, 'juan'))

/**
 * this es una palabra que no se tiene en el ambito de una funcion de flecha
 */
