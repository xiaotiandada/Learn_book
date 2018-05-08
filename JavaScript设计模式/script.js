// chapter1

//function checkName(){
//	console.log('验证名字')
//}
//
//function checkEmail(){
//	console.log('验证邮箱')
//}
//
//function checkPassword(){
//	console.log('验证密码')
//}

//var checkName = function() {
//	console.log('验证名字')
//}
//
//var checkEmail = function() {
//	console.log('验证邮箱')
//}
//
//var checkPassword = function() {
//	console.log('验证密码')
//}

//var CheckObject = {
//	checkName: function() {
//		console.log('验证名字')
//	},
//
//	checkEmail: function() {
//		console.log('验证邮箱')
//	},
//
//	checkPassword: function() {
//		console.log('验证密码')
//	}
//}

//var CheckObject = function (){}
//
//CheckObject.checkName = function(){
//	console.log('验证名字')
//}
//
//CheckObject.checkEmail = function(){
//	console.log('验证邮箱')
//}
//CheckObject.checkPassword = function(){
//	console.log('验证密码')
//}

//var CheckObject = function(){
//	return {
//		checkName: function(){
//			console.log('验证名字')
//		},
//		checkEmail: function(){
//			console.log('验证邮箱')
//		},
//		checkPassword: function(){
//			console.log('验证密码')
//		}
//	}
//}

// var CheckObject = function(){
// 	this.checkName = function(){
// 		console.log('验证名字')
// 	}
// 	this.checkEmail = function(){
// 		console.log('验证邮箱')
// 	}
// 	this.checkPassword = function(){
// 		console.log('验证密码')
// 	}
// }

// var CheckObject = function (){}
// CheckObject.prototype.checkName = function(){
//   console.log('验证名字')
// }
// CheckObject.prototype.checkEmail = function(){
//   console.log('验证邮箱')
// }
// CheckObject.prototype.checkPassword = function(){
//   console.log('验证密码')
// }

// var CheckObject = function (){}
// CheckObject.prototype = {
//   checkName: function(){
//   console.log('验证名字')
//   },
//   checkEmail: function(){
//   console.log('验证邮箱')
//   },
//   checkPassword: function(){
//   console.log('验证密码')
//   }
// }

// var CheckObject = {
//   checkName: function () {
//     console.log('验证名字')
//     return this
//   },
//   checkEmail: function () {
//     console.log('验证邮箱')
//     return this
//   },
//   checkPassword: function () {
//     console.log('验证密码')
//     return this
//   }
// }


// var CheckObject = function (){}
// CheckObject.prototype = {
//   checkName: function(){
//   console.log('验证名字')
//   return this
//   },
//   checkEmail: function(){
//   console.log('验证邮箱')
//   return this
//   },
//   checkPassword: function(){
//   console.log('验证密码')
//   return this
//   }
// }


// prototype.js
// Function.prototype.checkEmail = function(){
//   console.log('验证邮箱')
// }


// var f = function(){}
// f.checkEmail()

// var f = new Function()
// f.checkEmail()


// Function.prototype.addMethod = function(name, fn){
//   this[name] = fn
// }

// // var methods = function(){}
// var methods = new Function()

// methods.addMethod('checkName', function(){
//   console.log('验证姓名')
// })
// methods.addMethod('checkEmail', function(){
//   console.log('验证邮箱')
// })

// methods.checkName()
// methods.checkEmail()

// Function.prototype.addMethod = function(name, fn){
//   this[name] = fn
//   return this
// }

// // var methods = function(){}
// var methods = new Function()

// methods.addMethod('checkName', function(){
//   console.log('验证姓名')
//   return this
// }).addMethod('checkEmail', function(){
//   console.log('验证邮箱')
//   return this
// })

// methods.checkName().checkEmail()

// Function.prototype.addMethod = function(name, fn){
//     this.prototype[name] = fn
//     return this
//   }

//   var Methods =  function(){}

//   Methods.addMethod('checkName', function(){
//     console.log('验证姓名')
//     return this
//   }).addMethod('checkEmail', function(){
//     console.log('验证邮箱')
//     return this
//   })

//   var methods = new Methods()
//   methods.checkName().checkEmail()




//var a = CheckObject()

// var a = new CheckObject()
// a.checkName()
// a.checkEmail()
// a.checkPassword()

// CheckObject.checkName().checkEmail().checkPassword()

// var a = new CheckObject()
// a.checkName().checkEmail().checkPassword()


// chapter2



//   var Book = function(id, bookname, price){
//       this.id = id
//       this.bookname = bookname
//       this.price = price
//   }

