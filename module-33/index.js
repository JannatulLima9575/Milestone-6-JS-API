const showDataUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => display(data))
}

// using for loop
/*const display = (users) => {
    for (let i = 0; i < users.length; i++){
        const user = users[i]
        console.log(user);   
    }
}
*/

// using for of loop
const display = (users) => {
    const userContainer = document.getElementById('show');
    for(const user of users) {
        console.log(user.name);
        const li = document.createElement("li");
        li.innerText = user.name;
        userContainer.appendChild(li);
    }
}