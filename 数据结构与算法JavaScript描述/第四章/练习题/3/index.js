// 栈

function Stack(){
    this.dataStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek

    this.clear = clear
    this.length = length
}

function push(element){
    this.dataStore[this.top++] = element
}

function pop(){
    return this.dataStore[--this.top]
}
function peek(){
    return this.dataStore[this.top-1]
}

function length(){
    return this.top
}
function clear(){
    return this.top = 0
}



// 练习题3
var candy = new Stack()
candy.push('red')
candy.push('white')
candy.push('red')
candy.push('red')
candy.push('red')
candy.push('yellow')
candy.push('red')
candy.push('yellow')
candy.push('white')
candy.push('yellow')
candy.push('white')
candy.push('1')
console.log(candy.dataStore)
function checkCandy (candy, color){    
    var c = new Stack()
    for(var i = 0;i<candy.dataStore.length;++i){
        if(candy.dataStore[i] != color){
            c.push(candy.dataStore[i])
            console.log(c.dataStore)
        }
    }
    candy.dataStore.length = 0
    while(c.length() > 0){
        candy.dataStore.push(c.pop())
    }
}
checkCandy(candy, 'yellow')
console.log(candy.dataStore)
