// 队列
function Queue(){
  this.dataStore = []
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.empty = empty
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

// 测试代码

var q = new Queue()
q.enqueue('one')
q.enqueue('two')
q.enqueue('three')
console.log(q.toString())
q.dequeue()
console.log(q.toString())

console.log(q.front())
console.log(q.back())