const list = document.querySelector(".list");

async function fetchProducts() {
  list.innerHTML = "<div class='loading'></div>";
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ghhjhkjkklkl/products/main/database.json"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    list.innerHTML = "<p>Something went wrong...(</p>";
  }
}

export default fetchProducts;
