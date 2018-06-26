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