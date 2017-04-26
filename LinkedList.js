// Constructor Function
function LinkedList() {
  this.head = null;
  this.tail = null;
}

// Constructor Function
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null);
  if(this.head) {
    this.head.prev = newNode;
  }
  else {
    this.tail = newNode;
  }
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail);
  if(this.tail) {
    this.tail.next = newNode;
  }
  else {
    this.head = newNode;
  }
  this.tail = newNode;
}

let myLL = new LinkedList();

myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);
myLL.addToHead(100);

console.log(myLL.tail.prev.prev.prev); // will be 100

LinkedList.prototype.removeHead = function() {
  if(!this.head) return null;
  let val = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;
  while(currentNode) {
    if(currentNode.value === searchValue) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null;
}

let myLL = new LinkedList();

myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToHead('hello');
myLL.addToTail(19);
myLL.addToTail('world');
myLL.addToTail(20);

console.log(myLL.search(10));

LinkedList.prototype.indexOf = function(searchValue) {
  let currentNode = this.head;
  let result = [];
  let index = 0;
  while(currentNode) {
    if(currentNode.value === searchValue) {
      result.push(index);
    }
    index++;
    currentNode = currentNode.next;
  }
  return result;
}

let myLL = new LinkedList();
myLL.addToTail(1)
myLL.addToTail(1)
myLL.addToTail(2)

console.log(myLL.indexOf(2))
