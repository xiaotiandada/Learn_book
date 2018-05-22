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





// var s = new Stack()
// s.push('one')
// s.push('two')
// s.push('three')

// console.log(s.length())

// console.log(s.peek())

// var popped = s.pop()
// console.log(popped)
// console.log(s.peek())

// s.push('four')
// console.log(s.peek())

// s.clear()
// console.log(s.length())

// console.log(s.peek())
// s.push('five')
// console.log(s.peek())

// console.log(s.length())


function mulBase(num, base){
    var s = new Stack()
    do{
        s.push(num % base)
        console.log(num % base)
        num = Math.floor(num /= base)
        console.log(num + 'num')
    } while(num > 0)

    var converted = ''
    while(s.length() > 0){
        converted += s.pop()
    }
    return converted
}


// 数制间的相互转换
// var num = 32
// var base = 2
// var newNum = mulBase(num, base)
// console.log(num + ' converted to base ' + base + ' is ' + newNum)

// num = 125
// base = 8
// var newNum = mulBase(num, base)
// console.log(num + ' converted to base ' + base + ' is ' + newNum)

// console.log(32%2)
// console.log(16%2)
// console.log(8%2)
// console.log(4%2)
// console.log(2%2)
// console.log(1%2)

// 回文

function isPalindrome(word){
    var s = new Stack()
    for(var i = 0;i<word.length;++i){
        s.push(word[i])
    }
    var rword = ''
    while(s.length() > 0){
        rword += s.pop()
    }

    if(word == rword){
        return true
    }else{
        return false
    }
}

// var word = 'hello'
// if(isPalindrome(word)){
//     console.log('true')
// }else{
//     console.log('false')
// }
// word = 'racecar'
// if(isPalindrome(word)){
//     console.log('true')
// }else{
//     console.log('false')
// }

// 回文实现
function isPalindromes(word){
    var arr = []
    for(var i = 0;i < word.length; ++i){
        arr.push(word[i])
    }
    var rword = ''
    while(arr.length > 0){
        rword += arr.pop()
    }
    if(word == rword){
        return true
    }else{
        return false
    }
}

// var word = 'hello'
// if(isPalindromes(word)){
//     console.log('是回文')
// }else{
//     console.log('不是回文')
// }
// word = 'racecar'
// if(isPalindromes(word)){
//     console.log('是回文')
// }else{
//     console.log('不是回文')
// }



// 递归
function factorial(n){
    if(n === 0){
        return 1
    }else{
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))

// 栈模拟递归

function fact(n){
    var s = new Stack()
    while( n > 1){
        s.push(n--)
    }
    var product = 1
    while(s.length() > 0){
        product *= s.pop()
    }
    return product
}

console.log(fact(5))