var buttons = document.querySelectorAll('.button');
var output = document.querySelector('#output');


for(var i = 0;i<buttons.length;++i){
    (function(i){
        buttons[i].addEventListener('click',function(evt){
            console.log(1);
            output.innerText = buttons[i].innerText
        },false)
    })(i);

    // 因为计数器i存在于上一层作用域中  在引用全部被接触之前 他都不会被垃圾回收机器所标记并清除 而一直保持着循环结束后的值
    // 在用户每一次单击任何一个按钮时 触发的响应函数中对计数器i的引用所获得的值是一样的
}