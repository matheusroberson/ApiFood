const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send("Fullstack Chanllage 2021");
});

router.get("/products/:code", async (req, res) => {});

router.get("/products", async (req, res) => {});

module.exports = router;
