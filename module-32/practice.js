const isTrue=true;
console.log(!isTrue ? "hello" : "world")

// What would be the output from the function below? 

function work(x, y = 4) {
    return x + y;
}
console.log(work(32));