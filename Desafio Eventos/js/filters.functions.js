let gender = "";

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
      result = result.filter((item) => item.gender.includes(gender));
      viewAllSizes(result, gender, q);
      validatesizesSearchResult(result, gender);
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
    });
  });
}

filterProductsFoundedBySize();

function cleanFilters() {
  result = products;
  q = "";
  loadAllProductsOnMain(result, q);
}

function filterProductsFoundedBysizesOrGenderOrCategory() {
  while (result.length >= 1) {
    result = result.filter((item) => item.sizes.includes(q));
    title = "talle";

    result = result.filter((item) => item.gender.includes(q));
    title = "genero";

    result = result.filter((item) => item.category.includes(q));
    title = "categoria";

    validatesizesSearchResult(result);
    console.log("Fin Filter");
  }
}
/* filterProductsFoundedBysizesOrGenderOrCategory();
 */
