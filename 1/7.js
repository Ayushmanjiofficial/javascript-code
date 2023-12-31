const score = 400
// console.log(score);

const balance = new Number(100) //spatialy define veriable is number
// console.log(balance); //-> [Number: 100]

console.log(balance.toString().length); // it convert number to string then check length.  //-> 3
// console.log(balance.toFixed(1)); //-> 100.0
// console.log(balance.toFixed(2)); //-> 100.00

const otherNumber = 23.8966
const otherNumber2 = 123.8966

// console.log(otherNumber.toPrecision(3)); //-> 23.9
// console.log(otherNumber2.toPrecision(3)); //-> 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //-> 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); //-> Object [Math] {}
// console.log(Math.abs(-4)); //Abselute Value //-> 4
// console.log(Math.round(4.6)); //-> 4
// console.log(Math.ceil(4.2)); //-> 5
// console.log(Math.floor(4.9)); //-> 4 // same as round
// console.log(Math.min(4, 3, 6, 8)); //-> 3
// console.log(Math.max(4, 3, 6, 8)); //-> 8

console.log(Math.random()); // give random value b/w 0 to 1 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// Importent *****
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
// give random no. b/w 10 to 20.