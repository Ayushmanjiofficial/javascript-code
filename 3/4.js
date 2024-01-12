// Immediately Invoked Function Expressions (IIFE):
// It is use to created a immediately run function and stop globle variable pollution.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// By => oprater:
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')