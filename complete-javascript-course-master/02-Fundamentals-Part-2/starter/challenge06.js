'use strict';

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const scoreDolphins = calcAverage(44, 0, 71)
const scoreKoalas = calcAverage(65, 54, 49)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolphins win`)
    } else {
        console.log("No team wins")
    }
}

checkWinner(scoreDolphins, scoreKoalas)