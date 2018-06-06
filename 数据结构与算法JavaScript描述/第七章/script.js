// 字典

function Dictionary(){
	this.datastore = new Array()
	this.add = add
	this.find = find
	this.remove = remove
	this.showAll = showAll
}

function add(key, value){
	this.datastore[key] = value
}

function find(key){
	return this.datastore[key]
}

function remove(key){
	delete this.datastore[key]
}

function showAll(){
	var datakeys = Array.prototype.slice.call(Object.keys(this.datastore))
	for(var key in datakeys){
		console.log(datakeys[key] + ' -> ' + this.datastore[datakeys[key]] )
	}
}

// 测试

var pbook = new Dictionary()
pbook.add('mike','123')
pbook.add('david','345')
pbook.add('cynthia','456')

console.log(pbook.find('david'))

pbook.remove('david')
pbook.showAll()
