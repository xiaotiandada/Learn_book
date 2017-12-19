'use strict';

var buttons = document.querySelectorAll('.button');
var output = document.querySelector('#output');

var _loop = function _loop(i) {
    buttons[i].addEventListener('click', function (evt) {
        console.log(1);
        output.innerText = buttons[i].innerText;
    }, false);
};

for (var i = 0; i < buttons.length; ++i) {
    _loop(i);
}