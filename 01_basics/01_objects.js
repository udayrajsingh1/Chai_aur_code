const JsUser = {
    name: "Uday Raj Singh",
    age: "20",
    location: "Kanpur",
    email: "shivacoc1234@gmail.com"
}

// console.log(JsUser)

// ---> Methods to retrieve elements
// console.log(JsUser.name)
// console.log(JsUser["name"])  // ---> better way


// ---> Adding elements 
// JsUser.state = "Uttar Pradesh"
// console.log(JsUser)

// ---> Adding function and string interpolation
// JsUser.greeting = function(){
//     console.log(`Hey! ${JsUser.name}`)
// }
// console.log(JsUser.greeting())

// ---> Creating singleton object 

const instaUser = new Object()


// ---> Merging two objects
const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

const obj3 = {...obj1,...obj2}
// console.log(obj3)

// ---> Retrieving only keys or values or all enteries in array data type
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))
// console.log(Object.entries(obj3))

// ---> To check whether the object has the specific property or not
// console.log(obj3.hasOwnProperty("6"))

// ---> Object destructuring
const course = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh Sir"
}

// ---> avoid using course.courseInstructor instead of it, use only courseInstructor
// const {courseInstructor} = (course)
// console.log(courseInstructor)


// ---> destructuring the courseInstructor name too , now using instructor to retrieve courseInstrucor from course object
// const {courseInstructor: Instructor} = (course)
// console.log(Instructor)