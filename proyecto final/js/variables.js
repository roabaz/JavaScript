let totalCart = 1;
let totalItem = 0;
let q = "";
let gender = "";
let category = "";
let size = "";
let cart = [];
let items2 = JSON.parse(localStorage.getItem("items2")) || [];
let cart2 = JSON.parse(localStorage.getItem("cart2")) || [];

let items = [];
let result = [];
let results = [];

let users = JSON.parse(localStorage.getItem("users")) || [];

let emailData = "";
let passwordData = "";
let id = 0;
let exist = false;
