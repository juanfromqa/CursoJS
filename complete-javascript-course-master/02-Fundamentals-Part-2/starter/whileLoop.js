'use strict'

// let rep = 1
// while (rep <= 10) {
//     console.log(rep)
//     rep++
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice)

while (dice !== 6) { // Se usa cuando sabes exactamente cuantos loops necesitas
    console.log(`You rolled a ${dice}`);
    if (dice === 6) {
        console.log("You thrown a 6")
    }
}


// Loop for es para arrays