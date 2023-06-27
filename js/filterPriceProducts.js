import renderProducts from "./renderProducts.js";

const list = document.querySelector(".list");
const inputPrice = document.querySelector(".price-input");
const priceMax = document.querySelector(".price-max");

function filterPriceProducts(products, filteredProducts) {
  const allPrices = products.map((product) => product.fields.price / 10);
  const maxPrice = Math.max(...allPrices);
  inputPrice.max = Math.ceil(maxPrice);
  inputPrice.value = Math.ceil(maxPrice);
  priceMax.textContent = Math.ceil(maxPrice) + "$";

  inputPrice.addEventListener("input", () => {
    const value = inputPrice.value;
    priceMax.textContent = value + "$";
    filteredProducts = products.filter(
      (product) => product.fields.price / 10 <= value
    );
    if (filteredProducts.length < 1) {
      list.innerHTML = "<p>Unfortunately nothing found</p>";
    } else {
      renderProducts(filteredProducts);
    }
  });
}

export default filterPriceProducts;
