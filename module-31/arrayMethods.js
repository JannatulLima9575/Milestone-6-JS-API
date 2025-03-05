// # forEach method
const products = [
    {id: 1, name: 'iphone', color: 'black', price: 1800, brand: 'apple'},
    {id: 2, name: 'nokia', color: 'blue', price: 1200, brand: 'nokia'},
    {id: 3, name: 'samsung', color: 'golden', price: 1000, brand: 'sam'},
    {id: 4, name: 'xiaomi', color: 'black', price: 1000, brand: 'xiaomi'},
    {id: 5, name: 'iphone', color: 'golden', price: 2000, brand: 'apple'},
];

// >> loop using forEach
products.forEach(product => {
    // console.log(product);
    if(product.color === 'black') {
        console.log(product);
    }
})

// >> filter method 
const newProducts = products.filter(product => product.price > 1000);
console.log(newProducts);

// if i drop any obj 
const newProduct = products.filter(p => p.id !== 3);
console.log(newProduct);


// >> find method
const product = products.find(p => p.id === 3);
console.log(product);
