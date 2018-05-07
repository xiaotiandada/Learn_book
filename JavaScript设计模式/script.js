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

Function.prototype.addMethod = function(name, fn){
  this.prototype[name] = fn
  return this
}

var Methods =  function(){}

Methods.addMethod('checkName', function(){
  console.log('验证姓名')
  return this
}).addMethod('checkEmail', function(){
  console.log('验证邮箱')
  return this
})

var methods = new Methods()
methods.checkName().checkEmail()










//var a = CheckObject()

// var a = new CheckObject()
// a.checkName()
// a.checkEmail()
// a.checkPassword()

// CheckObject.checkName().checkEmail().checkPassword()

// var a = new CheckObject()
// a.checkName().checkEmail().checkPassword()