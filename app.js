


let myMap = new Map();

myMap.set("key1", "value1");
myMap.set("key2", "value2");

console.log(myMap.get("key1"))

console.log(myMap.has("key1"))

myMap.delete("key1")

for (let i of myMap.values()) {
    console.log(i)
}