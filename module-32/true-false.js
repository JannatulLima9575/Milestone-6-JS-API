// True And false value 
let name = " "; // string return Truthy value
// empty array and empty object are Truthy value  

// null, NaN and undefine are Falsy  value
if (name) {
    console.log("This is a Truly value.");
}
else {
    console.log("This is a False value.");
}

// true value convert to false value
if (!name) {
    console.log("This is a Truly value.");
}
else {
    console.log("This is a False value.");
}

// true value convert to false value and convert to true value
if (!!name) {
    console.log("This is a Truly value.");
}
else {
    console.log("This is a False value.");
}