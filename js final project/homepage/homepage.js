document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 0; // Start from the first slide
    let autoSlideInterval; // To store the interval for auto sliding

    // Function to show a specific slide
    function showSlide(slideIndex) {
        if (slides.length > 0) {
            slides.forEach((slide) => {
                slide.style.display = 'none';
            });
            slides[slideIndex].style.display = 'block';
        }
    }

    // Function to handle manual navigation
    function manualNav(manual) {
        if (slides.length > 0) {
            slides.forEach((slide) => {
                slide.style.display = 'none';
            });
            btns.forEach((btn) => {
                btn.classList.remove('active');
                btn.style.backgroundColor = ''; // Remove background color
            });
            slides[manual].style.display = 'block';
            btns[manual].classList.add('active');
            btns[manual].style.backgroundColor = 'grey'; // Set button color to grey
            currentSlide = manual;
            clearInterval(autoSlideInterval); // Stop auto sliding when manually navigating
        }
    }

    // Function to change slide automatically
    function autoSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
        btns.forEach((btn) => {
            btn.classList.remove('active');
            btn.style.backgroundColor = ''; // Remove background color
        });
        // btns[currentSlide].classList.add('active');
        // btns[currentSlide].style.backgroundColor = 'grey'; // Set button color to grey
    }

    // Event listeners for manual navigation buttons
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            clearInterval(autoSlideInterval); // Stop auto sliding when manually navigating
        });
    });

    // Start auto sliding
    autoSlideInterval = setInterval(autoSlide, 3000); // Change slide every 3 seconds (adjust as needed)

    // Function to create a product card element
    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Create anchor tag to wrap the image
        const imgwrap = document.createElement('a');
        imgwrap.addEventListener('click', function () {
            redirectToPreviewPage(product.id);
        });
        card.appendChild(imgwrap);

        // Create and append image element
        const img = document.createElement('img');
        img.src = product.preview;
        img.alt = product.name;
        img.classList.add('imgwrap-cls');
        imgwrap.appendChild(img);

        // Create and append separate div to wrap the name, brand, and price
        const wrap = document.createElement('div');
        wrap.classList.add('wrapper-div');
        card.appendChild(wrap);

        // Create and append product name element
        const name = document.createElement('h4');
        name.textContent = product.name;
        name.classList.add('name-cls')
        wrap.appendChild(name);

        // Create and append product brand element
        const brand = document.createElement('h5');
        brand.textContent = product.brand;
        brand.classList.add('brand-cls')
        wrap.appendChild(brand);

        // Create and append product price element
        const price = document.createElement('p');
        price.textContent = 'Price: $' + product.price;
        price.classList.add('price-cls')
        wrap.appendChild(price);

        return card;
    }

    // Function to redirect to the product details page with the product ID
    function redirectToPreviewPage(productId) {
        window.location.href = `previewpage.html?id=${productId}`;
    }

    // // Start auto sliding
    // autoSlideInterval = setInterval(autoSlide, 3000); // Change slide every 3 seconds (adjust as needed)

    // Function to populate the clothing section
    function populateClothingSection(data) {
        const clothingGrid = document.getElementById('clothing-grid');

        data.forEach(product => {
            if (!product.isAccessory) {
                const card = createProductCard(product);
                clothingGrid.appendChild(card);
            }
        });
    }

    // Function to populate the accessory section
    function populateAccessorySection(data) {
        const accessoryGrid = document.getElementById('accessory-grid');

        data.forEach(product => {
            if (product.isAccessory) {
                const card = createProductCard(product);
                accessoryGrid.appendChild(card);
            }
        });
    }

    // Fetch data from the API and populate sections
    fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
        .then(response => response.json())
        .then(data => {
            populateClothingSection(data);
            populateAccessorySection(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});