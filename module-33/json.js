/*
    note: JSON = JavaScript Object Notation
    1.JSON Convert Object to String
*/


// Normal Object convert to JSON
const person = {
    name : "Lima",
    age : 22,
    from : "Bangladesh",
    isStudent : true,
}
console.log(typeof person); //object

let newPerson = JSON.stringify(person);
console.log(newPerson);
console.log(typeof newPerson); //string

// JSON convert to Object
const jsonToString = JSON.parse(newPerson);
console.log(jsonToString);
