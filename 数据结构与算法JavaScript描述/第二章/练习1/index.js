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