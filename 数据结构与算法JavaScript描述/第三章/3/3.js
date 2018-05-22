// 列表

function List() {
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

function Person(name, age){
    this.name = name
    this.age = age
}

var person = new List()

var one = new Person('one','nan')
var two = new Person('two','nv')
var three = new Person('three','nan')
var four = new Person('four','nan')
var five = new Person('five','nan')
var six = new Person('six','nv')
var seven = new Person('seven','nan')
var eight = new Person('eight','nan')
var nine = new Person('nine','nv')
var ten = new Person('ten','nan')
person.append(one)
person.append(two)
person.append(three)
person.append(four)
person.append(five)
person.append(six)
person.append(seven)
person.append(eight)
person.append(nine)
person.append(ten)

console.log(person.dataStore)