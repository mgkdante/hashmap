import LinkedList from "./linkedlist.js"

class HashMap {
  size = 16
  loadFactor = this.size * 0.75
  buckets = new Array(this.size)

  hash = (key) => {
    let hashCode = 0
    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size
    }
    return hashCode
  }

  set = (key, value) => {
    const hashCode = this.hash(key)
    if (this.buckets[hashCode] === undefined) {
      const linkedlist = new LinkedList()
      linkedlist.append([key, value])
      this.buckets[hashCode] = linkedlist
    } else {
      let current = this.buckets[hashCode].headNode
      while (current) {
        if (current.val[0] === key) {
          current.val[1] = value
          return
        }
        current = current.next
      }
      this.buckets[hashCode].append([key, value])
    }
  }

  get = (key) => {
    const hashCode = this.hash(key)
    if (this.buckets[hashCode] === undefined) {
      return null
    }
    let current = this.buckets[hashCode].headNode
    while (current) {
      if (current.val[0] === key) {
        return current.val[1]
      }
      current = current.next
    }
    return null
  }

  has = (key) => {
    return this.get(key) !== null
  }

  remove = (key) => {
    const hashCode = this.hash(key)
    if (this.buckets[hashCode] !== undefined) {
      const index = this.buckets[hashCode].find([key, this.get(key)])
      if (index === null) {
        return false
      } else {
        this.buckets[hashCode].removeAt(index)
        return true
      }
    } else {
      return false
    }
  }

  length = () => {
    let counter = 0
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== undefined) {
        counter += this.buckets[i].size()
      }
    }
    return counter
  }

  clear = () => {
    this.buckets = new Array(16)
  }

  keys = () => {
    let keys = []
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== undefined) {
        let current = this.buckets[i].headNode
        while (current) {
          keys.push(current.val[0])
          current = current.next
        }
      }
    }
    return keys
  }

  values = () => {
    let keys = []
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== undefined) {
        let current = this.buckets[i].headNode
        while (current) {
          keys.push(current.val[1])
          current = current.next
        }
      }
    }
    return keys
  }

  entries = () => {
    let keys = []
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== undefined) {
        let current = this.buckets[i].headNode
        while (current) {
          keys.push(current.val)
          current = current.next
        }
      }
    }
    return keys
  }
}

export default HashMap
