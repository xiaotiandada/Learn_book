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

// function declaration
// function sum(a, b){
// 	return a + b
// }
// function expression
// var sum = function(a,b){
// 	return a + b
// }
// var sum = new Function('a','b','return a + b');


// function myfunct(a,b,c){
// 	return a + b + c
// }
// myfunct.toString()
// "function myfunct(a,b,c){
// 	return a + b + c
// }"
// parseInt.toString()
// "function parseInt() { [native code] }"
// 4.2.3.3
// var some_obj = {
// 	name: 'Ninja',
// 	say: function(who){
// 		return 'Haya ' + who + ', i am a ' + this.name
// 	}
// }
// some_obj.say('Dude')
// "Haya Dude, i am a Ninja"
// var my_obj = {name: 'Scripting gurn'}
// undefined
// some_obj.say.call(my_obj,'Dude')
// "Haya Dude, i am a Scripting gurn"
// some_obj.someMethod.call(my_obj,'a','b','c')
// some_obj.someMethod.apply(my_obj,['a','b','c'])
// some_obj.someMethod.call(my_obj,['dude'])
// 4.2.3.4
// function f(){
// 	return arguments
// }
// f(1,2,3)

// function f(){
// 	var args = [].slice.call(arguments)
// 	return args.reverse()
// }
// f(1,2,3,4)
// [4, 3, 2, 1]
// 4.2.3.5
// Object.prototype.toString.call({})
// "[object Object]"
// Object.prototype.toString.call([])
// "[object Array]"

// [1,2,3].toString()
// "1,2,3"
// Array.prototype.toString.call([1,2,3])
// "1,2,3"


// var toStr = Object.prototype.toString
// undefined
// (function(){
// return toStr.call(arguments)
// }())
// "[object Arguments]"
// toStr.call(document.body)
// "[object HTMLBodyElement]"

// 4.2.4
// var b = new Boolean()
// typeof b
// "object"
// typeof b.valueOf()
// "boolean"
// b.valueOf()
// false
// Boolean('test')
// true
// Boolean('')
// false
// Boolean({})
// true
// Boolean(new Boolean(false))
// true

// 4.2.5
// var n = Number('12.12')
// undefined
// n
// 12.12
// typeof n
// "number"
// var n = new Number('12.12')
// undefined
// typeof n
// "object"
// Number.MAX_SAFE_INTEGER
// 9007199254740991
// Number.MIN_SAFE_INTEGER
// -9007199254740991
// Number.POSITIVE_INFINITY
// Infinity
// Number.NEGATIVE_INFINITY
// -Infinity
// Number.NaN
// NaN
// var n = new Number(123.456)
// undefined
// n.toFixed(1)
// "123.5"
// (123456).toExponential()
// "1.23456e+5"
// var n = new Number(255)
// undefined
// n.toString()
// "255"
// n.toString(10)
// "255"
// n.toString(16)
// "ff"
// n.toString(2)
// "11111111"
// n.toString(10)
// "255"
// 4.2.6
// var primitive = 'hello'
// undefined
// typeof primitive
// "string"
// var obj = new String('world')
// undefined
// typeof obj
// "object"
// obj[0]
// "w"
// obj[4]
// "d"
// obj.length
// 5
// obj.valueOf()
// "world"
// obj.toString
// toString() { [native code] }
// obj.toString()
// "world"
// obj+ ''
// "world"
// "potato".lengthy
// undefined
// "potato".length
// 6
// 'tomato'[0]
// "t"
// 'potato'["potatoes".length-1]
// undefined
// "potato"["potatoes".length-1]
// undefined
// "potato"["potatos".length-1]
// undefined
// "potato"["potats".length-1]
// "o"
// Boolean("")
// false
// Boolean(new String(""))
// true
// String(1)
// "1"
// String({p:1})
// "[object Object]"
// String([1,2,3])
// "1,2,3"
// String([1,2,3]) === [1,2,3].toString()
// // true
// var s = new String('Couch potato')
// undefined
// s.toUpperCase()
// "COUCH POTATO"
// s.toLocaleLowerCase
// toLocaleLowerCase() { [native code] }
// s.toLocaleLowerCase()
// "couch potato"
// s.charAt(0)
// "C"
// s[0]
// "C"
// s.charAt(101)
// ""
// s.indexOf('o')
// 1
// s.indexOf('o',2)
// 7
// s.lastIndexOf('o')
// 11
// s.indexOf('Counch')
// -1
// s.indexOf('Couch')
// 0
// s.toLocaleLowerCase().indexOf('couch')
// 0
// 4.2.7
// Math.PI
// 3.141592653589793
// Math.SQRT1_2
// 0.7071067811865476
// Math.E
// 2.718281828459045
// Math.LN2
// 0.6931471805599453
// Math.LN10
// 2.302585092994046
// Math.random()
// 0.5285871369357678
// 10 * Math.random()
// 8.938729797236402
// 8 * Math.random() + 2
// 7.1544552575041465
// Math.round(Math.random())
// 1
// Math.pow(2,8)
// 256
// Math.sqrt(9)
// 3

