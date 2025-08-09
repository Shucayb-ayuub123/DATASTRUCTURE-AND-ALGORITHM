let fruit = ["apple", "banana", "cherry"];
console.log(fruit);

console.log(fruit[0]);
fruit[1] = "mango";

fruit.push("harkoo");
fruit.pop("harkoo");

let NameFruit = fruit.map((fruit) => fruit + "ING");

fruit.splice(1, 1, "shucayb");
console.log(NameFruit);

let fruit_Array = fruit.slice(0, 2);
let filter_array = fruit.filter((f) => f !== "shucayb");
console.log(filter_array);

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i] + "\n");
}

for (let fruits of fruit) {
  console.log(fruits);
}

let numbers = [100, 4, 50, 20, 60];
let name =  "shucayb"

numbers.sort((a, b) => a - b);
console.log(numbers);
