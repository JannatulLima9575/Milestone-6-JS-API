// call stack method
function a() {
    b()
    console.log("a");
}
function b() {
    c()
    console.log("b");
}
function c() {
    d()
    console.log("c");
}
function d() {
    console.log("d");
}

// CALL function
a();