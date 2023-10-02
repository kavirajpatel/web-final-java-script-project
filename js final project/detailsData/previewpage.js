     // Your JavaScript code here (combined from your previous code)
     $(document).ready(function () {
        // Define currentProduct in a higher scope
        let currentProduct = null;

        // Initialize an empty cart or reset it if you want it to start fresh on every page load
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Initialize the cart count based on the stored cart data
        let cartCount = cart.length;

        // Function to add the product to the cart and update the cart count
        function addToCart(product) {
            // Add the product to the cart
            cart.push(product);

            // Store the updated cart data in local storage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Increment the cart count
            cartCount++;

            // Update the cart count in the top bar
            $("#cart-count").text(cartCount);

            // Update the cart display
            updateCartDisplay();
        }

        // Function to update the cart display
        function updateCartDisplay() {
            const cartItemsList = $("#cart-items");
            cartItemsList.empty();

            // Loop through the cart and add each item to the display
            cart.forEach(function (product) {
                const listItem = $("<li>");
                listItem.text(product.name); // You can customize how you want to display the product here
                cartItemsList.append(listItem);
            });

            // Update the item count
            $("#item-count").text(cart.length);

            // Calculate and update the total amount
            let totalAmount = 0;
            cart.forEach(function (product) {
                totalAmount += product.price;
            });
            $("#total-amount").text(totalAmount);
        }

        // Event handler for "Add to Cart" button
        $("#btn-add-to-cart").click(function () {
            addToCart(currentProduct);
            currentProduct.image = $("#product-preview").attr("src");
        });

        // Array of product URLs
        const productUrls = [
            'https://5d76bf96515d1a0014085cf9.mockapi.io/product/1',
            'https://5d76bf96515d1a0014085cf9.mockapi.io/product/2',
            'https://5d76bf96515d1a0014085cf9.mockapi.io/product/3',
            'https://5d76bf96515d1a0014085cf9.mockapi.io/product/4',
            'https://5d76bf96515d1a0014085cf9.mockapi.io/product/5',
            'https://5d76bf96515d1a0014085cf9.mockapi.io/product/6',
            'https://5d76bf96515d1a0014085cf9.mockapi.io/product/7',
            'https://5d76bf96515d1a0014085cf9.mockapi.io/product/8',
            'https://5d76bf96515d1a0014085cf9.mockapi.io/product/9',
            'https://5d76bf96515d1a0014085cf9.mockapi.io/product/10'
        ];

        // JavaScript function to display the clicked small image in the main section
        function displayLargeImage(element) {
            // Remove 'active-image' class from all small images



            $("#product-images img").removeClass("active-image");

            // Add 'active-image' class to the clicked small image
            $(element).addClass("active-image");

            // Update the main product image with the clicked image
            $("#product-preview").attr("src", $(element).attr("src"));
        }

        // Function to fetch product data from a given URL using jQuery AJAX
        function fetchProductData(productUrl) {
            return $.ajax({
                url: productUrl,
                type: 'GET',
                dataType: 'json'
            });
        }

        // Function to fetch data for all products
        function fetchAllProducts() {
            $.each(productUrls, function (index, url) {
                fetchProductData(url).done(function (data) {
                    // Now you can process the data as needed and update your HTML elements.
                    updateProductDetails(data);
                    currentProduct = data; // Set the current product here
                }).fail(function (error) {
                    // console.error('Error fetching data:', error);
                    // You may want to return a default or error object here
                });
            });
        }

        // Function to update product details in HTML based on fetched data
        function updateProductDetails(data) {
            // Populate the elements with fetched data
            $("#product-preview").attr("src", data.preview);
            $("#product-title").text(data.name);
            $("#product-brand").text(data.brand);
            $("#product-price").text(data.price);
            $("#description").text(data.description);

            // Create image elements for product preview
            const productImages = $("#product-images");
            productImages.empty(); // Clear existing images
            $.each(data.photos, function (index, photoUrl) {
                const img = $("<img>");
                img.attr("src", photoUrl);
                img.on("click", function () {
                    displayLargeImage(this);
                });
                if (index === 0) {
                    img.addClass("active-image");
                }
                productImages.append(img);
            });
        }

        // Call the function to fetch data for all products
        fetchAllProducts();

        // Initialize the cart display
        updateCartDisplay();
    });