document.addEventListener("DOMContentLoaded", () => {
    const sortSelect = document.getElementById("sort");
    const products = document.querySelectorAll(".clothes > div"); // nodeList

    function sort(order) {
        const productsArray = Array.from(products); // converted from nodeList to an array to be able to sort it

        productsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector(".price").textContent.replace("$", ""));
            const priceB = parseFloat(b.querySelector(".price").textContent.replace("$", ""));

            if (order === "low-to-high") { // if priceA<priceB it returns -ve no. indicating that A is smaller , then A appears first
                return priceA - priceB;
            } 
            else if (order === "high-to-low") {
                return priceB - priceA; // the logic is reversed as priceA will the higher price when priceB>priceA thus returning priceA
            }
        });

        // Reorder the products in the DOM
        const parent = document.querySelector(".clothes");
        productsArray.forEach(product => parent.appendChild(product));
    }
    // applying the change when selecting the sort order
    sortSelect.addEventListener("change", () => {
        const selectedValue = sortSelect.value;
        sort(selectedValue);
    });







});
