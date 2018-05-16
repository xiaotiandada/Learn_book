function weekTemps(){
  this.dataStore = [
    [1,2,3,4,5,6,7],
    [2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7]
  ]
  this.add = add
  this.oneAverage = oneAverage
  this.allAverage = allAverage
  this.monthAverage = monthAverage
}

function add(temp){
  this.dataStore.push(temp)
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
  return total / this.dataStore[oneWeek].length
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

      weekAverager.push(totalAverage)

      // console.log( 'week: ' + parseInt(i + 1) + ' average： ' + totalAverage )

      total = 0
      totalAverage = 0
    }
  return weekAverager
}

var thisWeek = new weekTemps()
// thisWeek.add(52)
// thisWeek.add(53)
// thisWeek.add(54)

// console.log(thisWeek.monthAverage())
// console.log(thisWeek.oneAverage(2))
console.log(thisWeek.allAverage())