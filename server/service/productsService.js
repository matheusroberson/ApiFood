const productsData = require("../data/productsData");

exports.getProducts = (page) => {
  return productsData.getProducts(page);
};
