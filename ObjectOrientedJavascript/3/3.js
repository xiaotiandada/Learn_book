// 3.1

// function sum(a, b){
//     var c = a + b;
//     return c;
// }

// 3.1.1
// var result = sum(1,2);

// result
// 3

// 3.1.2

// sum(1)
// NaN
// sum(1,2,3,4,5)
// 3

// function args(){
//     return arguments;
// }

// args()
// Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]

// args(1,2,3,4,5,true,'ninja')
// Arguments(7) [1, 2, 3, 4, 5, true, "ninja", callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function sumOnSteroids(){
//     var i,
//         res = 0,
//         number_of_params = arguments.length;
//         for(i = 0;i < number_of_params;i++){
//             res += arguments[i];
//         }
//         return res;
// }


// sumOnSteroids(1,1,1)
// 3
// sumOnSteroids(1,2,3,4)
// 10
// sumOnSteroids(1,2,3,4,4,3,2,1)
// 20
// sumOnSteroids(5)
// 5
// sumOnSteroids()
// 0


// 3.2
// 3.2.1

// parseInt('123')
// 123
// parseInt('abc123')
// NaN
// parseInt('1abc23')
// 1
// parseInt('123abc')
// 123

// parseInt('FF',10)
// NaN

// parseInt('ff',16)
// 255
// parseInt('0377', 10)
// 377
// parseInt('0377',8)
// 255
// parseInt('377')
// 377
// ECMAScript 5移除了八进制默认表示法 
// 书上椒255 测试胡时候椒377

// parseInt('0377')
// 377
// parseInt('0x377')
// 887

// 3.2.2
// parseFloat('123')
// 123
// parseFloat('1.23')
// 1.23
// parseFloat('1.23abc.00')
// 1.23
// parseFloat('a.bc1.23')
// NaN
// parseFloat('a123.34')
// NaN
// parseFloat('12a3.34')
// 12
// parseFloat('123E-2')
// 1.23
// parseFloat(1e10)
// 10000000000
// parseFloat('1e10')
// 10000000000
// parseInt('1e10')
// 1

// 3.2.2

// isNaN(NaN)
// true
// isNaN(123)
// false
// isNaN(1.23)
// false
// isNaN(parseInt('abc123'))
// true
// isNaN('1.23')
// false
// isNaN('a1.23')
// true

// 3.2.4

// isFinite(Infinity)
// false
// isFinite(-Infinity)
// false
// isFinite(12)
// true
// isFinite(1e308)
// true
// isFinite(3e309)
// false

// 3.2.5

// var url = 'http://www.packpub.com/scr ipt.php?q=this and that';
// encodeURI(url)
// "http://www.packpub.com/scr%20ipt.php?q=this%20and%20that"
// encodeURIComponent(url)
// "http%3A%2F%2Fwww.packpub.com%2Fscr%20ipt.php%3Fq%3Dthis%20and%20that"

// 3.2.6

// eval('var ii = 2;')
// undefined
// ii
// 2

// 3.2.7
// alert('hello')

// 3.3
// var global = 1;
// function f(){
//     var local = 2;
//     global++;
//     return global;
// }

// f()
// 2
// f()
// 3
// f()
// 4
// local
// VM156:2 Uncaught ReferenceError: local is not defined(…)

// var a = 123;
// function f(){
//     alert(a);
//     var a = 1;
//     alert(a);
// }
// f();


// var a = 123;
// function f(){
//     var a;     // same as : var a = undefined;
//     alert(a);   // undefined
//     a = 1;
//     alert(a);   // 1
// }
// f();

// 函数标识记法
// var f = function(){
//     return 1;
// }

// 不长用到 这myFunc是函数的名字 而不是变量 IE 会错误的创建f和myFunc两个变量
// var f = function myFunc(){
//     return 1;
// }

// function define(){
//     return 1;
// }

// var express = function(){
//     return 1;
// }

// typeof define
// "function"
// typeof express
// "function"

// var sum = function(a, b){
//     return a + b;
// };

// var add = sum;
// typeof add
// "function"
// add(1,2)
// 3

// 3.4.1
// var f = function(a){
//     return a;
// }

// 3.4.2
// function invokeAdd(a, b){
//     return a() + b();
// }

// function one(){
//     return 1;
// }

// function two(){
//     return 2;
// }


// invokeAdd(one,two)
// 3
// invokeAdd(function(){return 1;},function(){ return 2;})
// 3
// invokeAdd(
// function(){return 1;},
// function(){return 2;}
// )
// 3
// invokeAdd(
// function(){
//   return 1;
// },
// function(){
//   return 2;
// }
// );
// 3

// 3.4.3

// function multiplyByTwo(a, b, c){
//     var i, ar = [];
//     for(i = 0;i < 3; i++){
//         ar[i] = arguments[i] * 2;
//     }
//     return ar;
// }

