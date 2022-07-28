/* debugger;   */

let products = [
  { name: "pantalon", price: 1000, size: ["s", "m"], gender: "mujer" },
  {
    name: "pantalon largo",
    price: 1000,
    size: ["s", "m", "l", "xl"],
    gender: "hombre",
  },
  {
    name: "pantalon corto",
    price: 3000,
    size: ["m", "l", "xl"],
    gender: "hombre",
  },
  {
    name: "remera manga corta",
    price: 2000,
    size: ["s", "m", "l"],
    gender: "mujer",
  },
  {
    name: "remera manga larga",
    price: 2500,
    size: ["s", "l", "xl"],
    gender: "mujer",
  },
  { name: "saco", price: 3000, size: ["l", "xl"], gender: "hombre" },
  { name: "saco de pana", price: 3000, size: ["l", "xl"], gender: "hombre" },
  { name: "vestido largo", price: 4000, size: ["m", "l"], gender: "mujer" },
  { name: "vestido corto", price: 4000, size: ["m", "l"], gender: "mujer" },
  { name: "campera", price: 5000, size: ["xl", "xxl"], gender: "hombre" },
  {
    name: "campera lluvia",
    price: 3000,
    size: ["xl", "xxl"],
    gender: "hombre",
  },
];
let again = true;
let q = prompt("que estas buscando?");
while (q === "" || q.length < 4) {
  q = prompt("que estas buscando?");
}
let query = [];
let k = q.split(" ");
//console.log(k);

function searchProduct(q) {
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < k.length; j++) {
      if (products[i].name.match(q) || products[i].name.match(k[j])) {
        if (query.indexOf(products[i]) === -1) query.push(products[i]);
      }
    }
  }

  if (query.length < 1) {
    console.log("Upss no tenemos ese producto");
    again = confirm("Queres buscar denuevo?");
    if (again) {
      q = prompt("que estas buscando?");
      searchProduct(q);
      return again;
    }
  }
  console.log("Tu busqueda encontro", query.length, "Productos:");
  console.log(query);
}

searchProduct(q);

console.log("-----------------");

let queryFilters = [];
let filters = "";
function filterSizes(filters) {
  while (filters === "") {
    filters = prompt("Filtra por talle");
  }
  for (let i = 0; i < query.length; i++) {
    for (let j = 0; j < query[i].size.length; j++) {
      if (query[i].size[j].match(filters)) {
        if (queryFilters.indexOf(query[i]) === -1) queryFilters.push(query[i]);
      }
    }
  }

  if (queryFilters.length < 1) {
    console.log("Upss no tenemos ese talle");
    again = confirm("Queres buscar otro talle?");
    if (again) {
      filters = prompt("Filtra por talle");
      filterSizes(filters);
      return again;
    }
  } else {
    console.log(
      "Se filtraron y encontramos",
      queryFilters.length,
      "Productos:"
    );
  }
}

function filterProducts(filters) {
  filterSizes(filters);
  console.log(queryFilters);
}

if (again) {
  filterProducts(filters);
}
