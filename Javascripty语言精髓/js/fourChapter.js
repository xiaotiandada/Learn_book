// Functions 函数

// Function Object  函数对象

// Function Literal 对象字面量

// 创建一个add变量 并用来把两个数字相加的函数赋值给它

var add = function(a,b){
    return a + b
}
// console.log(add(1,2));


// Invocation 调用

// The Method Invocation Pattern  方法调用模式

// 创建 myObject 对象 有一个 value属性 和一个 increment 方法
// increment 方法接受一个可选的参数 如果参数不是数字 那么 默认使用数字1

var myObject = {
    value : 0,
    increment : function(inc){
        this.value += typeof inc === 'number'?inc:1
    }
}

myObject.increment()
// console.log( myObject.value); // 1

myObject.increment('one')
// console.log(myObject.value); // 2

myObject.increment(2)
// console.log(myObject.value); // 4

// The Function Invocation Pattern 函数调用模式


// 给 myObject 增加一个 double 方法
myObject.double  = function(){
    var that = this
    console.log(that,this)  // 绑定外部函数的变量 指向myObject
    var helper = function(){
        console.log(this) // 全局this
        that.value = add (that.value,that.value)
        console.log(that) // 指向myObject
    }
    helper()
}



myObject.double()
// console.log(myObject.value) // 8 上面已经到 6


// The constructor Invocation Pattern  构造器调用模式

// 创建一个名为 Quo的构造函数 构造一个带有status属性对象 
var Quo = function(string){
    this.status = string
}
// 给 Quo 的所有实例提供一个名为 get_status 的 公共方法

Quo.prototype.get_status = function(){
    return this.status   
}

// 构造一个Quo实例
var myQuo = new Quo('confused')

console.log(myQuo.get_status());

// The Apply Invocation Pattern  apply调用模式
// apply 方法让我们构建一个参数数组传递给调用函数 允许选择this的值
// apple 方法接收两个参数 第一个是要绑定给this的值 第二个就是一个参数数组

// 构造一个包含两个数字的数组,并将他们相加

var array = [3,4]
var sum = add.apply(null,array)   

console.log(sum) // 7

// 构造一个包含 status 成员对象

var statusObject = {
    status : 'A-OK'
}

// statusObject 并没有继承自 Quo.Prototype 但我们可以在 statusObject 上调
// 用get_status 方法 尽管 statusObject 并没有一个名为 get_status 的方法

var status = Quo.prototype.get_status.apply(statusObject)  

console.log(status)   // status 值为 'A-OK'


// Arguments 参数
// 构造一个将大量的值相加的函数
// 注意该函数内部定义的变量 sum 不会与函数外部定义的sum 产生冲突
// 该函数只会看到内部的那个变量

var sum = function(){
    var i, sum =0
    for(i =0;i<arguments.length;i+=1){
        sum += arguments[i]
    }
    return sum
}
console.log(sum(4,8,15,16,23,42));   // 108


var arr = [4,8,15,16,23,42]
var sums = function(arr){
    var sum = 0
    for(var i =0;i<arr.length;i++){
        sum += arr[i]
        console.log(arr[i])
    }
    return sum
}
console.log(sums(arr))

// Return 返回

// Exceptions 异常
var add = function(a ,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw{
            name : 'TypeError',
            message : 'add needs numbers'
        }
    }
    return a + b
}
// console.log(add(1,2))

var try_it = function(){
    try{
        add('seven')
    }catch(e){
        console.log(e.name + ':'+e.message);
    }
}
try_it()


// console.log((-10/3).integer())
// console.log((10/3).integer())
// console.log((-10/3))
// console.log((10/3))

// console.log('"'+' neat 1   '.trim()+'"');

var hanoi = function(disc,src,aux,dst){
    if(disc > 0){
        // console.log(disc+'0');        
        hanoi(disc - 1,src,dst,aux);
        // console.log(disc+'1');
        console.log('Move disc '+disc+' from '+src+' to '+dst);
        hanoi(disc - 1,aux,src,dst);
        // console.log(disc+'2');        
    }
};
hanoi(3,'Scr','Aux','Dst');

