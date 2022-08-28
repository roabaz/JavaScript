
function addItemToCart() {
  const add = document.querySelectorAll(".add");
  result.forEach((prod, i) => {
    add.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        if (prod.id_item === e.target.id) {
          cart.push(prod);
          totalCart += prod.price;
          cartDetail();
          showCart(items2);
          showItemsCountCart();
        }
        localStorage.setItem("cart2", JSON.stringify(cart));
      });
    });
  });
}
addItemToCart();
let quantity = 0;

function clearAllCartItems() {
  let items = [];
  let cart = [];
  localStorage.clear("items2");
  localStorage.clear("cart2");
  showCart(items2);
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
  console.log("items ",items);
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

function showItemsCountCart() {
  const count = document.getElementById("cartCount");
  let cart2 = [];
  if (localStorage.cart2) {
    cart2 = JSON.parse(localStorage.getItem("cart2"));
  }
  let totalItemsOnCart = 0;
  if (cart2.length > 0) {
    totalItemsOnCart = cart.length;
  } else {
    totalItemsOnCart = 0;
  }
  let show = (innerText = "");
  show = count.innerText = totalItemsOnCart;
}
showItemsCountCart();

