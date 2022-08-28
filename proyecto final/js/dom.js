function viewAllcategories() {
  let categories = [];
  const categories_element = document.getElementById("categories");

  result = products;

  result.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
      categories_element.innerHTML += ` 
    <button id="${item.category}" class="category btn btn-secondary"> ${item.category}</button>
                                    `;
    }
  });
}
viewAllcategories();

/* viewAllCategories(); */
function viewAllGenders() {
  let genders = [];
  const genders_element = document.getElementById("gender");

  result = products;

  result.forEach((item) => {
    if (!genders.includes(item.gender)) {
      genders.push(item.gender);
      genders_element.innerHTML += ` 
    <button id="${item.gender}" class="gender btn btn-warning"> ${item.gender}</button>
                                    `;
    }
  });
}

viewAllGenders();

function viewAllSizes(result) {
  let sizes = [];
  const sizes_element = document.getElementById("sizes");

  result.forEach((item) => {
    let k = item.sizes;
    k.forEach((item2, i) => {
      if (!sizes.includes(item2)) {
        sizes.push(item2);
      }
    });
  });

  sizes_element.innerHTML = "";
  sizes.forEach((item) => {
    sizes_element.innerHTML += ` 
    <button id="${item}" class="size btn btn-light mt-2" onclick="filterProductsFoundedBySize()" > ${item}</button>
                                    `;
  });
}

function loadAllProductsOnMain(productsSearched, q) {
  const items = document.getElementById("main");
  const quantity = document.getElementById("productsQuantity");
  let showFullPrice = "";
  let result;
  items.innerHTML = "";
  if (q === "" || q === null || q === undefined) {
    result = products;
  } else {
    result = productsSearched;
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
    viewAllSizes(result, q);

    let newTitle = item.title.split(" ");
    newTitle = newTitle
      .slice(0, 4)
      .toString()
      .replaceAll(",", " ")
      .replaceAll("-", "")
      .replaceAll(".", "");

    /*     onclick="itemDetail(${
      item.id_item
    })" */
    if (items /* && i < 6 */) {
      items.innerHTML += `
                      <div class="card item mx-auto my-auto mb-3 col-xl-3 col-6 cursor-auto">
                      <a  onclick="itemDetail(${item.id_item})" >
                        <img class="item__img" src="${item.pic}">
                        <b><p class="mt-2 text-center">${newTitle}</p></b>
                        </a>
                        <hr>
                        <div class="mx-auto">
                        <b><span class="price text-danger">${item.currency + " " + item.price}</span></b>
                        ${showFullPrice}
                        </div>
                        <p class="sizes text-center mt-2">${itemSizes}</p>
                        <button id="${
                          item.id_item
                        }" class="add fa-solid fa-circle-plus mt-2 btn btn-info"></button>
                      </div>
                    `;
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

let itemsViewed = [];
function itemDetail(id) {
  const detail = document.getElementById("ItemDetail");
  itemsViewed.push(id);
  let id_item = id;

  result.forEach((item) => {
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
                            </a>
                          `;
    }
  });
  window.location.href = "item.html";
}

function showCart(items2) {
  const cartTable = document.getElementById("cartTable");
  if (localStorage.items2) {
    items2 = JSON.parse(localStorage.getItem("items2"));
  }
  cartTable.innerHTML = "";
  items2.forEach((item, i) => {
    cartTable.innerHTML += ` 
                        <tr>
                          <td class="mr-3 border">${item.title}</td>
                          <td class="mr-3 border">$${item.total}</td>
                          <td class="mr-3 border">${item.quantity}</td>
                         
                          </tr>
                        `;
  });
  console.log(items2);
  if (items2.length >= 1) {
    cartTable.innerHTML += `
                            <td class="text-dark border">Productos en el carrito: ${cart.length}</td>
                            <b><td class="text-dark border">Total: $${totalCart}</td></b>
                            `;
  } else if (items2.length === 0) {
    cartTable.innerHTML = `
                            <td class="alert alert-info">Agrega productos al carrito</td>
                            <td class="alert alert-info">0</td>
                            <td class="alert alert-info">0</td>
                          `;
  }
}

/* WIP */
/* <button id="${item.id_item}" onclick="addItemToCart()" class="add mr-3 border btn btn-success">Agregar</button>
<button id="${item.id}" onclick="removeItemFromCart()" class="remove mr-3 border btn btn-danger">Borrar</button> */
