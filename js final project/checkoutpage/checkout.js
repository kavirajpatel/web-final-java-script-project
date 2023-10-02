// Function to add the product to the cart and update the cart count
function addToCart(product) {
    // Add the product to the cart
    cart.push(product);

    // Store the updated cart data in local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Increment the cart count
    cartCount++;

    // Update the cart count in the top bar
    document.getElementById("cart-count").textContent = cartCount;
}

// Function to update the cart display in the checkout page
function updateCartDisplay() {
    const cartItemsList = document.getElementById("cart-items-list");
    cartItemsList.innerHTML = ''; // Clear the existing cart items

    // Initialize variables for total items and total amount
    let totalItems = 0;
    let totalAmount = 0;

    // Loop through the cart and add each item to the cart display
    cart.forEach(function (product) {
        // Parse the price as a number
        const price = parseFloat(product.price);

        const listItem = document.createElement("li");
        listItem.classList.add('li-class');
        const itemImage = document.createElement("img");
        itemImage.classList.add('img-class');
        const itemName = document.createElement("p");
        const itemPrice = document.createElement("p");

        // Set the image source, name, and price
        itemImage.src = product.image;
        itemName.textContent = product.name;
        itemPrice.textContent = `Rs ${price.toFixed(2)}`; // Format price with 2 decimal places

        // Append elements to the list item
        listItem.appendChild(itemImage);
        listItem.appendChild(itemName);
        listItem.appendChild(itemPrice);

        // Append the list item to the cart items list
        cartItemsList.appendChild(listItem);

        // Update total items and total amount
        totalItems++;
        totalAmount += price; // Use the parsed price
    });

    // Update the total items and total amount in the checkout page
    document.getElementById("item-count").textContent = totalItems;
    document.getElementById("total-amount").textContent = `Total Amount: Rs ${totalAmount.toFixed(2)}`; // Format total amount
}

// Event handler for "Place Order" button
document.getElementById("btn-place-order").addEventListener("click", function () {
    addToCart(currentProduct);
    currentProduct.image = document.getElementById("product-preview").src;

    // Show the order success message
    const orderSuccessMessage = document.getElementById("order-success-message");
    orderSuccessMessage.textContent = "Order Successful, Thank you for shopping!";
    orderSuccessMessage.style.display = "block";
});
// Function to clear the cart and update the cart count
function clearCart() {
    // Clear the cart array
    cart = [];
    
    // Clear the cart count
    cartCount = 0;
    
    // Clear the cart data in local storage
    localStorage.removeItem("cart");
    
    // Update the cart count in the top bar
    document.getElementById("cart-count").textContent = cartCount;
}

// Attach the function to the window.onbeforeunload event
window.onbeforeunload = function () {
    clearCart();
};

// Initialize the cart data from local storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCount = cart.length;

// Initialize the cart display
updateCartDisplay();