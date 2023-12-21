// data type:-
//  1) Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail; //undefined

const id = Symbol('123') // symbol
const anotherId = Symbol('123')

console.log(id === anotherId); //-> false

// const bigNumber = 3456543576654356754n // 'n' to reprsent BigInt



// 2) Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ // storing function in variable
    console.log("Hello world");
}

// console.log(typeof heros); //-> object
// console.log(typeof myFunction); //-> function

// https://262.ecma-international.org/5.1/#sec-11.4.3