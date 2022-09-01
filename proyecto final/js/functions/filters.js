function filterProductsFoundedByGender() {
  let option = document.querySelectorAll(".gender");
  option.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      q != "" || category != "" || size != ""
        ? (result = result)
        : (result = products);
      gender = e.target.id;
      result = result.filter((item) => item.gender.includes(gender));
      viewAllSizes(result);
      validatesizesSearchResult(result, gender);
      filterProductsFoundedBySize();
      addItemToCart();
    });
  });
}

let option = document.querySelectorAll(".gender");
option.forEach((button) => {
  button.addEventListener("click", function () {
    option.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

filterProductsFoundedByGender();

function filterProductsFoundedBySize() {
  const option = document.querySelectorAll(".size");
  option.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      let size = e.target.id;
      result = result.filter((item) => item.sizes.includes(size));
      validatesizesSearchResult(result, size);
      addItemToCart();
      filterProductsFoundedBySize();
    });
  });
}

filterProductsFoundedBySize();

function filterProductsFoundedByCategory() {
  const option = document.querySelectorAll(".category");
  option.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      q != "" || gender != "" || size != ""
        ? (result = result)
        : (result = products);
      let category = e.target.id;
      result = result.filter((item) => item.category.includes(category));
      viewAllSizes(result, gender, category);
      validatesizesSearchResult(result, category);
      addItemToCart();
      filterProductsFoundedBySize();
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
