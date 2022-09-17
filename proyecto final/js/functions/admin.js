function addNewProduct() {
  const title = document.querySelector("#title").value;
  const id = document.querySelector("#id").value;
  const category = document.querySelector("#category").value;
  const brand = document.querySelector("#brand").value;
  const color = document.querySelector("#color").value;
  const gender = document.querySelector("#gender").value;
  const fullPrice = document.querySelector("#fullPrice").value;
  const currency = document.querySelector("#currency").value;
  const price = document.querySelector("#price").value;
  const discount = document.querySelector("#discount").value;
  const ship = document.querySelector("#ship").value;
  const description = document.querySelector("#description").value;

  document.getElementById("file").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      let img = document.querySelector("#img");
      let data = localStorage.getItem("image");
/*       console.log(data);
 */
      img.innerHTML = "";

      img.innerHTML += `<img height="200" src='data:image/jpeg;base64, ${base64String}' />`;
      console.log(currency);
      let now = new Date();
      newProduct.push(
        new NewProduct(
          now,
          id,
          title,
          currency,
          price,
          fullPrice,
          discount,
          base64String,
          description,
          brand,
          ship,
          gender,
          category,
          color
        )
      );

      localStorage.setItem("newProducts", JSON.stringify(newProduct));
    };
    reader.readAsDataURL(file);
  });
}

addNewProduct();

function showNewProduct() {
  const product = document.querySelector("#item");
  product.innerHTML = "";
  newProducts = newProducts.reverse();
  newProducts.forEach((item, i) => {
/*     console.log(item)
 */    product.innerHTML += ` 
                        <tr>
                          <td class="mr-3 border">${item.id_item}</td>
                          <td class="mr-3 border">${item.title}</td>
                          <td class="mr-3 border">${item.category}</td>
                          <td class="mr-3 border">${item.brand}</td>
                          <td class="mr-3 border">${item.gender}</td>
                          <td class="mr-3 border">${item.currency}</td>
                          <td class="mr-3 border">${item.price}</td>
                          <td class="mr-3 border">${item.full_price}</td>
                          <td class="mr-3 border">${item.discount}</td>
                          <td class="mr-3 border">${item.colors}</td>
                          <td class="mr-3 border">${item.ship}</td>
                          <td class="mr-3 border">${item.description}</td>
                          <img height="100" src='data:image/jpeg;base64, ${item.pic}' />
                          </tr>
                        `;
  });
  console.log(newProducts);
}

showNewProduct();
