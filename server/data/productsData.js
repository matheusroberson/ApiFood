const main = require("../infra/database");
const puppeteer = require("puppeteer");
const { default: axios } = require("axios");

exports.getProducts = async (page) => {
  const offset = page ? page * 10 : 0;
  const client = await main.conn.connect();
  const collection = client.db(process.env.DB).collection("products");
  const items = await collection.find().skip(offset).limit(10).toArray();

  client.close();
  return items;
};

exports.getOneProduct = async (code) => {
  const client = await main.conn.connect();
  const collection = client.db(process.env.DB).collection("products");
  const item = await collection.findOne({ code });

  client.close();
  return item;
};

exports.insertProducts = async () => {
  const client = await main.conn.connect();
  const collection = client.db(process.env.DB).collection("products");
  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });
  const page = await browser.newPage();

  await page.goto("https://world.openfoodfacts.org/");

  const dataList = await page.evaluate(async () => {
    const nodeList = document.querySelectorAll("ul#products_match_all li");

    const liArray = [...nodeList];

    return liArray.map((value) => ({
      url: value
        .getElementsByClassName("list_product_a")[0]
        .getAttribute("href"),
    }));
  });

  Promise.all(
    dataList.map(async ({ url }) => {
      const code = url.split("/")[4];
      const date = new Date();

      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${code}.json`
      );

      return {
        code: code,
        barcode: `${code} (EAN / EAN-13)`,
        status: "imported",
        imported_t: date.toISOString(),
        url: `https://world.openfoodfacts.org/product/${code}`,
        product_name: response.data.product.product_name,
        quantity: response.data.product.quantity,
        categories: response.data.product.categories,
        packaging: response.data.product.packaging,
        brands: response.data.product.brands,
        image_url: response.data.product.image_url,
      };
    })
  ).then(async (datas) => {
    await collection.insertMany(datas);
    await browser.close();
    client.close();
  });
};
