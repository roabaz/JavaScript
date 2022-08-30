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
        localStorage.setItem("cart2", JSON.stringify(cart));
      });
    });
  });
}
addItemToCart();

function addMoreItems() {
  const addMore = document.querySelectorAll(".addMore");
  result.forEach((prod, i) => {
    addMore.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        if (prod.id_item === e.target.id) {
          cart.push(prod);
          totalCart += prod.price;
          cartDetail();
          showCart(items2);
          showItemsCountCart();
        }
      });
    });
  });
}
function clearAllCartItems() {
  totalCart = 0;
  items.splice(0, items.length);
  cart.splice(0, cart.length);
  localStorage.clear();
  showCart(items);
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
  items.splice(0, items.length);
  removeItemFromCart();
}

function removeItemFromCart() {
  console.log("cart", cart);

  if (cart.length > 0) {
    let rem = document.querySelectorAll(".remove");
    rem.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        console.log("item", item);
        let remove = e.target.id;
        console.log("remove", remove);
        cart.forEach((item, i) => {
          if (item.id_item === remove) cart.splice(i, 1);
          console.log(i);
        });
        showItemsCountCart(cart);
        cartDetail();
        showCart();
      });
    });
  }
}

function showItemsCountCart() {
  const count = document.getElementById("cartCount");
  let totalItemsOnCart = 0;
  if (cart.length > 0) {
    totalItemsOnCart = cart.length;
  } else {
    totalItemsOnCart = 0;
  }
  let show = (innerText = "");
  show = count.innerText = totalItemsOnCart;
}
showItemsCountCart();
