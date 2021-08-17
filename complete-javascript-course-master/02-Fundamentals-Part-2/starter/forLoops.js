'use strict';

// For Loops

for (let index = 0; index <= 9; index++) {

    console.log(`Lifting weights repetition ${index + 1} 🏋️‍♀️`);

}

const jonas = [
    'Jonas',
    'Sanchez',
    2037 - 1990,
    'teacher',
    ['Michael', 'Peter', ' Steven'],
    true
];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
}


const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    // Filling types arra
    // types[i] = typeof jonas[i];

    types.push(typeof jonas[i]); // to add it to end of the list (Es lo mismo que arriba)
}

console.log(types)

const years = [1991, 2007, 1969, 2021];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages)


// Es como estar buscando 'string' y si no es string, se salta a evluar al siguiente con la palabra continue, es decir se interrumpe esa iteración y continúa con la siguiente
console.log("--- ONLY STRINGS ----")
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);

}

console.log("--- BREAK WITH NUMBER ----")
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);

}