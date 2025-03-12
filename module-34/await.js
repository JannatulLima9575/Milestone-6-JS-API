// Async function
async function orderFood() {
    // wait for the food to be prepared
    const food = await cookFood();

    // serve the food
    console.log("Food is ready!");
    console.log(food);    
}


//Async operation
function cookFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Delicious food!");
        },200);
    });
}
//  call the async function
orderFood();