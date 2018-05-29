### 数据结构与算法JavaScript描述

---

### 第五章

---
``` bash

# Queue类

function Queue(){
  this.dataStore = []
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.empty = empty
  this.count = count
}

function enqueue(element){
  this.dataStore.push(element)
}

function dequeue(){
  return this.dataStore.shift()
}

function front(){
  return this.dataStore[0]
}

function back(){
  return this.dataStore[this.dataStore.length-1]
}

function toString(){
  var retStr = ''
  for(var i = 0;i<this.dataStore.length;++i){
    retStr += this.dataStore[i] + '\n'
  }
  return retStr
}

function empty(){
  if(this.dataStore.length == 0){
    return true
  } else {
    return false
  }
}

function count(){
  return this.dataStore.length
}

```

``` bash

# Queue类

function Queue(){
  this.dataStore = []
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.empty = empty
  this.count = count
}

function enqueue(element){
  this.dataStore.push(element)
}

function dequeue(){
  return this.dataStore.shift()
}

function front(){
  return this.dataStore[0]
}

function back(){
  return this.dataStore[this.dataStore.length-1]
}

function toString(){
  var retStr = ''
  for(var i = 0;i<this.dataStore.length;++i){
    retStr += this.dataStore[i] + '\n'
  }
  return retStr
}

function empty(){
  if(this.dataStore.length == 0){
    return true
  } else {
    return false
  }
}

function count(){
  return this.dataStore.length
}

```

```bash

# 节省篇幅　抽出Deueue类

# Deueue
function Deueue() {
  this.dataStore = []
  this.enqueue = enqueue
  this.frontEnqueue = frontEnqueue
  this.dequeue = dequeue
  this.backDequeue = backDequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.empty = empty
}

function enqueue(element) { 
  this.dataStore.push(element)
}

# 新增加的
function frontEnqueue(element) { 
  this.dataStore.unshift(element)
}

function dequeue() { 
  return this.dataStore.shift()
}

# 新增加的
function backDequeue() {
  return this.dataStore.pop()
}

function front() {
  return this.dataStore[0]
}

function back() { 
  return this.dataStore[this.dataStore.length - 1]
}

function toString() {
  var retStr = ''
  for (var i = 0; i < this.dataStore.length; ++i) { 
      retStr += this.dataStore[i] + '\n'
  }
  return retStr
}

function empty() {
  if (this.dataStore.length == 0) {
      return true
  } else { 
      return false
  }
}
```

第一题

１. 修改Queue　类　形成一个Dueue类　这是一个类似队列类似的数据结构　允许从队列两端添加和删除元素　因此也叫双向队列　写一段测试程序测试该类

``` bash


# 测试代码

var q = new Deueue()
q.enqueue('one')
q.enqueue('two')
q.enqueue('three')

q.frontEnqueue('four')


console.log(q.toString())

q.dequeue()

console.log(q.toString())

q.backDequeue()

console.log(q.toString())


```

--- 

２. 第二题　使用Deque类来判断一个给定的单词是否为回文


``` bash

# 测试代码


function isPalindrmoe(word) {
  var words = new Deueue()

  for (var i = 0; i < word.length; ++i) { 
      words.enqueue(word[i])
  }

  var resStr = ''

  while (words.dataStore.length > 0) { 
      resStr += words.backDequeue()
  }

  if (word === resStr) {
      console.log('是回文')
  } else { 
      console.log('不是回文')
  }
}


isPalindrmoe('racecar')
isPalindrmoe('hello')

```