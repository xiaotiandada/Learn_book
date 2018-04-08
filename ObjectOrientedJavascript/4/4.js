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

//4.1
//			var myarr = ['red','blue','yellow','purple']
//			myarr
//			["red", "blue", "yellow", "purple"]
//			myarr[0]
//			"red"
//			myarr[3]
//			"purple"

//			var hero = {
//				breed: 'Turtle',
//				occupation: 'Ninja'
//			};
//			
//			var hero = {occupation: 1};
//			var hero = {"occupation": 1};
//			var hero = {'occupation': 1};
//			
//			var o = {
//				$omehing: 1,
//				'yes or no':'yes',
//				'!@#$%^&*':true
//			}

//			4.1.1
//var dog = {
//	name: 'Benji',
//	talk: function(){
//		alert('Woof, woof');
//	}
//};
//
//var a =[]
//a[0] = function(what){
//	alert(what);
//}
//a[0]('Bool!')

//4.1.2
//4.1.3
//			var hero = {
//				breed: 'Turtle',
//				occupation: 'Ninja'
//			};

//hero.breed
//"Turtle"
//hero['occupation']
//"Ninja"
//'Hair color is' +hero.hair_color
//"Hair color isundefined"

//			var book = {
//				name: 'Cathc-22',
//				published: 1961,
//				author: {
//					firstname: 'Joseph',
//					lastname: 'Heller'
//				}
//			};

//book.author.firstname
//"Joseph"
//book['author']['lastname']
//"Heller"
//book.author['lastname']
//"Heller"
//book['author'].lastname
//"Heller"

//var key = 'firstname'
//undefined
//book.author[key]
//"Joseph"

//			4.1.4
//var hero = {
//	breed : 'Turtle',
//	occupation: 'Ninja',
//	say: function(){
//		return 'I am '+ hero.occupation;
//	}
//};

//hero.say()
//"I am Ninja"

//hero.say('a','b','c')
//hero['say']()

//var method = 'say'
//undefined
//hero[method]()
//"I am Ninja"

// 4.1.5
//			var hero = {}
//			typeof hero.breed
//"undefined"
//hero.breed = 'turtle'
//"turtle"
//hero.name = 'Leonardo'
//"Leonardo"
//hero.sayName = function(){return hero.name}
//function (){return hero.name}
//hero.sayName()
//"Leonardo"
//delete hero.name
//true
//hero.sayName()
//undefined

//4.1.6
//var hero = {
//	name : 'Rafaelo',
//	sayName : function(){
//		return this.name;
//	}
//};
//
//hero.sayName()
//"Rafaelo"

//4.1.7
//function Hero(){
//	this.occupation = 'Ninjs'
//}
//var hero = new Hero()
//hero.occupation
//"Ninjs"

//function Hero(name){
//	this.name = name;
//	this.occupation = 'Ninjs';
//	this.whoAreYou =function(){
//		return "I'm "+ this.name + " and i'm " + this.occupation;
//	};
//}

//var h1 = new Hero('Michelangel')
//var h2 = new Hero('Donatello')
//h1.whoAreYou()
//"I'm Michelangel and i'm Ninjs"
//h2.whoAreYou()
//"I'm Donatello and i'm Ninjs"
//var h = Hero('Leonardo')
//undefined
//typeof h
//"undefined"

//4.1.8
//var a = 1;
//window.a
//1
//this.a
//1
//a
//1

//function Hero(name){
//	this.name = name
//}
//
//var h = Hero('Leonardo')
//typeof h
//"undefined"
//typeof h.name
//VM1585:2 Uncaught TypeError: Cannot read property 'name' of undefined(…)(anonymous function) @ VM1585:2InjectedScript._evaluateOn @ (program):878InjectedScript._evaluateAndWrap @ (program):811InjectedScript.evaluate @ (program):667
//name
//"Leonardo"
//window.name
//"Leonardo"

//var h2 = new Hero('Michelangelo')
//typeof h2
//"object"
//h2.name
//"Michelangelo"
//name
//"Leonardo"
//window.name
//"Leonardo"
//function He(name){
//	this.name = name
//}
//
//var h2 = new He('i')
//h2
//He {name: "i"}
//h2.name
//"i"
//name
//""

//parseInt('101 dalmathanls')
//101
//window.parseInt('101 dalmatians')
//101
//this.parseInt('101 dalmatians')
//101
//4.1.9
//function Hero(name){
//	this.name = name
//}

//var h2 = new Hero('Michelangelo')
//h2.constructor
//function Hero(name){
//	this.name = name
//}
//
//h3.name
//"Rafaello"

