import createNewName from "./createName.js";

const productEl = document.querySelector(".product__wrapper");
const headerEl = document.querySelector(".header__title");

const url = "https://course-api.com/javascript-store-single-product";

init();

async function fetchProduct() {
  productEl.innerHTML = "<div class='loading'></div>";
  try {
    const response = await fetch(`${url}${window.location.search}`);
    // const response = await fetch(`${url}${window.location.search}`, {
    //   method: "POST",
    //   headers: "application/json",
    //   body: "coords...",
    // });
    const data = await response.json();
    return data;
  } catch (err) {
    productEl.innerHTML = "<p>Something went wrong...(</p>";
  }
}

async function init() {
  const product = await fetchProduct();
  renderHeader(product);
  renderProduct(product);
}

function renderHeader({ fields: { name } }) {
  headerEl.innerHTML = createNewName(name);
}

function renderProduct(product) {
  productEl.innerHTML = createTemplate(product);
}

function createTemplate({
  fields: { image, name, company, price, colors, description },
}) {
  const colorsTemplate = colors.reduce(
    (acc, color) =>
      (acc += `<li style="background: ${color}" class="product__color"></li>`),
    ""
  );
  return `
      <img  class="product__img" src="${image[0].url}" alt=""product/>
      <div>
        <h2 class="product__title">${createNewName(name)}</h2>
        <p class="product__company">${company.toUpperCase()}</p>
        <p class="product__price">$${+price / 10}</p>
        <ul class="product__list">${colorsTemplate}</ul>
        <p class="product__text">${description}</p>
        <button type="button" class="product__btn">ADD TO CARD</button>
      </div>
  `;
}
