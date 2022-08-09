function viewAllProducts() {
  let listProducts = [];
  products.forEach((item) => {
    listProducts.push(item);
  });
  console.table(listProducts);
}

function viewAllCategories() {
  let categories = [];
  products.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  console.table(categories);
}

function viewAllGenders() {
  let genders = [];
  products.forEach((item) => {
    if (!genders.includes(item.gender)) {
      genders.push(item.gender);
    }
  });
  console.table(genders);
}

let again = true;
let result = [];

function searchAndDisplayProducts() {
  while (again) {
    let q = "";
    while (q === "") {
      q = prompt("Que vamos a buscar hoy?");
    }
    result = products.filter((item) => item.name.includes(q));
    let k = q.split(" ");
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
  }
}

function filterProductsFoundedBySize() {
  again = true;
  while (result.length > 1 && again) {
    let q = "";
    while (q === "") {
      q = prompt("Ingresa el talle a buscar:").toLocaleLowerCase();
    }
    result = result.filter((item) => item.size.includes(q));
    let name = "talle";
    validateSizeSearchResult(result, name);
    console.log("Fin Filter");
  }
}

function filterProductsFoundedByGender() {
  again = true;
  while (result.length > 1 && again) {
    let q = "";
    while (q === "") {
      q = prompt("Ingresa el genero a buscar:").toLocaleLowerCase();
    }
    result = result.filter((item) => item.gender.includes(q));
    let name = "genero";
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

function showItemsOnCart() {
  if (cart.length > 0) {
    console.table(cart);
  } else {
    alert("Upss no hay ningun producto en el carrito para mostrar");
  }
}

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
          item.name,
          item.price,
          item.size,
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
      item.name,
      "| cantidad:",
      item.quantity,
      "| subtotal producto: $",
      item.total
    );
  });
  console.log("-----------------------");
  console.log("Total", "$", totalCart);
}

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