//var o = {}
//undefined
//o.constructor
//function Object() { [native code] }
//typeof o.constructor
//"function"

//4.1.10
//function Hero(){}
//function Ob(){}
//var h = new Hero()
//var ob = new Ob()
//var o = {}
//
//h instanceof Hero
//true
//h instanceof Object
//true
//o instanceof Object
//true
//h instanceof Ob
//false

//4.1.11
//function factory(name){
//	return {
//		name: name
//	}
//}
//
//var o = factory('one')

//o.name
//"one"
//o.constructor
//function Object() { [native code] }

//function C(){
//	this.a = 1
//}
//var c= new C()
//
//function C2(){
//	this.a = 1;
//	return {
//		b: 2
//	}
//}
//
//var c2 =new C2()

//c.a
//1
//typeof c2.a
//"undefined"
//c2.b
//2

//function C(){
// var this = {} // pseudo code, you cna't do this'
//	this.a = 1;
//	return this;
//}

//var original = {howmany: 1};
//var mycopy = original;

//mycopy.howmany
//1
//mycopy.howmany = 100
//100
//original.howmany
//100
//
//var original = {howmany: 100}
//var nullify = function(o){o.howmany = 0;}
//nullify(original);

//original.howmany
//0

//			4.1.13
//var fido = {breed:'dog'}
//var benji = {breed: 'dog'}

//benji === fido
//false
//benji == fido
//false

//var mydog = benji
//
//mydog === benji
//true
//mydog === fido
//false

//			4.1.4
//var benji = {name: 'benji'}
//undefined
//benji
//Object { name: "benji" }
//console.log()
//
//undefined
//console.error
//function error()

//for(var i = 0;i<5;i++){
//	console.log(i)
//}
//0
//1
//2
//3
//4

//4.2
//var o = {}

//o.constructor
//ƒ Object() { [native code] }
//o.toString()
//"[object Object]"
//o.valueOf()
//{}

//var o = new Object()
//
//o.toString()
//"[object Object]"
//alert(o)
//undefined
//alert(o.toString())
//undefined
//"An object: " + o
//"An object: [object Object]"
//o.valueOf() === o
//true

// 附录c object
//var o = new Object('something')
//undefined
//o.constructor
//ƒ String() { [native code] }
//var o = new Object(23)
//undefined
//o.constructor
//ƒ Number() { [native code] }
//var s = new String('noodles')
//undefined
//Object.prototype.custom = 1
//1
//s.custom
//1
//Object.prototype.constructor === Object
//true
//var o = new Object()
//undefined
//o.constructor === Object
//true
//var o = {prop: 1}
//undefined
//o.toString()
//"[object Object]"
//var n = new Number(255)
//undefined
//n.toString()
//"255"
//n.toString(16)
//"ff"
//navigator.language
//"zh-CN"
//var o = {}
//undefined
//typeof o.valueOf()
//"object"
//o.valueOf() === o
//true
//var n = new Number(101)
//undefined
//typeof n.valueOf()
//"number"
//n.valueOf() === n
//false
//var d = new Date()
//undefined
//typeof d.valueOf()
//"number"
//d.valueOf()
//1522722421809
//var o = {prop: 1}
//undefined
//o.hasOwnProperty('prop')
//true
//o.hasOwnProperty('toString')
//false
//o.hasOwnProperty('fromString')
//false

//var s = new String('')
//undefined
//Object.prototype.isPrototypeOf(s)
//true
//Object.prototype.isPrototypeOf(s)
//true
//String.prototype.isPrototypeOf(s)
//true
//Array.prototype.isPrototypeOf(s)
//false

//var a = [1,2,3]
//undefined
//a.propertyIsEnumerable('length')
//false
//a.propertyIsEnumerable(0)
//true

// es3
//var persion = {}
//persion.legs = 2

// es5
//var persion = {}
//Object.defineProperty(person, 'legs',{
//	value: 2,
//	writable: true,
//	configurable: true,
//	enumerable: true
//});
//
//var person = {};
//Object.defineProperty(persion,'legs',{
//	set: function(v){
//		this.value = v;
//	},
//	get: function(v){
//		return this.value;
//	},
//	configurable: true,
//	enumerable: true
//});
//
//persion.legs = 2;

//var person ={}
//undefined
//Object.defineProperty(person,'heads',{value: 1})
//{heads: 1}
//person.heads = 0
//0
//person.heads
//1
//delete person.heads
//false
//person.heads
//1
//Object.getPrototypeOf([]) === Array.prototype
//true

