function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() // calling the function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result); //-> Result:  8


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")) //-> hitesh just logged in
// console.log(loginUserMessage()) //-> undefined just logged in
// console.log(loginUserMessage()) //-> sam just logged in // by using defalt value


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // val1=200, val2=400, rest in 'num1'=[500, 2000].

// defining obj. in fuction:- 
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user) //-> Username is hitesh and price is 199
handleObject({
    username: "sam",
    prices: 399
}) //-> Username is sam and price is 399 // giving derect obj.

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); //-> 400
console.log(returnSecondValue([200, 300, 500, 1000])); //-> 300