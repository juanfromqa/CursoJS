'use strict';

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

const jhon = {
    fullName: "Jhon Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

const BMIMark = mark.calcBMI();
const BMIJhon = jhon.calcBMI();
const markHigherBMI = BMIMark > BMIJhon;

if (markHigherBMI) {
    console.log(getString(mark, jhon));
} else {
    console.log(getString(jhon, mark))
}

function getString(person, person2) {
    return `${person.fullName}'s BMI (${person.bmi}) is higher than ${person2.fullName} (${person2.bmi})!`
}