//var parent = {hi: 'Hello'}
//undefined
//var o = Object.create(parent,{
//	prop: {
//		value: 1
//}
//});
//undefined
//o.hi
//"Hello"
//o.prop
//1var oo = Object.create(null)
//undefined
//typeof oo.toString()
// undefined
// VM452:1 Uncaught TypeError: oo.toString is not a function

//Object.getOwnPropertyDescriptor(Object.prototype,'toString')
//{value: ƒ, writable: true, enumerable: false, configurable: true}
//configurable
//:
//true
//enumerable
//:
//false
//value
//:
//ƒ toString()
//writable
//:
//true
//__proto__
//:
//Object

//Object.getOwnPropertyNames(Object.prototype)
//(13) ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "__proto__", "toLocaleString", "custom"]

//
//var glass = Object.defineProperties({},{
//	'color' : {
//		value: 'transparent',
//		writeable: true
//	},
//	'fullness': {
//		value: 'half',
//		writable: false
//	}
//});
//
//glass.fullness
//"half"

//var deadline = {}
//undefined
//Object.isExtensible(deadline)
//true
//deadline.date = 'yesterday'
//"yesterday"
//Object.preventExtensions(deadline)
//{date: "yesterday"}
//Object.isex
//undefined
//Object.isExtensible(deadline)
//false
//deadline.date = 'today'
//"today"
//deadline.date
//"today"
//deadline.report = true
//true
//deadline.report
//undefined

//var deadline = Object.freeze({date: 'yesterday'})
//undefined
//deadline.date = 'tomorrow'
//"tomorrow"
//deadline.excuse = 'lame'
//"lame"
//deadline.date
//"yesterday"
//deadline.excuse
//undefined
//Object.isSealed(deadline)
//true
//
//Object.prototype.custom = 101
//101
//Object.getOwnPropertyNames(Object.prototype)
//(13) ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "__proto__", "toLocaleString", "custom"]
//Object.keys(Object.prototype)
//["custom"]
//var o = {own: 202}
//undefined
//o.custom
//101
//Object.keys(o)
//["own"]
//Object.prototype.customProto = 101
//101
//o.customProto
//101

// 4.2.2
// var a = new Array()

// var a = []

// a[0] = 1
// a[1] = 2
// a
// [1, 2]


// var a = new Array(1,2,'four')
// a
// [1, 2, "four"]
// var a2 = new Array(5)
// undefined
// a2
// [undefined × 5]
// typeof [1,2,3]
// "object"
// var a = [1,2,3,'four']
// undefined
// a.toString()
// "1,2,3,four"
// a.valueOf()
// [1, 2, 3, "four"]
// a.constructor
// function Array() { [native code] }

// var a = [], o = {}
// undefined
// typeof o.length
// "undefined"
// typeof a.length
// "number"
// typeof a.length
// "number"
// a.length
// 0
// a[0] = 1
// 1
// o[0] = 1
// 1
// a.prop = 2
// 2
// o.prop = 2
// 2
// a.length
// 1
// a.length = 5
// 5
// a
// [1, undefined × 4]
// a.len
// undefined
// a.length = 2
// 2
// a
// [1, undefined × 1]
// a
// [1, undefined × 1]

// var a = [3,5,1,7,'test']
// undefined
// a.push('new')
// 6
// a
// [3, 5, 1, 7, "test", "new"]
// a.pop()
// "new"
// a
// [3, 5, 1, 7, "test"]
// var b = a.sort()
// undefined
// b
// [1, 3, 5, 7, "test"]
// a === b
// true
// a.join(' is not ')
// "1 is not 3 is not 5 is not 7 is not test"
// b = a.slice(1,3)
// [3, 5]
// b = a.slice(0,1)
// [1]
// b = a.slice(0,2)
// [1, 3]
// a
// [1, 3, 5, 7, "test"]
// b = a.splice(1,2,100.101,202)
// [3, 5]
// a
// [1, 100.101, 202, 7, "test"]
// a.splice(1,3)
// [100.101, 202, 7]
// a
// [1, "test"]
// [1,2,3,4].length
// 4
// [1,2].concat([3,5],[7,11])
// [1, 2, 3, 5, 7, 11]
// [1,2,3].join()
// "1,2,3"
// [1,2,3].join('|')
// "1|2|3"
// [1,2,3].join(' is less than ')
// "1 is less than 2 is less than 3"
// var a = ['un', 'deux','trois']
// undefined
// a.pop()
// "trois"
// a
// ["un", "deux"]
// var a = []
// undefined
// a.push('zig','zag','zebra','zoo')
// 4
// var a = [1,2,3]
// undefined
// a.reverse()
// [3, 2, 1]
// a
// [3, 2, 1]
// var a = [1,2,3]
// undefined
// a.shift()
// 1
// a
// [2, 3]
// var a = ['apple','banana','js','css','orange']
// undefined
// a.slice(2,4)
// ["js", "css"]
// a
// ["apple", "banana", "js", "css", "orange"]
// function customSort(a,b){
// if(a > b) return 1;
// if(a < b) return 1;
// return 0
// }

