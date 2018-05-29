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

function frontEnqueue(element) { 
  this.dataStore.unshift(element)
}

function dequeue() { 
  return this.dataStore.shift()
}

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

// ceshi

// 1

//var q = new Deueue()
//q.enqueue('one')
//q.enqueue('two')
//q.enqueue('three')

//q.frontEnqueue('four')


//console.log(q.toString())

//q.dequeue()

//console.log(q.toString())

//q.backDequeue()

//console.log(q.toString())
