class product {
    owner = "Lima";

    // add a new brand using constructor array
    constructor(name, price, brand, color) {
        // console.log(name, price, brand, color); 
        this.name = name;  
        this.price = price;  
        this.brandName = brand;  
        this.color = color;  
    }

    details() {
        console.log("i'm from BD", this.name);
    }
}

/*const identity = new product();
console.log(identity);
identity.details()*/

// add a new brand using constructor array
const identity = new product('iphone', '12000', 'apple', 'golden');
console.log(identity);
