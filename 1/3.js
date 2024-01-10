// conversion and Operations:-
let score = "Ayushman"

console.log(typeof score);  //-> String 
console.log(typeof(score)); //-> String

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //-> Number
console.log(valueInNumber); //-> NaN

// convert to number :-
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
//  null => 0
//  undefined => NaN

let isLoggedIn = "Ayushman"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); //-> true

// convert to boolean
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); //-> 33
// console.log(typeof stringNumber); //-> String

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); //-> -3

// console.log(2+2); //-> 4
// console.log(2-2); //-> 0
// console.log(2*2); //-> 4
// console.log(2**3); //-> 8
// console.log(2/3); //-> 0.66
// console.log(2%3); //-> 2

let str1 = "Hello"
let str2 = " Ayushman"

let str3 = str1 + str2
// console.log(str3); //-> Hello Ayushman

// console.log("1" + 2); //-> 12
// console.log(1 + "2"); //-> 12
// console.log("1" + 2 + 2); //-> 122
// console.log(1 + 2 + "2"); //-> 32

// console.log( (3 + 4) * 5 % 3);

// console.log(true); //-> true
// console.log(+true); //-> 1
// console.log(+""); //-> 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //-> 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion