// singleton: if we make obj. by constrctor then it is, But by declearing like literals then it not a singleton obj.

// object literals:

const mySym = Symbol("key1") // defining symbol.


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",// making key.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym]) // using as a key symbol.

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // fix the changes and ferther change not applide.
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //-> hitesh@chatgpt.com //change not applide becose if 'freeze'

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this is use to get refers to an object in the current directory.
}

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Hitesh