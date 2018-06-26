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