document.addEventListener("DOMContentLoaded", () => {
    const sortSelect = document.getElementById("sort");
    const products = document.querySelectorAll(".products > div");

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
});
