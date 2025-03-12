const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/comments/1',
    'https://jsonplaceholder.typicode.com/albums/1',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/users/1',
];

Promise.all(urls.map(urls => {
    return fetch(urls).then(res => res.json).then(data => data)
}))
.then(res => res)
.then(data => console.log(data))