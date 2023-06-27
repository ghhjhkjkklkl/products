import fetchProducts from "./fetchProducts.js";
import renderProducts from "./renderProducts.js";
import searchProducts from "./searchProducts.js";
import { renderFilterItems, filterProducts } from "./filterProducts.js";
import filterPriceProducts from "./filterPriceProducts.js";

init();

async function init() {
  const products = await fetchProducts();
  let filteredProducts = [...products];
  /* structuredClone(products) */
  renderProducts(products);
  searchProducts(products, filteredProducts);

  renderFilterItems(products);
  filterProducts(products, filteredProducts);
  filterPriceProducts(products, filteredProducts);
}

// navigator.geolocation.getCurrentPosition(
//   (position) => {
//     const longitude = position.coords.longitude;
//     const latitude = position.coords.latitude;
//     console.log(latitude, longitude);
//   },
//   () => {}
// );
