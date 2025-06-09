// using "this"

// const user = {
//     username: "Uday Raj Singh",
//     age: "20",
//     greetingMessage: function(){
//         console.log(`${this.username}, just logged in!`)    // used "this" in this line
//         console.log(this)
//     },
// }

// user.greetingMessage()
// user.username = "Uday"
// user.greetingMessage()

// console.log(this)   // gives empty object


// when only this printed inside a function inside a object

// const user = {
//     username: "Uday Raj Singh",
//     age: "20",
//     greetingMessage: function(){
//         console.log(this) 
//     },
// }
// user.greetingMessage() // gives the object with all the property


// new syntax of declaring function explicit way
const add = (val1, val2) => {
    return val1 + val2
}
console.log(add(47, 3))



// implicit way
const addTwoNum = (val1, val2) => (val1 + val2)   // we didn't specify return that's why it is implicit
console.log(addTwoNum(20, 15))