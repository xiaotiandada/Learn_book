// // 2.6.1
// var result = '', a = 3;
// if(a > 2){
//     result = 'a is greater than 2';
// }
//
// // 2.6.2
// if (a > 2){
//     result = 'a is greater than 2';
// } else {
//     result = 'a is Not greater than 2';
// }
//
// if(a > 2 || a < -2){
//     result = ' a is not between - 2 an 2';
// } else if(a === 0 && b === 0){
//     result = 'both a and b are zeros';
// } else if(a === b){
//     result = 'a and b are equal';
// } else {
//     result = 'I give up';
// }
//
// if (a === 1){
//     if (b === 2){
//         result = 'a is 1 and b is 2';
//     } else {
//         result = 'a is 1 but b is definitery not 2';
//     }
// } else {
//     result = 'a is not 1, no idea about b';
// }


// 2.6.3
// {
//     var a = 1;
//     var b = 3;
//     var c, d;
//     {
//         c = a + b;
//         {
//             d = a - b;
//         }
//     }
// }

// 2.6.4
// var result = '';
// if(somevar){
//     result = 'yes'
// }

// var result = '';
// if (typeof somevar !== 'undefined'){
//     result = 'yes';
// }
//
// // console.log(typeof somevar)  // undefined
// // console.log(result) // ''
//
// var somevar;
// if(typeof somevar !== 'undefined'){
//     result = 'yes';
// }
// somevar = undefined;
// if (typeof somevar !== 'undefined'){
//     result = 'yes'
// }
//
// somevar = 123;
// if (typeof somevar !== 'undefined'){
//     result = 'yes';
// }

// 2.6.4.1
// var a = 1;
// var result = '';
// if (a === 1){
//     result = 'a is one';
// } else {
//     result = 'a is not one';
// }
//
// var a = a;
// var result = (a === 1) ? 'a is one' : 'a is not one';

// var a = 123;
// a = a > 100 ? 100 : a < 50 ? 50 : a;

// var a = 123;
// a = (a > 100 ? 100 : a < 50) ? 50 : a;

// var a = 123;
// a = a > 100 ? 100 : (a < 50 ? 50 : a);

// 2.6.4.2
// var a = '1';
// var result = '';
// switch (a){
//     case 1:
//         result = 'Numver 1';
//         break;
//     case '1':
//         result = 'string 1';
//         break;
//     default:
//         result = 'i don\'t know';
//         break;
// }

// 2.6.5

//2.6.5.1
// var i = 0;
// while (i < 10){
//     i ++
// }
// 2.6.5.2
// var i = 0;
// do {
//     i++;
// }while (i < 100)

// 2.6.5.3
// var punishment = '';
// for(var i = 0;i< 100;i++){
//     punishment += 'I will never do this agin,';
// }

// for (var i = 0; punishment = '',i < 100;i++){
//     punishment+='I will never do this again,';
// }

// for(
//     var i = 0, punishment = '';
//     i < 100;
//     i++, punishment += 'i will never do this again,'){
//     // nothing here
// }

// var i = 0,punishment = '';
// for(;;){
//     punishment += 'i will never do this again,';
//     if(++i == 100){
//         break;
//     }
// }

// var res = '\n';
// for(var i = 0;i<10;i++){
//     for(var j = 0;j<10;j++){
//         res += '* ';
//     }
//     res += '\n';
// }

// "
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// "

// var res = '\n', i, j;
// for(i = 1; i<=7;i++){
//     for(j = 1; j <= 15;j++){
//         res += (i * j) % 8 ? ' ' : '*';
//     }
//     res += '\n';
// }

// 2.6.5.4 
// example for information only
//for-in loops are used for objects
// regular for is better suited for arrays

// var a = ['a','b','c','x','y','z'];
// var result = '\n';

// for(var i in a){
//     result += 'index: '+ i + ', value:' + a[i] + '\n';
// }

// "
// index: 0, value:a
// index: 1, value:b
// index: 2, value:c
// index: 3, value:x
// index: 4, value:y
// index: 5, value:z
// "


// 2.7 

// beginning of line
// var a = 1; // anywhere onthe line

/** multi-line comment on a single line */

/* 
conmment that spans seversal lines
*/


// 2.9

// var a;
// typeof a;  // undefined

// var s = 'ls'; s++;

// console.log(!!"false")
// console.log(!!undefined)
// console.log(typeof -Infinity)
// console.log(10 % "0")
// console.log(undefined == null)
// console.log(false === "")
// console.log(typeof "2E+2")

// a = 3e+3; a++;

// true
// script.js:221 false
// script.js:222 number
// script.js:223 NaN
// script.js:224 true
// script.js:225 false
// script.js:226 string
// a
// 3001
// var v = 100
// var v = null
// var v = 0
// v = v || 10 // 10 100 10 10

// var sum = '\n';
// for(var i = 1;i<=9;i++){
//     for(var j = 1;j<=i;j++){
//         sum += '['+j+'*'+i+'='+i*j+']';
//     }
//     sum+='\n';
// }

// console.log(sum)

// [1*1=1]
// [1*2=2][2*2=4]
// [1*3=3][2*3=6][3*3=9]
// [1*4=4][2*4=8][3*4=12][4*4=16]
// [1*5=5][2*5=10][3*5=15][4*5=20][5*5=25]
// [1*6=6][2*6=12][3*6=18][4*6=24][5*6=30][6*6=36]
// [1*7=7][2*7=14][3*7=21][4*7=28][5*7=35][6*7=42][7*7=49]
// [1*8=8][2*8=16][3*8=24][4*8=32][5*8=40][6*8=48][7*8=56][8*8=64]
// [1*9=9][2*9=18][3*9=27][4*9=36][5*9=45][6*9=54][7*9=63][8*9=72][9*9=81]