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



let fs = require('fs')
// var data = fs.readFileSync('index.txt')
// console.log(data.toString())

function createArr(file){
    var arr = fs.readFileSync(file).toString().split('\n')
    for(var i = 0 ;i<arr.length;++i){
        arr[i] = arr[i].trim()
    }
    return arr
}
// console.log(createArr('index.txt'))




function displayList(list){
    for(list.front();list.currPos() < list.length(); list.next()){
        if(list.getElement() instanceof Customer){
            console.log(list.getElement()['name'] + ', ' + list.getElement()['movie'])
        }else {
            console.log(list.getElement())
        }
    }
}


function Customer(name, movie){
    this.name = name
    this.movie = movie
}

function checkOut(name, movie, movieList, customerList){
    if(movieList.contains(movie)){
        var c = new Customer(name, movie)
        customerList.append(c)
        movieList.remove(movie)
    }else{
        console.log(movie + ' is not available')
    }
}

var movies = createArr('index.txt') // 电影
var movieList = new List()          // 电影列表
var customers = new List()         // 顾客列表

// 循环添加电影到电影列表
for(var i = 0;i<movies.length;++i){
    movieList.append(movies[i])
}
// 显示电影列表
displayList(movieList)
console.log('-------------')

// 移除电影
checkOut('(1)', '(1) one1 two1 (one1 two1)', movieList, customers)
checkOut('(1)', '(2) one2 two2 (one2 two2)', movieList, customers)
console.log('-------------')

// 显示顾客
displayList(customers)
console.log('-------------')

// 显示电影列表
displayList(movieList)