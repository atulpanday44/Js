function myName(){
    console.log("A")
    console.log("t")
    console.log("u")
    console.log("l")
}

function addTwoNumb(number1,number2){
  console.log(number1+ number2)
}
 addTwoNumb(99,78)

 function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a user name")
    }
    return `${username} just logged in`
 }
 console.log(loginUserMessage("Atul"))

 // calculate cart price
 function calculateCartPrice(num1){
    return num1
 }
 // console.log(calculateCartPrice(200,400,500))
function handleobject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject({
    username:"atul",
    price:"23456"
})

// for passing array
const myNewArr=[200,100,300]
function returnSecondValue(getArray){
   return getArray[1]
}
console.log(returnSecondValue)