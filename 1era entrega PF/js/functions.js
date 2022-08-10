function viewAllProducts() {
  let listProducts = [];
  products.forEach((item) => {
    listProducts.push(item);
  });
  console.table(listProducts);
}

viewAllProducts();

function viewAllCategories() {
  let categories = [];
  products.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  console.table(categories);
}

viewAllCategories();

function viewAllGenders() {
  let genders = [];
  products.forEach((item) => {
    if (!genders.includes(item.gender)) {
      genders.push(item.gender);
    }
  });
  console.table(genders);
}

viewAllGenders();

let again = true;
let result = [];

function searchAndDisplayProducts() {
  while (again) {
    let q = prompt("Que vamos a buscar hoy?");
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
    let operation = "buscar";
    validateSizeSearchResult(result, name, operation);
  }
}

searchAndDisplayProducts();

function filterProductsFoundedBySizeOrGenderOrCategory() {
  again = true;
  let name = "";
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
      result = result.filter((item) => item.size.includes(q));
      name = "talle";
    } else if (option === 2) {
      result = result.filter((item) => item.gender.includes(q));
      name = "genero";
    } else if (option === 3) {
      result = result.filter((item) => item.category.includes(q));
      name = "categoria";
    }
    let operation = "filtrar";
    validateSizeSearchResult(result, name, operation);
    console.log("Fin Filter");
  }
}

filterProductsFoundedBySizeOrGenderOrCategory();

function validateSizeSearchResult(param, name, operation) {
  if (param.length < 1) {
    console.log("Upss no tenemos ese", name);
    again = confirm("Queres " + operation + " denuevo?");
  } else {
    console.log("Tu busqueda encontro", param.length, "Productos:");
    console.table(param);
    again = confirm("Queres " + operation + " denuevo?");
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

addItemToCart();

function showItemsOnCart() {
  if (cart.length > 0) {
    console.table(cart);
  } else {
    alert("Upss no hay ningun producto en el carrito para mostrar");
  }
}

showItemsOnCart();

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

cartDetail();

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

removeItemFromCart();

console.log("---------------");

cartDetail();
