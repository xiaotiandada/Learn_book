# JavaScript设计模式

> 添加方法的功能方法

``` js
Function.prototype.addMethod  = function(name, fn) {
    this[name] = fn
}

// var methods = function(){}
var methods = new Function()

methods.addMethod('checkName', function(){
    console.log('checkName');
})

methods.addMethod('checkEmail', function(){
    console.log('checkEmail');
})

methods.checkName()
methods.checkEmail()
```

> 链式调用

``` js
Function.prototype.addMethod  = function(name, fn) {
    this[name] = fn
    return this
}

var methods = function(){}
// var methods = new Function()

methods.addMethod('checkName', function(){
    console.log('checkName1');
    return this
}).addMethod('checkEmail', function(){
    console.log('checkEmail1');
    return this
})

methods.checkName().checkEmail()
```

> 类式调用

``` js
Function.prototype.addMethod  = function(name, fn) {
    this.prototype[name] = fn
    return this
}

var Methods = function(){}

Methods.addMethod('checkName', function(){
    console.log('checkName2');
    return this
}).addMethod('checkEmail', function(){
    console.log('checkEmail2');
    return this
})

var m = new Methods()
m.checkName().checkEmail()
```