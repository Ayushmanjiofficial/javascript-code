const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //-> {} // in 'node' enviroment {} is golbel obj, But in browser 'windowe' is golbel obj.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //-> undefined // don't work in function.
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //-> undefined // same as before
// }

// const chai = function () {
//     let username = "hitesh123"
//     console.log(this); // give many parameter in function.
// }

// By arrow opretor:
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username); //-> undefined
//     console.log(this); //-> {}
// }
// chai()

//Difference between Arrow functions Vs Regular functions?


//Explicit return:
// const addTwo = (num1, num2) => {
//     return num1 + num2
// } //-> 7

// Implicit return:
// const addTwo = (num1, num2) =>  num1 + num2 //-> 7 // same
// const addTwo = (num1, num2) => ( num1 + num2 ) //-> 7 // same

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4)) 
//-> { username: 'hitesh' }