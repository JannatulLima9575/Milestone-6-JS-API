const handleAddCart = () => {
    const productName = document.getElementById('productName');
    const productQuantity = document.getElementById('productQuantity');

    if (!name || !quantity) {
        alert("Please enter both product name and quantity!");
        return;
    }

    // add value to new variable
    const name = productName.value;
    const quantity = productQuantity.value;

    // call to display product ex to console
    displayProduct(name, quantity);
    // for refresh value and start from begin
    productName.value = "";
    productQuantity.value = "";
}

// for display product
const displayProduct = (productName, quantity) => {
    // select ul id
    const productContainer = document.getElementById('product-container');
    // create a new li
    const li = document.createElement("li");
    // change li innerHtml
    li.innerText = `${productName} : ${quantity}`;

    // li append to ul Element
    productContainer.appendChild(li)
}