// Move disc 1 from Scr to Dst
// fourChapter.js:163 Move disc 2 from Scr to Aux
// fourChapter.js:163 Move disc 1 from Dst to Aux
// fourChapter.js:163 Move disc 3 from Scr to Dst
// fourChapter.js:163 Move disc 1 from Aux to Scr
// fourChapter.js:163 Move disc 2 from Aux to Dst
// fourChapter.js:163 Move disc 1 from Scr to Dst

/**
 * 定义访问walk_the_DOM函数  它从莫个指定节点开始,按HTML源码中的顺序访问改树的每个节点
 * 他会调用一个函数 并依次传递每个节点给他 walk_the_DOM调用自身去处理每一个子节点
 * @param {*} node 
 * @param {*} func 
 */
var walk_the_DOM = function walk (node, func){
    func(node);
    node = node.firstChild;
    while(node){
        walk (node, func);
        node = node.nextSibling;
    }
};

/**
 * 定义 getELementsByAttribute函数 它以一个属性名字符串和一个可选的匹配值作为参数
 * 它调用 walk_the_DOM 传递一个查找节点属性名的函数作为参数 匹配的节点会累加到一个结果数组中
 * @param {*} arr 
 * @param {*} value 
 */
var getElementsByAttribute = function(arr, value){
    var results = [];
    walk_the_DOM(document.body,function(node){
        var actual = node.nodeType === 1 && node.getAttribute(arr);
        if( typeof actual=== 'string' && ( actual === value || typeof value !== 'string' ) ){
            results.push(node);
        }
    });
    return results;
};

/**
 * 构建一个带尾递归的函数  因为它没有返回自身调用的结果 所以他是 尾递归
 * Javascript 当前没有对这种形式的递归做出优化
 * 尾递归 tail recursion tail-end recursion
 * @param {*} i 
 * @param {*} a 
 */
var factorial = function factorial(i, a){
    a = a || 1;
    if( i < 2){
        return a;
    }
    return factorial(i -1, a * i);
};


document.writeln(factorial(4)) // 24


// scope  作用域

var foo = function(){
    var a = 3,b =5;
    console.log(a,b);
    var bar = function(){
        var b = 7,c=11;
        a += b+c;
        console.log(a,b,c);        
    }
    bar();
    console.log(a,b);    
}
foo()

// closure 闭包

var myObject = (function(){
    var value = 0;

    return {
        increment : function(inc){
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue:function(){
            return value;
        }
    };
}());


/**
 * 创建一个名为 quo的构造函数
 * 它构造出带有  get_status方法和 status 私有属性的一个对象
 * @param {*} status 
 */
var quo = function(status){
    return {
        get_status:function(){
            return status;
        }
    };
};

/**
 * 构造一个quo的实例
 */
var myQuo = quo('amazed');
document.writeln(myQuo.get_status());


// 定义一个函数 它设置了一个DOM节点为黄色  然后把他渐变为白色
var fade = function(node){
    var level = 1;
    var step = function(){
        var hex = level.toString(16);
        node.style.backgroundColor = '#ffff' + hex + hex;
        if(level < 15){
            level += 1;
            setTimeout(step,100);
        }
    };
    setTimeout(step,100)
};

fade(document.body);

var add_the_handlers = function(nodes){
    var helper = function(i){
        return function(e){
            console.log(i);
        }
    }

    var i;
    for(i=0;i<nodes.length;i+=1){
        nodes[i].onclick=helper(i);
    }
}

var add_the_handlerss= function(){
    var div = document.getElementsByClassName('header');
    var helpers = function(i){
        return function(e){
            console.log(i);
        }
    }
    for(var i =0;i<div.length;++i){
        div[i].onclick = helpers(i);
    }
   
}
add_the_handlerss()
// 事件处理函数绑定了变量i本身 而不是函数在构造时的变量i的值
// 避免在循环中创建函数 可能会带来无所谓的计算 还会引起混淆
// 在循环之外创建一个辅助函数  让这个辅助函数再返回一个绑定了当前i的值的函数