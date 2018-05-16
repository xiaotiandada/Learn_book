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