let newProducts = [];

let base64String = "";

let titleData = "";
let categoryData = "";
let brandData = "";
let colorData = "";
let genderData = "";
let fullPriceData = "";
let priceData = "";
let discountData = "";
let shipData = "";
let descriptionData = "";
let idData = "";

function addNewProduct() {
  const title = document.querySelector("#title");
  const id = document.querySelector("#id");
  const category = document.querySelector("#category");
  const brand = document.querySelector("#brand");
  const color = document.querySelector("#color");
  const gender = document.querySelector("#gender");
  const fullPrice = document.querySelector("#fullPrice");
  const price = document.querySelector("#price");
  const discount = document.querySelector("#discount");
  const ship = document.querySelector("#ship");
  const description = document.querySelector("#description");

  /*    title.addEventListener("input, (e) => {
        passwordData = btoa(e.target.value);
      }); */

  title.addEventListener("input", (e) => {
    titleData = e.target.value;
    console.log(titleData);
  });

  id.addEventListener("input", (e) => {
    idData = e.target.value;
    console.log(idData);
  });

  category.addEventListener("input", (e) => {
    categoryData = e.target.value;
    console.log(categoryData);
  });
  brand.addEventListener("input", (e) => {
    brandData = e.target.value;
    console.log(brandData);
  });
  color.addEventListener("input", (e) => {
    colorData = e.target.value;
    console.log(colorData);
  });
  gender.addEventListener("input", (e) => {
    genderData = e.target.value;
    console.log(genderData);
  });
  fullPrice.addEventListener("input", (e) => {
    fullPriceData = e.target.value;
    console.log(fullPriceData);
  });
  price.addEventListener("input", (e) => {
    priceData = e.target.value;
    console.log(priceData);
  });
  discount.addEventListener("input", (e) => {
    discountData = e.target.value;
    console.log(discountData);
  });
  ship.addEventListener("input", (e) => {
    shipData = e.target.value;
    console.log(shipData);
  });
  description.addEventListener("input", (e) => {
    descriptionData = e.target.value;
    console.log(descriptionData);
  });

  document.getElementById("file").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      let img = document.querySelector("#img");
      let data = localStorage.getItem("image");
      /*   console.log(data);
       */
      img.innerHTML = "";

      img.innerHTML += `<img height="400" src='data:image/jpeg;base64, ${base64String}' />`;
    };
    reader.readAsDataURL(file);
  });

  let now = new Date();
  if (descriptionData != "") {
    newProducts.push(
      new NewProduct(
        now,
        idData,
        titleData,
        priceData,
        fullPriceData,
        base64String,
        descriptionData,
        discountData,
        brandData,
        shipData,
        genderData,
        categoryData,
        colorData
      )
    );
  }
  console.log(newProducts);
}

addNewProduct();