// 
// 4.2.8
// new Date()
// Wed Apr 04 2018 15:14:29 GMT+0800 (中国标准时间)
// typeof Date()
// "string"
// typeof new Date()
// "object"
// var d = enw Date(2015,1,1)
// VM3119:2 Uncaught SyntaxError: Unexpected identifier(…)InjectedScript._evaluateOn @ (program):878InjectedScript._evaluateAndWrap @ (program):811InjectedScript.evaluate @ (program):667
// var d = new Date(2015,1,1)
// undefined
// d.toString()
// "Sun Feb 01 2015 00:00:00 GMT+0800 (中国标准时间)"
// d.setMonth(2)
// 1425139200000
// d.toString()
// "Sun Mar 01 2015 00:00:00 GMT+0800 (中国标准时间)"
// d.getMonth()
// 2
// Date.parse('jan 11, 2048')
// 2462284800000
// Date.parse('jan 11, 2018')
// 1515600000000

// var stats = [0,0,0,0,0,0,0]
// for(var i = 2016;i<3016;i++){
// 	stats[new Date(i , 5, 20).getDay()]++
// }
// stats
// [140, 146, 140, 145, 142, 142, 145]
// 4.2.9
// var re = new RegExp('j.*t')
// var re = /j.*t/

// var re = new RegExp('t.*t','gmi')
// re.global
// true
// re.global = false
// false
// re.global
// true
// var re = /t.*t/ig
// undefined
// re.global
// true

// /j.*t/.test('Javascript')
// false
// /j.*t/i.test('Javascript')
// true
// /j.*t/i.exec('Javascript')
// ["Javascript"]

// var s = new String('HelloJavaSciptWorld')
// s.match(/a/)
// ["a"]
// s.match(/a/g)
// ["a", "a"]
// s.match(/j.*a/i)
// ["Java"]
// s.search(/j.*a/i)
// 5
// s.replace(/[A-Z]/g, '')
// "elloavaciptorld"
// s.replace(/[A-Z]/, '')
// "elloJavaSciptWorld"
// s.replace(/[A-Z]/, '_$&')
// "_HelloJavaSciptWorld"
// s.replace(/[A-Z]/g, '_$&')
// "_Hello_Java_Scipt_World"
// s.replace(/[A-Z]/g, '_$1')
// "_$1ello_$1ava_$1cipt_$1orld"
// s.replace(/([A-Z])/g, '_$1')
// "_Hello_Java_Scipt_World"

// var email = 'stoyan@phpied.com'
// var username = email.replace(/(.*)@.*/, '$1')
// username
// "stoyan"

// function replaceCallback(match){
// 	return '_' + match.toLowerCase()
// }
// s.replace(/[A-Z]/g, replaceCallback)
// "_hello_java_scipt_world"

// var glob
// something@something.something
// var re = /(.*)@(.*)\.(.*)/

// var callback = function(){
// 	glob = arguments
// 	return arguments[1] + ' at ' + arguments[2] + ' dot ' + arguments[3]
// }

// 'stoyan@phpied.com'.replace(re, callback)
// "stoyan at phpied dot com"

// 'stoyan@phpied.com'.replace(re, callback)
// "stoyan at phpied dot com"
// glob
// ["stoyan@phpied.com", "stoyan", "phpied", "com", 0, "stoyan@phpied.com"]
// var csv = 'one, tow,three ,four'
// undefined
// csv.split(',')
// ["one", " tow", "three ", "four"]
// csv.split(/\s*,\s*/)
// ["one", "tow", "three", "four"]

// 4.2.10

// iDontExist()
// VM757:2 Uncaught ReferenceError: iDontExist is not defined(…)

// try{
// 	iDontExist()
// } catch(e){
// 	// do nothing
// 	alert(e.name + ' : ' + e.message)
// } finally{
// 	alert('Finally!')
// }

// try{
// 	var total = maybeExiste()
// 	if(total === 0){
// 		throw new Error('Division by zero!')
// 	} else {
// 		alert(50 / total)
// 	}
// }catch(e){
// 	alert(e.name + ' ： ' + e.message)
// } finally{
// 	alert('Finally!')
// }

// throw{
// 	name: 'Myerror',
// 	message: 'OMG! something terrible has happed'
// }

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