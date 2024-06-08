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
    if (this.count === 0) {
      return null
    }
    let current = this.headNode
    if (this.count === 1) {
      this.headNode = null
      this.tailNode = null
    } else {
      for (let i = 0; i < this.count - 2; i++) {
        current = current.next
      }
      current.next = null
      this.tailNode = current
    }
    this.count -= 1
  }

  contains = (val) => {
    let current = this.headNode
    while (current) {
      if (
        Array.isArray(current.val) &&
        current.val[0] === val[0] &&
        current.val[1] === val[1]
      ) {
        return true
      }
      current = current.next
    }
    return false
  }

  find = (val) => {
    let current = this.headNode
    let counter = 0 // Zero-based index
    while (current) {
      if (
        Array.isArray(current.val) &&
        current.val[0] === val[0] &&
        current.val[1] === val[1]
      ) {
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

  removeAt = (index) => {
    if (index < 0 || index >= this.size()) {
      return null
    }

    let current = this.headNode
    let previous = null

    if (index === 0) {
      this.headNode = current.next
      if (this.size() === 1) {
        this.tailNode = null
      }
      this.count -= 1
      return current.val
    }

    for (let i = 0; i < index; i++) {
      previous = current
      current = current.next
    }

    previous.next = current.next
    if (current.next === null) {
      this.tailNode = previous
    }

    this.count -= 1
    return current.val
  }
}

export default LinkedList
