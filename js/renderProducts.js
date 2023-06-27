import createNewName from "./createName.js";

const list = document.querySelector(".list");

function renderProducts(products) {
  let fragment = "";
  products.forEach((product) => {
    fragment += createTemplate(product);
  });
  list.innerHTML = fragment;
}

function createTemplate({ id, fields: { name, price, image } }) {
  return `
      <li>
        <a href="./product.html?id=${id}">
          <img src="${image[0].url}"/>
          <h1 class="list__product-title">${createNewName(name)}</h1>
          <p class="list__product-price">$${+price / 10}</p>
        </a>
      </li>
    `;
}

export default renderProducts;
