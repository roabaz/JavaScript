class Product {
  constructor(
    id,
    id_item,
    shop,
    title,
    full_search,
    price,
    full_price,
    currency,
    pic,
    description,
    discount,
    sizes,
    brand,
    ship,
    gender,
    category,
    colors
  ) {
    this.id = id;
    this.id_item = id_item;
    this.shop = shop;
    this.title = title;
    this.full_search = full_search;
    this.price = price;
    this.full_price = full_price;
    this.currency = currency;
    this.discount = discount;
    this.pic = pic;
    this.description = description;
    this.sizes = sizes;
    this.brand = brand;
    this.ship = ship;
    this.gender = gender;
    this.category = category;
    this.colors = colors;
  }
}


class NewProduct {
  constructor(
    id,
    id_item,
    title,
    price,
    full_price,
    discount,
    pic,
    description,
    brand,
    ship,
    gender,
    category,
    colors
  ) {
    this.id = id;
    this.id_item = id_item;
    this.title = title;
    this.price = price;
    this.full_price = full_price;
    this.discount = discount;
    this.pic = pic;
    this.description = description;
    this.brand = brand;
    this.ship = ship;
    this.gender = gender;
    this.category = category;
    this.colors = colors;
  }
}