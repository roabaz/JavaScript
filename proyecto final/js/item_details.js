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
    if (detail) {
      detail.innerHTML += ` 
                            <div">
                                <img src="${item.pic}" width="268" height="300">
                                <p class="mt-2">${item.title}</p>
                                <hr>
                                <span>${item.currency + " " + item.price}</span>
                                ${showFullPrice}
                                </div>
                                <p class="sizes text-center mt-2">${itemSizes}</p>
                                <p class="sizes text-center mt-2">${item.description}</p>
                                <p class="sizes text-center mt-2">${item.brand}</p>
                                <p class="sizes text-center mt-2">${item.ship}</p>
                                <p class="sizes text-center mt-2">${item.colors}</p>
                            </div>
                          `;
    }
  });
}

showDetail();
