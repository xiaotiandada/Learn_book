import {
    forEach,
    forEachObject,
    unless,
    times,
    every,
    some,
    sortBy
} from '../lib/es6-functional'

// var array = [1,2,3]
// forEach(array, (data) => console.log(data))
// forEach(array, (data) => console.log(2 * data))
//  babel-node functional-playground/play.js

// let fn = () => {}
// console.log(typeof fn)

// var tellType = (arg) => {
//     console.log(typeof arg)
// }
// let data = 1
// tellType(data)


// var dataFn = () => {
//     console.log("I'm a function")
// }

// tellType(dataFn)

// var tellType = (arg) => {
//     if(typeof arg === 'function'){
//         arg()
//     }else{
//         console.log('The passed datais' + arg)
//     }
// }

// tellType(dataFn)

// Fn => String
// let crazy= () => { return String }
// console.log(
//     String('HOC'),
//     crazy()
// )

// let fn = crazy()
// console.log(
//     fn('HOC'),
//     crazy()('HOC')
// )


// let object = {
//     a: 1,
//     b: 2
// }

// forEachObject(object, (k, v) => {
//     console.log(k+':'+v)
// })


// forEach([1,2,3,4,5,6,7], (number) => {
//     unless((number % 2), () => {
//         console.log(number, 'is even')
//     })
// })


// times(100, function(n){
//     unless(n % 2, function(){
//         console.log(n , 'is even')
//     })
// })

// times(100, (n) => {
//     unless(n%2, ()=>{
//         console.log(n, 'is even')
//     })
// })

// console.log(
//     every([NaN,NaN,NaN], isNaN),
//     every([NaN,NaN,4], isNaN)
// )

// console.log(
//     some([3,3,4], isNaN),
//     some([NaN,NaN,4], isNaN)
// )

// var fruit = ['cherries','apples','bananas']
// console.log(
//     fruit.sort()
// )

var people = [
    {
        firstname: 'aaFirstName',
        lastname: 'cclastName'
    },
    {
        firstname: 'ccFirstName',
        lastname: 'aalastName'
    },
    {
        firstname: 'bbFirstName',
        lastname: 'bblastName'
    }
]

// console.log(
//     people.sort((a,b)=>{
//         return (
//             a.firstname < b.firstname ? -1 : (
//                 a.firstname > b.firstname
//             ) ? 1 : 0
//         )
//     })
// )

// console.log(
//     people.sort((a,b)=>{
//         return (
//             a.lastname < b.lastname ? -1 : (
//                 a.lastname > b.lastname
//             ) ? 1 : 0
//         )
//     })
// )

console.log(
    people.sort(sortBy('firstname'))
)
console.log(
    people.sort(sortBy('lastname'))
)