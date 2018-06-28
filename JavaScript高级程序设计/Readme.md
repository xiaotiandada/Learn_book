# JavaScript高级程序设计

## DOM

> p250

``` js
// arguments 转数组
Array.prototype.slice.call(arguments, 0)

// NodeList 转换为数组
function convertToArray(nodes) {
    var array = null
    try {
        array = Array.prototype.slice.call(arguments, 0)
    } catch (ex) {
        array = new Array()
        for (var i = 0, len = nodes.length; i < len; i++) {
            array.push(nodes[i])
        }
    }
    return array
}
```


