var fs = require('fs')
// var data = fs.readFileSync('index.txt')
// console.log(data.toString())

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


function createArr(file) {
  var arr = fs.readFileSync(file).toString().split('\n')
  // console.log(arr)
  for (var i = 0; i < arr.length; ++i) {
    arr[i] = arr[i].trim()
  }
  return arr
}



function displayList(list) {
  // for(list.front(); list.currPos() < list.length();list.next()){
  // console.log(list.getElement())
  // }

  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Curtomer) {
      console.log(list.getElement()['name'] + ', ' + list.getElement()['movie'])
    } else {
      console.log(list.getElement())
    }
  }
}

function checkOUt(name, movie, movieList, customerList) {
  if (movieList.contains(movie)) {
    var C = new Curtomer(name, movie)
    customerList.append(C)
    movieList.remove(movie)
  } else {
    console.log(movie + '不可以租借')
  }
}

function Curtomer(name, movie) {
  this.name = name
  this.movie = movie
}

// console.log(createArr('index.txt'))
// var movies = createArr('index.txt')
// var movieList = new List()
// for(var i = 0; i< movies.length;++i){
// movieList.append(movies[i])
// }
// console.log(movieList)

// var curtomer = new List()


var movies = createArr('index.txt')
var movieList = new List()
var curtomers = new List()

for (var i = 0; i < movies.length; ++i) {
  movieList.append(movies[i])
}
console.log('avilable movies:' + '\n')
displayList(movieList)

checkOUt('one', 'two', movieList, curtomers)
console.log('\n Customer Rentals: \n')

displayList(curtomers)


// 需要重新复习


function List(){
  this.listSize = 0
  this.pos = 0
  this.dataStore = []


  this.append = append
  this.remove = remove
  this.find = find

  this.length = length
  this.toString = toString

  this.insert = insert
  this.clear = clear
  this.contains = contains
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.currPos = currPos
  this.moveTo  = moveTo
  this.getElement = getElement
  this.hasNext = hasNext
  this.hasPrev = hasPrev
}

function append(element){
  this.dataStore[this.listSize++] = element
}

function find(element){
  for(var i = 0;i<this.dataStore.length;++i){
      if(this.dataStore[i] == element) {
          return i
      }
  }
  return -1
}

function remove(element){
  var foundAt = this.find(element)
  if(foundAt>-1){
      this.dataStore.splice(foundAt, 1)
      --this.listSize
      return true
  }
  return false
}

function length(){
  return this.listSizei
}

function toString(){
  return this.dataStore
}

// var names = new List()
// names.append('one')
// names.append('two')
// names.append('three')
// names.append('four')
// console.log(names.toString())
// names.remove('two')
// console.log(names.toString())


function insert(element, after){
  var insertPos = this.find(element)
  if(insert > -1){
      this.dataStore.splice(insertPos+1, 0, element)
      ++this.listSize
      return true
  }
  return false
}

function clear(){
  delete this.dataStore
  this.dataStore.length = 0
  this.listSize = this.pos = 0
}

function contains(element){
  for(var i = 0;i<this.dataStore.length;++i){
      if(this.dataStore[i] == element){
          return true
      }
  }
  return false
}

function front (){
  this.pos = 0
}
function end (){
  this.pos = this.listSize - 1
}

function prev(){
  --this.pos
}
function next(){
  if(this.pos < this.listSize){
      ++this.pos
  }
}

function currPos(){
  return this.pos
}

function moveTo(position){
  this.pos = position
}

function getElement(){
  return this.dataStore[this.pos]
}
function hasNext(){
  return this.pos < this.listSize
}
function hasPrev(){
  return this.pos >= 0
}


// var names = new List()
// names.append('one')
// names.append('two')
// names.append('three')
// names.append('four')
// names.append('five')
// names.append('six')
// names.append('seven')
// console.log(names.toString())
// names.front()
// console.log(names.getElement())
// names.next()
// console.log(names.getElement())
// names.next()
// names.next()
// console.log(names.getElement())

// for(names.front();names.hasNext();names.next()){
//     console.log(names.getElement())
// }

// for(names.end();names.hasPrev();names.prev()){
//     console.log(names.getElement())
// }



