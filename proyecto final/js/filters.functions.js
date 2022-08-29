
function filterProductsFoundedByGender() {
  let option = document.querySelectorAll(".gender");
  option.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      if (q === "" || q === null || q === undefined) {
        result = products;
      }else{
        result = result;
      }
      gender = e.target.id;
      results = result.filter((item) => item.gender.includes(gender));
      viewAllSizes(results);
      validatesizesSearchResult(results, gender);
      filterProductsFoundedBySize();
      filterProductsFoundedByCategory()
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
      results = result.filter((item) => item.sizes.includes(size));
      validatesizesSearchResult(results, size);
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
      if (q === "" || q === null || q === undefined) {
        result = products;
      }else{
        result = result;
      }
      results = result.filter((item) => item.category.includes(category));
      viewAllSizes(results, gender, category);
      validatesizesSearchResult(results, category);
      addItemToCart();
    });
  });
  
}
filterProductsFoundedByCategory()

function cleanFilters() {
  result = products;
  q = "";
  loadAllProductsOnMain(result, q);
  filterProductsFoundedBySize();
  
}
