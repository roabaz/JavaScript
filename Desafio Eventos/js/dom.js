let items = [];
let totalItem = 0;

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
let q = "";
/* viewAllCategories(); */
function viewAllGenders() {
  let genders = [];
  const genders_element = document.getElementById("gender");

  result = products;

  products.forEach((item) => {
    if (!genders.includes(item.gender)) {
      genders.push(item.gender);
      genders_element.innerHTML += ` 
    <button id="${item.gender}" class="gender btn btn-warning"   onclick="filterProductsFoundedByGender()" > ${item.gender}</button>
                                    `;
    }
  });
}

viewAllGenders();

function viewAllSizes() {
  let sizes = [];
  const sizes_element = document.getElementById("sizes");
  if (!gender) {
    result = products;
  } else {
    result = result;
  }
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
    /*     console.log(newTitle);
     */

    /*     onclick="itemDetail(${
      item.id_item
    })" */
    if (items /* && i < 6 */) {
      items.innerHTML += `<a cursor-auto class="card item mx-auto my-auto mb-3 col-xl-3 col-6" >
                      <div>
                        <img class="item__img" src="${item.pic}">
                        <p class="mt-2">${newTitle}</p>
                        <hr>
                        <span class="price">${
                          item.currency + " " + item.price
                        }</span>
                        ${showFullPrice}
                        <p class="sizes mt-2">${itemSizes}</p>
                        <button id="${
                          item.id_item
                        }" class="add fa-solid fa-circle-plus mt-2 btn btn-info"></button>
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

function clearAllCartItems() {
  let items = [];
  let cart = [];
  showCart(items);
  showItemsCountCart(cart);
}

function showCart(items) {
  const cartTable = document.getElementById("cartTable");
  cartTable.innerHTML = "";
  console.log(items);
  items.forEach((item, i) => {
    console.log(item.title);
    console.log(item.quantity);
    console.log(item.total);
    cartTable.innerHTML += ` 
    <tr>
                        <td class="mr-3 border">${item.title}</td>
                        <td class="mr-3 border">$${item.total}</td>
                        <td class="mr-3 border">${item.quantity}</td>
                        </tr>
                        `;
  });

  if (items.length > 0) {
    cartTable.innerHTML += `
  <td class="text-dark border">Productos en el carrito: ${cart.length}</td>
   <b><td class="text-dark border">Total: $${totalCart}</td></b>
  `;
  }
}
