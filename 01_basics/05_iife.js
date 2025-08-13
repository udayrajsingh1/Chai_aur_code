// ---> Immediately Invoked Function Expressions
// To prevent the function from global scope pollution, we use IIFE

(function one(){
    // This is named IIFE
    console.log("Hey")
})();   // we use semicolon(;) at last to tell where the context has to stop

// ()()  => first bracket is for declaration and second is for immediate function call

((name) => {
    // This is a simple or unnamed IIFE
    console.log(`hey, ${name}`)
})("Uday")