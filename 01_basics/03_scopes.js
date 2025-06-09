// function one(){
//     const website = "github"
//     function two(){
//         const username = "uday"
//         console.log(website)
//     }
//     // console.log(username)
//     console.log(website)
//     two()
// }
// one()


// => one cannot access username variable that is inside nested fucntion while function two can access website variable
//      from parent fucntion one



// ---> Hoisting
// method 1 of declaring function 

one()     // calling function before declaring, gives no error
function one(){
    console.log("hey")
}

// method 2 of declaring function

// two()    // calling function before declaring it, gives error in this method as we are storing the function in a variable
const two = function(){
    console.log("hey")
}
