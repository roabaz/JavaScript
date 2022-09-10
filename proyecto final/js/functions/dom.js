function viewAllcategories() {
  let categories = [];
  const categories_element = document.getElementById("categories");

  result = products;

  result.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
      categories_element.innerHTML += ` 
    <button id="${item.category}" class="category btn btn-secondary m-2"> ${item.category}</button>
                                    `;
    }
  });
}
viewAllcategories();

function viewAllGenders() {
  let genders = [];
  const genders_element = document.getElementById("gender");
  genders_element.innerHTML = "";
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

let viewer = new IntersectionObserver(
  (items, i) => {
    items.forEach((item) => {
      if (item.isIntersecting && result.length > limit) {
        limit += 20;
        result = results.length > 0 ? (result = results) : (result = products);
        validatesizesSearchResult(result);
      }
    });
  },
  {
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0,
  }
);

let limit = 20;
function loadAllProductsOnMain(results, q) {
  fetch("js/products.json")
    .then((response) => response.json())
    .then((data) => {
     let products = data;

      const items = document.getElementById("main");
      const quantity = document.getElementById("productsQuantity");
      let showFullPrice = "";
      let result;
      items.innerHTML = "";

      result = results.length > 0 ? (result = results) : (result = products);

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
          .slice(0, 3)
          .toString()
          .replaceAll(",", " ")
          .replaceAll("-", "")
          .replaceAll(".", "");

        if (items && i < limit) {
          items.innerHTML += `
                      <div class="card item mx-auto my-auto mb-3 col-xl-3 col-6 cursor-auto">
                      <a href="item.html" onclick="itemDetail(${item.id})" >
                        <img class="item__img" src="${item.pic}">
                        <b><p class="mt-2 text-center">${newTitle}</p></b>
                        </a>
                        <hr>
                        <div class="mx-auto">
                        <b><span class="price text-danger">${
                          item.currency + " " + item.price
                        }</span></b>
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
      addItemToCart();
      const product = document.querySelectorAll(".card");
      let lastProduct = product[product.length - 1];
      viewer.observe(lastProduct);

      let message = "";
      if (result.length > 0) {
        message = `Encontramos ${result.length} productos`;
      } else if (result.length == 0) {
        message = `Intenta buscando otro producto`;
      }
      if (quantity) {
        quantity.innerHTML = `<p class="mt-4 alert alert-success col-xl-3 col-12 mx-auto">${message}</p>`;
      }
    });
}

let itemsViewed = [];
function itemDetail(id) {
  result.forEach((item) => {
    if (id === item.id) {
      itemsViewed.push(item);
    }
  });
  localStorage.setItem("itemsViewed2", JSON.stringify(itemsViewed));
}

function showCart(items2) {
  const cartTable = document.getElementById("cartTable");

  items2 = JSON.parse(localStorage.getItem("items2")) || [];

  cartTable.innerHTML = "";
  items2.forEach((item, i) => {
    if (items2.length > 0) {
      cartTable.innerHTML += ` 
                        <tr>
                          <td class="mr-3 border">${item.title}</td>
                          <td class="mr-3 border">$${item.total}</td>
                          <td class="mr-3 border">${item.quantity}</td>
                          <button id="${item.id}" onclick="addMoreItems()" class="addMore mr-3 border btn btn-success">Agregar</button>
                          <button id="${item.id}"  class="remove mr-3 border btn btn-danger">Borrar</button>
                          </tr>
                        `;
    }
  });
  if (cart2.length > 0) {
    cartTable.innerHTML += `
                            <td class="text-dark border">Productos en el carrito: ${cart2.length}</td>
                            <b><td class="text-dark border">Total: $${totalCart}</td></b>
                            `;
  } else if (cart2.length === 0) {
    cartTable.innerHTML = `
                            <td class="alert alert-info">Agrega productos al carrito</td>
                            <td class="alert alert-info">0</td>
                            <td class="alert alert-info">0</td>
                          `;
  }
  addMoreItems();
  removeItemFromCart()
}
