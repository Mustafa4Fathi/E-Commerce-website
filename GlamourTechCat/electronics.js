document.addEventListener("DOMContentLoaded", () => {
    const sortSelect = document.getElementById("sort");
    const products = document.querySelectorAll(".products > div");
    const favIcons = document.querySelectorAll('.fav-icon');
    



    function sort(order) {
        const productsArray = Array.from(products);

        productsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector(".price").textContent.replace("$", ""));
            const priceB = parseFloat(b.querySelector(".price").textContent.replace("$", ""));

            if (order === "low-to-high") {
                return priceA - priceB;
            } 
            else if (order === "high-to-low") {
                return priceB - priceA;
            }
        });

        // Reorder the products in the DOM
        const parent = document.querySelector(".products");
        productsArray.forEach(product => parent.appendChild(product));
    }

    sortSelect.addEventListener("change", () => {
        const selectedValue = sortSelect.value;
        sort(selectedValue);
    });

    favIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const product = icon.closest('.product-1, .product-2, .product-3');
            const productDetails = {
                image: product.querySelector('img').src,
                name: product.querySelector('p').textContent,
                price: product.querySelector('.price').textContent,
               
            };
            
            // Store product details in localStorage
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist.push(productDetails);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));

            alert(`${productDetails.name} added to your wishlist!`);
        });
    });
});
