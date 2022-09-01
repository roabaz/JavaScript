function searchAndDisplayProducts(q) {
  result = products.filter((item) => item.title.toLowerCase().includes(q));
  let k = q.split(" ");
  products.forEach((item, i) => {
    k.forEach((item2, j) => {
      if (
        item.title.includes(k[j]) &&
        item.category.includes(k[j]) &&
        !result.includes(item)
      ) {
        result.push(item);
      }
    });
  });

  validatesizesSearchResult(result, q);
}

function validatesizesSearchResult(param, q) {
  if (param.length < 1) {
    loadAllProductsOnMain(param, q);
  } else {
    loadAllProductsOnMain(param, q);
  }
}

function getSearch() {
  let q = "";
  const inputButton = document.querySelector("input");
  inputButton.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      q = e.target.value;
      searchAndDisplayProducts(q);
    }
  });
  q = inputButton.value;
  searchAndDisplayProducts(q);
}

getSearch();
