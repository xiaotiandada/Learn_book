// 队列
function Queue(){
    this.dataStore = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
    // this.count = count
  }
  
  function enqueue(element){
    this.dataStore.push(element)
  }
  
  function dequeue(){
    return this.dataStore.shift()
  }
  
  function front(){
    return this.dataStore[0]
  }
  
  function back(){
    return this.dataStore[this.dataStore.length-1]
  }
  
  function toString(){
    var retStr = ''
    for(var i = 0;i<this.dataStore.length;++i){
      retStr += this.dataStore[i] + '\n'
    }
    return retStr
  }
  
  function empty(){
    if(this.dataStore.length == 0){
      return true
    } else {
      return false
    }
  }

//   function count(){
//       return this.dataStore.length
//   }
  
  // 测试代码
  
  // var q = new Queue()
  // q.enqueue('one')
  // q.enqueue('two')
  // q.enqueue('three')
  // console.log(q.toString())
  // q.dequeue()
  // console.log(q.toString())
  
  // console.log(q.front())
  // console.log(q.back())
  
  // 方块舞伴分配问题
// function Daner(name, sex){
//     this.name = name
//     this.sex = sex
// }  

// var fs = require('fs')
// function getDancers(males, females){
//     var names = fs.readFileSync('index.txt').toString().split('\n')
//     for(var i = 0;i<names.length;++i){
//         names[i] = names[i].trim()
//     }
//     // console.log(names)
//     for(var i = 0;i<names.length;++i){
//         var dancer = names[i].split(' ')
//         var sex = dancer[0]
//         var name = dancer[1]
//         if(sex == 'F'){
//             females.enqueue(new Daner(name, sex))
//         }else{
//             males.enqueue(new Daner(name, sex))
//         }
//     }
// }

// function dance(males, females){
//     while(!females.empty() && !males.empty()){
//         var person = females.dequeue()
//         console.log('female dancer is: '+ person.name)
//         var person = males.dequeue()
//         console.log('males dancer is: ' + person.name)
//     }
// }

// 测试程序
// var maleDancers = new Queue()
// var femaleDancers = new Queue()

// getDancers(maleDancers, femaleDancers)

// dance(maleDancers, femaleDancers)

// if(!femaleDancers.empty()){
//     console.log(femaleDancers.front().name + ' is waiting to dance.')
// }
// if(!maleDancers.empty()){
//     console.log(maleDancers.front().name + ' is wating to dance.')
// }

// if(maleDancers.count() > 0){
//     console.log('there are ' + maleDancers.count() + ' female dancers waiting to dance')
// }

// if(femaleDancers.count() > 0){
//     console.log('there are ' + femaleDancers.count() + ' female dancers waiting to dance')
// }


// 使用队列对数据进行排序
// function distribute(nums, queues, n, digit){
//   for(var i = 0;i<n;++i){
//     if(digit == 1){
//       queues[nums[i]%10].enqueue(nums[i])
//     }else{
//       queues[Math.floor(nums[i]/10)].enqueue(nums[i])
//     }
//   }
// }


// function collect(queues, nums){
//   var i = 0;
//   for(var digit = 0;digit<10;++digit){
//     while(!queues[digit].empty()){
//       nums[i++] = queues[digit].dequeue()
//     }
//   }
// }


// function dispArray(arr){
//   for(var i = 0;i<arr.length;++i){
//     console.log(arr[i] + ' ')
//   }
// }

// var queues = []
// for(var i = 0;i<10;++i){
//   queues[i] = new Queue()
// }

// var nums =[]
// for(var i = 0;i<10;++i){
//   nums[i] = Math.floor(Math.floor(Math.random() * 101))
// }

// dispArray(nums)

// distribute(nums, queues, 10, 1)

// collect(queues, nums)

// console.log('---')

// dispArray(nums)

// console.log('---')

// distribute(nums, queues, 10, 10)

// collect(queues, nums)

// dispArray(nums)


