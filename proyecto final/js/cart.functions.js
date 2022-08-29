function addItemToCart() {
  const add = document.querySelectorAll(".add");
  result.forEach((prod, i) => {
    add.forEach((item, i) => {
      item.addEventListener("click", (e) => {
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
          showCart(items2);
          showItemsCountCart();

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
        toastSwal("probando", "warn");
        localStorage.setItem("cart2", JSON.stringify(cart));
      });
    });
  });
}
addItemToCart();

function clearAllCartItems() {
  let items = [];
  let cart = [];
  items.splice(0, items.length);
  cart.splice(0, cart.length);
  localStorage.clear();
  addItemToCart();
  showCart(items);
  cartDetail(items);
  showItemsCountCart(cart);
}

function cartDetail(items) {
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
          item.size,
          item.gender,
          item.category,
          quantity,
          totalItem
        )
      );
      localStorage.setItem("items2", JSON.stringify(items));
    }
  });
  console.log("items ", items);
}

function removeItemFromCart() {
  if (cart.length > 0) {
    let rem = document.querySelectorAll(".remove");
    let items2 = JSON.parse(localStorage.getItem("items2"));
    rem.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        let remove = e.target.id;
        const index = items2.findIndex((item) => {
          if (totalCart > 0) {
            this.quantity -= 1;
            this.totalItem -= item.price;
            totalCart -= item.price;
          }
          return item.id === remove;
        });
        items2.splice(index, 1);
        showItemsCountCart(cart);
        cartDetail(quantity, totalItem);
        showCart(items2);
      });
    });
  }
}

let cart2 = [];

function showItemsCountCart() {
  const count = document.getElementById("cartCount");
  let totalItemsOnCart = 0;
  if (cart.length > 0) {totalItemsOnCart = cart.length} else{ totalItemsOnCart = 0};
  let show = (innerText = "");
  show = count.innerText = totalItemsOnCart;
}
showItemsCountCart();
