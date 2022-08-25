let cart = [];
let totalCart = 0;

function addItemToCart() {
  const add = document.querySelectorAll(".add");
  products.forEach((prod, i) => {
    add.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        if (prod.id_item === e.target.id) {
          cart.push(prod);
          totalCart += prod.price;
          showItemsCountCart(cart);
          cartDetail();
        }
        localStorage.setItem("cart2", JSON.stringify(cart));
      });
    });
  });
}
addItemToCart();

function cartDetail() {
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
      localStorage.setItem("items2", JSON.stringify(items));
    }
    if (localStorage.items2) {
      let items2 = JSON.parse(localStorage.getItem("items2"));

      showCart(items2);
    }
  });

  /* console.log("-----------------------");
  console.log("Total", "$", totalCart);
  console.log("cantidad total", cart.length); */
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
    showItemsCountCart(cart);
  }
}

function showItemsCountCart(cart) {
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
showItemsCountCart(cart);
/* removeItemFromCart();
 */

/* cartDetail();
http://localhost/CoderHouseFullStack/Javascript/Desafio%20Dom/
 */
