// forEach
// var nums = [1,2,3,4,5,6,7,8,9,10]
// nums.forEach(square)

// function square(num){
//   console.log(num, num*num)
// }

// every

// var nums = [2,4,6,8,10]
// var nums = [1,2,4,6,8,10]
// var even = nums.every(isEven)

// function isEven(num){
//   return num % 2 == 0
// }

// if(even) {
//   console.log('all numbers are even')
//  } else {
//    console.log('not all numbers are even')
//  }


// some
// function isEven(num){
//   return num % 2 == 0
// }

// var nums = [1,2,3,4,5,6,7,8,9,10]
// var someEven = nums.some(isEven)

// if(someEven){
//   console.log('some number are even')
// }else{
//   console.log('no number are even')
// }

// nums = [1,3,5,7,9]
// someEven = nums.some(isEven)
// if(someEven){
//   console.log('some number are even')
// }else{
//   console.log('no number are even')
// }

// reduce
// function add(runingTotal, currentValue){
//   return runingTotal + currentValue
// }

// var nums = [1,2,3,4,5,6,7,8,9,10]
// var sum = nums.reduce(add)
// console.log(sum)

// function concat (accumulatedString, item){
//   return accumulatedString + item
// }

// var words = ['the','quick','brown','fox']
// var sentence = words.reduce(concat)
// console.log(sentence)


// function concat (accumulatedString, item){
//   return accumulatedString + item
// }

// var words = ['the','quick','brown','fox']
// var sentence = words.reduceRight(concat)
// console.log(sentence)

// map
// function curve(grade){
//   return grade += 5
// }

// var  grades = [77,65,81,92,83]
// var newgrades = grades.map(curve)
// console.log(newgrades)

// function first(word){
//   return word[0]
// }

// var words = ['for','your','information']
// var acronym = words.map(first)
// console.log(acronym.join(''))

// function isEven(num){
//   return num % 2 == 0
// }

// function isOdd(num){
//   return num % 2 != 0
// }

// var nums = []
// for(var i =0;i<20;++i){
//   nums[i] = i + 1
// }
// var evens = nums.filter(isEven)
// console.log(evens)

// var odds = nums.filter(isOdd)
// console.log(odds)


// function passing(num){
//   return num >= 60
// }

// var grades = []
// for(var i = 0;i<20;++i){
//   grades[i] = Math.floor(Math.random()*101)
// }

// var passGrades = grades.filter(passing)
// console.log(grades)
// console.log(passGrades)

// function after(str){
//   if(str.indexOf('cie') >-1 ){
//     return true
//   }
//   return false
// }

// var words = ['recieve','deceive','percieve','deceit','concieve']
// var missplled = words.filter(after)
// console.log(missplled)

// 二维数组和多维数组
// 扩展JavaScript数组对象

// Array.matrix = function(numrows, numcols, initial){
//   var arr =[]
//   for(var i = 0;i< numrows; ++i){
//     var colums = []
//     for(var j = 0;j<numcols;++j){
//       colums[j] = initial
//     }
//   arr[i] = colums
//   }
//   return arr
// }

// var nums = Array.matrix(5,5,0)
// console.log(nums)
// console.log(nums[1][1])


// var grades = [
//   [89,77,78],
//   [76,82,81],
//   [91,94,89]
// ]
// var total = 0
// var average = 0.0

// 按行访问

// for(var row = 0;row<grades.length;++row){
//   for(var col = 0;col<grades[row].length;++col){
//     total += grades[row][col]
//   }
//   average = total / grades[row].length
//   console.log('Student ' + parseInt(row + 1) + ' average: ' + average.toFixed(2))
//   total = 0
//   average = 0.0
// }

// 按列访问
// for(var col = 0;col<grades.length;++col){
//   for(var row = 0;row<grades[col].length;++row){
//     total += grades[row][col]
//   }
//   average = total / grades[col].length
//   console.log('Student ' + parseInt(col + 1) + ' average: ' + average.toFixed(2))
//   total = 0
//   average = 0.0
// }

// 参差不齐
// var grades = [
//   [89,77],
//   [76,82,81],
//   [91,94,89,99]
// ]
// var total = 0
// var average = 0.0


// for(var row = 0;row<grades.length;++row){
//   for(var col = 0;col<grades[row].length;++col){
//     total += grades[row][col]
//   }
//   average = total / grades[row].length
//   console.log('Student ' + parseInt(row + 1) + ' average: ' + average.toFixed(2))
//   total = 0
//   average = 0.0
// }

// 对象数组

// function Point(x, y){
//   this.x = x
//   this.y = y
// }

// function displayPts(arr){
//   for(var i = 0;i<arr.length;++i){
//     console.log(arr[i].x + ', ' + arr[i].y)
//   }
// }

// var p1 = new Point(1,2)
// var p2 = new Point(3,5)
// var p3 = new Point(2,8)
// var p4 = new Point(1,2)

// var points = [p1,p2,p3,p4]
// for(var i = 0;i<points.length;++i){
//   console.log('Point ' + parseInt(i + 1) + ': ' + points[i].x + ', ' + points[i].y)
// }

// var p5 = new Point(12, -3)
// points.push(p5)
// displayPts(points)
// points.shift()
// displayPts(points)

// function weekTemps(){
//   this.dataStore = []
//   this.add = add
//   this.average = average
// }

// function add (temp){
//   this.dataStore.push(temp)
// }

// function average(){
//   var total = 0
//   for(var i =0;i<this.dataStore.length;++i){
//     total += this.dataStore[i]
//   }
//   return total / this.dataStore.length
// }

// var thisWeek = new weekTemps()
// thisWeek.add(52)
// thisWeek.add(51)
// console.log(thisWeek.average())