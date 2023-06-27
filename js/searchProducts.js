import renderProducts from "./renderProducts.js";

const searchInput = document.querySelector(".search-input");

function searchProducts(products, filteredProducts) {
  searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value.toLowerCase();
    filteredProducts = products.filter(({ fields: { name } }) =>
      name.includes(inputValue)
    );
    renderProducts(filteredProducts);
  });
}

export default searchProducts;
