/**
 *  
 */

/**
 *  给Fucntion.Prototype增加method方法 省略了键入Prototype几个字符
 *  符合条件时才增加方法
 */
Function.prototype.method = function(name,func){
    if(!this.prototype[name]){
        this.prototype[name] = func;        
    }
    return this;
};

/**
 *  根据数字的正负判断使用Math.ceiling 还是 Math.floor
 */
Number.method('integer',function(){
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
/**
 *  移除字符串首位空白的方法
 */
String.method('trim',function(){
    return this.replace(/^\s+|\s+$/g,'');
});
