function assert(condition, message){
  if(condition){
    console.log(message)
  }
}


// var a = 1
// assert( a == 1, 'a 等于 1')

start = new Date().getTime()
var maxCount = 10
for(var n = 0;n<maxCount;n++){
  console.log(n)
}
elapsed = new Date().getTime() - start
assert(true, '测试时间： '+ elapsed)