// function addOne(a){
//     return a + 1;
// }

// multiplyByTwo(1,2,3)
// [2, 4, 6]
// addOne(100)
// 101


// var myarr = []
// myarr = multiplyByTwo(10,20,30);

// myarr
// [20, 40, 60]

// for(var i = 0;i<3;i++){
//     myarr[i] = addOne(myarr[i])
// }
// myarr
// [21, 41, 61]


// function multiplyByTwo(a, b, c, callback){
//     var i, ar = [];
//     for(i = 0;i<3;i++){
//         ar[i] = callback(arguments[i] * 2);
//     }
//     return ar;
// }

// myarr = multiplyByTwo(1,2,3, addOne);

// myarr
// [3, 5, 7]

// myarr = multiplyByTwo(1,2,3,function(a){
//     return a + 1;
// })
// myarr
// [3, 5, 7]

// myarr = multiplyByTwo(1,2,3, function(a){
//     return a + 2;
// })

// myarr
// [4, 6, 8]

// 3.4.4

// (function(){
//     alert('boo');
// })();

// (
//     function(name){
//         alert('hello ' + name + '!');
//     }
// )('dude');

// (function(){
//     alert('boo')
// }());

// (function(){
//     alert('boo')
// })();

// var result = (function(){
//     // something complex with
//     // temporary local varibles..
//     // ...

//     // return something
// })();

// var result = function(){
//     // something complex with
//     // temporary local varibles..
//     // ...

//     // return something
// }();

// 3.4.5

// function outer(param){
//     function inner(theinput){
//         return theinput * 2;
//     }
//     return 'The result is ' + inner(param);
// }

// var outer = function(param){
//     var inner = function(theinput){
//         return theinput * 2;
//     }
//     return 'The result is ' + inner(param)
// }

// outer(2)
// "The result is 4"
// outer(4)
// "The result is 8"
// outer(16)
// "The result is 32"
// inner(16)
// VM1171:2 Uncaught ReferenceError: inner is not defined(…)

// 3.4.6

// function a(){
//     alert('A!')
//     return function(){
//         alert('B')
//     }
// }
// a()
// a()()

// 3.4.7

// function a(){
//     alert('A!')
//     return function(){
//         alert('B')
//     }
// }

// a = a()

// var a = (function(){
//     function someSetup(){
//         var setup = 'done';
//         alert('done')
//     }
//     function actualWork(){
//         alert('Work-worky')
//     }
//     someSetup();
//     return actualWork;
// }())

// 3.5.1
// var a = 1;
// function f(){
//     var b = 1;
//     return a;
// }
// f()
// 1
// b
// VM1532:2 Uncaught ReferenceError: b is not defined(…)

// var global = 1;
// function outer(){
//     var outer_local = 2;
//     function inner(){
//         var inner_local = 3;
//         return inner_local + outer_local + global;
//     }
//     return inner()
// }

// outer()
// 6


// var a  = 'global varible';
// var F = function(){
//     var b = 'local varible';
//     var N = function(){
//         var c = 'inner local';
//     };
// };

// 3.5.2.1

// var a  = 'global varible';
// var F = function(){
//     var b = 'local varible';
//     var N = function(){
//         var c = 'inner local';
//         return b;
//     };
//     return N;
// };

// var inner = F()
// undefined
// inner()
// "local varible"

// 3.5.2.2

// var inner; // placeholder
// var F = function(){
//     var b = 'local varible';
//     var N = function(){
//         return b;
//     }
//     inner = N;
// }

// F()
// undefined

// inner()
// "local varible"

// 3.5.2.3

// function F(param){
//     var N = function(){       
//         return param 
//     }
//     param++
//     return N
// }

// var inner = F(123)
// undefined
// inner()
// 124

// 3.5.2.4

// function F(){
//     var arr = [], i;
//     for(i = 0;i<3;i++){
//         arr[i] = function(){
//             return i;
//         }
//     }
//     return arr;
// }

// var arr = F()
// undefined
// arr[0]()
// 3
// arr[1]()
// 3
// arr[2]()
// 3

// function F(){
//     var arr = [],i;
//     for(i = 0;i<3;i++){
//         arr[i] = (function(x){
//             return function(){
//                 return x
//             }
//         })(i)
//     }
//     return arr
// }

// var arr = F()
// undefined
// arr[0]()
// 0
// arr[1]()
// 1
// arr[2]()
// 2

// function F(){
//     function binder(x){
//         return function(){
//             return x
//         }
//     }

//     var arr = [],i;

//     for(i = 0;i<3;i++){
//         arr[i] = binder(i)
//     }
//     return arr
// }

// var arr = F()
// undefined
// arr[1]()
// 1
// arr[0]()
// 0
// arr[2]()
// 2