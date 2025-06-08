function loginUserMessage(username){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Uday Raj Singh"))

// ---> Normal function return
function calculatCartPrice(val1){
    return val1
}
// console.log(calculatCartPrice(20))


// ---> Now using ... as rest operator when there is multiple values to pass as arguments 
function calculatCartPrice(...val1){
    return val1
}
// console.log(calculatCartPrice(20,20,23,54))


// ---> handling object in fucntions
const user = {
    name: "Uday",
    age: 20
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`)
}
// handleObject(user)


// ---> Handling array inside a function
const myArray = [100, 200, 300, 400]
function secondValue(getarray){
    return myArray[1]
}
// console.log(secondValue(myArray))