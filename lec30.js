// // const coding=["js", "ruby","java", "python", "cpp"]
// // const values=coding.forEach( (item) =>{
// //     console.log(item)
// // })
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums= myNums.filter(() => num > 4)
// console.log(myNums)
const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.map( (num) => num+10 )
const newNums=myNums
.map( (num) => num*10 )
.map( (num) => num+1 )
.filter( ( num)=>num>=40)

console.log(myNums)
console.log(newNums)
