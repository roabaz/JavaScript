function addItemToCart() {
  const add = document.querySelectorAll(".add");
  result.forEach((prod, i) => {
    add.forEach((items, i) => {
      items.addEventListener("click", (e) => {
        let newTitle = prod.title.split(" ");
        newTitle = newTitle
          .slice(0, 3)
          .toString()
          .replaceAll(",", " ")
          .replaceAll("-", "")
          .replaceAll(".", "");
        if (prod.id_item === e.target.id) {
          cart.push(prod);
          totalCart += prod.price;
          cartDetail();
          showCart();
          Toastify({
            text: "Agregaste " + newTitle + " al carrito",
            className: "warning",
            gravity: "top", // `top` or `bottom`
            position: "right", //
            style: {
              background: "black",
            },
          }).showToast();
        }
        localStorage.setItem("cart2", JSON.stringify(cart));
        showItemsCountCart(cart2);
      });
    });
  });
}


function removeItemFromCart() {
  const rem = document.querySelectorAll(".remove");
  rem.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      let remove = e.target.id;
      let elem = cart.find((el) => (el.id_item = remove));
      let i = cart.indexOf(elem[0]);
      totalCart -= elem.price;
      cart.splice(i, 1);
      localStorage.setItem("cart2", JSON.stringify(cart));
      cartDetail();
      showItemsCountCart();
      showCart();
    });
  });
}

function addMoreItems() {
  const addMore = document.querySelectorAll(".addMore");
  result.forEach((prod, i) => {
    addMore.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        if (prod.id_item === e.target.id) {
          cart.push(prod);
          cart2 = JSON.parse(localStorage.getItem("cart2")) || [];

          localStorage.setItem("cart2", JSON.stringify(cart));
          totalCart += prod.price;
          showItemsCountCart();
          cartDetail();
          showCart(items2);
        }
      });
    });
  });
}

function clearAllCartItems() {
  totalCart = 0;
  items.splice(0, items.length);
  cart.splice(0, cart.length);
  localStorage.removeItem("items2");
  localStorage.removeItem("cart2");
  showItemsCountCart(cart2);
  showCart(items);
}

function cartDetail(items) {
  console.log("cart", cart);
  cart2 = JSON.parse(localStorage.getItem("cart2")) || [];
  items2 = JSON.parse(localStorage.getItem("items2")) || [];
  items = [];
  cart.forEach((item, i) => {
    const exist = items.some((prod) => prod.id === item.id_item);
    quantity = cart.filter((itemInItems) => itemInItems.id === item.id).length;
    totalItem = quantity * item.price;
    if (!exist) {
      items.push(
        new CartItem(
          item.id,
          item.id_item,
          item.title,
          item.price,
          item.pic,
          quantity,
          totalItem
        )
      );
      localStorage.setItem("items2", JSON.stringify(items));
    }
  });
  items.splice(0, items.length);
  showCart(items2);
}

let totalItemsOnCart = 0;

function showItemsCountCart() {
  const count = document.getElementById("cartCount");
  cart2 = JSON.parse(localStorage.getItem("cart2")) || [];

  if (cart2.length > 0) {
    totalItemsOnCart = cart2.length;
  } else {
    totalItemsOnCart = 0;
  }
  let show = (innerText = "");
  show = count.innerText = totalItemsOnCart;
}
showItemsCountCart();
