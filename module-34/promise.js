// Promise pending part
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.json()))
}
loadData();

// find error
const loadDataF = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))

    // find error using catch
    .catch(error => console.log(error))
}
loadDataF();