// 列表

function list() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.clear = clear
  this.find = find
  this.toString = toString
  this.insert = insert
  this.append = append
  this.remove = remove
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.hasNext = hasNext
  this.hasPrev = hasPrev
  this.length = length
  this.currPos = currPos
  this.moveTo = moveTo
  this.getElement = getElement
  this.contains = contains
}

function append(element) {
  this.dataStore[this.listSize++] = element
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return i
    }
  }
  return -1
}

function remove(element) {
  var foundAt = this.find(element)
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1)
      --this.listSize
    return true
  }
  return false
}

function length() {
  return this.listSize
}

function toString() {
  return this.dataStore
}

function clear() {
  delete this.dataStore
  this.dataStore.length = 0
  this.listSize = this.pos = 0
}

function insert(element, after) {
  var insertPos = this.find(after)
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, element)
      ++this.listSize
    return true
  }
  return false
}

function front() {
  this.pos = 0
}

function end() {
  this.pos = this.listSize - 1
}

function prev() {
  --this.pos
}

function next() {
  if (this.pos < this.listSize) {
    ++this.pos
  }
}

function hasNext() {
  return this.pos < this.listSize
}

function hasPrev() {
  return this.pos >= 0
}

function currPos() {
  return this.pos
}

function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true
    }
  }
  return false
}

function moveTo(position) {
  this.pos = position
}

function getElement() {
  return this.dataStore[this.pos]
}
var names = new list()
names.append('one')
names.append('two')
names.append('three')
names.append('four')
names.append('five')
names.append('six')
console.log(names.toString())
names.remove('two')
console.log(names.toString())
names.front()
console.log(names.getElement())
names.next()
console.log(names.getElement())
names.next()
names.next()
console.log(names.getElement())