//   Book.prototype.display = function(){
//       console.log('display:block')
//   }

//   or

//   Book.prototype ={
//       display: function(){
//           console.log('display:block')
//       }
//   }

//   var book = new Book(10, 'javascript', 50)
//   console.log(book.bookname)



// var Book = function (id, name, price) {
//     // 私有属性
//     var num = 1
//     //私有方法
//     function checkId() {
//         console.log('私有方法')
//     }
//     // 特权方法
//     this.getName = function () {
//         console.log('getName')
//     }
//     this.getPrice = function () {
//         console.log('getPrice')
//     }
//     this.setName = function (setName) {
//         console.log(setName)
//     }
//     this.setPrice = function (setPrice) {
//         console.log(setPrice)
//     }
//     // 对象公有属性
//     this.id = id

//     // 对象公有方法
//     this.copy = function () {
//         console.log('公有方法')
//     }
//     // 构造器
//     this.setName(name)
//     this.setPrice(price)
// }

// // 类静态公有属性 （对象不能访问）
// Book.isChinese = true

// // 类静态公有方法（对象不能访问）

// Book.resetTime = function(){
//     console.log('new time')
// }

// Book.prototype = {
//     // 公有属性
//     isJSBook : false,
//     // 公有方法
//     display: function(){
//         console.log('display')
//     }
// }

// var b = new Book(11, 'javascript', 50)
// console.log(b.num)
// console.log(b.isJSBook)
// console.log(b.id)
// console.log(b.isChinese)

// console.log(Book.isChinese)
// Book.resetTime()


// 利用闭包实现
// var Book = (function(){
//     // 静态私有变量
//     var bookNum = 0
//     // 静态私有方法
//     function checkBook(name){
//         console.log(name)
//     }
//     // 返回构造函数
//     return function(newId, newName, newPrice) {
//         // 私有变量
//         var name, price
//         // 私有方法
//         function checkId(id){
//             console.log(id)
//         }
//         // 特权方法
//         this.getName = function(getPrice){
//             console.log(getPrice)
//         }
//         this.getPrice = function(getPrice){
//             console.log(getPrice)
//         }
//         this.setName = function(setName){
//             console.log(setName)
//         }
//         this.setPrice = function(setPrice){
//             console.log(setPrice)
//         }

//         // 公有属性
//         this.id = newId

//         // 公有方法
//         this.copy = function(){
//             console.log('copy')
//         }
//         bookNum++
//         if(bookNum > 100){
//             throw new Error('我们仅出版100本书')
//         }
//         // 构造器
//         this.setName(name)
//         this.setPrice(price)
//     }
// })()

// Book.prototype =  {
//     // 静态公有属性
//     isJSBook :false,
//     // 静态公有方法
//     display: function(){
//         console.log('display')
//     }
// }


// 利用闭包实现
var Book = (function(){
  // 静态私有变量
  var bookname = 0
  // 静态私有方法
  function checkBook (name){
      console.log(name)
  }
  // 创建类
  function _book (newId, newName, newPrice){
      // 私有变量
      var name, price
      // 私有方法
      function checkId(id){
          console.log(id)
      }
      // 特权方法
      this.getName = function(getName){
          console.log(getName)
      }
      this.getPrice = function(getPrice){
          console.log(getPrice)
      }
      this.setName = function(setName){
          console.log(setName)
      }
      this.setPrice = function(setPrice){
          console.log(setPrice)
      }

      // 公有属性
      this.id = newId
      // 公有方法
      this.copy = function(){
          console.log('copy')
      }
      bookNum++
      if(bookNum>100){
          throw new Error('我们仅出版100本书')
      }
      // 构造器
      this.setName(name)
      this.setPrice(price)
  }

  // 构造原型
  _book.prototype = {
      // 静态共有属性
      isJSBook : false,
      // 静态共有方法
      display: function(){
          console.log('display')
      }
  }
  // 返回类
  return _book
})()

// // 图书
// var Book = function(title, time, type){
//     this.title = title
//     this.time = time
//     this.type = type
// }

// // 实例化一本书
// var book = Book('javascript', '2014', 'js')

// 使用安全模式

var Book = function(title, time, type){
  // 判断执行过程中this是否是当前这个对象 如果是说明是用new 创建的
  if(this instanceof Book){
      this.title = title
      this.time = time
      this.type = type
  } else {
      return new Book(title, time, type)
  }
}

var book = Book('javascript', '2014', 'js')

console.log(book)
console.log(book.title)
console.log(book.time)
console.log(book.type)
console.log(window.title)
console.log(window.time)
console.log(window.type)