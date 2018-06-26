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