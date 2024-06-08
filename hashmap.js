import LinkedList from "./linkedlist.js"

class HashMap {
  size = 16
  loadFactor = size * 0.75
  buckets = new Array(16).fill(null)

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
    this.buckets[hashCode] = [key, value]
  }

  get = (key) => {
    const hashCode = this.hash(key)
    return this.buckets[hashCode] === null
      ? null
      : this.buckets[hashCode][0] === key
      ? this.buckets[hashCode][1]
      : null
  }

  has = (key) => {
    return this.get(key) === null ? false : true
  }

  remove = (key) => {
    const hashCode = this.hash(key)
    if (this.has) {
      this.buckets.splice(hashCode, 1)
      return true
    } else {
      return false
    }
  }

  length = () => {
    let count = 0
    for (let i = 0; i < this.buckets.length; i++) {
      if (i < 0 || i >= this.buckets.length) {
        throw new Error("Trying to access index out of bound")
      }
      if (this.buckets[i] !== null) {
        count += 1
      }
    }
    return count
  }

  clear = () => {
    this.buckets = new Array(16).fill(null)
  }

  keys = () => {
    let keys = []
    for (let i = 0; i < this.buckets.length; i++) {
      if (i < 0 || i >= this.buckets.length) {
        throw new Error("Trying to access index out of bound")
      }
      if (this.buckets[i] !== null) {
        keys.push(this.buckets[i][0])
      }
    }
    return keys
  }

  values = () => {
    let keys = []
    for (let i = 0; i < this.buckets.length; i++) {
      if (i < 0 || i >= this.buckets.length) {
        throw new Error("Trying to access index out of bound")
      }
      if (this.buckets[i] !== null) {
        keys.push(this.buckets[i][1])
      }
    }
    return keys
  }

  entries = () => {
    let keys = []
    for (let i = 0; i < this.buckets.length; i++) {
      if (i < 0 || i >= this.buckets.length) {
        throw new Error("Trying to access index out of bound")
      }
      if (this.buckets[i] !== null) {
        keys.push(this.buckets[i])
      }
    }
    return keys
  }
}

const hashMap = new HashMap()
hashMap.set("yesid", 16)
hashMap.set("fernandoooooooop", 17)
hashMap.set("otalora", 18)
hashMap.set("nivia", 19)
console.log(hashMap.get("yesid"))
console.log(hashMap.has("yesid"))
console.log(hashMap.length())
console.log(hashMap.keys())
console.log(hashMap.values())
console.log(hashMap.entries())

/*
hashMap.remove("yesid")
console.log(hashMap.get("yesid"))
console.log(hashMap.has("yesid"))
console.log(hashMap.length())

hashMap.clear()

console.log(hashMap.length())
*/
