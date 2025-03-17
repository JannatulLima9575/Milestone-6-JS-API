// const age = 22;

// // setItem method
// localStorage.setItem("My age is:", age);
// console.log(localStorage.getItem("My age is:"));

// getItem method

const handleAddToStorage = () => {
    // const name = "Jannatul Lima";
    // localStorage.setItem("name", name);
    // localStorage.getItem("name");

    // try Object
    const person = {
        name : "Lima",
        age : 22,
        friends: ["Ruba", "Tamanna"],
    }
    const convertedToString = JSON.stringify(person);
    localStorage.setItem("person", convertedToString);
    
    // return;
}
handleAddToStorage()

    // try Object


