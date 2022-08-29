function filterProductsFoundedByGender() {
  let option = document.querySelectorAll(".gender");
  option.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      gender = e.target.id;
      result = result.filter((item) => item.gender.includes(gender));
      viewAllSizes(result);
      validatesizesSearchResult(result, gender);
      filterProductsFoundedBySize();
      addItemToCart();
    });
  });
}

filterProductsFoundedByGender();

function filterProductsFoundedBySize() {
  const option = document.querySelectorAll(".size");
  option.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      let size = e.target.id;
      result = result.filter((item) => item.sizes.includes(size));
      validatesizesSearchResult(result, size);
      addItemToCart();
    });
  });
}

filterProductsFoundedBySize();

function filterProductsFoundedByCategory() {
  const option = document.querySelectorAll(".category");
  option.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      let category = e.target.id;
      result = result.filter((item) => item.category.includes(category));
      viewAllSizes(result, gender, category);
      filterProductsFoundedBySize();
      validatesizesSearchResult(result, category);
      addItemToCart();
    });
  });
}
filterProductsFoundedByCategory();

function cleanFilters() {
  result = products;
  q = "";
  validatesizesSearchResult(result, q);
  filterProductsFoundedBySize();
}
