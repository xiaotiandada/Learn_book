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
