// 链表

function Node(element){
	this.element = element
	this.next = null
	this.previous = null
}

function LList(){
	this.head = new Node('head')
	this.find = find
	this.insert = insert
	this.remove = remove
	this.findPrevious = findPrevious
	this.findLast = findLast
	this.display = display
	this.dispReverst = dispReverst
}

function find(item){
	var currNode = this.head
	while(currNode.element != item){
		currNode = currNode.next
	}
	return currNode
}

function insert(newElement, item){
	var newNode = new Node(newElement)
	var current = this.find(item)
	newNode.next = current.next
	newNode.previous = current
	current.next = newNode
}

function display(){
	var currNode = this.head
	while(!(currNode.next == null)){
		console.log(currNode.next.element)
		currNode = currNode.next
	}
}


function findPrevious(item){
	var currNode = this.head
	while(!(currNode.next == null) && (currNode.next.element != item)){
		currNode = currNode.next
	}
	return currNode
}

function remove(item){
//	var prevNode = this.findPrevious(item)
//	if(!(prevNode.next == null)){
//		prevNode.next = prevNode.next.next
//	}

	var currNode =this.find(item)
	if(!(currNode.next == null)){
		currNode.previous.next = currNode.next
		currNode.next.previous = currNode.previous
		currNode.next = null
		currNode.previous = null
	}
}

function findLast(){
	var currNode = this.head
	while(!(currNode.next == null)){
		currNode = currNode.next
	}
	return currNode
}

function dispReverst(){
	var currNode = this.head
	currNode = this.findLast()
	while(!(currNode.previous ==null)){
		console.log(currNode.element)
		currNode = currNode.previous
	}
}

// ceshi

var cities = new LList()
cities.insert('conway', 'head')
cities.insert('russellville','conway')
cities.insert('alma','russellville')
cities.display()

cities.remove('russellville')
cities.display()

console.log('----')

cities.dispReverst()
