function showDetail() {
  const detail = document.getElementById("ItemDetail");
  let details = JSON.parse(localStorage.getItem("itemsViewed2"));
  console.log("details", details);

  details.forEach((item) => {
    let itemSizes = item.sizes.join(" | ");
    if (item.full_price != "") {
      showFullPrice = `
                          <span class="muted">
                            ${item.currency + " " + item.full_price}
                          </span>
                          <span class="text-danger h5">
                            ${"Descuento "+item.discount+"%"}
                          </span>
                      `;
    } else {
      showFullPrice = "";
    }

    if (item.description != "") {
     description = `<hr> <p class="sizes text-center mt-2">Descripcion: ${item.description}</p>`;
    }else {
      description = "";
    }

    let newTitle = item.title.split(" ");
    newTitle = newTitle
      .slice(0, 5)
      .toString()
      .replaceAll(",", " ")
      .replaceAll("-", "")
      .replaceAll(".", "");

    if (detail) {
      detail.innerHTML += ` 
                            <div class="row">
                              <div class="col-5">
                                  <img src="${item.pic}" width="368" height="400">
                                  <b><p class="mt-2 text-dark">${newTitle}</p></b>
                              </div>
                              <div class="col-7">
                                  <p class="sizes text-center mt-5">Precio: ${item.currency + " " + item.price}</p>
                                  ${showFullPrice}
                                  
                                  ${description}
                                  <hr>
                                  <p class="sizes text-center mt-2">Talles: ${itemSizes}</p>
                                  <hr>
                                  <p class="sizes text-center mt-2">Color: ${item.colors}</p>
                                 
                                  <hr>
                                  <p class="sizes text-center mt-2">Marca: ${item.brand}</p>
                                  <hr>
                                  <p class="sizes text-center mt-2">${item.ship}</p>
                              </div>
                            </div>
                          `;
    }
  });
}

showDetail();
