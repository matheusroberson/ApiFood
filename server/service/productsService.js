const productsData = require("../data/productsData");

exports.getProducts = (page) => {
  return productsData.getProducts(page);
};

exports.getOneProduct = (code) => {
  return productsData.getOneProduct(code);
};
