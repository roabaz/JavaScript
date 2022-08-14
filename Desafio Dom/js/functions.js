function viewAllProducts() {
  let listProducts = [];
  products.forEach((item) => {
    listProducts.push(item);
  });
  console.table(listProducts);
}

/*  viewAllProducts(); */
function viewAllCategories() {
  let categories = [];
  products.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  console.table(categories);
}

/* viewAllCategories();
 */
function viewAllGenders() {
  let genders = [];
  products.forEach((item) => {
    if (!genders.includes(item.gender)) {
      genders.push(item.gender);
    }
  });
  console.table(genders);
}

/* viewAllGenders();
 */

let result = [];
let q = "";
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
  let title = "producto";
  validatesizessSearchResult(result, title, q);
}

/* searchAndDisplayProducts();
 */
function filterProductsFoundedBysizesOrGenderOrCategory() {
  again = true;
  let title = "";
  while (result.length > 1 && again) {
    let option = parseInt(
      prompt(
        "Ingresa que filtro vas a querer: \n (1) para talle \n (2) para genero \n (3) para categoria"
      )
    );
    let q = "";
    while (q === "") {
      q = prompt("Ingresa la opcion a buscar:").toLocaleLowerCase();
    }
    if (option === 1) {
      result = result.filter((item) => item.sizes.includes(q));
      title = "talle";
    } else if (option === 2) {
      result = result.filter((item) => item.gender.includes(q));
      title = "genero";
    } else if (option === 3) {
      result = result.filter((item) => item.category.includes(q));
      title = "categoria";
    }
    let operation = "filtrar";
    validatesizessSearchResult(result, title, operation);
    console.log("Fin Filter");
  }
}
/* filterProductsFoundedBysizesOrGenderOrCategory();
 */
function validatesizessSearchResult(param, title, q) {
  if (param.length < 1) {
    console.log("Upss no tenemos ese", title);
    loadAllProductsOnMain(param, q);
  } else {
    console.log("Tu busqueda encontro", param.length, "Productos:");
    loadAllProductsOnMain(param, q);
  }
}

let cart = [];
let totalCart = 0;
//agregar variable con prompt para que el usuario luego de identificar el producto, ingrese la cantidad que quiere agregar.
function addItemToCart() {
  let moreProducts = true;
  while (moreProducts) {
    let add = parseInt(prompt("Ingrese el ID del producto que quiera agregar"));
    products.forEach((item3, i) => {
      if (item3.id === add) {
        cart.push(item3);
        totalCart += item3.price;
      }
    });
    if (cart.length === 0) {
      console.log("No encontramos ese producto");
    }
    moreProducts = confirm("Queres seguir agregando productos?");
  }
  if (cart.length > 0) {
    console.log(
      "Agregastes",
      cart.length,
      "productos al carrito, por un total de: $",
      totalCart
    );
  }
}

/* addItemToCart();
 */
/* function showItemsOnCart() {
  if (cart.length > 0) {
    console.table(cart);
  } else {
    alert("Upss no hay ningun producto en el carrito para mostrar");
  }
} */

/* showItemsOnCart();
 */
let totalItem = 0;
function cartDetail() {
  let items = [];
  cart.forEach((item, i) => {
    const exist = items.some((itemInItems) => itemInItems.id === item.id);
    let quantity = cart.filter(
      (itemInItems) => itemInItems.id === item.id
    ).length;
    totalItem = quantity * item.price;
    if (!exist) {
      items.push(
        new CartItem(
          item.id,
          item.title,
          item.price,
          item.sizess,
          item.gender,
          item.category,
          quantity,
          totalItem
        )
      );
    }
  });
  items.forEach((item) => {
    console.log(
      "producto:",
      item.title,
      "| cantidad:",
      item.quantity,
      "| subtotal producto: $",
      item.total
    );
  });
  console.log("-----------------------");
  console.log("Total", "$", totalCart);
}

/* cartDetail();
 */
function removeItemFromCart() {
  if (cart.length > 0) {
    let remove = parseInt(
      prompt("Ingrese el ID del producto que quiera remover")
    );
    const index = cart.findIndex((item) => {
      totalCart -= item.price;
      return item.id === remove;
    });
    cart.splice(index, 1);
  } else {
    alert("Upss no hay ningun producto en el carrito para eliminar");
  }
}

/* removeItemFromCart();
 */
console.log("---------------");

/* cartDetail();
http://localhost/CoderHouseFullStack/Javascript/Desafio%20Dom/
 */

function loadAllProductsOnMain(productsSearched, q) {
  const items = document.getElementById("main");

  const quantity = document.getElementById("productsQuantity");
  let showFullPrice = "";
  let result;
  if (!q) {
    console.log("sin q");
    result = products;
  } else {
    console.log("con q");
    result = productsSearched;
    console.log(result);
    items.innerHTML = "";
  }

  result.forEach((item, i) => {
    let itemSizes = item.sizes.join(" | ");
    if (item.full_price != "") {
      showFullPrice = `
                          <span class="muted">
                            ${item.currency + " " + item.full_price}
                          </span>
                      `;
    } else {
      showFullPrice = "";
    }

    let newTitle = item.title.split(" ");
    newTitle = newTitle
      .slice(0, 4)
      .toString()
      .replaceAll(",", " ")
      .replaceAll("-", "")
      .replaceAll(".", "");
    /*     console.log(newTitle);
     */
    if (items && i < 6) {
      items.innerHTML += `<a cursor-auto class="card item mx-auto my-auto mb-3 col-xl-3 col-6" onclick="itemDetail(${
        item.id_item
      })">
                      <div>
                        <img class="item__img" src="${
                          item.pic
                        }" width="295" height="350">
                        <p class="mt-2">${newTitle}</p>
                        <hr>
                        <span class="price">${
                          item.currency + " " + item.price
                        }</span>
                        ${showFullPrice}
                        <p class="sizes mt-2r">${itemSizes}</p>
                      </div>
                    </a>`;
    }
  });
  let message = "";
  if (result.length > 0) {
    message = `Encontramos ${result.length} productos`;
  } else if (result.length == 0) {
    message = `Intenta buscando otro producto`;
  }
  if (quantity) {
    quantity.innerHTML = `<p class="mt-4 alert alert-success col-xl-3 col-12 mx-auto">${message}</p>`;
  }
}

loadAllProductsOnMain();

let itemsViewed = [];
function itemDetail(id) {
  const detail = document.getElementById("ItemDetail");
  itemsViewed.push(id);
  console.log(itemsViewed);
  let id_item = id;
  console.log(id);

  products.forEach((item) => {
    if (id_item === item.id_item) {
      console.log("good");
      detail.innerHTML = ` 
                            <div">
                                <img src="${item.pic}" width="268" height="300">
                                <p class="mt-2">${item.title}</p>
                                <hr>
                                <span>${item.currency + " " + item.price}</span>
                                ${showFullPrice}
                                <p>${itemSizes}</p>
                            </div>
                          `;
    }
  });
  window.location.href = "item.html";
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
