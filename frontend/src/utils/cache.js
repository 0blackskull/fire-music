
class Node {
  constructor (key) {
      this.key = key
      this.prev = null
      this.next = null
  }
}

class LRU {
  constructor () {
      this.head = null
      this.tail = null
      this.map = new Map()
  }
  
  removeNodeFromList (key) {
      let node = this.head
  }
  
  push (key, value) {
      if (this.map.has(key)) {
          
      } else {
          this.map.set(key, value)
      }
      
      
      const newNode = new Node(key)
      
      if (!this.head) {
          this.head = newNode
          this.tail = this.head
          return 
      }
      
      this.head.next = newNode
      newNode.prev = this.head
      
      this.head = newNode
  }
  
  detach () {
      if (!this.tail) return
      let node = this.tail.next
      if (!node) {
          this.head = null
          this.tail = null
          return
      }
      this.tail.next = null
      node.prev = null
      this.tail = node
      node = undefined
  }
  
  peek () {
      if (!this.head) return null
      return this.head.key
  }
  
  getTail () {
      if (!this.tail) return null
      return [this.tail.key, this.map.get(this.tail.key)]
  }
  
  getVal (key) {
      console.info(this.map.get(key))
  }
}

const cache = new LRU();

cache.push(1, 'John');

cache.push(2, 'Frank');

cache.detach()
cache.detach()
cache.detach()

cache.push(3, 'Emma');

console.log('Head at', cache.peek())
console.log('Tail at', cache.getTail())
