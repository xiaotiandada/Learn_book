// 5.1

// function foo(a, b){
//     return a * b
// }
// foo.length
// 2
// foo.constructor
// Function() { [native code] }
// typeof foo.prototype
// "object"
// foo.prototype = {}
// Object {}

// function Gadget(name, color){
//     this.name = name
//     this.color = color
//     this.whatAreYou = function(){
//         return 'I am ' + this.color + ' '+ this.name
//     }
// }

// Gadget.prototype.price = 100
// Gadget.prototype.rating = 3
// Gadget.prototype.getInfo = function(){
//     return 'Rating: ' + this.rating + ', Price: ' + this.price
// }
// Gadget.prototype.get = function(what){
//     return this[what]
// }
// Gadget.prototype={
//     price: 100,
//     rating: 3
// }

// var newtoy = new Gadget('webcam','black')

// newtoy.name
// "webcam"
// newtoy.color
// "black"
// newtoy.whatAreYou()
// "I am black webcam"
// newtoy.price
// 100
// newtoy.rating
// 3
// newtoy.getInfo()
// "Rating: 3, Price: 100"
// newtoy.get('price')
// 100
// newtoy.get('color')
// "black"

// newtoy.constructor === Gadget
// true
// newtoy.constructor.prototype.rating
// 3
// newtoy.toString()
// "[object Object]"


// 5.1.4
// function Gadget(name){
//     this.name = name
// }
// Gadget.prototype.name = 'mirror'

// var toy = new Gadget('camera')
// toy.name
// "camera"
// toy.hasOwnProperty('name')
// true
// delete toy.name
// true
// delete toy.name
// true

// toy.name
// "camera"
// delete toy.name
// true
// toy.name
// "mirror"
// toy.hasOwnProperty('name')
// false
// toy.name = 'camera'
// "camera"
// toy.naem
// undefined
// toy.name
// "camera"

// toy.toString()
// "[object Object]"
// toy.hasOwnProperty('toString')
// false
// toy.constructor.hasOwnProperty('toSting')
// false
// toy.constructor.prototype.hasOwnProperty('toSting')
// false
// Object.hasOwnProperty('toString')
// false
// Object.prototype.hasOwnProperty('toString')
// true

// var params = {
//     productid : 666,
//     section: 'products'
// }

// var url = 'http://example.org/page.php?'
// var i
// var query=[]

// for(i in params){
//     query.push(i + '=' + params[i])
// }
// url+=query.join('&')
// url
// "http://example.org/page.php?productid=666&section=products"

// function Gadget(name, color){
//     this.name = name
//     this.color = color
//     this.getNamge = function(){
//         return this.name
//     }
// }

// Gadget.prototype.price = 100
// Gadget.prototype.rating = 3

// var newtoy = new Gadget('webcam','black')

// for(var prop in newtoy){
//     console.log(prop + ' = '+ newtoy[prop])
// }

// 5.js:137 name = webcam
// 5.js:137 color = black
// 5.js:137 getNamge = function (){
//         return this.name
//     }
// 5.js:137 price = 100
// 5.js:137 rating = 3
// newtoy.hasOwnProperty('name')
// true
// newtoy.hasOwnProperty('price')
// false

// for(var prop in newtoy){
//     if(newtoy.hasOwnProperty(prop)){
//         console.log(prop + ' = ' + newtoy[prop])
//     }
// }

// name = webcam
// 5.js:154 color = black
// 5.js:154 getNamge = function (){
//         return this.name
//     }

// newtoy.propertyIsEnumerable('name')
// true
// newtoy.propertyIsEnumerable('constructor')
// false
// newtoy.propertyIsEnumerable('price')
// false
// newtoy.constructor.propertyIsEnumerable('price')
// false
// newtoy.constructor.prototype.propertyIsEnumerable('price')
// true

// var monkey = {
//     hair :true,
//     feeds:'bananas',
//     breathes: 'air'
// }

// function Human(name){
//     this.name = name
// }

// Human.prototype = monkey

// var george = new Human('George')

// monkey.isPrototypeOf(george)
// true
// Object.getPrototypeOf(george).feeds
// "bananas"
// Object.getPrototypeOf(george) === monkey
// true

// var monkey = {
//     feeds : 'bananas',
//     breathes: 'air'
// }
// function Human(){}
// Human.prototype = monkey

// var developer = new Human()
// developer.feeds = 'pizza'
// developer.hacks = 'JavaScript'

// developer.hacks
// "JavaScript"
// developer.feeds
// "pizza"
// developer.breathes
// "air"
// developer.__proto__ === monkey
// true
// typeof developer.__proto__
// "object"
// typeof developer.prototype
// "undefined"
// typeof developer.constructor.prototype
// "object"