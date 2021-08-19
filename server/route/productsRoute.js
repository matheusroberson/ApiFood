const express = require("express");
const router = express.Router();
const productsService = require("../service/productsService");

router.get("/", async (req, res) => {
  res.status(200).send("Fullstack Chanllage 2021");
});

router.get("/products/:code", async (req, res) => {
  try {
    const { code } = req.params;
    const product = await productsService.getOneProduct(code);
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
});

router.get("/products", async (req, res) => {
  try {
    const { page } = req.query;
    const products = await productsService.getProducts(page);
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
