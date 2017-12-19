// Object Literals  对象字面量
var empty_obj = {}
var stoge = {
    'first-name':'Jerome',
    'last-name' : 'Howard'
};

var flight = {
    airline : 'Oceanic',
    number : 815,
    departure : {
        IATA : 'SYD',
        time : '2004-09-22 14:55',
        city : 'Sydney'
    },
    arrival:{
        IATA : 'LAX',
        time : '2004-09-23 10:42',
        city : 'Los Angeles'
    }
};

// Retrieval  检索

var je = stoge['first-name']
//console.log(je)

var syd= flight.departure.IATA
//console.log(syd)
// 优先使用 . 表示法 因为紧凑性而且可读性好

stoge['middle-nam']    // undefined
stoge.status            // undefined
stoge['FIRST-NAME']    // undefined

// || 运算符可以用来填充默认值
var middle = stoge['middle-name'] || '(none)'
var status = flight.status || 'unknown'

// 从undefin取值导致 typeerror错误 通过 && 运算符避免错误

//console.log( flight.equipment );   // undefined
// console.log( flight.equipment.model ); // throw 'TypeError'

// threeChapter.js:43 Uncaught TypeError: Cannot read property 'model' of undefined
// at threeChapter.js:43

//console.log( flight.equipment && flight.equipment.model ); // undefined



// Update 更新

stoge['first-name'] = 'Jerome1'

// console.log( stoge['first-name'] );

stoge.nickname = 'Curly'
flight.equipment = {
    model : 'Boeing 777'
};
flight.status = 'overdue'

// console.log( stoge.nickname,flight.equipment.model,flight,status );

// Reference  引用

var x = stoge;
x.nickname = 'Curly'
var nick = stoge.nickname

// console.log( nick === 'Curly');  // true

// 因为x 和 stoge 是指向同一个对象的引用 所以nick 为 curly

var a = {}, b = {}, c = {}
// console.log( a === b);   // false
// console.log( a === c);    //false
// console.log( b === c);    /false

a = b = c ={}

// console.log( a === b);   // true
// console.log( a === c);    //true
// console.log( b === c);    //true

// a,b,c 都引用同一个空对象


// Prototype 原型

if( typeof Object.beget !== 'function' ){
    Object.create = function(o){
        var F = function(){};
        F.prototype =  o;
        return new F();
    }
}

var another_stooge= Object.create(stoge);
// console.log( another_stooge );

// F {}
// __proto__
// :
// first-name
// :
// "Jerome1"
// last-name
// :
// "Howard"
// nickname
// :
// "Curly"
// __proto__
// :
// Object

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

// console.log( another_stooge );

// F {first-name: "Harry", middle-name: "Moses", nickname: "Moe"}
// first-name
// :
// "Harry"
// middle-name
// :
// "Moses"
// nickname
// :
// "Moe"
// __proto__
// :
// Object


stoge.profession = 'actor'
// console.log( another_stooge.profession );  // 'actor;

// Reflection 反射
// console.log([
//     typeof flight.number, // 'number'
//     typeof flight.status, // 'string'
//     typeof flight.arrival, // object
//     typeof flight.manifest, //undefined
//     typeof flight.toString,  // function
//     typeof flight.constructor,   // function
//     flight.hasOwnProperty('number'),  // true
//     flight.hasOwnProperty('constructor')  //false
// ])

// Enumeration枚举
// var name
// for(name in another_stooge){
//     if(typeof another_stooge[name] !== 'function'){
//         document.write(name + ': '+another_stooge[name]+'</br>')
//     }
// }

// 属性名出现的顺序是不确定的 想要确保属性以特定的顺序出现 最好的办法是完全避免使用 for in语句 而是创建一个数组
// var i
// var properties = [
//     'first-name',
//     'middle-name',
//     'last-name',
//     'profession'
// ]
// for(i=0;i<properties.length;i+=1){
//     document.write(properties[i]+':'+another_stooge[properties[i]]+'</br>')
// }

//通过for得到想要的属性 而不用担心可能发掘出原型链中的属性 并且按照正确的顺序取得了他们的值

// Delete 删除

// console.log( another_stooge.nickname ); // moe
// 删除 anther_stooge 的 nickname 属性 从而暴露出原型的nickname属性
delete another_stooge.nickname
// console.log( another_stooge.nickname ); // curly


// Global Abatement  减少全局污染
// javascript 可以很随意的定义全局变量应用的所有资源 但 全局变量削弱了程序的灵活性 应该避免使用
// 最小化使用全局的方法之一就是为你的应用只创建一个唯一的全局变量
// var MYAPP = {}
// MYAPP.stooge = {
//     'first-name' : 'Joe',
//     'last-name' : 'Howrd'
// }
// MYAPP.flight = {
//     airline : 'Oceanic',
//     number:815,
//     departure : {
//         IATA:'SYD',
//         time:'2004-09-22 14:55',
//         ciry : 'Sydney'
//     },
//     arrival : {
//         IATA:'LAX',
//         time:'2004-09-23 10:42',
//         ciry:'Los Angeles'
//     }
// }

