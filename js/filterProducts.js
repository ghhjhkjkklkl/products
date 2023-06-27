import renderProducts from "./renderProducts.js";
import createNewName from "./createName.js";

const filterList = document.querySelector(".filter-list");

function renderFilterItems(products) {
  const companies = [
    ...new Set(products.map((product) => product.fields.company)),
  ];

  filterList.innerHTML = companies.reduce(
    (acc, company) =>
      (acc += ` 
      <li class="filter-item">
        <label>
          <input type="checkbox" value="${company}" class="filter-checkbox" />
          ${createNewName(company)}
        </label>
      </li>
    `),
    ""
  );
}

function filterProducts(products, filteredProducts) {
  const filterItems = document.querySelectorAll(".filter-checkbox");

  const companiesList = new Set();
  filterItems.forEach((filterItem) => {
    filterItem.addEventListener("change", () => {
      if (filterItem.checked) {
        companiesList.add(filterItem.value);
        console.log(companiesList);
      } else {
        companiesList.delete(filterItem.value);
      }

      filteredProducts = products.filter((product) =>
        companiesList.has(product.fields.company)
      );
      console.log(filteredProducts);
      if (companiesList.size === 0) {
        renderProducts(products);
      } else {
        renderProducts(filteredProducts);
      }
    });
  });
}

export { renderFilterItems, filterProducts };
