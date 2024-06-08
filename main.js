import HashMap from "./hashmap.js"

const hashMap = new HashMap()

// Test set method
hashMap.set("yesid", 16)
hashMap.set("john", 30)
hashMap.set("jane", 25)
console.log("After setting values:", hashMap.entries())

// Test get method
console.log("Get 'yesid':", hashMap.get("yesid")) // 16
console.log("Get 'john':", hashMap.get("john")) // 30
console.log("Get 'jane':", hashMap.get("jane")) // 25
console.log("Get 'doe':", hashMap.get("doe")) // null

// Test has method
console.log("Has 'yesid':", hashMap.has("yesid")) // true
console.log("Has 'john':", hashMap.has("john")) // true
console.log("Has 'jane':", hashMap.has("jane")) // true
console.log("Has 'doe':", hashMap.has("doe")) // false

// Test remove method
console.log("Remove 'yesid':", hashMap.remove("yesid")) // true
console.log("Remove 'doe':", hashMap.remove("doe")) // false
console.log("After removing 'yesid':", hashMap.entries())

// Test length method
console.log("Length:", hashMap.length()) // 2

// Test clear method
hashMap.clear()
console.log("After clear:", hashMap.entries()) // []

// Test keys method
hashMap.set("yesid", 16)
hashMap.set("john", 30)
console.log("Keys:", hashMap.keys()) // ["yesid", "john"]

// Test values method
console.log("Values:", hashMap.values()) // [16, 30]

// Test entries method
console.log("Entries:", hashMap.entries()) // [["yesid", 16], ["john", 30]]
