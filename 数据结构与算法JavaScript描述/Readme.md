### 数据结构与算法JavaScript描述

---

### 第一章
---
### 第二章

扩展JavaScript数组对象

JavaScript: The Good Parts

参数： 数组的行数，列数和初始值

``` bash
Array.matrix = function(numrows, numcols, initial){
  var arr =[]
  for(var i = 0;i< numrows; ++i){
    var colums = []
    for(var j = 0;j<numcols;++j){
      colums[j] = initial
    }
  arr[i] = colums
  }
  return arr
}
```

``` bash
var nums = Array.matrix(5,5,0)
```

// 练习

1.创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个现实学生平均成绩的方法。

[查看练习](https://github.com/xiaotiandada/Learn_book/tree/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95JavaScript%E6%8F%8F%E8%BF%B0/%E7%AC%AC%E4%BA%8C%E7%AB%A0)

``` bash
function StudentResult(){
  this.studentData = []
  this.addResult = addResult
  this.showAverage = showAverage
}

function addResult(result){
  this.studentData.push(result)
}

function showAverage (){
  var total = 0
  for(var i = 0, len = this.studentData.length; i < len; ++i ){
    total += this.studentData[i]
  }
  return ( total / this.studentData.length ) || 0
}

var thisStudent = new StudentResult()

console.log(thisStudent.showAverage())


thisStudent.addResult(90)
thisStudent.addResult(88)

console.log(thisStudent.showAverage())
```

2.将一组单词存在一个数组中，并按照正序和倒序分别现实这些单词。

[查看练习](https://github.com/xiaotiandada/Learn_book/tree/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95JavaScript%E6%8F%8F%E8%BF%B0/%E7%AC%AC%E4%BA%8C%E7%AB%A0)

``` bash
var wordArr = [
  'hello',
  'world',
  'apple',
  'pig',
  'data',
  'week',
  'student'
]


var ascendingOrder = wordArr.sort()

console.log(ascendingOrder)

var dscendingOrder =  wordArr.sort().reverse()
// var dscendingOrder =  ascendingOrder.reverse()


console.log(dscendingOrder)

```

3.修改本章前面出现过的weeklyTemps对象,使它可以使用一个二维数组来存储每月的有用数据。增加一些方法用以现实平均月树、具体某一周平均数和所有周的平均数。

[查看练习](https://github.com/xiaotiandada/Learn_book/tree/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95JavaScript%E6%8F%8F%E8%BF%B0/%E7%AC%AC%E4%BA%8C%E7%AB%A0)

```bash
Array.martix = function (numrows, numcols, initial){
  var arr = []
  for(var i = 0;i<numrows;++i){
    var colums = []
    for(var j = 0; j< numcols;++j){
      colums[j] = initial
    }
  arr[i] = colums
  }
  return arr
}

function weekTemps(){
  this.dataStore = []
  this.addResult = addResult
  this.oneAverage = oneAverage
  this.allAverage = allAverage
  this.monthAverage = monthAverage
}

function addResult(week, day, data){
  this.dataStore[week][day] = data
}

function average(){
  var total = 0
  for(var i = 0;i<this.dataStore.length;++i){
    total += this.dataStore[i]
  }
  return total / this.dataStore.length
}

function monthAverage(){
  var total = 0
  for(var i = 0;i<this.dataStore.length;++i){
    for(var j = 0;j<this.dataStore[i].length;++j){
          total += this.dataStore[i][j]
    }
    total = parseInt(total / this.dataStore[i].length)
  }
  return total
}


// week 1 - 4
function oneAverage(week){
  var total = 0
  var oneWeek = week - 1
  for(var i = 0;i<this.dataStore[oneWeek].length;++i){
    total += this.dataStore[oneWeek][i]
  }
  return parseInt(total / this.dataStore[oneWeek].length)
}

function allAverage(week){
  var total = 0
  var totalAverage = 0
  var weekAverager = []
    for(var i = 0;i<this.dataStore.length;++i){
      
      for(var j = 0;j<this.dataStore[i].length;++j){

        total += this.dataStore[i][j]
      }

      totalAverage = total / this.dataStore[i].length

      weekAverager.push(parseInt(totalAverage))

      total = 0
      totalAverage = 0
    }
  return weekAverager
}

var thisWeek = new weekTemps()

// 初始化数组数据
thisWeek.dataStore = Array.martix(4,7,0)
thisWeek.addResult(1,1,280)
thisWeek.addResult(2,1,280)
thisWeek.addResult(3,1,280)

console.log(thisWeek.monthAverage() + ' 月')
console.log(thisWeek.oneAverage(2) + ' 指定周')
console.log(thisWeek.allAverage() + ' 所有周')
console.log(thisWeek.dataStore + ' 所有数据')


console.log(thisWeek.dataStore)


```

4.创建这样的一个对象，他将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词。

``` bash
function Word(){
  this.words = []
  this.addWord = addWord
  this.showWord = showWord
}

function addWord(word){
  this.words.push(word)
}

function showWord (){
  return this.words.join('')
}

var word = new Word()

word.addWord('a')
word.addWord('p')
word.addWord('p')

console.log( word.showWord() )

```


个人觉得这个题目有更高级的解法 比如说根据增加的字母判断是否是一个合理的单词 并且输出单词的结果

Google到一些思路 大家可以看看 然后教我阿 hhhhhh 2333～

[我叫思路](https://github.com/lmk123/blog/issues/12)