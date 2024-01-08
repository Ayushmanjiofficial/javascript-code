const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter); // It give the hidden properys of math pi.
//->
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,  // countable
//     configurable: false
// }

// console.log(Math.PI);
// Math.PI = 5 // Not work.
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}