let cart = [];
let totalCart = 0;

function addItemToCart() {
  const add = document.querySelectorAll(".add");
  products.forEach((prod, i) => {
    add.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        console.log(e.target.id);
        if (prod.id_item === e.target.id) {
          cart.push(prod);
          totalCart += prod.price;
          showItemsCountCart(cart);
          cartDetail()
        }
      });
    });
  });
}
addItemToCart();



function cartDetail() {
  cart.forEach((item, i) => {
    let quantity = cart.filter(
      (itemInItems) => itemInItems.id === item.id
    ).length;
    totalItem = quantity * item.price;
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
    showCart(items);
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

