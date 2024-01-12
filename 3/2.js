//var c = 300 // it does not follow scope in JS.
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


// console.log(a); //-> 300
// console.log(b); //-> error
// console.log(c); //-> 300


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //-> error: out of scope

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //-> error: out of scope
}

// console.log(username); //-> error: out of scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


// addTwo(5) //-> error: veriable
const addTwo = function(num){
    return num + 2
}
addTwo(5)