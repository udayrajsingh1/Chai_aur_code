function loginUserMessage(username){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Uday Raj Singh"))