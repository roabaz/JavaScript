function checkout() {
  const cartTable = document.querySelector("#showCart");
  items2 = JSON.parse(localStorage.getItem("items2")) || [];
  cart2 = JSON.parse(localStorage.getItem("cart2")) || [];
  cartTable.innerHTML = "";
  items2.forEach((item, i) => {
    totalCart += item.total;
    if (cart2.length > 0) {
      cartTable.innerHTML += ` 
                              <tr>
                                  <td class="mr-3 border"><img class="p-3" height="100" src="${item.pic}? /></td>
                                  <td class="mr-3 border">${item.title}</td>
                                  <td class="mr-3 border">$${item.total}</td>
                                  <td class="mr-3 border">${item.quantity}</td>
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
}

checkout();
let sales = [];

function getContactInfo() {
  let name = document.querySelector("#inputName").value;
  let adress = document.querySelector("#inputAdress").value;
  let phone = document.querySelector("#inputPhone").value;
  let cardNumber = document.querySelector("#inputCardNumber").value;
  let code = document.querySelector("#inputCode").value;
  let expireDate = document.querySelector("#inputExpireDate").value;
  let shipTime = document.querySelector("#shipTime");
  let shipTimeValue = shipTime.options[shipTime.selectedIndex].value;
  let idSale = getRandomInt(9999);
  sales.push(
    new Sales(
      idSale,
      name,
      adress,
      phone,
      shipTime,
      cardNumber,
      expireDate,
      code,
      {
        items2,
      }
    )
  );
  /*  console.log(sales); */

  clearAllCartItems();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function clearAllCartItems() {
  totalCart = 0;
  items.splice(0, items.length);
  cart.splice(0, cart.length);
  localStorage.removeItem("items2");
  localStorage.removeItem("cart2");
}
