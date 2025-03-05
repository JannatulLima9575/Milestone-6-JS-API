// About Map 
const numbers = [1,2,3,4,5,6];

// Old method of for loop
let temp = [];
for(let i = 0; i<numbers.length; i++) {
    const element = numbers[i];
    const sum = element+1;
    temp.push(sum)
}
console.log(temp);


// new method of for loop using Map 
const newArray = numbers.map(value=> {
    return value+1
});
console.log(newArray);


//# squareArray 
const squareArray = numbers.map(element => element * element);
console.log(squareArray);


// # practice 
const friends = ['Hena','Koly','Sefa','Rafa',];

let listOfFriends = friends.map(element => {
    return element;
});
console.log(listOfFriends);