// var a = [101,99,1,5]
// undefined
// a.sort
// function sort() { [native code] }
// a.sort(customSort)
// [1, 5, 99, 101]
// [7,6,5,9].sort(customSort)
// [5, 6, 7, 9]
// var a = ['apple','banana','js','css','orange']
// a.splice(2,2,'pear','pineapple')
// ["pear", "pineapple"]
// a
// ["apple", "banana", "pear", "pineapple", "orange"]

// var a = [1,2,3]
// undefined
// a.unshift('one','two')
// 5
// a
// ["one", "two", 1, 2, 3]
// var arraylike = {0:101, length: 1};
// typeof arraylike
// "object"
// typeof []
// "object"
// typeof arraylike.length
// "number"
// Object.prototype.toString.call([])
// "[object Array]"
// Object.prototype.toString.call(arraylike)
// "[object Object]"
// Object.prototype.toString.call([]) == "[object Array]"
// true
// Object.prototype.toString.call(arraylike) == "[object Array]"
// false
// Array.isArray([])
// true
// Array.isArray(arraylike)
// false
// var ar = ['one', 'two', 'one', 'two']
// undefined
// ar.indexOf(two)
// ar.indexOf('two')
// 1
// ar.indexOf('two',2)
// 3
// ar.indexOf('toot')
// -1
// var ar = ['one','two','one','two']
// undefined
// ar.lastIndexOf('two',2)
// 1
// ar.indexOf('toot')
// -1
// var log = console.log.bind(console)
// undefined
// var ar = ['itsy','bitsy','spider']
// undefined
// ar.forEach(log)
// VM2835:2 itsy 0 ["itsy", "bitsy", "spider"]
// VM2835:2 bitsy 1 ["itsy", "bitsy", "spider"]
// VM2835:2 spider 2 ["itsy", "bitsy", "spider"]
// undefined
// ar.forEach(console.log, console)
// VM2904:2 itsy 0 ["itsy", "bitsy", "spider"]
// VM2904:2 bitsy 1 ["itsy", "bitsy", "spider"]
// VM2904:2 spider 2 ["itsy", "bitsy", "spider"]
// undefined

// function hasEye(el, idx, ar){
// 	return el.indexOf('i') !== -1;
// }
// ['itsy','bitsy','spider'].every(hasEye)
// true
// ['eency','weency','spider'].every(hasEye)
// false
// [1,2,3].every(function(e){
// console.log(e)
// return false;
// })
// VM2996:3 1
// false
// ['itsy','bitsy','spider'].some(hasEye)
// true
// ['ttsy','bttsy','spider'].some(hasEye)
// true
// ['itsy','bitsy','spider'].filter(hasEye)
// ["itsy", "bitsy", "spider"]
// ['ttsy','bttsy','spider'].filter(hasEye)
// ["spider"]
// function uc(element, index, array){
// 	return element.toUpperCase()
// }
// ['eency','weency','spider'].map(uc)
// ["EENCY", "WEENCY", "SPIDER"]
// function sum(res, element, idx, arr){
// return res + element
// }
// [1,2,3].reduce(sum)
// 6
// [1,2,3].reduce(sum, 100)
// 106
// function concat(result_so_far,el){
// return "" + result_so_far + el
// }
// [1,2,3].reduceRight(concat)
// "321"
// function concat(result_so_far,el){
// return "" + result_so_far + el
// }
// [1,2,3].reduce(concat)
// "123"


//4.2.3
// function sum(a, b){
// 	return a + b
// }
// sum(1,2)

// var sum = function(a, b){
// 	return a + b
// }

// var sum = new Function('a','b','return a + b')

// var first = new Function(
// 	'a,b,c,d',
// 	'return arguments'
// )
// first(1,2,3,4)
// [1, 2, 3, 4]

// var second = new Function(
// 	'a,b,c',
// 	'd',
// 	'return arguments'
// )

