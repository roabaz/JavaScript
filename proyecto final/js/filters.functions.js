let gender = "";
function filterProductsFoundedByGender() {
  let option = document.querySelectorAll(".gender");
  option.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      gender = e.target.id;
      results = result.filter((item) => item.gender.includes(gender));
      viewAllSizes(results, gender, q);
      validatesizesSearchResult(results, gender);
      filterProductsFoundedBySize()
    });
  });
}

filterProductsFoundedByGender();

function filterProductsFoundedBySize() {
  const option = document.querySelectorAll(".size");
  option.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      let size = e.target.id;
      results = result.filter((item) => item.sizes.includes(size));
      viewAllSizes(results, gender, size);
      validatesizesSearchResult(results, size);
    });
  });
}

filterProductsFoundedBySize();

function filterProductsFoundedByCategory() {
  const option = document.querySelectorAll(".category");
  option.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      let category = e.target.id;
      results = result.filter((item) => item.category.includes(category));
      viewAllSizes(results, gender, category);
      validatesizesSearchResult(results, category);
    });
  });
}
filterProductsFoundedByCategory()

function cleanFilters() {
  result = products;
  q = "";
  loadAllProductsOnMain(result, q);
  filterProductsFoundedBySize()
}
