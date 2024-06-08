import Node from "./node.js"

class LinkedList {
  count = 0
  headNode = null
  tailNode = null

  append = (val) => {
    const newNode = new Node(val)
    if (this.count === 0) {
      this.headNode = newNode
      this.tailNode = newNode
    } else {
      this.tailNode.next = newNode
      this.tailNode = newNode
    }
    this.count += 1
  }

  prepend = (val) => {
    const newNode = new Node(val)
    if (this.count === 0) {
      this.headNode = newNode
      this.tailNode = newNode
    } else {
      newNode.next = this.headNode
      this.headNode = newNode
    }
    this.count += 1
  }

  size = () => {
    return this.count
  }

  head = () => {
    return this.headNode
  }

  tail = () => {
    return this.tailNode
  }

  at = (index) => {
    if (index < 0 || index >= this.count) {
      return null
    }
    let current = this.headNode
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  pop = () => {
    let current = this.headNode
    if (this.count === 1) {
      this.headNode = null
    }
    for (let i = 1; i < this.size() - 1; i++) {
      current = current.next
    }
    current.next = null
    this.tailNode = current
    this.count -= 1
  }

  contains = (val) => {
    let current = this.headNode
    while (current) {
      if (current.val === val) {
        return true
      }
      current = current.next
    }
    return false
  }

  find = (val) => {
    let current = this.headNode
    let counter = 1
    while (current) {
      if (current.val === val) {
        return counter
      }
      current = current.next
      counter += 1
    }
    return null
  }

  toString = () => {
    let string = ""
    let current = this.headNode
    while (current !== null) {
      string += current.val + " -> "
      current = current.next
    }
    string += "null"
    return string
  }
}

export default LinkedList
