// 4.1

// var myarr = ['red','blue','yellow','purple'];
// console.log(myarr)
// console.log(
//     myarr[0],
//     myarr[1],
//     myarr[2],
//     myarr[3]
// )

// ["red", "blue", "yellow", "purple"]
// red blue yellow purple

// var hero = {
//     breed : 'Turtle',
//     occupation: 'Ninja'
// }

// var hero = {occupation: 1};
// var hero = {"occupation": 1};
// var hero = {'occupation': 1};

// var o = {
//     $moething : 1,
//     'yes or no' : 'yes',
//     '!@#$%^&*' : true
// }

// 4.1.1
// var dog = {
//     name : 'Benji',
//     talk: function(){
//         alert('woof, woof');
//     }
// }

// var a = []
// a[0] = function(what){ alert( what )}
// a[0]('boo')

// 4.1.2
// 4.1.3

// var hero = {
//     breed : 'Turlte',
//     occupation: 'Ninja'
// }
// // hero.breed
// "Turlte"

// hero.breed
// "Turlte"
// hero['occupation']
// "Ninja"
// 'Hair color is ' + hero.hair_color
// "Hair color is undefined"

// var book = {
//     name : 'Catch-22',
//     published: 1961,
//     author: {
//         firstname: 'Joseph',
//         lastname : 'Heller'
//     }
// }

// book.author.firstname
// "Joseph"
// book.author['lastname']
// "Heller"
// book['author'].lastname
// "Heller"

// var key = 'firstname'
// book.author[key]
// "Joseph"

// 4.1.4
// var hero = {
//     breed : 'Turtle',
//     occupation: 'Ninja',
//     say: function(){
//         return 'I am ' + hero.occupation
//     }
// }

// hero.say()
// "I am Ninja"

// hero.say('a','b','b')
// hero['say']()

// var method = 'say'
// hero[method]()

// 4.1.5
// var hero = {}
// typeof hero.breed
// "undefined"

// hero.breed = 'turtle'
// hero.name = 'Leonardo'
// hero.sayName = function(){
//     return hero.name
// }

// hero.sayName()
// "Leonardo"
// delete hero.name
// true
// hero.sayName()
// undefined

// 4.1.6
// var hero = {
//     name : 'Rafaelo',
//     sayName : function(){
//         return this.name
//     }
// }
// hero.sayName()
// "Rafaelo"

// 4.1.7
// function Hero(){
//     this.occupation = 'Ninja';
// }

// var hero = new Hero()
// hero.occupation
// "Ninja"


// function Hero(name){
//     this.name = name
//     this.occupation = 'Ninja'
//     this.whoAreYou = function(){
//         return "I'm " + this.name + " and i'm " + this.occupation
//     }
// }

// var h1 = new Hero('michelangelo')
// var h2 = new Hero('Donatello')

// h1.whoAreYou()
// "I'm michelangelo and i'm Ninja"
// h2.whoAreYou()
// "I'm Donatello and i'm Ninja"

// var h = Hero('L')
// undefined
// typeof h
// "undefined"

// 4.1.8
// var a = 1
// undefined
// window.a
// 1
// this.a
// 1
// a
// 1

// function Hero(name){
//     this.name = name
// }

// var h = Hero('leonardo')

// typeof h
// "undefined"
// typeof h.name
// VM1382:2 Uncaught TypeError: Cannot read property 'name' of undefined(…)

// name
// "leonardo"
// window.name
// "leonardo"
// var h2 = new Hero('michelangelo')
// undefined
// typeof h2
// "object"
// h2.name
// "michelangelo"

// parseInt('101 dalmatiasns')
// 101
// window.parseInt('101')
// 101
// this.parseInt('101')
// 101

// 4.1.9
// h2.constructor

// function Hero(name){
//     this.name = name
// }

// var h3 = new h2.constructor('Rafaello')

// h3.name
// "Rafaello"

// var o = {}
// undefined
// o.constructor
// function Object() { [native code] }
// typeof o.constructor
// "function"

// constructor
// constructor
// construcotr
// constructor
// constructor
// constructor
// constructor
// constructor
// constructor
// constructor
// constructor
// constructor
// constructor
// constructor
// constructor
// constructor


// 4.1.10
// function Hero(){}
// var h = new Hero()
// var o = {}


// h instanceof Hero
// true
// h instanceof Object
// true
// o instanceof Object
// true


// 4.1.11
// function factoru(name){
//     return {
//         name : name
//     }
// }

// var o = factoru('one')
// undefined
// o.name
// "one"
// o.constructor
// function Object() { [native code] }

// function C(){
    // this. a = 1
// }

// var c = new C()
// c.a
// 1

// function C2(){
    // this.a = 1
    // return {b : 2}
// }

// var c2 = new C2()

// 注释掉返回对象
// typeof c2.a
// "number"

// typeof c2.a
// "undefined"


// c2.b
// 2

// function C(){
    // var this = {}  //pseudo code, you can't do this\
    // this.a = 1
    // return this
// }