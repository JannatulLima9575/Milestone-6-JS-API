const num1 = 10;
const num2 = 20;

console.log("Asynchronous doesn't follow the sequence of code line");

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(res => res.json())
.then(data => console.log(data))

const result = num1 + num2;
console.log(result);
