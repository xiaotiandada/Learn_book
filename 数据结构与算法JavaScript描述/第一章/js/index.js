// 1.2.2

// var x = 3
// var y = 1.1
// console.log(x+y)
// console.log(x*y)
// console.log((x+y)*(x-y))
// var z = 9
// console.log(Math.sqrt(z))
// console.log(Math.abs(y/x))

// var x = 3
// var y = 1.1
// var z = x * y
// console.log(z.toFixed(2))


// 1.2.3

// var mid = 25
// var high = 50
// var low = 1
// var current = 123
// var found = -1
// if(current < mid){
//     mid = (current-low)/2
// }

// var mid = 25
// var high = 50
// var low = 1
// var current = 123
// var found = -1
// if(current < mid){
//     mid = (current-low)/2
// } else {
//     mid = (current+high) /2
// }

// var mid = 25
// var high = 50
// var low = 1
// var current = 123
// var found = -1
// if(current < mid){
//     mid = (current-low)/2
//     console.log(1)
// } else if(current > mid){
//     mid = (current + high)/2
//     console.log(2)    
// } else {
//     found = current
//     console.log(3)    
// }



// var monthNum = 1
// var monthName
// for(var i = 1 ;i<13;i++){
//     funDate(monthNum)
//     monthNum++    
// }

// function funDate(monthNum) {
//     switch (monthNum) {
//         case 1:
//             monthName = "January";
//             break;
//         case 2:
//             monthName = "February";
//             break;
//         case 3:
//             monthName = "March";
//             break;
//         case 4:
//             monthName = "April";
//             break;
//         case 5:
//             monthName = "May";
//             break;
//         case 6:
//             monthName = "June";
//             break;
//         case 7:
//             monthName = "July";
//             break;
//         case 8:
//             monthName = "August";
//             break;
//         case 9:
//             monthName = "September";
//             break;
//         case 10:
//             monthName = "October";
//             break;
//         case 11:
//             monthName = "November";
//             break;
//         case 12:
//             monthName = "December";
//             break;
//         default:
//             console.log("Bad input")
//             break;
//     }
    
//     console.log(monthName)
// }


// 1.2.4
// var number = 1
// var sum = 0
// while(number < 11){
//     sum += number
//     ++number
// }
// console.log(sum)

// var numbers = [3,7,12,22,100]
// var sum = 0
// for(var i = 0;i<numbers.length;i++){
//     sum += numbers[i]
// }
// console.log(sum)

// 1.2.5

// function factorial(number){
//     var product = 1
//     for(var i = number;i>=1;--i){
//         product *= i
//     }
//     return product
// }

// console.log(factorial(4))
// console.log(factorial(5))
// console.log(factorial(10))

// function curve(arr, amount){
//     for(var i = 0;i<arr.length;++i){
//         arr[i] += amount
//     }
// }


// var grades = [77,73,74,81,90]
// curve(grades, 5)
// console.log(grades)

// function showScope(){
//     return scope
// }

// var scope = "global"
// console.log(scope)
// console.log(showScope())

// function showScope(){
//     var scope = "local"
//     return scope
// }

// var scope = "global"
// console.log(scope)
// console.log(showScope())


// function showScope(){
//     scope = "local"
//     return scope
// }

// scope = "global"
// console.log(scope)
// console.log(showScope())
// console.log(scope)

// for(var i = 1;i<=10;++i){
//     console.log('Hello world')
// }

// function factorial (number){
//     if(number == 1){
//         return number
//     } else {
//         return number * factorial(number-1)
//     }
// }

// console.log(factorial(5))

// function Checking(amount){
//     this.balance = amount
//     this.deposit = deposit
//     this.withdraw = withdraw
//     this.toString = toString
// }


// function deposit(amount){
//     this.balance += amount
// }

// function withdraw(amount){
//     if(amount <= this.balance){
//         this.balance -= amount
//     }
//     if(amount > this.balance){
//         console.log('Insufficient funds')
//     }
// }

// function toString(){
//     return 'Balance: ' + this.balance
// }

// var account = new Checking(500)
// account.deposit(1000)
// console.log(account.toString())
// account.withdraw(750)
// console.log(account.toString())
// account.withdraw(800)
// console.log(account.toString())

// var numbers = []
// console.log(numbers.length)


// var numbers = [1,2,3,4,5]
// console.log(numbers.length)

// var numbers = new Array(0)
// console.log(numbers.length)

// var numbers = new Array(1,2,3,4,5)
// console.log(numbers.length)

// var numbers = new Array(10)
// console.log(numbers.length)

// var objects = [1,'joe',true,null]

// var numbers = 3
// var arr = [7,4,1776]
// console.log(Array.isArray(numbers))
// console.log(Array.isArray(arr))

// var nums = []
// for(var i = 0;i<100;++i){
//     nums[i] = i+1
// }
// console.log(nums)

// var numbers = [1,2,3,5,8,13,21]
// var sum = 0
// for(var i = 0;i<numbers.length;++i){
//     sum += numbers[i]
// }

// console.log(sum)