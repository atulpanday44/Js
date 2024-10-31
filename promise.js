//fetch('https//something.com').then().catch().finally()
const promiseOne = new Promise( function(reesolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        reesolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"atul", email:"atul@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(usere)
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if( !error){
            resolve({username:"Atul", password:"123456"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=> {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected")
)


const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if( !error){
            resolve({username:"Javascript", password:"123456"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)

});

async function consumePromiseFive(){
    // const  response= await promiseFive
    // console.log(response)
try{
    const response= await promiseFive
    console.log(response);
} catch (error){
    console.log(error)
}


}
consumePromiseFive()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json{}
})
.then((data) =>{
    console.log(data);
})
.catch((error)=> console.log(error))