// var third = new Function(
// 	'a',
// 	'b',
// 	'c',
// 	'd',
// 	'return arguments'
// )

// function myfunc(a){
// 	return a
// }
// myfunc.constructor
//function Function() { [native code] }

// function myfunc(a,b,c){
// 	return true
// }
// myfunc.length
// 3

// var ninja = {
// 	name : 'ninja',
// 	say: function(){
// 		return 'i am a ' + this.name
// 	}
// }
// function F(){}
// F(){}
// typeof F.prototype
// function "object"
// var baby_ninja = new F()
// undefined
// baby_ninja.name
// undefined
// F.prototype = ninja
// Object {name: "ninja"}
// baby_ninja.name
// undefined
// var baby_ninja = new F()
// undefined
// baby_ninja.name
// "ninja"
// baby_ninja.say()
// "i am a ninja"
// 4.2.3.2


// 4.4
// 1
// function F() {
//     function C() {
//         return this
//     }
//     return C()
// }
// var o = new F()
// undefined
// function F() {
//     function C() {
//         return alert(this)
//     }
//     return C()
// }
// var o = new F()
// undefined
// function F() {
//     function C() {
//         return alert(this)
//     }
//     alert(this + '1')
//     return C()
// }
// var o = new F()
// undefined

// 2
// function C(){
// this.a = 1
// return false
// }
// console.log(typeof new C()) object

// 3
// c = [1,2,[1,2]]
// (3) [1, 2, Array(2)]
// c.sort()
// (3) [1, Array(2), 2]
// c.join('--')
// "1--1,2--2"
// console.log(c)
// VM127:1 (3) [1, Array(2), 2]

// 4
var MyString = function (str) {
    var list = []
    for (var i in str) {
        list[i] = str[i]
    }

    this.list = list
    this.length = list.length
    // this.toString = toString
    // this.valueOf = valueOf
    // this.charAt = charAt
    // this.concat = concat
    // this.slice = slice
    // this.split = split
    // this.reverse = reverse
}

MyString.prototype.toString = function () {
    var a_str = ''
    for (var i = 0; i < this.list.length; i++) {
        a_str += this.list[i]
    }
    return a_str
}

MyString.prototype.valueOf = function () {
    return this.toString()
}

MyString.prototype.charAt = function (n) {
    var c_str = ''
    c_str = this.list[n]
    return c_str
}

MyString.prototype.concat = function (ch) {
    return this.toString() + ch
}

MyString.prototype.slice = function (m, n) {
    var s_str = ''
    if (n > 0) {
        for (var i = m; i < n; i++) {
            s_str += this.list[i]
        }
    } else if (n < 0) {
        var len = this.list.length
        for (var i = m; i < n + len; i++) {
            s_str += this.list[i]
        }
    }
    return s_str
}

MyString.prototype.split = function (element) {
    // for(var i = 0;i<this.list.length;i++){
    //     if(this.list[i] == element){
    //         return i
    //     }
    // }

    // var slist = []
    // slist = this.list.split(i,1)
    // return slist

    var arr = []
    var index = 0
    for (var i = 0; i < this.length; i++) {
        if (this.list[i] == element) {
            arr[arr.length] = this.slice(index, i)
            index = i + 1
        }
    }
    arr[arr.length] = this.slice(index, i)
    return arr
}

MyString.prototype.reverse = function () {
    return this.list.reverse().join('').toString()


    // for
    // var str = ''
    // for(var i = this.list.length-1;i>-1;i--){
    //     str += this.list[i] 
    //     console.log(str)
    // }
    // return str


    // var arr = this.list
    // for (var i = 0; i < arr.length/2; i++) {
    //     var item = arr[i]
    //     arr[i] = arr[arr.length-i-1]
    //     arr[arr.length-i-1] = item
    // }
    // return arr.join('').toString()

}



var s = new MyString('hello')

console.log(s.length)
console.log(s[0])
console.log(s.toString())
console.log(s.valueOf())
console.log(s.charAt(1))
console.log(s.charAt(2))
console.log(s.concat(' world!'))
console.log(s.slice(1, 3))
console.log(s.slice(0, -1))
console.log(s.split('e'))
console.log(s.split('l'))
console.log(s.reverse())


// function re(){
//     var arr = [1,2,3,4,5]
//     for (var i = 0; i < arr.length/2; i++) {
//         var item = arr[i]
//         arr[i] = arr[arr.length-i-1]
//         arr[arr.length-i-1] = item
//         // console.log(arr)
//     }
//     console.log(arr)
// }   
// re()