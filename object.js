const mySym=Symbol("atul1")

const JsUser={
    [mySym] :"atul1",
    name: "Atul", 
    age:24,
    location:"Delhi",
    isloggedIn: false
}
console.log(JsUser[mySym])
console.log(JsUser["name"])
console.log(JsUser["age"])
console.log(JsUser["location"])
console.log(JsUser["isloggedIn"])
// chaning values
JsUser.age=22;
console.log(JsUser["age"])
//combining object
const obj1={1: "a", 2:"b"}
const obj2={3: "a", 4:"b"}
const obj3=Object.assign({}, obj1, obj2)
console.log(obj3)


const course={
    coursename:"js",
    price:"free",
    courseInstructor:"hitesh"
}
const{courseInstructor:Instructor}=course
console.log(Instructor);

/*
const navbar=({company})=>{

}
    */
