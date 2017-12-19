// const arr1 = [];
// for (var i = 0; i < 3; ++i) {
//     arr1.push(() => i)
// }

// const arr2 = arr1.map(x => x());

// const arr3 = [];

// for (let i = 0; i < 3; ++i) {
//     arr3.push(() => i)
// }
// const arr4 = arr3.map(x => x())

// console.log('var' + arr1.join(', '))
// console.log('var' + arr2.join(', '))
// console.log('var' + arr3.join(', '))
// console.log('var' + arr4.join(', '))


'use strict';

var arr1 = [];
for (var i = 0; i < 3; ++i) {
    arr1.push(function () {
        return i;
    });
}

var arr2 = arr1.map(function (x) {
    return x();
});

var arr3 = [];

var _loop = function _loop(_i) {
    arr3.push(function () {
        return _i;
    });
};

for (var _i = 0; _i < 3; ++_i) {
    _loop(_i);
}
var arr4 = arr3.map(function (x) {
    return x();
});

console.log('var' + arr1.join(', '));
console.log('var' + arr2.join(', '));
console.log('var' + arr3.join(', '));
console.log('var' + arr4.join(', '));