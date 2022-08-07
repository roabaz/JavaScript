let again = true;

function searchAndDisplayProducts() {
  while (again) {
    let q = "";
    while (q === "") {
      q = prompt("Que vamos a buscar hoy?");
    }
    const result = products.filter((item) => item.name.includes(q));
    let k = q.split(" ");
    // console.log(k);
    products.forEach((item, i) => {
      k.forEach((item2, j) => {
        if (
          item.name.includes(k[j]) &&
          item.category.includes(k[j]) &&
          !result.includes(item)
        ) {
          result.push(item);
        }
      });
    });
    let name = "producto";
    validateSizeSearchResult(result, name);
    if (again || result.length > 1) {
      filterProductsFounded(result);
    }
  }
}

function filterProductsFounded(param) {
  let result = [];
  again = true;
  while (param.length > 1 && result < 1 && again) {
    let q = "";
    while (q === "") {
      q = prompt("Ingresa el talle a buscar:").toLocaleLowerCase();
    }
    param.forEach((item, i) => {
      if (item.size.includes(q) && !result.includes(item)) {
        result.push(item);
      }
    });
    let name = "talle";
    validateSizeSearchResult(result, name);
    console.log("Fin Filter");
  }
}

function validateSizeSearchResult(param, name) {
  if (param.length < 1) {
    console.log("Upss no tenemos ese", name);
    again = confirm("Queres buscar denuevo?");
  } else {
    console.log("Tu busqueda encontro", param.length, "Productos:");
    console.table(param);
    again = false;
  }
}
